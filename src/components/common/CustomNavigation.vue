<template>
    <div class="card__nav">
        <ul class="d-flex list-unstyled m-0">
            <li><router-link to="">班级</router-link></li>
            <li><ArrowRight/></li>
            <li><router-link to="">学习课程情况</router-link></li>
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
      routes: { type: Array, },
    },
};
</script>

<style lang="scss">
.card__nav {
    font-size: 10px;
    font-weight: 400;
    position: absolute;
    left: 20px;
    top: 20px;
    ul {
        li {
            a {
                color: #333;
                padding: 0 5px;
            }
        }
    }
}
</style>