import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  redirect() {
    this.transitionTo('scientists');
  }
}
