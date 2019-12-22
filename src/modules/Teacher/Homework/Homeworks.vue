<template>
    <div class="card overflow-hidden border-0">
        <div class="card__header">
            <custom-navigation />
            <b-row class="justify-content-center">
                <tab-component :active="selectedTabId"
                    @click="selectTab"/>
            </b-row>
        </div>
        <div class="card__body">
            <b-table-simple caption-top responsive :no-border-collapse="noCollapse">
                <b-thead head-variant="light">
                    <b-tr>
                        <b-th colspan="1">已读单词</b-th>
                        <b-th colspan="1"> 音标</b-th>
                        <b-th colspan="1">翻译</b-th>
                        <b-th colspan="1">已读人数</b-th>
                        <b-th colspan="1">未读人数</b-th>
                        <b-th colspan="4" class="custom-border p-0">
                            <span>阶段得分人数</span>
                            <div class="th-rowspan d-flex justify-content-around">
                                <span>90~100</span>
                                <span>90~100</span>
                                <span>90~100</span>
                                <span>60分以下</span>
                            </div>
                        </b-th>
                        <b-th colspan="1">操作</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr>
                        <b-th width="10%">allow</b-th>
                        <b-th width="10%">/ə'laʊ/</b-th>
                        <b-th width="10%">vt. 允许；给予；认可</b-th>
                        <b-th width="10%">30</b-th>
                        <b-th width="10%">61</b-th>
                        <b-th width="10%">30</b-th>
                        <b-th width="10%">30</b-th>
                        <b-th width="10%">61</b-th>
                        <b-th width="10%">62</b-th>
                        <b-th width="10%"><a href="#">详情</a></b-th>
                    </b-tr>
                    <b-tr>
                        <b-th width="10%">allow</b-th>
                        <b-th width="10%">/ə'laʊ/</b-th>
                        <b-th width="10%">vt. 允许；给予；认可</b-th>
                        <b-th width="10%">30</b-th>
                        <b-th width="10%">61</b-th>
                        <b-th width="10%">30</b-th>
                        <b-th width="10%">30</b-th>
                        <b-th width="10%">61</b-th>
                        <b-th width="10%">62</b-th>
                        <b-th width="10%"><a href="#">详情</a></b-th>
                    </b-tr>
                    <b-tr>
                        <b-th width="10%">allow</b-th>
                        <b-th width="10%">/ə'laʊ/</b-th>
                        <b-th width="10%">vt. 允许；给予；认可</b-th>
                        <b-th width="10%">30</b-th>
                        <b-th width="10%">61</b-th>
                        <b-th width="10%">30</b-th>
                        <b-th width="10%">30</b-th>
                        <b-th width="10%">61</b-th>
                        <b-th width="10%">62</b-th>
                        <b-th width="10%"><a href="#">详情</a></b-th>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
        </div>
    </div>
        <!-- <div class="content-pagination d-flex justify-content-center mt-5">
            <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
            ></b-pagination>
        </div> -->
</template>

<script>
import CustomNavigation from '../../../components/common/CustomNavigation';
import TabComponent from '../../../components/common/TabComponent';

export default {
    components: {
        CustomNavigation,
        TabComponent,
    },
    data: () => ({
        selectedTabId: 0,
    }),
    methods: {
        selectTab(index){
            this.selectedTabID = index;
            // this.currentPage = 0;
            // this.fliterPageData();
        },
    },
};
</script>

<style lang="scss">
.card {
    &__header {
        position: relative;
        padding: 20px;
    }
    &__body {
        .table {
            font-size: 12px;
            font-weight: 400;
            color: #333;

            thead {
                th {
                    vertical-align: middle;
                    text-align: center;
                    border: none;
                    background: rgba(235,236,240,1);
                    &.custom-border {
                        border-width: 0 1px;
                        border-style: solid;
                        border-color: #fff;
                    }
                    .th-rowspan {
                        border-top: 1px solid #fff;
                        span {
                            display: block;
                            padding: 2px 4px;
                        }
                    }
                }
            }
            tbody {
                th {
                    text-align: center;
                }
            }
        }
    }
}
.content-pagination {
    font-size: 12px;
}
</style>