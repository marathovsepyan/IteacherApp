<template>
    <ul class="sidebar d-flex flex-column">
        <a href="" class="sidebar__brand">
            <img src="/img/icons/logo.png" alt="logo" width="40" height="40">
            <span class="text-white m-0 ml-2">iTeacher</span>
        </a>
        <li v-for="(menuItem, index) in menuList"
            :key="index + 'menu'"
            class="sidebar-item">
            <router-link :to="menuItem.link" class="sidebar-item__link">
                <img :src="'/img/menuIcons/' + menuItem.icon + '.png'" />{{ menuItem.name }}</router-link>
        </li>
    </ul>
</template>

<script>

    export default {
        name: 'Sidebar',
        data() {
            return {
                menuList: [
                    {icon: 'dashboard', name: '数据面板', link: '/teacher/dashboard'},
                    {icon: 'course', name: '课程', link: '/teacher/courses'},
                    {icon: 'homework', name: '作业', link: '/teacher/homework'},
                    {icon: 'class', name: '班级', link: '/teacher/class'},
                    {icon: 'student', name: '学生', link: '/teacher/student'}
                ],
                activeMenuID: 0,
            };
        },
    };
</script>

<style lang="scss">
.sidebar {
    width: 200px!important;
    min-height: 100vh;
    padding: 10px;
    list-style: none;
    background-color: #2E323F;

    &__brand {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        span {
            font-size:24px;
            font-weight:600;
        }
        &:hover,
        &:focus {
            text-decoration: none;
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
        .router-link-exact-active {
            background-color: #5C99E1;
            color: #fff;
        }
        img {
            width: 16px;
            height: 16px;
            margin-right: 8px;
        }
    }
}
</style>
