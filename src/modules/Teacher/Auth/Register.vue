<template>
    <div class="w-100 min-vh-100 overflow-hidden d-flex align-items-center">
        <b-container fluid>
            <b-row>
                <b-col md="6" lg="6" class="d-flex align-items-center">
                    <div class="img-mirror">
                        <img src="../../../../public/img/banners/auth_teacher_bg.png" alt="" class="img-fluid">
                    </div>
                </b-col>
                <b-col md="6" lg="5" offset-lg="1">
                    <div class="l-wrap">
                        <div class="l-wrap__header d-flex align-items-center">
                            <img src="../../../../public/img/icons/logo.png" alt="logo" width="80" height="80">
                            <h2 class="text-primary">iTeacher <b class="divider bg-primary"></b> 注册</h2>
                        </div>
                        <div class="l-wrap__body">
                            <b-form-group
                            id=""
                            :invalid-feedback="invalidFeedback"
                            :valid-feedback="validFeedback"
                            :state="state"
                            >
                                <b-form-input id="" v-model="name" :state="state" placeholder="请输入手机号" class="form-outline rounded-0"></b-form-input>
                            </b-form-group>

                            <b-form-group>
                                <v-region @values="regionChange" type="column" class="form-control"></v-region>
                                <v-selectmenu :data="groupData"
                                                :embed="true"
                                                :multiple="true"
                                                :width="250"
                                                key-field="id"
                                                v-model="value2" >
                                    <template #row="{ row }">
                                        {{row.name}} {{row.desc}}
                                    </template>
                                </v-selectmenu>
                            </b-form-group>

                            <b-form-group
                            id=""
                            :invalid-feedback="invalidFeedback"
                            :valid-feedback="validFeedback"
                            :state="state"
                            >
                                <b-form-input id="" v-model="name" :state="state" placeholder="请输入密码" class="form-outline rounded-0"></b-form-input>
                            </b-form-group>
                            <b-form-group
                            id="fieldset-2"
                            :invalid-feedback="invalidFeedback"
                            :valid-feedback="validFeedback"
                            :state="state">
                                <b-input-group>
                                    <b-form-input id="input-2" v-model="name" :state="state" placeholder="请输入验证码" class="form-outline rounded-0"></b-form-input>
                                    <b-input-group-append>
                                        <b-button variant="link text-xs">获取验证码</b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                            <b-form-group
                            id=""
                            :invalid-feedback="invalidFeedback"
                            :valid-feedback="validFeedback"
                            :state="state"
                            >
                                <b-form-input
                                    id="" v-model="name"
                                    type="password"
                                    :state="state"
                                    placeholder="请输入密码，6-8位至少含数字/字母2种组合"
                                    class="form-outline rounded-0"></b-form-input>
                            </b-form-group>

                            <b-form-group>
                                <b-button type="submit" variant="light btn-block rounded-pill">注册</b-button>
                                <b-form-text class="d-flex justify-content-between">
                                    <p class="m-0 mt-1 text-center">注册代表阅读并同意《iTeacher服务 <a href="">《iTeacher服务协议》</a> 和 <a href="">《隐私条款》</a></p>
                                </b-form-text>
                            </b-form-group>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

