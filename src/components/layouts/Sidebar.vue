<template>
    <!-- <aside class="aside-container">
        <div class="aside-inner">
            <nav class="sidebar" data-sidebar-anyclick-close="">
                <ul class="sidebar-nav">
                    <li v-for="(menuItem, index) in menuList" :key="index" @click="activeMenuID = index">
                        <router-link :to="menuItem.link" class="d-flex align-items-center fn-14 menu_item"
                                     :class="activeMenuID === index ? 'active' : ''">
                            <img :src="menuItem.icon + '.png'" alt="" class="icon-width-16 mr-2">
                            <div>{{menuItem.name}}</div>
                            <div v-if="menuItem.name === '学生' && isWaitingStd" class="ml-1"
                                 style="width: 12px; height: 12px; border-radius: 50%; background-color: red"></div>
                        </router-link>

                    </li>
                </ul>
            </nav>
        </div>
    </aside> -->
    <ul class="sidebar d-flex flex-column">
        <a href="" class="sidebar__brand">
            <img src="../../../public/img/icons/logo.png" alt="logo" width="40" height="40">
            <span class="text-white m-0 ml-2">iTeacher</span>
        </a>
        <li v-for="(menuItem, index) in menuList"
            :key="index + 'menu'"
            class="sidebar-item"
            :class="{'active': activeMenuID === index}">
            <router-link :to="menuItem.link" class="sidebar-item__link">{{ menuItem.name }}</router-link>
        </li>
    </ul>
</template>

<script>

    export default {
        name: 'Sidebar',
        data() {
            return {
                menuList: [
                    {icon: 'img/menuIcons/dashboard', name: '数据面板', link: '/teacher/dashboard'},
                    {icon: 'img/menuIcons/course', name: '课程', link: '/teacher/courses'},
                    // {icon: 'img/menuIcons/book', name: '教材库', link: '/teacher/books' },
                    {icon: 'img/menuIcons/homework', name: '作业', link: '/teacher/homeworks'},
                    {icon: 'img/menuIcons/class', name: '班级', link: '/teacher/class'},
                    {icon: 'img/menuIcons/student', name: '学生', link: '/teacher/student'}
                ],
                activeMenuID: 0,
            };
        },
        watch:{
            $route: function(val){
                console.log(val);
                this.setCurrentMenu();
            }
        },
        methods: {
            setCurrentMenu() {
                let currentPath = this.$route.path;
                for (let index in this.menuList){
                    if (this.menuList.hasOwnProperty(index)) {
                        let link = this.menuList[index].link;
                        if (currentPath.indexOf(link) === 0){
                            this.activeMenuID = index;
                            break;
                        }
                    }
                }
            },
        }
    };
</script>

<style lang="scss">
.sidebar {
    width: 200px!important;
    min-height: 100vh;
    padding: 10px;
    list-style: none;
    //background-color: $sidebar;
    background-color: #2E323F;

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
</style>
