import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
	deleteEmail(email) {
	    email.destroyRecord().then(() => {
		this.transitionToRoute('index');
	    });
	},
	toIndex() {
	    this.transitionToRoute('index');
	}
    }
});