export default {
    name: 'Register',
    data: () => ({
        name: null,
        invalidFeedback: null,
        validFeedback: null,
        state: null,
        value2: '3,5,17',
        groupData: [
            {
                title: 'East',
                list: [
                    { id: 1, name: 'Chicago Bulls', desc: '芝加哥公牛', abbr: 'CHI' },
                    { id: 2, name: 'Cleveland Cavaliers', desc: '克里夫兰骑士', abbr: 'CLE' },
                    { id: 3, name: 'Detroit Pistons', desc: '底特律活塞', abbr: 'DET' },
                    { id: 4, name: 'Indiana Pacers', desc: '印第安纳步行者', abbr: 'IND' },
                    { id: 5, name: 'Milwaukee Bucks', desc: '密尔沃基雄鹿', abbr: 'MIL' },
                    { id: 6, name: 'Brooklyn Nets', desc: '布鲁克林篮网', abbr: 'BKN' },
                    { id: 7, name: 'Boston Celtics', desc: '波士顿凯尔特人', abbr: 'BOS' },
                    { id: 8, name: 'New York Knicks', desc: '纽约尼克斯', abbr: 'NYK' },
                    { id: 9, name: 'Philadelphia 76ers', desc: '费城76人', abbr: 'PHI' },
                    { id: 10, name: 'Toronto Raptors', desc: '多伦多猛龙', abbr: 'TOR' },
                    { id: 11, name: 'Atlanta Hawks', desc: '亚特兰大老鹰', abbr: 'ATL' },
                    { id: 12, name: 'Charlotte Hornets', desc: '夏洛特黄蜂', abbr: 'CHA' },
                    { id: 13, name: 'Miami Heat', desc: '迈阿密热火', abbr: 'MIA' },
                    { id: 14, name: 'Orlando Magic', desc: '奥兰多魔术', abbr: 'ORL' },
                    { id: 15, name: 'Washington Wizards', desc: '华盛顿奇才', abbr: 'WAS' },
                ],
            },
            {
                title: 'West',
                list: [
                    { id: 16, name: 'Denver Nuggets', desc: '丹佛掘金', abbr: 'DEN' },
                    { id: 17, name: 'Minnesota Timberwolves', desc: '明尼苏达森林狼', abbr: 'MIN' },
                    { id: 18, name: 'Oklahoma City Thunder', desc: '俄克拉荷马雷霆', abbr: 'OKC' },
                    { id: 19, name: 'Portland Trail Blazers', desc: '波特兰开拓者', abbr: 'POR' },
                    { id: 20, name: 'Utah Jazz', desc: '犹他爵士', abbr: 'UTA' },
                    { id: 21, name: 'Golden State Warriors', desc: '金州勇士', abbr: 'GSW' },
                    { id: 22, name: 'Los Angeles Clippers', desc: '洛杉矶快船', abbr: 'LAC' },
                    { id: 23, name: 'Los Angeles Lakers', desc: '洛杉矶湖人', abbr: 'LAL' },
                    { id: 24, name: 'Phoenix Suns', desc: '菲尼克斯太阳', abbr: 'PHX' },
                    { id: 25, name: 'Sacramento Kings', desc: '萨克拉门托国王', abbr: 'SAC' },
                    { id: 26, name: 'Dallas Mavericks', desc: '达拉斯小牛', abbr: 'DAL' },
                    { id: 27, name: 'Houston Rockets', desc: '休斯顿火箭', abbr: 'HOU' },
                    { id: 28, name: 'Memphis Grizzlies', desc: '孟菲斯灰熊', abbr: 'MEM' },
                    { id: 29, name: 'New Orleans Pelicans', desc: '新奥尔良鹈鹕', abbr: 'NOP' },
                    { id: 30, name: 'San Antonio Spurs', desc: '圣安东尼奥马刺', abbr: 'SAS' },
                ],
            },
        ],
    }),
    methods: {
        regionChange(){
        },
        doSome () {
        },
        showLog () {
        },
        hideLog () {
        },
        values (data) {
            if (data && data.length) {
                this.logs.push(data);
            }
        },
        changeData () {
            this.dynamic = this.headerMenu;
        },
        toMultipleLevel () {
            this.dynamic = this.multiLevel;
        }
    },
    mounted () {
        this.dynamic = this.menu;
    },
};
</script>

<style lang="scss">
    .img-mirror {
        display: block;
        position: relative;
        &:before {
            content: '';
            width: 100%;
            height: 600px;
            position: absolute;
            bottom: -596px;
            left: 0;
            background-image: url('../../../../public/img/banners/auth_teacher_bg.png');
            background-repeat: no-repeat;
            background-size: 100% auto;
            background-position: center bottom;
            transform: rotate(180deg);
            transform: scale(1, -1);
            opacity: .09;
        }
    }
</style>