<template>
    <vue-dropzone
            :options="dropzoneOptions"
            :useCustomSlot="true"
            :include-styling="false"
            :destroyDropzone="true"
            :acceptedFileTypes="'.jpg,.png'"
            v-on:vdropzone-thumbnail="thumbnail"
            @vdropzone-complete="complite"
            @vdropzone-removed-file="removed"
            id="customdropzone"
            ref="myVueDropzone">
        <div class="dropzone-custom-content">
            <img src='/img/icons/upload.png' class="upload"/><div>点击或者拖动文件到虚线框内上传</div>
        </div>
    </vue-dropzone>
</template>

<script>
import vueDropzone from "vue2-dropzone";

export default {
    name: 'Dropzone',
    components: {
        vueDropzone
    },
    props: {
        isClickable: Boolean,
    },
    computed: {
        dropzoneOptions() {
            return {
                // dictDefaultMessage: `<img src='/img/icons/upload'/><div>点击或者拖动文件到虚线框内上传</div>`,
                // language : {
                //     dictDefaultMessage: `<img src='/img/icons/upload.png' class="upload"/><div>点击或者拖动文件到虚线框内上传</div>`,
                // },
                previewTemplate: this.template(),
                url: '/',
                maxFilesize: 2, // MB
                maxFiles: 1,
                thumbnailWidth: 140, // px
                thumbnailHeight: 140,
                addRemoveLinks: false,
                autoProcessQueue: false,
                clickable: this.isClickable,
            };
        }
    },
    data() {
        return {
            file: null,
        };
    },
    methods: {
        template() {
            return `<div class="dz-preview dz-file-preview">
            <div class="dz-image">
                <div data-dz-thumbnail-bg></div>
            </div>
            <div class="dz-error-mark">
                <a class="dz-remove" href="javascript:undefined;" data-dz-remove>
                    <img src="/img/icons/del.png"/>
                </a>
            </div>
        </div>
    `;
        },
        thumbnail: function(file) {
            console.log("tumnailll",file);

            let dataUrl = file.dataURL;

            let j, len, ref, thumbnailElement;

            if (file.previewElement) {
                console.log("file.previewElement", file)
                this.file = file;
                file.previewElement.classList.remove("dz-file-preview");
                // defaultMsg = file.previewElement.getElementsByClassName("dropzone-custom-content");
                this.$refs.myVueDropzone.$refs.dropzoneElement.childNodes[0].style.display = 'none';
                ref = file.previewElement.querySelectorAll("[data-dz-thumbnail-bg]");
                for (j = 0, len = ref.length; j < len; j++) {
                    thumbnailElement = ref[j];
                    thumbnailElement.alt = file.name;
                    thumbnailElement.style.backgroundImage = 'url("' + dataUrl + '")';
                    thumbnailElement.style.backgroundRepeat = 'no-repeat';
                }
                return;
            }
        },
        complite(file) {
            console.log("complete", file)

            this.$emit('completed', file);
            // if (file.accepted) {
            // }
        },
        removed() {
            this.$refs.myVueDropzone.$refs.dropzoneElement.childNodes[0].style.display = '';
        },
        someMethod(){
            this.$refs.myVueDropzone.removeFile(this.file);
        },
        removeFiles() {
            this.$refs.myVueDropzone.removeAllFiles(true);
        }
    }
};
</script>

<style>
    #customdropzone {
        border-radius: 3px;
        border: 1px solid rgba(196,198,207,1);
        border-style: dashed;
        background-color: #ffffff;
        font-size: 14px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        line-height: 20px;
        color: #666666;
        /* transition: background-color .2s linear; */
        height: 140px;
        width: 140px;
        text-align: center;
    }
    #customdropzone .dz-message {
        height: 100%;
        width: 100%;
        padding: 25px 7px 40px 7px;
    }

    #customdropzone .dz-message .upload {
        width: 24px;
        margin-bottom: 11px;
    }
    #customdropzone .dz-preview {
        width: 139px;
        display: inline-block
    }
    #customdropzone .dz-preview .dz-image {
        width: 138px;
        height: 138px;
        background-size: 138px 138px;
        background-repeat: no-repeat;
    }
    #customdropzone .dz-preview .dz-image > div {
        width: inherit;
        height: inherit;
        border-radius: 3px;
        background-size: contain;
    }
    #customdropzone .dz-preview .dz-image > img {
        width: 100%;
    }

    #customdropzone .dz-preview .dz-details {
        color: white;
        transition: opacity .2s linear;
        text-align: center;
    }

    #customdropzone .dz-success-mark, .dz-error-mark {
        margin-top: -23px;
        margin-left: auto;
        margin-right: 7px;
    }

    #customdropzone .dz-success-mark, .dz-error-mark, .dz-remove > img {
        /* display: none; */
        width: 15px;
        height: 16px;
    }
</style>