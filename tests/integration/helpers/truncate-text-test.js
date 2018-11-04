import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | truncate-text', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('the text is truncated to the number of characters passed in', async function(assert) {
    this.set('inputValue', 'test');
    this.set('cutoffValue', 1);

    await render(hbs`{{truncate-text inputValue cutoffValue}}`);

    assert.equal(this.element.textContent.trim(), 't');
  });

  test('the text is not truncated when the length is too short', async function(assert) {
    this.set('inputValue', 'test');
    this.set('cutoffValue', 5);

    await render(hbs`{{truncate-text inputValue cutoffValue}}`);

    assert.equal(this.element.textContent.trim(), 'test');
  });


});
