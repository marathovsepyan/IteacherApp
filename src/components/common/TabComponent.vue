<template>
    <ul class="tabs list-unstyled m-0 d-flex">
        <li v-for="(tab, index) in tabsArr"
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
        tabsArr() {
            return this.tabs || this.defaultTabs;
        }
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
        margin-bottom: -1px;
        text-align: center;
        border-bottom: 2px solid transparent;
        cursor: pointer;
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
    &.no-wrap {
        .tabs-link {
            padding: 4px 30px 2px 30px;
        }
    }
    &.no-bg {
        .tabs-link {
            &.active {
                background-color: transparent;
            }
        }
    }
    &.no-border {
        .tabs-link {
            &.active {
                border-color: transparent;
            }
            &:hover {
                border-color: transparent;
            }
        }
    }
}
</style>