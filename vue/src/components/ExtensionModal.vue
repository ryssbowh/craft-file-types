<template>
    <div class="modal elementselectormodal modal-extension" style="display:none" ref="modal">
        <div class="header">
            <h3>{{ t('New extension') }}</h3>
        </div>
        <div class="body">
            <div class="content">
                <form class="main">
                    <div class="field width-100">
                        <div class="heading">
                            <label class="required" for="extension">{{ t('Extension') }}</label>
                        </div>
                        <div class="input ltr">
                            <input type="text" id="extension" :class="{text: true, fullwidth:true, error: extensionError}" v-model="extension" maxlength="255" required>
                        </div>
                        <ul class="errors" v-if="extensionError">
                            <li>{{ extensionError }}</li>
                        </ul>
                    </div>
                    <div class="field width-100">
                        <div class="heading">
                            <label class="required" for="type">{{ t('Type') }}</label>
                        </div>
                        <div class="input ltr">
                            <div class="select">
                                <select v-model="type" id="type">
                                    <option v-for="type, name in fileTypes" v-bind:key="name" :value="name">{{ type.label }}</option>
                                </select>
                            </div>
                        </div>
                        <ul class="errors" v-if="typeError">
                            <li>{{ typeError }}</li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
        <div class="footer">
            <div class="buttons right">
                <button type="button" class="btn" @click="closeModal">{{ t('Close') }}</button>
                <button type="button" class="btn submit" @click="save">{{ t('Save') }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Modal from '../modal';

export default {
    computed: {
        ...mapState(['showExtensionModal', 'fileTypes'])
    },
    data() {
        return {
            popup: null,
            extension: '',
            type: '',
            extensionError: '',
            typeError: ''
        }
    },
    watch: {
        showExtensionModal: function () {
            if (this.showExtensionModal) {
                if (!this.popup) {
                    this.createModal();
                } else {
                    this.popup.show();
                }
            } else {
                this.popup.hide();
            }
            this.removeErrors();
            this.extension = '';
            this.type = '';
        }
    },
    beforeUnmount () {
        this.popup.destroy();
    },
    methods: {
        createModal: function () {
            this.popup = new Modal(this.$refs.modal, {
                hideOnEsc: false,
                hideOnShadeClick: false
            });
        },
        removeErrors() {
            this.extensionError = '';
            this.typeError = '';
        },
        closeModal () {
            this.setShowExtensionModal(false);
        },
        validateModal: function () {
            this.removeErrors();
            if (!this.extension.trim()) {
                this.extensionError = this.t('Extension is required');
            } else {
                if (!/^[a-zA-Z0-9]+$/.test(this.extension)) {
                    this.extensionError = this.t('Extension can only contain alphanumeric characters');
                }
            }
            if (!this.type.trim()) {
                this.typeError = this.t('Type is required');
            }
            for (let i in this.fileTypes) {
                let extensions = this.fileTypes[i].extensions.map((obj) => {
                    return obj.ext;
                });
                if (extensions.includes(this.extension)) {
                    this.extensionError = this.t('This extension is already defined');
                }
            }
        },
        save() {
            this.validateModal();
            if (this.extensionError || this.typeError) {
                return;
            }
            this.addExtension({
                type: this.type,
                extension: this.extension
            });
            this.closeModal();
        },
        ...mapMutations(['addExtension', 'setShowExtensionModal'])
    }
};
</script>