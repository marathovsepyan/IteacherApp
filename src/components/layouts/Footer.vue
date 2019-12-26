<template>
    <footer class="h-footer">
        <b-container>
            <b-row class="justify-content-between">
                <b-col cols="6">
                    <ul class="h-footer__nav list-unstyled text-xs d-flex">
                        <li><a href="#" class="text-white pl-0">首页</a></li>
                        <li><a href="#" class="text-white">课程</a></li>
                        <li><a href="#" class="text-white">作业</a></li>
                        <li><a href="#" class="text-white">收藏本</a></li>
                        <li><a href="#" class="text-white">隐私协议</a></li>
                        <li><a href="#" class="text-white">用户协议</a></li>
                    </ul>
                    <p class="text-xs text-white mb-0">Copyright ©2019 Shenzhen Kanqi Information CO.,LTD</p>
                    <p class="text-xs text-white mb-0">All Rights Reserved.粤ICP备19069277号</p>
                </b-col>
                <b-col cols="3" class="ml-auto">
                    <ul class="h-footer__contact list-unstyled text-white text-xs m-0">
                        <li>电话：0945-34232534</li>
                        <li>服务邮箱：<a href="mailto:iteacher@kanqi.info" class="text-white">iteacher@kanqi.info</a></li>
                        <li>服务时间：10:30～19:30</li>
                    </ul>
                </b-col>
                <b-col cols="3">
                    <div class="h-footer__download d-flex justify-content-end align-items-center">
                        <h4 class="text-xs text-white m-0 pr-3">扫码下载app</h4>
                        <img src="../../../public/img/icons/qrcode.png" alt="qrcode" width="80" height="80">
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {

            };
        }
    };
</script>

<style lang="scss">
    .h-footer {
        padding: 22px 0;
        background-color: #5C99E1;
        a:hover {
            text-decoration: underline;
        }
        &__nav {
            a {
                padding: 0 12px;
            }
        }
        &__contact {
            li {
                margin-bottom: 12px;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>
