<template>
    <div class="data-panel">
        <div class="card p-4 mb-3">
            <b-row>
                <b-col md="3">
                    <custom-select class="multiselect-sm"/>
                </b-col>
                <b-col md="3">
                    <custom-select class="multiselect-sm"/>
                </b-col>
                <b-col md="3">
                </b-col>
                <b-col md="3">
                    <b-row class="justify-content-end m-0">
                        <b-button variant="primary" size="sm">布置作业</b-button>
                    </b-row>
                </b-col>
            </b-row>
        </div>
        <b-row>
            <b-col md="7">
                <div class="card chart-container rounded-0">
                    <div class="card__header d-flex pb-2">
                        <div data-v-640ef3a2="" class="mr-auto">
                            <span class="text-sm">已布置作业</span>
                        </div>
                    </div>
                    <div class="card__body">
                        <b-row class="align-items-center text-sm m-0 p-2 border-btm">
                            <div class="name mr-auto">2014 New Fashion Novelty Tank Slim Wom</div>
                            <span class="date mr-2">2019/04/03</span>
                            <b-button variant="primary" size="sm">查看排行</b-button>
                        </b-row>
                        <b-row class="align-items-center text-sm m-0 p-2 border-btm">
                            <div class="name mr-auto">2014 New Fashion Novelty Tank Slim Wom</div>
                            <span class="date mr-2">2019/04/03</span>
                            <b-button variant="primary" size="sm">查看排行</b-button>
                        </b-row>
                        <b-row class="align-items-center text-sm m-0 p-2 border-btm">
                            <div class="name mr-auto">2014 New Fashion Novelty Tank Slim Wom</div>
                            <span class="date mr-2">2019/04/03</span>
                            <b-button variant="primary" size="sm">查看排行</b-button>
                        </b-row>
                        <b-row class="align-items-center text-sm m-0 p-2 border-btm">
                            <div class="name mr-auto">2014 New Fashion Novelty Tank Slim Wom</div>
                            <span class="date mr-2">2019/04/03</span>
                            <b-button variant="primary" size="sm">查看排行</b-button>
                        </b-row>
                        <b-row class="align-items-center text-sm m-0 p-2 border-btm">
                            <div class="name mr-auto">2014 New Fashion Novelty Tank Slim Wom</div>
                            <span class="date mr-2">2019/04/03</span>
                            <b-button variant="primary" size="sm">查看排行</b-button>
                        </b-row>
                    </div>
                </div>
            </b-col>
            <b-col md="5">
                <div class="card border-0">
                    <div class="leaderboard">
                        <h2 class="leaderboard__title text-center">排行榜</h2>
                        <b-tabs pills nav-wrapper-class="nav-wrapper d-flex justify-content-center mb-1">
                            <b-tab title="总分" active>
                                <div class="leaderboard__row d-flex align-items-center m-0">
                                    <div class="leaderboard__user d-flex align-items-center">
                                        <span class="text-yellow">1</span>
                                        <div class="user-photo">
                                            <ImgWrrapperGold/>
                                        </div>
                                    </div>
                                    <div class="leaderboard__info text-left">
                                        <h4 class="m-0">最强王者</h4>
                                        <span class="text-muted">2019/04/03 11:55上交</span>
                                    </div>
                                    <div class="leaderboard__status ml-auto text-center">
                                        <div class="oval">100%</div>
                                        <span class="text-muted">完成3次</span>
                                    </div>
                                </div>
                                <div class="leaderboard__row d-flex align-items-center m-0">
                                    <div class="leaderboard__user d-flex align-items-center">
                                        <span class="text-muted">2</span>
                                        <div class="user-photo">
                                            <ImgWrrapperSilver />
                                        </div>
                                    </div>
                                    <div class="leaderboard__info text-left">
                                        <h4 class="m-0">最强王者</h4>
                                        <span class="text-muted">2019/04/03 11:55上交</span>
                                    </div>
                                    <div class="leaderboard__status ml-auto text-center">
                                        <div class="oval">100%</div>
                                        <span class="text-muted">完成3次</span>
                                    </div>
                                </div>
                                <div class="leaderboard__row d-flex align-items-center m-0">
                                    <div class="leaderboard__user d-flex align-items-center">
                                        <span class="text-warning">3</span>
                                        <div class="user-photo">
                                            <ImgWrrapperBronze/>
                                        </div>
                                    </div>
                                    <div class="leaderboard__info text-left">
                                        <h4 class="m-0">最强王者</h4>
                                        <span class="text-muted">2019/04/03 11:55上交</span>
                                    </div>
                                    <div class="leaderboard__status ml-auto text-center">
                                        <div class="oval">100%</div>
                                        <span class="text-muted">完成3次</span>
                                    </div>
                                </div>
                                <div class="leaderboard__row d-flex align-items-center m-0">
                                    <div class="leaderboard__user d-flex align-items-center">
                                        <span>4</span>
                                        <div class="user-photo">
                                            <img src="/img/user/01.jpg" alt="" width="44" height="44" class="img rounded-circle">
                                        </div>
                                    </div>
                                    <div class="leaderboard__info text-left">
                                        <h4 class="m-0">最强王者</h4>
                                        <span class="text-muted">2019/04/03 11:55上交</span>
                                    </div>
                                    <div class="leaderboard__status ml-auto text-center">
                                        <div class="oval">100%</div>
                                        <span class="text-muted">完成3次</span>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="时间">
                                <div class="leaderboard__row d-flex align-items-center m-0">
                                    <div class="leaderboard__user d-flex align-items-center">
                                        <span class="text-yellow">1</span>
                                        <div class="user-photo">
                                            <ImgWrrapperGold/>
                                        </div>
                                    </div>
                                    <div class="leaderboard__info text-left">
                                        <h4 class="m-0">最强王者</h4>
                                        <span class="text-muted">2019/04/03 11:55上交</span>
                                    </div>
                                    <div class="leaderboard__status ml-auto text-center">
                                        <div class="oval">100%</div>
                                        <span class="text-muted">完成3次</span>
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import CustomSelect from '../../../components/common/CustomSelect.vue';
import ImgWrrapperGold from '../../../../public/svg/img_wrraper_1.svg';
import ImgWrrapperSilver from '../../../../public/svg/img_wrraper_2.svg';
import ImgWrrapperBronze from '../../../../public/svg/img_wrraper_3.svg';

    export default {
        components: {
            CustomSelect,
            ImgWrrapperGold,
            ImgWrrapperSilver,
            ImgWrrapperBronze,
        },
        data: () => ({
        }),
        created() {
        },
        methods: {
        },
    };
