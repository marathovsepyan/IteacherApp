<template>
    <aside class="aside-container">
        <div class="aside-inner">
            <nav class="sidebar" data-sidebar-anyclick-close="">
                <ul class="sidebar-nav">
                    <li v-for="(menuItem, index) in menuList" :key="index" @click="activeMenuID = index">
                        <router-link :to="menuItem.link" class="d-flex align-items-center fn-14 menu_item" :class="activeMenuID == index ? 'active' : ''">
                            <img :src="menuItem.icon + '.png'" alt="" class="icon-width-16 mr-2">
                            <div>{{menuItem.name}}</div>
                            <div v-if="menuItem.name == '学生' && isWaitingStd" class="ml-1" style="width: 12px; height: 12px; border-radius: 50%; background-color: red"></div>
                        </router-link>
                        
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>

    export default {
        name: 'Sidebar',
        data() {
            return {
                menuList: [],
                activeMenuID: 0,

                tRole: null,
                timerID: null,
                isWaitingStd: false
            }
        },
        mounted() {
            // this.menuList = [
            //     {icon: 'img/menuIcons/dashboard',   name: '数据面板',   link: '/teacher/dashboard'},
            //     {icon: 'img/menuIcons/course',      name: '课程',       link: '/teacher/course'},
            //     // {icon: 'img/menuIcons/book',        name: '教材库',     link: '/teacher/books' },
            //     {icon: 'img/menuIcons/homework',    name: '作业',       link: '/teacher/homework'},
            //     {icon: 'img/menuIcons/class',       name: '班级',       link: '/teacher/class'},
            //     {icon: 'img/menuIcons/student',     name: '学生',       link: '/teacher/student'}
            // ];
        },
        watch:{
            $route: function(val){ this.setCurrentMenu(); }
        },
        methods: {
            setCurrentMenu(){
                let cur_path = this.$route.path;
                for(var index in this.menuList){
                    let link = this.menuList[index].link;
                    if(cur_path.indexOf(link) == 0){
                        this.activeMenuID = index;
                        break;
                    }
                }
            },
        }
    }
</script>
<style>
    .wrapper .aside-container,
    .wrapper .aside-container .aside-inner{
        width: 201px!important;
        background-color: #2E323F;
    }
    .wrapper .aside-container .aside-inner .sidebar{
        padding-right: 10px;
        background-color: #2E323F;
        padding-left: 10px;
    }
    .wrapper .aside-container .icon-width-16{
        width: 16px;
    }
    .menu_item{
        color: #9B9B9B!important;
        padding: 14px 0 12px 11px!important
    }
    .menu_item > div {
        font-size: 14px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: rgba(255,255,255,1);
        line-height: 20px;
        -webkit-background-clip: text;
        /* -webkit-text-fill-color: transparent; */
    }
    .menu_item.active{
        color: white!important;
        background-color: #5C99E1;
        border-radius: 3px;
    }
    .wrapper .aside-container .aside-inner{
        padding-top: 65px;
    }
</style>
