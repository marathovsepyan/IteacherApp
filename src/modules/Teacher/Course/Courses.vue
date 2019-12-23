<template>
    <div class="card-wrapper">
        <div class="card overflow-hidden border-0">
            <div class="card__header">
                <b-row class="justify-content-end">
                    <button>添加课程</button>
                </b-row>
            </div>
            <div class="card__body">
                <b-table-simple caption-top responsive :no-border-collapse="true">
                    <b-thead head-variant="light">
                        <b-tr>
                            <b-th>班级名称</b-th>
                            <b-th>课程</b-th>
                            <b-th>操作</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr v-for="(item, index) in tmpData"
                            :key="index + 'tbody'">
                            <b-th width="10%">{{ item.name }}</b-th>
                            <b-th width="10%">{{ item.createdAt }}</b-th>
                            <b-th width="10%"><a href="#">详情</a></b-th>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </div>
        </div>
        <div class="content-pagination d-flex justify-content-center">
            <pagination
                :currentPage="currentPage"
                :totalPages="courses.length"
                @changePage="changePage"
            ></pagination>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Pagination from '../../../components/common/Pagination';

export default {
    name: 'CoursesComponent',
    components: {
        Pagination,
    },
    data: () => ({
        selectedTabId: 0,
        currentPage: 1,
    }),
    computed: {
        ...mapGetters({
            courses: 'getCourses',
        }),
        tmpData() {
            let offset = (this.currentPage) * 2;
            return this.courses.slice(offset, offset + 2);
        }
    },
    async created() {
        await this.viewCourses();
    },
    methods: {
        ...mapActions({
            viewCourses: 'getCourses',
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