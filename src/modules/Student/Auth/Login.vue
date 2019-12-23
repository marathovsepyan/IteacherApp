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
                            <b-tabs content-class="mt-3">
                                <b-tab title="验证码登录" active>
                                    <b-form-group
                                    id="fieldset-1"
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    :state="state"
                                    >
                                        <b-form-input
                                            id="input-1"
                                            v-model="phone"
                                            :state="state"
                                            placeholder="请输入手机号"
                                            class="form-outline rounded-0"></b-form-input>
                                    </b-form-group>

                                    <b-form-group
                                    id="fieldset-2"
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    :state="state"
                                    >
                                        <b-form-input
                                            id="input-2"
                                            v-model="password"
                                            :state="state"
                                            type="password"
                                            placeholder="请输入密码"
                                            class="form-outline rounded-0"></b-form-input>
                                    </b-form-group>

                                    <b-form-group>
                                        <b-button type="submit" variant="light btn-block rounded-pill" @click="login">登录</b-button>
                                        <b-form-text class="d-flex justify-content-between">
                                            <a href="" class="btn btn-link text-xs">注册账号</a>
                                            <a href="" class="btn btn-link text-xs">忘记密码</a>
                                        </b-form-text>
                                    </b-form-group>

                                </b-tab>
                                <b-tab title="密码登录">
                                    <b-form-group
                                    id="fieldset-1"
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    :state="state">
                                        <b-form-input
                                        id="input-3"
                                        v-model="name"
                                        :state="state"
                                        placeholder="请输入手机号"
                                        class="form-outline rounded-0"></b-form-input>
                                    </b-form-group>

                                    <b-form-group
                                    id="fieldset-2"
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    :state="state">
                                        <b-input-group>
                                            <b-form-input id="input-4"
                                                v-model="name"
                                                :state="state"
                                                type="password"
                                                placeholder="请输入密码"
                                                class="form-outline rounded-0"></b-form-input>
                                            <b-input-group-append>
                                                <b-button variant="link text-xs">获取验证码</b-button>
                                            </b-input-group-append>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group>
                                        <b-button type="button" variant="light btn-block rounded-pill">登录</b-button>
                                        <b-form-text class="d-flex justify-content-between">
                                            <a href="" class="btn btn-link text-xs">注册账号</a>
                                            <a href="" class="btn btn-link text-xs">忘记密码</a>
                                        </b-form-text>
                                    </b-form-group>
                                </b-tab>
                            </b-tabs>
                        </div>
                        <div class="l-wrap__footer d-flex justify-content-between">
                            <div class="col-4 text-center">
                                <img src="../../../../public/img/icons/social_1_light.png" alt="social_1_light" width="40" height="40">
                                <p class="m-0 mt-1 text-light text-sm">微信登录</p>
                            </div>
                            <div class="col-4 text-center">
                                <img src="../../../../public/img/icons/social_2_light.png" alt="social_2_light" width="40" height="40">
                                <p class="m-0 mt-1 text-light text-sm">QQ登录</p>
                            </div>
                            <div class="col-4 text-center">
                                <img src="../../../../public/img/icons/social_3_light.png" alt="social_3_light" width="40" height="40">
                                <p class="m-0 mt-1 text-light text-sm">游客登录</p>
                            </div>
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
    name: 'Login',
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