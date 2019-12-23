<template>
  <b-row class="justify-content-center">
    <b-col>
      <b-pagination :value="page"
          @input="handlePageChange"
          :total-rows="totalPages - 1"
          :per-page="offset"
          label-first-page=""
          prev-text=">"
          next-text=">"
          label-last-page=""></b-pagination>
    </b-col>
    <b-col>
      <div class="go-page">
        <span class="status">{{ page }}/{{ total }}</span>
        <span class="go-page__text">Go to</span>
        <input class="go-page__input" v-model="goToPage" type="text" placeholder="">
        <span>Page</span>
        <button class="go-page__button" name="view" @click="handlePageChange">View</button>
      </div>
    </b-col>
  </b-row>
</template>

<script>

export default {
  name: 'Pagination',
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
    this.page = +this.currentPage;
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
      this.$emit('changePage', this.page);
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
        padding: 6px 11px 7px 12px;
        background: #ffffff;
        border-radius: 3px;
        border: 1px solid #C4C6CF;
        font-size: 12px;
        font-weight: 400;
        color: #333333;
        margin-left: 3px;
      }
      .pagination-link--active {
        background-color: #5584FF;
        color: #ffffff;
        border: 1px solid rgba(85,132,255,1);
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
    }
  }
  .go-page {
    &__text {
      margin-left: 21px;
    }
    &__input {
      height: 30px;
      padding: 4px 6px 4px 6px;
      background: #ffffff;
      border-radius: 3px;
      border: 1px solid #C4C6CF;
      margin-left: 3px;
      margin-right: 4px;
      font-size: 12px;
    }
    span {

    }
    &__button {
      background: #fff;
      border-radius: 3px;
      border: 1px solid #C4C6CF;
      margin-left: 3px;
    }
    .status {

    }
  }
}
</style>