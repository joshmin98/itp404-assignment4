import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);

  test('onClick is called with the new starred value when clicked', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('star', function() {
      this.starred = !this.starred;
    });
    this.set('starred', true);
    await render(hbs`<StarButton
@buttonText={{test}}
@onClick={{star}}
/>`);

    assert.step('click with new value');
    await click('span');

    assert.verifySteps(['click with new value']);
  });

  test('the star is empty when starred is false', async function(assert) {
    await render(hbs`<StarButton
@starred={{false}}
@buttonText={{test}}
@onClick={{star}}
/>`);
    assert.dom('.starred').exists({ count: 0 });
  });

  test('the star is filled when starred is true', async function(assert) {
    await render(hbs`<StarButton
@starred={{true}}
@buttonText={{test}}
@onClick={{star}}
/>`);
    assert.dom('.starred').exists({ count: 1 });
  });

});
