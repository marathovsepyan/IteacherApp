<template>
    <div class="card-wrapper d-flex flex-column">
        <div class="card overflow-hidden border-0">
            <div class="card__header">
                <b-row class="justify-content-between m-0">
                        <custom-navigation :routes="routes"/>
                        <tab-component :active="selectedTabId"
                                    @click="selectTab"
                                    class="no-wrap no-border"/>
                        <b-button variant="primary" size="sm">添加作业</b-button>
                </b-row>
            </div>
            <div class="card__body">
                <b-table-simple caption-top responsive :no-border-collapse="true">
                    <b-thead head-variant="light">
                        <b-tr>
                            <b-th>单词 </b-th>
                            <b-th>音标</b-th>
                            <b-th>翻译</b-th>
                            <b-th>状态</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr>
                            <b-th width="10%">a cup</b-th>
                            <b-th width="10%">--</b-th>
                            <b-th width="10%">--</b-th>
                            <b-th width="10%">已添加</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th width="10%">a cup</b-th>
                            <b-th width="10%">--</b-th>
                            <b-th width="10%">--</b-th>
                            <b-th width="10%">已添加</b-th>
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
            routes: [{name: '班级'}, {name: '学习课程情况'}],
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
        },
    };
</script>
