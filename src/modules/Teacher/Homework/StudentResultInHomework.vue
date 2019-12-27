<template>
    <div class="card-wrapper d-flex flex-column">
        <div class="card overflow-hidden border-0">
            <div class="card__header">
                <b-row class="justify-content-between m-0">
                    <custom-navigation :routes="routes"/>
                    <tab-component :active="selectedTabId"
                                   @click="selectTab"
                                   class="no-wrap ml-auto"/>
                    <img src="/img/user/02.jpg" alt="" width="26" height="26" class="rounded-circle ml-auto">
                    <h4 class="text-sm ml-2 mb-0 mt-1">王明同学</h4>
                </b-row>
            </div>
            <div class="card__body">
                <b-table-simple caption-top responsive :no-border-collapse="true">
                    <b-thead head-variant="light">
                        <b-tr>
                            <b-th>已读文章</b-th>
                            <b-th>时间</b-th>
                            <b-th>分数</b-th>
                            <b-th>详情</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr>
                            <b-th width="10%">文章一</b-th>
                            <b-th width="10%"> 2019/04/03 24:00 </b-th>
                            <b-th width="10%">80</b-th>
                            <b-th width="10%" >
                                <b-button @click="toHomeworkResultDetails" variant="link" size="sm" class="pt-0 pb-0">查看</b-button>
                            </b-th>
                        </b-tr>
                        <b-tr>
                            <b-th width="10%">文章一</b-th>
                            <b-th width="10%"> 2019/04/03 24:00 </b-th>
                            <b-th width="10%">80</b-th>
                            <b-th width="10%" >
                                <b-button @click="toHomeworkResultDetails" variant="link" size="sm" class="pt-0 pb-0">查看</b-button>
                            </b-th>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </div>
        </div>
        <div class="content-pagination">
            <pagination
                    :currentPage="currentPage"
                    :totalPages="12"
                    @changePage="changePage" />
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import CustomNavigation from '../../../components/common/CustomNavigation';
    import TabComponent from '../../../components/common/TabComponent';
    import Pagination from '../../../components/common/Pagination';

    export default {
        name: 'CoursesComponent',
        components: {
            CustomNavigation,
            TabComponent,
            Pagination,
        },
        data: () => ({
            selectedTabId: 0,
            currentPage: 1,
            routes: [{name: '班级', link: ''}, {name: '学习课程情况'}],
        }),
        computed: {
            ...mapGetters({
            }),
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
            toHomeworkResultDetails() {
                this.$router.push({name: 'teacher-homework-result-info', params: {result_id: 302}});
            }
        },
    };
</script>
