<template>
    <div>
        <div class="buttons">
            <button type="submit" class="btn submit" @click.prevent="setShowTypeModal(true)">New type</button>
            <button type="submit" class="btn submit" @click.prevent="setShowExtensionModal(true)">New extension</button>
        </div>
        <div class="list flex">
            <div class="type" v-for="type, name in types" v-bind:key="name">
                <input type="hidden" :name="'settings[fileTypes][' + name + '][label]'" :value="type.label">
                <input v-for="ext in type.extensions" v-bind:key="ext.ext" type="hidden" :name="'settings[fileTypes][' + name + '][extensions][]'" :value="ext.ext">
                <h3>{{ type.label }} <a v-if="type.extensions.length == 0" title="Delete" class="delete icon" @click.prevent="confirmAndDeleteType(name)"></a></h3>
                <draggable
                    :list="type.extensions"
                    group="extensions"
                    itemKey="'id'"
                    :class="'extensions text ' + (type.extensions.length == 0 ? 'error' : '')"
                >
                    <template #item="{element}">
                        <div class="extension">
                            {{ element.ext }}
                            <a title="Delete" class="delete icon" @click.prevent="confirmAndDeleteExtension(name, element.id)"></a>
                        </div>
                    </template>
                </draggable>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    computed: {
        types: function () {
            return Object.keys(this.fileTypes).sort().reduce(
                (obj, key) => { 
                    obj[key] = this.fileTypes[key]; 
                    return obj;
                },
                {}
            );
        },
        ...mapState(['fileTypes'])
    },
    props: {
        originalFileTypes: Object
    },
    created () {
        this.setFileTypes(this.originalFileTypes);
    },
    mounted() {
        let _this = this;
        $('#main-form').submit(function (e) {
            for (let i in _this.fileTypes) {
                if (_this.fileTypes[i].extensions.length == 0) {
                    e.preventDefault();
                }
            }
        });
    },
    methods: {
        rawExtensions: function (extensions) {
            return extensions.map((obj) => {
                return obj.ext;
            });
        },
        confirmAndDeleteExtension: function (group, id) {
            if (confirm(this.t('Delete this extension ?'))) {
                this.deleteExtension({group: group, id: id});
            }
        },
        confirmAndDeleteType: function (name) {
            if (confirm(this.t('Delete this type ?'))) {
                this.deleteType(name);
            }
        },
        ...mapMutations(['setFileTypes', 'deleteExtension', 'setShowTypeModal', 'setShowExtensionModal', 'deleteType']),
    }
};
</script>

<style lang="scss" scoped>
    @import "~craftcms-sass/mixins";

    .type {
        width: calc(33% - 7px);
    }
    .extensions {
        height: 200px;
        overflow-y: auto;
    }
    .extension {
        background: $grey100;
        margin-right: 5px;
        border-radius: 3px;
        padding: 5px 7px;
        margin-bottom: 5px;
        float:left;
    }
    .delete:before {
        margin-top: -5px;
    }
    h3 {
        margin-bottom: 0;
    }
    @media all and (max-width: 600px) {
        .type {
            width: calc(100% - 7px);
        }
    }
</style>
