import { Factory, faker } from 'ember-cli-mirage';

let toEmail = faker.internet.email();

export default Factory.extend({
    from() {
	return faker.internet.email();
    },
    to() {
	return toEmail;
    },
    subject() {
	return faker.random.words();
    },
    message() {
	return faker.lorem.paragraphs();
    }
});
