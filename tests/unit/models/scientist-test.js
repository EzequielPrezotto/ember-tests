import { module, test } from 'qunit';
import { setupTest } from 'ember-tests/tests/helpers';

module('Unit | Model | scientist', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('scientist', {});
    assert.ok(model);
  });
});
