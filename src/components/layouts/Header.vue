<template>
    <b-navbar toggleable="lg" type="light" variant="white">
        <b-navbar-nav class="ml-auto">
            <b-nav-item>
                <div class="user-img rounded-circle overflow-hidden">
                    <img src="../../../public/img/user/01.jpg" alt="user-image" width="26" height="26">
                </div>
                <span>王明</span>
            </b-nav-item>
            <b-nav-item @click="logOut">
                <span>退出</span>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
import { mapActions, mapGetters, } from 'vuex';

export default {
    name: 'Header',
    components: {
    },
    props: {
        hasSideMenu: Boolean
    },
    data:() => ({
        menuList: [],
        userRole: 'student',
    }),
    computed: {
        ...mapGetters({
            role: 'role',
        })
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
        ...mapActions({
            signOut: 'LOGOUT'
        }),
        logOut() {
            const redirectionSubPath = this.role === 'teacher' ? '/teacher' : '';
            this.signOut();
            this.$router.push({ path: `${redirectionSubPath}/login` });
        },
    },
};
</script>

<style lang="scss">
    .navbar {
        padding: 18px 30px;
        .nav-item {
            .nav-link {
                font-size: 14px;
                font-weight: 600;
                display: flex;
                align-items: center;
                height: 100%;
                color: #333;
                padding: 0 20px;
                .user-img {
                    width: 26px;
                    height: 26px;
                    margin-right: 8px;
                }
                &:hover,
                &:focus {
                    color: #0069d9;
                }
            }
            &:last-child {
                .nav-link {
                    padding-right: 0;
                }
            }
        }
    }
</style>