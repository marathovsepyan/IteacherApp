<template>
    <div class="operation-panel">
        <b-row>
            <b-col cols="7">
                <div class="card p-3">
                    <div class="card__header pb-3 border-btm">
                        <b-row class="justify-content-center m-0">
                            <h4 class="m-0 text-md mr-auto">详情</h4>
                            <div class="text-sm">总分：<span class="text-warning">80分</span></div>
                        </b-row>
                    </div>
                    <div class="card__body">
                        <b-row class="align-items-center m-0 pt-3 pb-3 border-btm">
                            <div class="text-sm mr-auto">what is your duty in school</div>
                            <span class="text-sm text-warning mr-1">80分</span>
                            <ArrowRightLg class="icon-md" />
                        </b-row>
                        <b-row class="align-items-center m-0 pt-3 pb-3 border-btm">
                            <div class="text-sm mr-auto">what is your duty in school</div>
                            <span class="text-sm text-warning mr-1">80分</span>
                            <ArrowRightLg class="icon-md" />
                        </b-row>
                        <b-row class="align-items-center m-0 pt-3 pb-3 border-btm">
                            <div class="text-sm mr-auto">what is your duty in school</div>
                            <span class="text-sm text-warning mr-1">80分</span>
                            <ArrowRightLg class="icon-md" />
                        </b-row>
                        <b-row class="align-items-center m-0 pt-3 pb-3 border-btm">
                            <div class="text-sm mr-auto">what is your duty in school</div>
                            <span class="text-sm text-warning mr-1">80分</span>
                            <ArrowRightLg class="icon-md" />
                        </b-row>
                    </div>
                </div>
            </b-col>
            <b-col cols="5">
                <div class="card p-3">
                    <div class="card__header pb-3">
                        <b-row class="justify-content-center align-items-start m-0">
                            <h4 class="m-0 text-lg text-center mr-auto">what is your duty in school？ <br> 你好？</h4>
                            <b-button variant="outline-secondary btn-sm">翻译</b-button>
                        </b-row>
                    </div>
                    <div class="card__body d-flex flex-wrap">
                        <div class="s-block">
                            <span>单词</span>
                            <div class="status text-warning">of</div>
                        </div>
                        <div class="s-block">
                            <span>单词</span>
                            <div class="status"><CheckedIcon /></div>
                        </div>
                        <div class="s-block">
                            <span>单词</span>
                            <div class="status"><CloseIcon /></div>
                        </div>
                        <div class="s-block">
                            <span>单词</span>
                            <div class="status"><PlaySelfIcon /></div>
                        </div>
                        <div class="s-block">
                            <span>单词</span>
                            <div class="status"><PlayStandartfIcon /></div>
                        </div>
                        <div class="s-block">
                            <span>单词</span>
                            <div class="status text-warning">of</div>
                        </div>
                        <div class="s-block">
                            <span>单词</span>
                            <div class="status"><PlayStandartfIcon /></div>
                        </div>
                        <div class="s-block">
                            <span>单词</span>
                            <div class="status"><PlayStandartfIcon /></div>
                        </div>
                        <div class="s-block">
                            <span>单词</span>
                            <div class="status"><PlayStandartfIcon /></div>
                        </div>
                        <div class="s-block">
                            <span>单词</span>
                            <div class="status"><PlayStandartfIcon /></div>
                        </div>
                        <div class="s-block">
                            <span>单词</span>
                            <div class="status"><PlayStandartfIcon /></div>
                        </div>
                    </div>
                    <div class="card__footer p-3">
                        <b-row class="justify-content-center align-items-center">
                            <div class="b-block">
                                <PlayLgIcon />
                                <span class="text-sm">标准音</span>
                            </div>
                            <div class="b-block">
                                <PlaySelfLgIcon />
                                <span class="text-sm">自读音</span>
                            </div>
                        </b-row>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import ArrowRightLg from '../../../../public/svg/arrow-right-lg.svg';
    import CheckedIcon from '../../../../public/svg/checked.svg';
    import CloseIcon from '../../../../public/svg/close.svg';
    import PlaySelfIcon from '../../../../public/svg/play_standart_active.svg';
    import PlayStandartfIcon from '../../../../public/svg/play_standart.svg';
    import PlaySelfLgIcon from '../../../../public/svg/play_self_big.svg';
    import PlayLgIcon from '../../../../public/svg/play_big.svg';

    export default {
        components: {
            ArrowRightLg,
            CheckedIcon,
            CloseIcon,
            PlaySelfIcon,
            PlayStandartfIcon,
            PlaySelfLgIcon,
            PlayLgIcon,
        },
        data: () => ({
        }),
        methods: {
        },
    };
</script>

<style lang="scss">
    .s-block {
        padding: 10px 20px;
        text-align: center;
        .status {
            margin-top: 3px;
            svg {
                width: 18px;
                height: 18px;
            }
        }
    }
    .b-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 5px 15px;
    }
</style>
