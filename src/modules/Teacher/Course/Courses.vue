<template>
    <div class="card overflow-hidden border-0">
        <div class="card__header">
            <custom-navigation />
            <b-row class="justify-content-center">
                <tab-component :active="selectedTabId"
                    @click="selectTab"/>
            </b-row>
        </div>
        <div class="card__body">
            <b-table-simple caption-top responsive :no-border-collapse="noCollapse">
                <b-thead head-variant="light">
                    <b-tr>
                        <b-th olspan="1">课程</b-th>
                        <b-th olspan="1">班级名称</b-th>
                        <b-th olspan="1">操作</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <!-- <b-tr v-for="(item, index) in values"
                        :key="index + 'tbody'">
                        <b-th width="10%">allow</b-th>
                        <b-th width="10%">/ə'laʊ/</b-th>
                        <b-th width="10%"><a href="#">详情</a></b-th>
                    </b-tr> -->
                    <b-tr>
                        <b-th width="10%">allow</b-th>
                        <b-th width="10%">/ə'laʊ/</b-th>
                        <b-th width="10%"><a href="#">详情</a></b-th>
                    </b-tr>
                    <b-tr>
                        <b-th width="10%">allow</b-th>
                        <b-th width="10%">/ə'laʊ/</b-th>
                        <b-th width="10%"><a href="#">详情</a></b-th>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
        </div>
    </div>
</template>

<script>
import CustomNavigation from '../../../components/common/CustomNavigation';
import TabComponent from '../../../components/common/TabComponent';


export default {
    components: {
        CustomNavigation,
        TabComponent,
    },
    data: () => ({
        selectedTabId: 0,
    }),
    methods: {
        selectTab(index){
            this.selectedTabID = index;
            // this.currentPage = 0;
            // this.fliterPageData();
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
    }
}
.content-pagination {
    font-size: 12px;
}
</style>