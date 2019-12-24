<template>
  <b-row class="justify-content-center">
    <b-pagination :value="page"
        @input="handlePageChange"
        :total-rows="totalPages - 1"
        :per-page="offset"
        label-first-page=""
        :hide-goto-end-buttons="hideNavEndButtons"
        class="m-0"
        label-last-page="">
          <template v-slot:prev-text><ArrowLeft/> Previous</template>
          <template v-slot:next-text>Next <ArrowRight/></template>
        </b-pagination>
    <div class="go-page d-flex align-items-center">
      <span class="go-page__status">{{ page }}/{{ total }}</span>
      <span class="text-muted">Go to</span>
      <input class="go-page__input" v-model="goToPage" type="text" placeholder="">
      <span class="text-muted">Page</span>
      <button class="go-page__button" name="view" @click="handlePageChange">View</button>
    </div>
  </b-row>
</template>

<script>
import ArrowLeft from '../../../public/svg/arrow-left.svg';
import ArrowRight from '../../../public/svg/arrow-right.svg';

export default {
  name: 'Pagination',
  components: {
    ArrowLeft,
    ArrowRight,
  },
  props: {
    currentPage: Number,
    totalPages: Number,
    offset: { type: Number, default: 2},
  },
  data() {
    return {
      page: 1,
      goToPage: null,
      perPage: 2,
      hideNavEndButtons: true,
      bootstrapPaginationClasses: {
        ul: 'pagination',
        li: 'page-item',
        liActive: 'active',
        liDisable: 'disabled',
        button: 'page-link'
      },
      paginationAnchorTexts: {
        first: false,
        prev: '&lsaquo; Previous',
        next: 'Next &rsaquo; ',
        last: false
      }
    };
  },
  computed: {
    total() {
      return this.totalPages === 0 ? 1 : Math.ceil(this.totalPages / this.offset);
    }
  },
  created() {
    // this.page = +this.currentPage;
  },
  methods: {
    changePage() {
    },
    handlePageChange(e) {
      if (e.target && e.target.name === 'view') {
        // need to re-check second statment is it needed or not
        if (this.goToPage && this.goToPage < this.total) {
          this.page = +this.goToPage;
          this.goToPage = null;
          this.$emit('changePage', this.page - 1);
        }
        return;
      }

      this.page = e;
      this.$emit('changePage', this.page - 1);
    }
  }
};
</script>

<style lang="scss">
.content-pagination {
  padding: 50px 0;
  ul.pagination {
    li.page-item {
      .page-link {
        padding: 7px 11px 5px;
        background-color: #ffffff;
        border-radius: 3px;
        border: 1px solid #C4C6CF;
        font-size: 12px;
        font-weight: 400;
        color: #333333;
        margin-left: 3px;
        &:hover {
          background-color: #C4C6CF;
        }
        svg {
            margin: 0 4px;
        }
      }
      .pagination-link--active {
        background-color: #5584FF;
        color: #ffffff;
        border: 1px solid #5584FF;
      }
      .span {
        border: 0;
        font-size: 13px;
        line-height: 15px;
        background: #999999;
      }
      &[role="separator"] {
        .page-link {
          border: none;
        }
      }
      &.active {
        .page-link {
          border-color: #5584FF;
          background-color: #5584FF;
          color: #fff;
        }
      }
    }
  }
  .go-page {
    &__status {
      margin: 0 20px;
    }
    &__input {
      max-width: 40px;
      height: 29px;
      padding: 4px 6px 4px 6px;
      background: #ffffff;
      border-radius: 3px;
      border: 1px solid #C4C6CF;
      margin: 0 4px;
      font-size: 12px;
    }
    &__button {
      background: #fff;
      border-radius: 3px;
      border: 1px solid #C4C6CF;
      margin: 0 4px;
      height: 29px;
      padding: 4px 10px;
      &:hover,
      &:focus {
        border-color: #5584FF;
        background-color: #5584FF;
        color: #fff;
      }
    }
  }
}
</style>