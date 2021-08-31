<!--
 * @Author: 莫靓仔
 * @description: 文件描述
 * @Date: 2021-08-13 16:27:54
 * @LastEditors: 莫靓仔
 * @LastEditTime: 2021-08-30 16:21:00
-->
<template>
    <div class="tinymce-editor">
        <input type="file" id="input123" />
        <editor v-model="myValue" :init="init" :disabled="disabled" @onClick="onClick"></editor>
    </div>
</template>
<script>
import tinymce from 'tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/icons/default'
import 'tinymce/themes/silver'
import 'tinymce/skins/ui/oxide/skin.css'

import 'tinymce/plugins/paste'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/media'
import 'tinymce/plugins/image'
import 'tinymce/plugins/imagetools' // 图片工具
// import '/public/tinymce/plugins/lineheight'
// import '@/assets/tinymce/plugins/lineheight'
// import "@/assets/tinymce/langs/zh_CN.js";
// import "tinymce/themes/silver/theme";
// import "tinymce/themes/mobile/theme";
// import "tinymce/skins/ui/oxide/skin.min.css";
export default {
    components: {
        Editor
    },
    props: {
        value: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        plugins: {
            type: [String, Array],
            default: 'link lists image imagetools code table wordcount advlist charmap media image'
        },
        toolbar: {
            type: [String, Array],
            default:
                'undo redo bold italic underline strikethrough fontsizeselect fontselect forecolor backcolor  alignleft aligncenter alignright alignjustify lineheight bullist numlist outdent indent link unlink image media charmap'
        }
    },
    data() {
        return {
            init: {
                language_url: '/tinymce/lang/zh_CN.js', //如果语言包不存在，指定一个语言包路径
                language: 'zh_CN', //语言
                // skin_url: '/public/tinymce/skins/ui/oxide', //如果主题不存在，指定一个主题路径
                // content_css: '/public/tinymce/mycontent.css',
                height: '500px',
                width: '100%',
                plugins: this.plugins, //插件
                toolbar: this.toolbar, //工具栏
                // toolbar: [
                //     'template paste undo redo visualaid bold italic underline strikethrough alignleft aligncenter alignright alignjustify alignnone formatselect fontsizeselect fontselect outdent indent removeformat subscript superscript insert hr bullist numlist link unlink openlink image charmap preview anchor searchreplace code visualblocks help fullscreen media nonbreaking table forecolor backcolor wordcount quickimage editimage lineheight'
                // ],
                branding: false, //技术支持(Powered by Tiny || 由Tiny驱动)
                menubar: false, //菜单栏
                statusbar: false,
                // theme: 'silver', //主题
                image_advtab: true,
                // images_upload_handler(blobInfo, success, failure) {
                //     console.log(blobInfo, success, failure)
                //     success('成功')
                // },
                file_picker_callback: this.upload,
                setup: function(tinymce) {
                    console.log('Editor: ' + tinymce.Editor + ' is now initialized.')
                },
                fontsize_formats:
                    '10px 11px 12px 13px 14px 15px 16px 17px 18px 20px 22px 24px 26px 28px 30px 32px 34px',
                lineheight_formats: '1 1.5 1.6 1.75 1.8 2 3 4 5 14px 15px 16px 18px 20px 22px 24px 26px 28px 30px 32px',
                zIndex: 1101,
                // media_live_embeds: false,
                video_template_callback: function(data) {
                    return (
                        '<video width="' +
                        data.width +
                        '" height="' +
                        data.height +
                        '"' +
                        (data.poster ? ' poster="' + data.poster + '"' : '') +
                        ' controls="controls">\n' +
                        '<source src="' +
                        data.source +
                        '"' +
                        (data.sourcemime ? ' type="' + data.sourcemime + '"' : '') +
                        ' />\n' +
                        (data.altsource
                            ? '<source src="' +
                              data.altsource +
                              '"' +
                              (data.altsourcemime ? ' type="' + data.altsourcemime + '"' : '') +
                              ' />\n'
                            : '') +
                        '</video>'
                    )
                }
            },
            myValue: this.value
        }
    },
    mounted() {
        tinymce.init({})
        // tinymce.activeEditor.execCommand('ApplyOrderedListStyle', false, {
        //     'list-style-type': 'disc'
        // })
        // tinymce.activeEditor.execCommand('ApplyUnorderedListStyle', false, {
        //     'list-style-type': 'decimal'
        // })
    },
    methods: {
        calcWidth() {
            return document.body.clientWidth / 2 + 'px'
        },
        onClick() {},
        upload(callback, value, meta) {
            let input = document.querySelector('#input123')
            input.click()
            console.log(value)
        }
    },
    watch: {
        value(newValue) {
            this.myValue = newValue
        },
        myValue(newValue) {
            this.$emit('input', newValue)
        }
    }
}
</script>
