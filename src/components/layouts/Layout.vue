<template>
    <div class="body">
        <div id="wrapper" class="wrapper d-flex" v-if="isTeacher">
            <Sidebar v-if="isTeacher"/>
            <div id="content-wrapper" class="content-wrapper d-flex flex-column">
                <Header :hasSideMenu="isTeacher" v-if="isTeacher" />
                <b-container fluid class="content">
                    <router-view />
                </b-container>
            </div>
        </div>
        <div v-if="!isTeacher">
            <HeaderStudent v-if="!isTeacher"/>
            <router-view />
            <Footer v-if="!isTeacher"/>
        </div>
    </div>
</template>

<script>
    import Header from './Header';
    import HeaderStudent from './HeaderStudent';
    import Sidebar from './Sidebar';
    import Footer from './Footer';
    import { mapGetters } from 'vuex';

    export default {
        name: 'Layout',
        components: {
            Header,
            HeaderStudent,
            Sidebar,
            Footer,
        },
        data() {
            return {
            };
        },
        computed: {
            ...mapGetters({
                role: 'role',
            }),
            isTeacher() {
                return this.role === 'teacher';
            }
        },
        created(){
        }
    };
</script>

<style lang="scss">
    .wrapper {
        .content-wrapper {
            width: 100%;
            min-height: 100vh;
            padding-left: 200px;
            .content {
                height: 100%;
                margin-top: 30px;
                padding-right: 30px;
                padding-left: 30px;
            }
        }
    }
</style>