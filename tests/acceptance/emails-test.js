import { module, test } from 'qunit';
import { visit, currentURL, pauseTest, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | emails', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /', async function(assert) {
    server.createList('email', 10);
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="email"]').exists({ count: 10 });
  });

  test('the inbox displays starred and unstarred emails', async function(assert) {
    server.create('email', {
      from: 'starred 1',
      to: 'starred 1',
      subject: 'starred 1',
      message: 'starred 1',
      starred: true
    });
    server.create('email', {
      from: 'starred 2',
      to: 'starred 2',
      subject: 'starred 2',
      message: 'starred 2',
      starred: true
    });
    server.create('email', {
      from: 'not starred 1',
      to: 'not starred 1',
      subject: 'not starred 1',
      message: 'not starred 1',
      starred: false
    });
    server.create('email', {
      from: 'not starred 2',
      to: 'not starred 2',
      subject: 'not starred 2',
      message: 'not starred 2',
      starred: false
    });
    server.create('email', {
      from: 'not starred 3',
      to: 'not starred 3',
      subject: 'not starred 3',
      message: 'not starred 3',
      starred: false
    });

    await visit('/');

    assert.equal(currentURL(), '/');

    assert.dom('[data-test="email"]').exists({ count: 5 });
    assert.dom('[data-test="starred"]').exists({ count: 2 });
    assert.dom('[data-test="not-starred"]').exists({ count: 3 });
  });

  test('viewing a single email ', async function(assert) {
    server.create('email', {
      from: 'test',
      to: 'test',
      subject: 'test',
      message: 'test',
      starred: false
    });

    await visit('/email/1');

    assert.dom('[data-test="to"]').hasText('To: test');
    assert.dom('[data-test="from"]').hasText('From: test');
    assert.dom('[data-test="subject"]').hasText('test');
    assert.dom('[data-test="message"]').hasText('test');
  });

  test('deleting a single email ', async function(assert) {
    server.create('email', {
      from: 'test',
      to: 'test',
      subject: 'test',
      message: 'test',
      starred: false
    });
    server.create('email', {
      from: 'test2',
      to: 'test2',
      subject: 'test2',
      message: 'test2',
      starred: false
    });

    await visit('/email/1');
    await click('#delete');

    assert.equal(currentURL(), '/');

    assert.dom('[data-test="email"]').exists({ count: 1 });
  });

  test('creating an email', async function(assert) {
    await visit('/emails/new');
    await fillIn('#to', 'test');
    await fillIn('#from', 'test');
    await fillIn('#message', 'test');
    await fillIn('#subject', 'test');
    await click('[data-test="send"]');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="email"]').exists({ count: 1 });
    assert.equal(server.db.emails[0], {
      id: 1,
      from: 'test',
      to: 'test',
      subject: 'test',
      message: 'test',
      starred: false
    }.toString());
  });

});
