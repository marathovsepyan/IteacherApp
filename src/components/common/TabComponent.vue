<template>
    <!-- <ul class="tabs list-unstyled m-0 d-flex">
        <li class="flex-fill d-flex"><a href="" class="tabs-link active">单词</a></li>
        <li class="flex-fill d-flex"><a href="" class="tabs-link">句子</a></li>
        <li class="flex-fill d-flex"><a href="" class="tabs-link">段落</a></li>
        <li class="flex-fill d-flex"><a href="" class="tabs-link">文章</a></li>
    </ul> -->
    <b-col md="6">
        <ul class="tabs list-unstyled m-0 d-flex">
            <li v-for="(tab, index) in defaultTabs"
                :key="index + 'tab'"
                @click="$emit('click', index)"
                class="flex-fill d-flex">
                <div class="tabs-link"
                    :class="{
                        'tabs-link': !type,
                        'tabs-link-outline':  type === 'outline',
                        'active' : active == index
                    }"
                >{{tab}}</div>
            </li>
        </ul>
    </b-col>
</template>

<script>

export default {
    name: 'TabComponent',
    props: {
        tabs: { type: Array },
        active: { type: Number },
        type: { type: String },
    },
    data: () => ({
        defaultTabs: [ '单词', '句子', '段落', '文章', ]
    }),
    computed: {
        // tabsArr() {
        //     return this.tabs || this.defaultTabs;
        // }
    }
};
</script>

<style lang="scss">
.tabs {
    .tabs-link {
        font-size: 14px;
        font-weight: 400;
        color: #333;
        width: 100%;
        padding: 4px 4px 2px 4px;
        text-align: center;
        border-bottom: 2px solid transparent;
        &.active {
            color: #5C99E1;
            background-color: rgba(238,243,249,1);
            border-color: #5C99E1;
        }
        &:hover {
            color: #5C99E1;
            text-decoration: none;
            border-color: #5C99E1;
        }
    }
}
</style>