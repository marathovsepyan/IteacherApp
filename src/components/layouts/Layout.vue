<template>
    <div id="wrapper" class="wrapper d-flex">
        <Sidebar v-if="isTeacher"/>

        <div id="content-wrapper" class="content-wrapper d-flex flex-column">
            <Header :hasSideMenu="isTeacher"/>
            <b-container fluid class="content">
                <router-view />
            </b-container>
        </div>

        <Footer v-if="!isTeacher"/>
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
    .sidebar {
        width: 200px!important;
        min-height: 100vh;
        padding: 10px;
        list-style: none;
        //background-color: $sidebar;
        background-color: #2E323F;
        position: fixed;
        top: 0;
        left: 0;

        &__brand {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            span {
                font-size:24px;
                font-weight:600;
            }
        }
        .sidebar-item {
            &__link {
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: 400;
                padding: 11px;
                color: #fff;
                border-radius: 0.25rem;
                &:hover,
                &:focus {
                    color: #fff;
                    text-decoration: none;
                }
                .sidebar-link-icon {
                    display: block;
                    width: 16px;
                    height: 16px;
                    svg {
                        width: 100%;
                        height: 100%;
                    }
                }
                &.active {
                    background-color: #5C99E1;
                }
            }
        }
    }
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