import Ember from 'ember';

let duration = 400;

export default Ember.Controller.extend({
  animationRules
});

function animationRules() {
  this.transition(
    this.toValue(true),
    this.useAndReverse('fade', { duration })
  );
}
