<template>
    <div class="search-input">
        <input
                :type="type"
                :value="value"
                :maxlength="maxlength"
                @input="$emit('input', $event.target.value)"
                :placeholder="placeholder">
        <div class="icon-container">
            <search class="icon"/>
        </div>
    </div>
</template>

<script>
import Search from "../../../public/svg/search_white.svg";

export default {
    name: 'CustomSearch',
    props: ["value", "type", "placeholder", "name", "maxlength"],
    components: {
        Search,
    },
};
</script>

<style lang="scss" scoped>
    .search-input {
        border: 2px solid #5584FF;
        border-radius: 3px;
        background: transparent;
        position: relative;
        height: 28px;
        display: flex;
        align-items: center;
        font-family:Helvetica;
        .icon-container {
            height: 28px;
            width: 42px;
            background-color: #5584FF;
            .icon {
                height: 16px;
                width: 16px;
                margin: 6px 13px;
            }
        }
        input {
            z-index: 2;
            width: 100%;
            height: 100%;
            border: 0px solid transparent;
            background-color: #ffffff;
            padding-left: 8px;
            background-color: transparent;
            font-size: 12px;
            font-family: Helvetica;
            color: rgba(153,153,153,1);
            line-height: 14px;
            ::placeholder {
                color: #999999;
                font-size: 12px;
                line-height: 14px
            }
        }
        input:focus {
            border: 1px solid #51a3f3;
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
</style>
