<template>
  <div>
    <multiselect v-model="value" :options="options || testOptions" :placeholder="placeholder"></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
    name: 'CustomSelect',
    props: {
      placeholder: { type: String, },
      options: { type: Array, },
      value: { type: String, },
      isMulriselect: {
        type: Boolean,
        default: false
      },
    },
    components: {
      Multiselect,
    },
    data () {
      return {
        testOptions: ['list', 'of', 'options'],
      };
    },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
  .multiselect {
    &__select {
      background-image: url('../../../public/img/icons/arrow_down.png');
      background-repeat: no-repeat;
      background-size: 13px 12px;
      background-position: center;
      &:before {
        content: none;
      }
    }
    &__tags {
      min-height: 40px;
      height: 40px;
      font-size: 14px;
      padding-left: 0;
      border-width: 0 0 1px 0;
      border-color: rgba(229,229,229,1);
    }
    &__input {
      font-size: 14px;
      padding-left: 0;
    }
  }
</style>