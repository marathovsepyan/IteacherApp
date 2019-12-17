<template>
        <div class="wrapper">

            <Header :hasSideMenu="isTeacher ? true : false"/>

            <div class="aside-box">                    
                <Sidebar v-if="isTeacher"/>
            </div>

            <!-- sideMenu-->
            <div class="dash-content">
                <!-- Main section-->
                <section class="section-container" >
                    <router-view/>
                </section>
            </div>
                    
        </div>
    <!-- </div> -->
</template>

<script>
    import Vue from 'vue';
    import Header from './Header'
    import Sidebar from './Sidebar'
    import Footer from './Footer'

    export default {
        name: 'Layout',
        components: {
            Header,
            Sidebar,
            Footer
        },
        data(){
            return {
                isTeacher: true
            }
        }, 
        created(){
            // let role = this.$store.getters.getRole;
            // if(role == 'admin' || role == 'teacher') this.isTeacher = true;
            // else this.isTeacher = false;
        }
    }
</script>
<style>
    .wrapper {
        /* background-color: #F3F3F3;    */
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
    }
    .wrapper .section-container.tea{
        margin-left: 201px;
        height: calc(100% - 60px);
        margin-bottom: 0px!important;
        position: absolute;
        width: calc(100% - 201px)
    }
    .wrapper .section-container.std{
        margin-left: 0px!important;
    }
    .wrapper .section-container .content-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 30px 30px 48px 30px;
        background-color: #FFFFFF;
        height: 100%;
        overflow-x: auto;
    }
    .wrapper .section-container .content-wrapper .table-pagination {
        margin-top: auto;
    }
    .wrapper .section-container.std .content-wrapper{
        padding: 12px 40px;
    }
    .wrapper.muted{
        overflow: hidden;
        height: 100%;
    }
    
    .wrapper .section-container .unwrap{
        margin: -32px -40px;
    }
</style>
