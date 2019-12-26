<template>
    <div class="course-panel">
        <div class="pb-4">
            <b-row class="align-items-center">
                <b-col md="8">
                    <custom-navigation :routes="routes"/>
                </b-col>
                <b-col md="4" class="text-right">
                    <b-button variant="primary btn-sm">添加内容</b-button>
                </b-col>
            </b-row>
        </div>
        <div class="panel">
            <div class="panel__header">
                <b-row>
                    <b-col md="6">
                        <tab-component
                            :active="selectedTabId"
                            @click="selectTab"
                        />
                    </b-col>
                </b-row>
            </div>
            <div class="panel__body">
                <div class="audio p-3">
                    <b-row>
                        <b-col md="2">
                            <h4 class="text-muted m-0 text-xs">添加内容</h4>
                        </b-col>
                        <b-col md="10">
                            <div class="audio__header d-flex">
                                <b-button variant="link btn-sm" class="text-muted ml-auto p-0">添加到列表</b-button>
                            </div>
                            <div class="audio__body">
                                <div class="audio-panel mt-5 ml-4 mr-4 mb-3">
                                    <div class="audio-panel__header d-flex justify-content-between">
                                        <b-form-file v-model="file2" v-if="!file2" class="opacity-0 position-absolute" plain></b-form-file>
                                        <b-button v-if="!file2" variant="sm" class="d-flex align-items-center text-muted p-0"><PlayButton class="mr-1"/>添加音频</b-button>
                                        <div v-else class="d-flex align-items-center btn btn-sm text-primary p-0"><PlayButtonPrimary class="mr-1"/> {{ file2 ? file2.name : '' }} <CloseButton class="ml-1"/></div>
                                        <b-button variant="sm" class="text-muted p-0">添加句子</b-button>
                                    </div>
                                    <div class="audio-panel__body">
                                        <b-form-textarea
                                            id="textarea"
                                            class="rounded-0 border-0 text-xs"
                                            v-model="text"
                                            placeholder="Enter something..."
                                            rows="3"
                                        ></b-form-textarea>
                                    </div>
                                </div>
                                <dvi class="audio-row row align-items-center m-0">
                                    <h4 class="text-sm font-weight-normal pl-2 mb-0 mr-auto bd-highlight">
                                        3.2014 New Fashion Novelty Tank Slim Women's Fashion Novelty Tank Slim Women's</h4>
                                    <b-button variant="sm" class="pt-0 pb-0"><PlayButtonPrimary /></b-button>
                                    <b-button variant="sm" class="pt-0 pb-0"><BinButton /></b-button>
                                </dvi>
                                <dvi class="audio-row row align-items-center m-0">
                                    <h4 class="text-sm font-weight-normal pl-2 mb-0 mr-auto bd-highlight">
                                        3.2014 New Fashion Novelty Tank Slim Women's Fashion Novelty Tank Slim Women's</h4>
                                    <b-button variant="sm" class="pt-0 pb-0"><PlayButtonPrimary /></b-button>
                                    <b-button variant="sm" class="pt-0 pb-0"><BinButton /></b-button>
                                </dvi>
                                <dvi class="audio-row row align-items-center m-0">
                                    <h4 class="text-sm font-weight-normal pl-2 mb-0 mr-auto bd-highlight">
                                        3.2014 New Fashion Novelty Tank Slim Women's Fashion Novelty Tank Slim Women's</h4>
                                    <b-button variant="sm" class="pt-0 pb-0"><PlayButtonPrimary /></b-button>
                                    <b-button variant="sm" class="pt-0 pb-0"><BinButton /></b-button>
                                </dvi>
                            </div>
                        </b-col>
                    </b-row>
                </div>
                <div class="audio p-3">
                    <b-row>
                        <b-col md="2">
                            <h4 class="text-muted m-0 text-xs">已添加内容</h4>
                        </b-col>
                        <b-col md="10">
                            <div class="audio__body">
                                <dvi class="audio-row row align-items-center m-0 border-0">
                                    <h4 class="text-sm font-weight-normal pl-2 mb-0 mr-auto bd-highlight">标题</h4>
                                    <b-button variant="sm" class="text-muted pt-0 pb-0">收起句子</b-button>
                                    <b-button variant="sm" class="pt-0 pb-0"><BinButton /></b-button>
                                    <p class="col-12 text-xs m-0 mt-1 pl-2">
                                        完整内完整内容完整内容完整内容完整内容完整内容完整内容完整内容完整内容完
                                        整内容完整内容完整内容完整内容完整内容完整内容完整内容完整内容完整内容完整内容完整内容</p>
                                </dvi>
                                <dvi class="audio-row row align-items-center m-0">
                                    <h4 class="text-sm font-weight-normal pl-2 mb-0 mr-auto bd-highlight">
                                        3.2014 New Fashion Novelty Tank Slim Women's Fashion Novelty Tank Slim Women's</h4>
                                    <b-button variant="sm" class="pt-0 pb-0"><PlayButtonPrimary /></b-button>
                                </dvi>
                                <dvi class="audio-row row align-items-center m-0">
                                    <h4 class="text-sm font-weight-normal pl-2 mb-0 mr-auto bd-highlight">
                                        3.2014 New Fashion Novelty Tank Slim Women's Fashion Novelty Tank Slim Women's</h4>
                                    <b-button variant="sm" class="pt-0 pb-0"><PlayButtonPrimary /></b-button>
                                </dvi>
                                <dvi class="audio-row row align-items-center m-0 border-0">
                                    <h4 class="text-sm font-weight-normal pl-2 mb-0 mr-auto bd-highlight">
                                        3.2014 New Fashion Novelty Tank Slim Women's Fashion Novelty Tank Slim Women's</h4>
                                    <b-button variant="sm" class="pt-0 pb-0"><PlayButtonPrimary /></b-button>
                                </dvi>
                                <dvi class="audio-row row align-items-center m-0">
                                    <h4 class="text-sm font-weight-normal pl-2 mb-0 mr-auto bd-highlight">标题</h4>
                                    <b-button variant="sm" class="text-muted pt-0 pb-0">收起句子</b-button>
                                    <b-button variant="sm" class="pt-0 pb-0"><BinButton /></b-button>
                                    <p class="col-12 text-xs m-0 mt-1 pl-2">
                                        完整内完整内容完整内容完整内容完整内容完整内容完整内容完整内容完整内容完整内容完整内容完整内
                                        容完整内容完整内容完整内容完整内容完整内容完整内容完整内容完整内容</p>
                                </dvi>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </div>
        <div class="content-pagination">
            <pagination
                :currentPage="currentPage"
                :totalPages="12"
                @changePage="changePage" />
        </div>
    </div>
