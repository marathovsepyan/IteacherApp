<template>
    <div class="card-wrapper d-flex flex-column">
        <div class="card overflow-hidden border-0">
            <div class="card__header">
                <b-row class="justify-content-between m-0">
                    <custom-navigation :routes="routes"/>
                    <custom-search class="search"/>
                    <b-button variant="primary" size="sm">添加作业</b-button>
                </b-row>
            </div>
            <div class="card__body">
                <b-table-simple caption-top responsive :no-border-collapse="true">
                    <b-thead head-variant="light">
                        <b-tr>
                            <b-th>单元名称</b-th>
                            <b-th> 操作</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr>
                            <b-th width="10%"
                                  @click="() => toUnites()"
                                  class="cursor-pointer">2014 New Fashion Novelty Tank Slim Women's Fashion Dresses With Lace </b-th>
                            <b-th width="10%">
                                <b-button variant="link" size="sm" class="pt-0 pb-0">删除</b-button>
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
    import Pagination from '../../../components/common/Pagination';
    import CustomNavigation from '../../../components/common/CustomNavigation';
    import CustomSearch from '../../../components/common/CustomSearch';
    // import AddCourseModal from './AddCourseModal';

    export default {
        name: 'CoursesComponent',
        components: {
            Pagination,
            CustomNavigation,
            CustomSearch,
        },
        data: () => ({
            selectedTabId: 0,
            currentPage: 0,
        }),
        computed: {
            ...mapGetters({
            }),
            // tmpData() {
            //     let offset = (this.currentPage) * 2;
            //     return this.courses.slice(offset, offset + 2);
            // },
            routes() {
                return ([
                    {name: '全部课程', link: ''},
                    {name: '一年级上册', link: ''},
                    {name: '第一节课', link: ''},
                ]);
            }
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
            toUnites() {
                // this.$router.push({name: 'teacher-course-unites', params: { id: course.id }});
            },
        },
    };
</script>
<style lang="scss">
    .search {
        width: 380px;
    }
</style>
