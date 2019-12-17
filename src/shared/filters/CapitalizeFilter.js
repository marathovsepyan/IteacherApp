import Vue from 'vue';

export default Vue.filter('capitalize', (value) => {
  if (!value) return '';
  const immutableValue = value.toString();
  return immutableValue.charAt(0).toUpperCase() + immutableValue.slice(1);
});
