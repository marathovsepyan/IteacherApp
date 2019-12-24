<template>
    <div class="card-wrapper d-flex flex-column">
        <div class="card overflow-hidden border-0">
            <div class="card__header">
                <custom-navigation />
                <b-row class="justify-content-end m-0">
                    <b-button variant="primary" size="sm">添加单元</b-button>
                </b-row>
            </div>
            <div class="card__body">
                <b-table-simple caption-top responsive :no-border-collapse="true">
                    <b-thead head-variant="light">
                        <b-tr>
                            <b-th>单元名称</b-th>
                            <b-th>操作</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr>
                            <b-th width="10%">Unit 1</b-th>
                            <b-th width="10%">
                                <b-button variant="link" size="sm" class="pt-0 pb-0">操作</b-button>
                            </b-th>
                        </b-tr>
                        <b-tr>
                            <b-th width="10%">Unit 2</b-th>
                            <b-th width="10%">
                                <b-button variant="link" size="sm" class="pt-0 pb-0">操作</b-button>
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
    import Pagination from '../../../components/common/Pagination';
    import CustomNavigation from '../../../components/common/CustomNavigation';

    export default {
        name: 'CoursesComponent',
        components: {
            Pagination,
            CustomNavigation,
        },
        data: () => ({
            selectedTabId: 0,
            currentPage: 1,
        }),
        computed: {
            ...mapGetters({
                viewUnits: 'getUnites',
            }),
            courseId() {
                return this.$router.params.id;
            }
        },
        async created() {
            this.viewUnits(this.courseId);
        },
        methods: {
            ...mapActions({
                units: 'getUnits'
            }),
            changePage(v) {
                this.currentPage = v;
            },
        },
    };
</script>
