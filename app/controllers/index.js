import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
	deleteEmail(email) {
	    email.destroyRecord();
	},
      star(email) {
	email.set('starred', !email.starred);
      }
    }
});
