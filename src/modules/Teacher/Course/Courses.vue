<template>
    <div class="card-wrapper d-flex flex-column">
        <div class="card overflow-hidden border-0">
            <div class="card__header">
                <b-row class="justify-content-end m-0">
                    <b-button variant="primary" size="sm" @click="show">添加课程</b-button>
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
                            <b-th width="10%" @click="() => toUnites(item)" class="cursor-pointer">{{ item.name }}</b-th>
                            <b-th width="10%">{{ item.createdAt }}</b-th>
                            <b-th width="10%">
                                <b-button variant="link" size="sm" class="pt-0 pb-0">发布</b-button>
                                <b-button variant="link" size="sm" class="pt-0 pb-0 text-warning">编辑</b-button>
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
                :totalPages="courses.length"
                :offset="2"
                @changePage="changePage" />
        </div>

<!--        <modal name="hello-world">-->
<!--            hello, world!-->
<!--        </modal>-->
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
        currentPage: 0,
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
        toUnites(course) {
            this.$router.push({name: 'teacher-course-unites', params: { id: course.id }});
        },
        show () {
            this.$modal.show({
                template: `<div><p>{{ text }}</p></div>`,
                props: ['text']
            }, {
                text: 'This text is passed as a property'
            }, {
                height: 'auto'
            }, {
                draggable: true
            }, {
                'before-close': () => { console.log('this will be called before the modal closes'); }
            });
        },
        hide () {
            this.$modal.hide('hello-world');
        }
    },
};
</script>
