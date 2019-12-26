<template>
  <div>
    <!-- <label class="typo__label">Custom option template</label> -->
    <multiselect v-model="value"
      :placeholder="placeholder"
      label="title"
      track-by="title"
      :options="testOptions"
      :custom-label="customLabel"
      :show-labels="false">
        <template slot="singleLabel" slot-scope="props">
          <!-- <OptionCheck/> -->
          <span class="option__desc">
            <span class="option__title">{{ props.option }}</span>
          </span>
        </template>
        <template slot="option" slot-scope="props">
          <OptionCheck v-if="value === props.option"/>
          <div class="option__desc">
            <span class="option__title">{{ props.option }}</span>
            <span class="option__small">{{ props.option.desc }}</span>
          </div>
        </template>
    </multiselect>
    <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import OptionCheck from '../../../public/svg/select.svg';

export default {
    name: 'CustomSelect',
    props: {
      placeholder: { type: String, },
      options: { type: Array, },
      value: { type: String, default: '二年级'},
      isMulriselect: {
        type: Boolean,
        default: false
      },
    },
    components: {
      Multiselect,
      OptionCheck,
    },
    data () {
      return {
        testOptions: ['一年级', '二年级', '三年级', '四年级', '五年级'],
      };
    },
    methods: {
      customLabel ({ title, desc }) {
        return `${title} – ${desc}`;
      }
    }
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
      height: 100%;
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
  .multiselect-sm {
    .multiselect {
      font-size: 12px;
      min-height: auto;
      color: #333;
      &__select {
        width: 32px;
      }
      &__tags {
        min-height: auto;
        height: 28px;
        font-size: 12px;
        padding: 2px 34px 2px 7px;
        border-width: 1px;
        border-color: #c4c6cf;
        border-radius: 3px;
      }
      &__input {
        font-size: 12px;
        padding-left: 0;
      }
      &__content-wrapper {
        border-radius: 3px;
        border:1px solid rgba(230,231,235,1);
        box-shadow: 0px 1px 3px rgba(0,0,0,0.12);
      }
      &__option {
        display: flex;
        align-items: center;
        padding: 10px 6px;
        &.multiselect__option--highlight {
          background-color: #ebecf0;
          color: #333;
        }
        .option__desc {
          margin-left: 6px;
        }
      }
    }
  }
</style>