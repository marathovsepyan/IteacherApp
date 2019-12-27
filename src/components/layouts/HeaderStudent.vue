<template>
    <header>
        <b-navbar toggleable="md" type="light" variant="white" class="home-navbar">
            <b-container>
                <b-navbar-brand href="#">
                    <img src="/img/icons/logo.png" alt="logo" width="40" height="40">
                    <span class="m-0 ml-2">iTeacher</span>
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="flex-grow-1">
                        <b-nav-item href="#" class="flex-fill">首页</b-nav-item>
                        <b-nav-item href="#" class="flex-fill">课程</b-nav-item>
                        <b-nav-item href="#" class="flex-fill">作业</b-nav-item>
                        <b-nav-item href="#" class="flex-fill">收藏本</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-input-group>
                                <b-button variant="outline" class="position-absolute"><SearchIcon /></b-button>
                                <b-form-input type="text" placeholder="扬州事故"/>
                            </b-input-group>
                        </b-nav-form>
                        <b-nav-item href="#" class="position-relative">
                            <BellIcon />
                            <span class="not-oval">9</span>
                        </b-nav-item>
                        <b-nav-item href="#">
                            <div class="user-img rounded-circle overflow-hidden">
                                <img src="../../../public/img/user/01.jpg" alt="user-image" width="26" height="26">
                            </div>
                            <span>王明</span>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </header>
</template>

<script>
    import BellIcon from '../../../public/svg/bell_regular.svg';
    import SearchIcon from '../../../public/svg/search.svg';

    export default {
        components: {
            BellIcon,
            SearchIcon,
        },
    };
</script>

<style lang="scss">
    .home-navbar {
        padding: 10px 1rem;
        .navbar-brand {
            padding: 0;
            margin-right: 40px;
            font-size: 24px;
            font-weight: 600;
            span {
                vertical-align: middle;
            }
        }
        .navbar-nav {
            .nav-item {
                .nav-link {
                    font-size: 16px;
                    justify-content: center;
                    .not-oval {
                        display: block;
                        font-size: 10px;
                        font-weight: 400;
                        width: 13px;
                        height: 13px;
                        line-height: 13px;
                        text-align: center;
                        background-color:#ff4646;
                        color: #fff;
                        border-radius: 9px;
                        position: absolute;
                        right: 15px;
                        top: 1px;
                    }
                }
                &:last-child {
                    .nav-link {
                        padding-right: 20px;
                    }
                }
            }
            .form-inline {
                .input-group {
                    .btn-outline {
                        z-index: 99;
                        padding: 0;
                        height: 100%;
                        top: 0;
                        left: 7px;
                        svg {
                            min-width: auto;
                            min-height: auto;
                            width: 16px !important;
                            height: 16px !important;
                        }
                    }
                    .form-control {
                        font-size: 12px;
                        height: 26px;
                        padding: 4px 8px 4px 30px;
                        border-radius: 10rem;
                        border: 1px solid #333;
                    }
                }
            }
        }
    }
</style>