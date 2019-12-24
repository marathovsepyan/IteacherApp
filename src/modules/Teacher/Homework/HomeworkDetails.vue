<template>
    <div class="card-wrapper d-flex flex-column">
        <div class="card overflow-hidden border-0">
            <div class="card__header">
                <custom-navigation />
                <b-row class="justify-content-center">
                    <tab-component :active="selectedTabId"
                                   @click="selectTab"/>
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
                            <b-th width="10%">some name 1</b-th>
                            <b-th width="10%">some name 2</b-th>
                            <b-th width="10%">
                                src
                            </b-th>
                        </b-tr>
                        <b-tr>
                            <b-th width="10%">some name 1</b-th>
                            <b-th width="10%">some name 2</b-th>
                            <b-th width="10%">
                                src
                            </b-th>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import CustomNavigation from '../../../components/common/CustomNavigation';
    import TabComponent from '../../../components/common/TabComponent';

    export default {
        name: 'CoursesComponent',
        components: {
            CustomNavigation,
            TabComponent,
        },
        data: () => ({
            selectedTabId: 0,
            currentPage: 1,
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
