<template>
    <div class="w-100 min-vh-100 overflow-hidden d-flex align-items-center">
        <b-container fluid>
            <b-row>
                <b-col md="6" lg="7" class="d-flex align-items-center">
                    <div class="img-mirror">
                        <img src="/img/banners/auth_teacher_bg.png" alt="" class="img-fluid">
                    </div>                </b-col>
                <b-col md="6" lg="5">
                    <div class="l-wrap">
                        <div class="l-wrap__header d-flex align-items-center">
                            <img src="/img/icons/logo.png" alt="logo" width="80" height="80">
                            <h2 class="text-primary">您好,欢迎来到iTeacher</h2>
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
                                            class="form-outline rounded-0" />
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
                                            class="form-outline rounded-0" />
                                    </b-form-group>

                                    <b-form-group>
                                        <b-button type="submit" variant="light btn-block rounded-pill" @click="login">登录</b-button>
                                        <b-form-text class="d-flex justify-content-between">
                                            <router-link to="register" class="btn btn-link text-xs">注册账号</router-link>
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
                                        class="form-outline rounded-0" />
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
                                                class="form-outline rounded-0" />
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
                            <div class="col-6 text-center">
                                <img src="/img/icons/social_1_light.png" alt="social_1_light" width="40" height="40">
                                <p class="m-0 mt-1 text-light text-sm">微信登录</p>
                            </div>
                            <div class="col-6 text-center">
                                <img src="/img/icons/social_2_light.png" alt="social_2_light" width="40" height="40">
                                <p class="m-0 mt-1 text-light text-sm">QQ登录</p>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Login',
    data: () => ({
        phone: null,
        password: null,
        state: null,
        name: null,
        invalidFeedback: null,
        validFeedback: null,
    }),
    methods: {
        ...mapActions({
            signIn: 'SIGN_IN',
        }),
        async login() {
            await this.signIn({
                phone: this.phone,
                password: this.password,
                role: 'teacher',
            });
            this.$router.push({ name: 'teacher-homework'});
        },
    }
};
</script>

<style lang="scss">
    .img-mirror {
        position: relative;
        &:before {
            content: '';
            width: 100%;
            height: 600px;
            position: absolute;
            bottom: -596px;
            left: 0;
            background-image: url('/img/banners/auth_teacher_bg.png');
            background-repeat: no-repeat;
            background-size: 100% auto;
            background-position: center bottom;
            transform: rotate(180deg);
            transform: scale(1, -1);
            opacity: .09;
        }
    }
</style>