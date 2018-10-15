import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
	createEmail(event) {
	    event.preventDefault();
	    let email = this.store.createRecord('email', {
		to: this.to,
		from: this.from,
		subject: this.subject,
		message: this.message
	    });
	    email.save().then(() => {
		this.transitionToRoute('index');
	    });
	}
    }
});
