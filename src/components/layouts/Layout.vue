<template>
    <div id="wrapper" class="wrapper d-flex">
        <Sidebar v-if="isTeacher"/>

        <div id="content-wrapper" class="content-wrapper d-flex flex-column">
            <Header :hasSideMenu="isTeacher"/>
            <b-container fluid class="content">
                <router-view />
            </b-container>
            <Footer v-if="!isTeacher"/>
        </div>
    </div>
</template>

<script>
    import Header from './Header';
    import Sidebar from './Sidebar';
    import Footer from './Footer';
    import { mapGetters } from 'vuex';

    export default {
        name: 'Layout',
        components: {
            Header,
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