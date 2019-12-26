<template>
    <div class="card-wrapper">
        <div class="card">
            <div class="card__header d-flex p-3">
                <custom-navigation :routes="routes" class="mr-auto"/>
                <b-button variant="primary btn-sm">编辑信息</b-button>
            </div>
            <div class="card__body d-flex justify-content-center p-3">
                <div class="prof-settings">
                    <div class="prof-image ml-auto mr-auto">
                        <img src="../../../../public/img/user/01.jpg" alt="" width="70" height="70">
                    </div>
                    <div class="prof-info d-flex">
                        <ul class="list-unstyled text-sm mr-5">
                            <li>姓名：<span>王水</span></li>
                            <li>班级：<span>一年级2班</span></li>
                            <li>电话：<span>185-2338-5637</span></li>
                        </ul>
                        <ul class="list-unstyled text-sm">
                            <li>性别：<span>男</span></li>
                            <li>入学日期：<span>2019年8月20日</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CustomNavigation from '../../../components/common/CustomNavigation.vue';

    export default {
        name: 'Settings',
        components: {
            CustomNavigation,
        },
        data: () => ({
            routes: [{name: '班级'}, {name: '学习课程情况'}],
            selectedTabId: 0,
            file2: null,
        }),
    };
</script>

<style lang="scss">
    .prof-settings {
        .prof-image {
            width: 70px;
            height: 70px;
            overflow: hidden;
            border-radius: 50%;
            margin-bottom: 20px;
        }
        .prof-info {
            ul {
                li {
                    padding: 10px 0;
                }
            }
        }
    }
</style>