</script>

<style lang="scss">
    .tab-content > .tab-pane:focus {
        outline: none;
    }
    .chart-container {
        padding: 20px 15px;
        .separator {
            border-left: 2px solid rgb(227, 215, 215);
            margin: 3px 13px 3px 12px;
        }
    }
    .leaderboard {
        padding: 20px 15px;
        &__title {
            font-size: 26px;
            font-weight: 600;
            margin-bottom: 18px;
        }
        .nav-pills {
            .nav-item {
                .nav-link {
                    font-size: 14px;
                    padding: 4px 30px;
                    border-radius: 0;
                    border: 1px solid #5C99E1;
                    &.active {
                        background-color: #5C99E1;
                    }
                    &:focus {
                        outline: none;
                    }
                }
                &:first-child {
                    .nav-link {
                        border-top-left-radius: 8px;
                        border-bottom-left-radius: 8px;
                        border-right: 0;
                    }
                }
                &:last-child {
                    .nav-link {
                        border-top-right-radius: 8px;
                        border-bottom-right-radius: 8px;
                        border-left: 0;
                    }
                }
            }
        }
        &__row {
            padding: 12px 0;
            border-bottom: 1px solid rgba(238, 238, 238, 1);
        }
        &__user {
            span {
                font-size: 18px;
                font-weight: 500;
                margin-right: 10px;
            }
        }
        &__info {
            padding: 4px 14px 0;
            h4 {
                font-size: 16px;
                font-weight: 600;
            }
            span {
                font-size: 14px;
            }
        }
        &__status {
            .oval {
                font-size: 12px;
                color: #5C99E1;
                line-height: 36px;
                width: 36px;
                height: 36px;
                border: 1px solid #5C99E1;
                border-radius: 50%;
                margin: 0 auto;
            }
            span {
                font-size: 12px;
            }
        }
    }
</style>
