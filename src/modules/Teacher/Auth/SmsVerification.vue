<template>
    <div class="w-100 min-vh-100 overflow-hidden d-flex align-items-center">
        <b-container fluid>
            <b-row>
                <b-col md="6" lg="7" class="d-flex align-items-center">
                    <div class="img-mirror">
                        <img src="../../../../public/img/banners/auth_teacher_bg.png" alt="" class="img-fluid">
                    </div>
                </b-col>
                <b-col md="6" lg="5">
                    <div class="l-wrap">
                        <div class="l-wrap__header d-flex align-items-center">
                            <img src="../../../../public/img/icons/logo.png" alt="logo" width="80" height="80">
                            <h2 class="text-primary">iTeacher <b class="divider bg-primary"></b> 短信验证</h2>
                        </div>
                        <div class="l-wrap__body">
                            <b-form-group
                                    id=""
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    :state="state"
                            >
                                <b-form-input
                                        id=""
                                        v-model="name"
                                        :state="state"
                                        placeholder="请输入姓名"
                                        class="form-outline rounded-0" />
                            </b-form-group>
                            <b-form-group
                            id=""
                            :invalid-feedback="invalidFeedback"
                            :valid-feedback="validFeedback"
                            :state="state"
                            >
                                <b-form-input
                                        id=""
                                        v-model="name"
                                        :state="state"
                                        placeholder="请输入手机号"
                                        class="form-outline rounded-0" />
                            </b-form-group>
                            <b-form-group
                            id=""
                            :invalid-feedback="invalidFeedback"
                            :valid-feedback="validFeedback"
                            :state="state">
                                <b-input-group>
                                    <b-form-input
                                            id=""
                                            v-model="name"
                                            :state="state"
                                            placeholder="请输入验证码"
                                            class="form-outline rounded-0" />
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
                                    type="text"
                                    :state="state"
                                    placeholder="请输入密码，6-8位至少含数字/字母2种组合"
                                    class="form-outline rounded-0" />
                                    <i class="clear-btn d-block position-absolute">
                                        <closeCycle/>
                                    </i>
                            </b-form-group>

                            <b-form-group>
                                <b-button type="submit" variant="primary btn-block rounded-pill">确定</b-button>
                            </b-form-group>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import closeCycle from '../../../../public/svg/close_cycle.svg';

export default {
    name: 'SmsVerification',
    components: {
        closeCycle,
    },
    data: () => ({
        name: null,
        invalidFeedback: null,
        validFeedback: null,
        state: null,
    })
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