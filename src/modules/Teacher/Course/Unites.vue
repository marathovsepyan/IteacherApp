<template>
    <div class="card-wrapper d-flex flex-column">
        <div class="card overflow-hidden border-0">
            <div class="card__header">
                <custom-navigation :routes="routes"/>
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
                        <b-tr v-for="(unit, index) in units"
                            :key="index + unit.id">
                            <b-th width="10%">{{ unit.name }}</b-th>
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
                    :totalPages="units.length"
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
            currentPage: 0,
            routes: [
                { name: '全部课程' },
                {name: '一年级上册'},
            ]
        }),
        computed: {
            ...mapGetters({
                units: 'getUnits',
            }),
            courseId() {
                return this.$route.params.id;
            },
            tmpData() {
                let offset = (this.currentPage) * 10;
                return this.courses.slice(offset, offset + 10);
            }
        },
        async mounted() {
            await this.viewUnits({course_id: this.courseId});
        },
        methods: {
            ...mapActions({
                viewUnits: 'getUnits',
            }),
            changePage(v) {
                this.currentPage = v;
            },
        },
    };
</script>
