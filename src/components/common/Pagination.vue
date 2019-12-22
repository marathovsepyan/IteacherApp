<template>
  <div class="pagination-container"> 
    <div class="">
        <v-pagination :value="page"
                    @input="handlePageChange"
                    :page-count="total"
                    :classes="bootstrapPaginationClasses"
                    :labels="paginationAnchorTexts"></v-pagination>
    </div>
    <span class="status">{{ page }}/{{total}}</span>
    <span class="go-to-text">Go to</span>
    <input class="width-full go-to-input" v-model="goToPage" type="text" placeholder="">
    <span>Page</span>
    <custom-button class="go-to-button" name="view" @click="handlePageChange">View</custom-button>
  </div>
</template>

<script>
import vPagination from 'vue-plain-pagination';
import CustomButton from '@/components/Common/CustomButton';

export default {
  name: 'Pagination',
  components: { 
    vPagination,
    CustomButton 
  },
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  data() {
    return {
      page: 1,
      goToPage: null,
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
    }
  },
  computed: {
    total() {
      return this.totalPages === 0 ? 1 : Math.ceil(this.totalPages / 10)
    }
  },
  created() {
    this.page = +this.currentPage + 1;
  },
  methods: {
    changePage(e) {
      
    },
    handlePageChange(e) {
      if(e.target && e.target.name === 'view') {
        // need to re-check second statment is it needed or not
        if(this.goToPage && this.goToPage < this.total) {  
          this.page = +this.goToPage;
          this.goToPage = null;
          this.$emit('changePage', this.page - 1); 
        }
        return
      }

      this.page = e;
      this.$emit('changePage', this.page - 1);      
    }
  }
}
</script>

<style lang="scss">
.pagination-container {
  font-family:Helvetica;
  display: flex;
  margin: auto;
  color: #333333;
  justify-content: center;
  align-items: center;
  ul.pagination {
    display: flex;
    margin-bottom: 0;
    margin-right: 16px;
    li.page-item {
      .page-link {
        padding: 6px 11px 7px 12px;
        background: #ffffff;
        border-radius: 3px;
        border: 1px solid #C4C6CF;
        font-size: 12px;
        line-height: 13px;
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
    }
  }
  .go-to-text {
    // margin: 1px 2px 1px 21px;
    margin-left: 21px;
  }
  .go-to-input {
    width: 36px;
    padding: 6px 11px 7px 12px;
    background: #ffffff;;
    border-radius: 3px;
    border: 1px solid #C4C6CF;
    margin-left: 3px;
    margin-right: 4px;
    font-size: 12px;
    line-height: 13px;
  }
  span {
    font-size: 12px;
    font-family: Helvetica;
    color: #999999;
    line-height: 14px;
  }
  .go-to-button {
    background: #fff;
    border-radius: 3px;
    border: 1px solid #C4C6CF;
    margin-left: 3px;
  }
  .status {
    font-size: 14px;
  }
}
</style>