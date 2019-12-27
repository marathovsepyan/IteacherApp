<template>
    <div class="card-wrapper d-flex flex-column">
        <div class="card overflow-hidden border-0">
            <div class="card__header">
                <b-row class="justify-content-between m-0">
                    <custom-navigation :routes="routes"/>
                    <b-button variant="primary" size="sm" @click="addHomework">添加作业</b-button>
                </b-row>
            </div>
            <div class="card__body">
                <b-table-simple caption-top responsive :no-border-collapse="true">
                    <b-thead head-variant="light">
                        <b-tr>
                            <b-th @click="navigateTo">作业 </b-th>
                            <b-th>操作</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr>
                            <b-th width="10%" @click="navigateTo">homework name</b-th>
                            <b-th width="10%">
                                <b-button variant="link" size="sm" class="pt-0 pb-0" @click="deleteHomework">删除</b-button>
                            </b-th>
                        </b-tr>
                        <b-tr>
                            <b-th width="10%" @click="navigateTo">some name 1</b-th>
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
                    :totalPages="12"
                    @changePage="changePage" />
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import CustomNavigation from '../../../components/common/CustomNavigation';
    import Pagination from '../../../components/common/Pagination';

    export default {
        name: 'CoursesComponent',
        components: {
            CustomNavigation,
            Pagination
        },
        data: () => ({
            selectedTabId: 0,
            currentPage: 1,
        }),
        computed: {
            ...mapGetters({
            }),
            routes() {
                return ([
                    {name: '课程', link: ''},
                    {name: '作业一', link: ''}
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
            addHomework() {
                this.$router.push({name: 'teacher-homework-add'});
            },
            deleteHomework() {
            },
            navigateTo() {
                this.$router.push({ name: 'teacher-homework-info', params: { id: 5 }});
            }
        },
    };
</script>
