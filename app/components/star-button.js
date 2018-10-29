import Component from '@ember/component';

export default Component.extend({
  tagName: 'span',
  classNameBindings: ['starred:starred'],
  init() {
    this._super(...arguments);
  },
  click() {
    this.onClick();
  }
});
