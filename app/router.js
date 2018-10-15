import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('email', { path: '/email/:id' });
    this.route('compose', { path: '/emails/new'});
  this.route('sent');
  this.route('trash');
});

export default Router;
