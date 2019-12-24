<template>
    <div class="data-panel">
        <div class="card p-4">
            <b-row>
                <b-col md="3">
                    <custom-select class="multiselect-sm"/>
                </b-col>
                <b-col md="3">
                    <custom-select class="multiselect-sm"/>
                </b-col>
                <b-col md="3">
                    <custom-select class="multiselect-sm"/>
                </b-col>
                <b-col md="3">
                    <custom-select class="multiselect-sm"/>
                </b-col>
            </b-row>
        </div>
        <b-row>
            <b-col md="8">
                <div class="card p-2">
                    <div class="card__header">

                    </div>
                </div>
            </b-col>
            <b-col md="4">
                <div class="card p-2">
                    <div class="leaderboard text-center">
                        <h2 class="m-0">排行榜</h2>
                        <b-tabs content-class="mt-3">
                            <b-tab title="总分" active>
                                <div class="row m-0">
                                    <div class="leaderboard__user">
                                        <span>1</span>
                                        <div class="border-photo">
                                            <img src="../../../public/img/user/01.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="leaderboard__info">
                                        <h4>最强王者</h4>
                                        <span class="text-muted">2019/04/03 11:55上交</span>
                                    </div>
                                    <div class="leaderboard__status">
                                        <div class="oval">100%</div>
                                        <span class="text-muted">完成3次</span>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="时间"><p>I'm the second tab</p></b-tab>
                        </b-tabs>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import CustomSelect from '../../components/common/CustomSelect.vue';

    export default {
        components: {
            CustomSelect,
        },
        data: () => ({
        }),
        methods: {
        },
    };
</script>

<style lang="scss">
    .leaderboard {
        &__user {
            .border-photo {}
        }
        &__info {}
        &__status {}
    }
</style>
