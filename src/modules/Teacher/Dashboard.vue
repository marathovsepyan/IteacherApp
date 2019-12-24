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
                    <custom-select class="multiselect-sm"/>
                </b-col>
                <b-col md="3">
                    <custom-select class="multiselect-sm"/>
                </b-col>
            </b-row>
        </div>
        <b-row>
            <b-col md="7">
                <div class="card chart-container">
                    <div class="card__header d-flex">
                        <div data-v-640ef3a2="" class="chart-header mr-auto">
                            <span @click="changeAnalType(0)" class="cursor-pointer fn-16">分</span>
                            <span class="separator" />
                            <span @click="changeAnalType(1)" class="cursor-pointer fn-16">准确率</span>
                        </div>
                        <toggle-button
                            :value="true"
                            :sync="true"
                            :labels="{checked: '周', unchecked: '月'}"
                            :fontSize="16"
                            :width="59"
                            :height="31"
                            :color="{checked: '#5C99E1', unchecked: '#5C99E1'}"
                            @change="changeDateRange($event)"/>
                    </div>
                    <div class="card__body">
                        <admin-chart
                            style="height: 420px; width: 100%"
                            :unit="analType ? '%' : '分'"
                            :labels="graphLabels"
                            :datas="graphDatas"/>
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
                                            <img src="../../../public/img/user/01.jpg" alt="" width="44" height="44" class="img rounded-circle">
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
import CustomSelect from '../../components/common/CustomSelect.vue';
import ToggleButton from '../../components/common/ToggleButton.vue';
import AdminChart from '../../components/common/AdminChart.vue';
import ImgWrrapperGold from '../../../public/svg/img_wrrapper_1.svg';
import ImgWrrapperSilver from '../../../public/svg/img_wrrapper_2.svg';
import ImgWrrapperBronze from '../../../public/svg/img_wrrapper_3.svg';

    export default {
        components: {
            CustomSelect,
            ToggleButton,
            AdminChart,
            ImgWrrapperGold,
            ImgWrrapperSilver,
            ImgWrrapperBronze,
        },
        data: () => ({
            dateType: null,
            analType: 0,
            graphLabels: [],
            graphDatas: [],
        }),
        methods: {
            changeDateRange(e){
                if (e.value) this.dateType = 'week';
                else this.dateType = 'month';

                // this.updateGraphData();
            },
            changeAnalType(val){
                this.analType = val;
                // this.updateGraphData();
            },
            updateGraphData(){
                if (this.dateType === 'week') this.graphLabels = ['4月01', '07', '12', '18', '24', '30'];
                else this.graphLabels = ['4月11', '12', '13', '14', '15', '16', '17'];

                this.graphDatas = [];
                for (let i = 0; i < 3 ; i++){
                    let dataArray = [];
                    for (let j = 0; j < this.graphLabels.length; j++){
                        dataArray.push( Math.round(Math.random() * 40 + 40));
                    }
                    this.graphDatas.push(dataArray);
                }
            },
        },
    };
</script>

<style lang="scss">
    .tab-content > .tab-pane:focus {
        outline: none;
    }
    .chart-container {
        padding: 17px;
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
            .user-photo {}
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
