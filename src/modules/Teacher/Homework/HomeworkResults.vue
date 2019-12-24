<template>
    <div class="card-wrapper d-flex flex-column">
        <div class="card overflow-hidden border-0">
            <div class="card__header">
                <custom-navigation />
                <b-row class="justify-content-end">
                    <b-button variant="primary" size="sm" @click="toStatistic">作业统计</b-button>
                </b-row>
            </div>
            <div class="card__body">
                <tab-component :active="selectedTabId"
                               @click="selectTab"/>
            </div>
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
            toStatistic() {
              this.$router.push({path: 'statistic'});
            },
        },
    };
</script>
