<template>
    <div class="card-wrapper d-flex flex-column">
        <div class="card overflow-hidden border-0">
            <div class="card__header pt-2 pr-2 pb-0 pl-2 border-btm">
                <b-row>
                    <b-col cols="6">
                        <custom-navigation :routes="routes"/>
                    </b-col>
                </b-row>
                <b-row class="mt-4">
                    <b-col cols="3">
                        <tab-component :tabs="['已完成', '超时']"
                            :active="selectedTabId"
                            @click="selectTab"
                            class="no-bg"/>
                    </b-col>
                </b-row>
            </div>
            <div class="card__body">
                <b-row class="align-items-center m-0 p-3 border-btm">
                    <div class="d-flex align-items-center mr-auto">
                        <img src="../../../../public/img/user/02.jpg" alt="" width="44" height="44" class="rounded-circle">
                        <h4 class="text-md ml-3 mb-0">S*ki酱</h4>
                    </div>
                    <div class="oval oval-warning mr-3">50</div>
                    <div class="d-flex align-items-center">
                        <b-button variant="outline-warning btn-md pl-3 pr-3 mr-3">未读</b-button>
                        <b-button variant="outline-primary btn-md pl-3 pr-3">未读</b-button>
                    </div>
                </b-row>
                <b-row class="align-items-center m-0 p-3 border-btm">
                    <div class="d-flex align-items-center mr-auto">
                        <img src="../../../../public/img/user/02.jpg" alt="" width="44" height="44" class="rounded-circle">
                        <h4 class="text-md ml-3 mb-0">S*ki酱</h4>
                    </div>
                    <div class="oval oval-warning mr-3">50</div>
                    <div class="d-flex align-items-center">
                        <b-button variant="outline-warning btn-md pl-3 pr-3 mr-3">未读</b-button>
                        <b-button variant="outline-primary btn-md pl-3 pr-3">未读</b-button>
                    </div>
                </b-row>
                <b-row class="align-items-center m-0 p-3 border-btm">
                    <div class="d-flex align-items-center mr-auto">
                        <img src="../../../../public/img/user/02.jpg" alt="" width="44" height="44" class="rounded-circle">
                        <h4 class="text-md ml-3 mb-0">S*ki酱</h4>
                    </div>
                    <div class="oval oval-warning mr-3">50</div>
                    <div class="d-flex align-items-center">
                        <b-button variant="outline-warning btn-md pl-3 pr-3 mr-3">未读</b-button>
                        <b-button variant="outline-primary btn-md pl-3 pr-3">未读</b-button>
                    </div>
                </b-row>
                <b-row class="align-items-center m-0 p-3 border-btm">
                    <div class="d-flex align-items-center mr-auto">
                        <img src="../../../../public/img/user/02.jpg" alt="" width="44" height="44" class="rounded-circle">
                        <h4 class="text-md ml-3 mb-0">S*ki酱</h4>
                    </div>
                    <div class="oval oval-warning mr-3">50</div>
                    <div class="d-flex align-items-center">
                        <b-button variant="outline-warning btn-md pl-3 pr-3 mr-3">未读</b-button>
                        <b-button variant="outline-primary btn-md pl-3 pr-3">未读</b-button>
                    </div>
                </b-row>
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
        routes: [{name: '班级'}, {name: '学习课程情况'}],
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
