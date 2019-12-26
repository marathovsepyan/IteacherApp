<template>
    <div class="card__nav">
        <ul class="d-flex align-items-center list-unstyled m-0">
            <li v-for="(route, index) in routes"
                :key="index + 'route'">
                <router-link to="">{{ route.name }}</router-link>
                <ArrowRight v-if="routes.length - 1 !== index"/>
            </li>
<!--            <li><ArrowRight/></li>-->
<!--            <li><router-link to="">学习课程情况</router-link></li>-->
        </ul>
    </div>
</template>

<script>
import ArrowRight from '../../../public/svg/arrow-right.svg';

export default {
    name: 'CustomNavigation',
    components: {
        ArrowRight,
    },
    props: {
      routes: { type: Array},
    },
    data: () => ({
        defRoutes: [{name: '班级'}, {name: '学习课程情况'}],
    })
};
</script>

<style lang="scss">
    .card__nav {
        font-size: 10px;
        font-weight: 400;
        ul {
            li {
                a {
                    color: #666;
                    padding: 0 5px;
                }
            }
        }
    }
</style>