</template>

<script>
import Pagination from '../../../components/common/Pagination';
import TabComponent from '../../../components/common/TabComponent.vue';
import CustomNavigation from '../../../components/common/CustomNavigation.vue';
import PlayButton from '../../../../public/svg/play.svg';
import PlayButtonPrimary from '../../../../public/svg/play_standart.svg';
import BinButton from '../../../../public/svg/bin.svg';
import CloseButton from '../../../../public/svg/close.svg';

export default {
    name: 'EditSentence',
    components: {
        Pagination,
        TabComponent,
        CustomNavigation,
        PlayButton,
        PlayButtonPrimary,
        BinButton,
        CloseButton,
    },
    data: () => ({
        routes: [{name: '班级'}, {name: '学习课程情况'}],
        selectedTabId: 0,
        file2: null,
    }),
    methods: {
        selectTab(index){
            this.selectedTabID = index;
            // this.currentPage = 0;
            // this.fliterPageData();
        },
    },
};
</script>

<style lang="scss">
.course-panel {
    .panel {
        &__header {
            .tabs {
                &-link {
                    font-size: 12px;
                    color: #666666;
                    padding: 9px 4px;
                    margin-bottom: -1px;
                    &.active {
                        color: #5C99E1;
                        background-color: transparent;
                    }
                }
            }
        }
        &__body {}
    }
}

.audio {
    border-bottom: 1px solid #dcdee3;
    &__header {
        background-color: #EBECF0;
        padding: 10px 12px;
    }

    &__body {
        .audio-panel {
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
            &__header {
                background-color: #EBECF0;
                padding: 10px 12px;
                position: relative;
                .form-control-file {
                    left: 0;
                    top: 0;
                    max-width: 120px;
                    height: 100%;
                }
            }
        }
        .audio-row {
            padding: 10px 0;
            c
            &:last-child {
                border: none;
            }
        }
    }
    &:last-child {
        border: none;
    }
}
</style>
