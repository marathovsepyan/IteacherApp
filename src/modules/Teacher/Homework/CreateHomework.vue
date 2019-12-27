<template>
    <div class="card-wrapper d-flex flex-column">
        <div class="card overflow-hidden border-0">
            <div class="card__header">
                <b-row class="m-0">
                    <custom-navigation :routes="routes"/>
                    <tab-component :active="selectedTabId"
                                   @click="selectTab"
                                   class="no-wrap ml-auto mr-auto"/>
                    <date-time-picker class="mr-1"/>
                    <b-button variant="outline-secondary ml-1 mr-1" size="sm">取消</b-button>
                    <b-button variant="primary ml-1 mr-1" size="sm">确定</b-button>
                </b-row>
                <b-row class="justify-content-between pt-3">
                    <b-col cols="3">
                        <custom-select class="multiselect-sm"/>
                    </b-col>
                    <b-col cols="3">
                        <custom-select class="multiselect-sm"/>
                    </b-col>
                    <b-col cols="3">
                        <custom-select class="multiselect-sm"/>
                    </b-col>
                    <b-col cols="3">
                        <custom-select class="multiselect-sm"/>
                    </b-col>
                </b-row>
            </div>
            <div class="card__body">
                <b-table-simple caption-top responsive :no-border-collapse="true">
                    <b-thead head-variant="light">
                        <b-tr>
                            <b-th>句子</b-th>
                            <b-th>状态</b-th>
                            <b-th>操作</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr>
                            <b-th width="10%">2014 New Fashion Novelty</b-th>
                            <b-th width="10%">已添加</b-th>
                            <b-th width="10%">
                                <b-button variant="link" size="sm" class="pt-0 pb-0">删除</b-button>
                            </b-th>
                        </b-tr>
                        <b-tr>
                            <b-th width="10%">2014 New Fashion Novelty</b-th>
                            <b-th width="10%">已添加</b-th>
                            <b-th width="10%">
                                <b-button variant="link" size="sm" class="text-warning pt-0 pb-0">添加</b-button>
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
    import CustomSelect from '../../../components/common/CustomSelect';
    import TabComponent from '../../../components/common/TabComponent';
    import DateTimePicker from '../../../components/common/DateTimePicker';
    import Pagination from '../../../components/common/Pagination';

    export default {
        name: 'CoursesComponent',
        components: {
            CustomNavigation,
            TabComponent,
            Pagination,
            CustomSelect,
            DateTimePicker,
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
