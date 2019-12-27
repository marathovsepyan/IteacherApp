<template>
    <div class="card-wrapper d-flex flex-column">
        <div class="card overflow-hidden border-0">
            <div class="card__header">
                <custom-navigation :routes="routes"/>
<!--                <b-row class="justify-content-center">-->
<!--                    <tab-component :active="selectedTabId"-->
<!--                                   @click="selectTab"-->
<!--                                    class="no-wrap"/>-->
<!--                </b-row>-->
                <b-row class="ml-0">
                    <div class="allow">单词：allow</div>
                </b-row>
            </div>
            <div class="card__body">
                <b-table-simple caption-top responsive :no-border-collapse="true">
                    <b-thead head-variant="light">
                        <b-tr>
                            <b-th>分数</b-th>
                            <b-th>人数</b-th>
                            <b-th>学生</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr>
                            <b-th width="10%">90（含）~100 含）</b-th>
                            <b-th width="10%">5</b-th>
                            <b-th width="10%">
                                <div  class="d-flex">
                                    <div>
                                        <img src="/img/user/02.jpg" alt="" width="26" height="26" class="rounded-circle ml-auto">
                                        <h4 class="text-sm ml-2 mb-0 mt-1">学生姓名（100）</h4>
                                    </div>
                                    <div>
                                        <img src="/img/user/02.jpg" alt="" width="26" height="26" class="rounded-circle ml-auto">
                                        <h4 class="text-sm ml-2 mb-0 mt-1">学生姓名（100）</h4>
                                    </div>
                                </div>
                            </b-th>
                        </b-tr>
                        <b-tr>
                            <b-th width="10%">80(含)~90</b-th>
                            <b-th width="10%">5</b-th>
                            <b-th width="10%">
                                <div  class="d-flex">
                                    <div>
                                        <img src="/img/user/02.jpg" alt="" width="26" height="26" class="rounded-circle ml-auto">
                                        <h4 class="text-sm ml-2 mb-0 mt-1">学生姓名（100）</h4>
                                    </div>
                                    <div>
                                        <img src="/img/user/02.jpg" alt="" width="26" height="26" class="rounded-circle ml-auto">
                                        <h4 class="text-sm ml-2 mb-0 mt-1">学生姓名（100）</h4>
                                    </div>
                                </div>
                            </b-th>
                        </b-tr>
                        <b-tr>
                            <b-th width="10%">60(含)~80</b-th>
                            <b-th width="10%">5</b-th>
                            <b-th width="10%">
                                <div  class="d-flex">
                                    <div>
                                        <img src="/img/user/02.jpg" alt="" width="26" height="26" class="rounded-circle ml-auto">
                                        <h4 class="text-sm ml-2 mb-0 mt-1">学生姓名（100）</h4>
                                    </div>
                                    <div>
                                        <img src="/img/user/02.jpg" alt="" width="26" height="26" class="rounded-circle ml-auto">
                                        <h4 class="text-sm ml-2 mb-0 mt-1">学生姓名（100）</h4>
                                    </div>
                                </div>
                            </b-th>
                        </b-tr>
                        <b-tr>
                            <b-th width="10%">60 分以下</b-th>
                            <b-th width="10%">5</b-th>
                            <b-th width="10%">
                                <div  class="d-flex">
                                    <div>
                                        <img src="/img/user/02.jpg" alt="" width="26" height="26" class="rounded-circle ml-auto">
                                        <h4 class="text-sm ml-2 mb-0 mt-1">学生姓名（100）</h4>
                                    </div>
                                    <div>
                                        <img src="/img/user/02.jpg" alt="" width="26" height="26" class="rounded-circle ml-auto">
                                        <h4 class="text-sm ml-2 mb-0 mt-1">学生姓名（100）</h4>
                                    </div>
                                </div>
                            </b-th>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </div>
        </div>
        <div class="content-pagination">
            <pagination
                    :currentPage="currentPage"
                    :totalPages="0"
                    :offset="2"
                    @changePage="changePage" />
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import CustomNavigation from '../../../components/common/CustomNavigation';
    import Pagination from '../../../components/common/Pagination';
    // import TabComponent from '../../../components/common/TabComponent';

    export default {
        name: 'CoursesComponent',
        components: {
            CustomNavigation,
            Pagination,
        },
        data: () => ({
            selectedTabId: 0,
            currentPage: 0,
        }),
        computed: {
            ...mapGetters({
            }),
            routes() {
                return ([
                    {name: '作业', link: ''},
                    {name: '作业一', link: ''},
                    {name: '作业统计', link: ''},
                ]);
            },
        },
        async created() {
        },
        methods: {
            ...mapActions({
            }),
            selectTab(index){
                this.selectedTabID = index;
                // this.currentPage = 0;
                // this.fliterPageData();
            },
            changePage(v) {
                this.currentPage = v;
            },
        },
    };
</script>
<style lang="scss">
    .allow {
        margin-top: 13px;
    }
</style>
