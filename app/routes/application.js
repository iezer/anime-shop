import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let result = [];
    for (let i = 1; i<= 10; i++) {
      result.push({
        id: i,
        name: `Product #${i}`
      });
    }

    return result;
  }
});
