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
            <table-component />
        </div>
    </div>
</template>

<script>
import CustomNavigation from '../../../components/common/CustomNavigation';
import TabComponent from '../../../components/common/TabComponent';
import TableComponent from '../../../components/common/TableComponent';


export default {
    components: {
        CustomNavigation,
        TabComponent,
        TableComponent,
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