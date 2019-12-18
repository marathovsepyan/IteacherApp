<template>
    <header class="topnavbar-wrapper">
        <nav class="navbar topnavbar">

        </nav>
    </header>
</template>

<script>

    export default {
        name: 'Header',
        components: {
        },
        props: {
            hasSideMenu: Boolean
        },
        data() {
            return {
                menuList: [],
                userRole: 'student',
            };
        },
        created() {

        },
        mounted() {
            const userRole = this.$store.getters.getRole;
            this.userRole = userRole;

            if (userRole === 'student'){
                this.menuList = [
                    {name: '首页', link: '/home' },
                    {name: '课程', link: '/course' },
                    {name: '作业', link: '/homework' },
                    {name: '收藏本', link: '/collection' },
                    {name: '课外阅读', link: '/extracourse' }
                ];

                this.checkMessageStatus();
                this.intervalID = setInterval(this.checkMessageStatus, 10000);
            } else if (userRole === 'guest'){
                this.menuList = [
                    {name: '首页', link: '/home' },
                    {name: '课外阅读', link: '/extracourse' }
                ];
            }
        },
        methods: {
        },
    };
<style>
</style>
