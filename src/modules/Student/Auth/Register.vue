<template>
    <div class="w-100 min-vh-100 max-vh-100 overflow-hidden d-flex align-items-center student-bg">
        <b-container>
            <b-row class="bg-white overflow-hidden rounded-xl shadow-lg">
                <b-col md="6" lg="5" class="d-flex align-items-center justify-content-center">
                    <div class="l-wrap">
                        <div class="l-wrap__header d-flex flex-column align-items-center">
                            <img src="../../../../public/img/icons/logo.png" alt="logo" width="80" height="80">
                            <h2 class="text-primary ml-0 mt-3">您好,欢迎来到iTeacher</h2>
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

                            <b-form-group
                            id=""
                            :invalid-feedback="invalidFeedback"
                            :valid-feedback="validFeedback"
                            :state="state"
                            >
                                <b-form-input id="" v-model="name" :state="state" placeholder="请输入手机号" class="form-outline rounded-0"></b-form-input>
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
                <b-col md="6" lg="7" class="d-flex justify-content-center overflow-hidden rounded-xl">
                    <img src="../../../../public/img/banners/auth_right_bg.png" alt="" class="img">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Register',
};
</script>

<style lang="scss">
    .student-bg {
        background-image: url('../../../../public/img/banners/auth_bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>