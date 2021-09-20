<template>
    <div class="modal elementselectormodal modal-type" style="display:none" ref="modal">
        <div class="header">
            <h3>{{ t('New file type') }}</h3>
        </div>
        <div class="body">
            <div class="content">
                <form class="main">
                    <div class="field width-100">
                        <div class="heading">
                            <label class="required" for="name">{{ t('Name') }}</label>
                        </div>
                        <div class="input ltr">
                            <input type="text" id="name" :class="{text: true, fullwidth:true, error: nameError}" v-model="name" maxlength="255" required>
                        </div>
                        <ul class="errors" v-if="nameError">
                            <li>{{ nameError }}</li>
                        </ul>
                    </div>
                    <div class="field width-100">
                        <div class="heading">
                            <label class="required" for="handle">{{ t('Handle') }}</label>
                        </div>
                        <div class="input ltr">
                            <input type="text" id="handle" :class="{text: true, fullwidth:true, error: handleError}" v-model="handle" maxlength="255" required>
                        </div>
                        <ul class="errors" v-if="handleError">
                            <li>{{ handleError }}</li>
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
        hasError: function () {
            return this.handleError || this.nameError;
        },
        ...mapState(['showTypeModal', 'fileTypes'])
    },
    data() {
        return {
            popup: null,
            name: '',
            handle: '',
            nameError: false,
            handleError: false,
            handleGenerator: null
        }
    },
    watch: {
        showTypeModal: function () {
            if (this.showTypeModal) {
                if (!this.popup) {
                    this.createModal();
                } else {
                    this.popup.show();
                }
            } else {
                this.popup.hide();
            }
            this.removeErrors();
            this.name = '';
            this.handle = '';
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
            this.handleGenerator = new Craft.HandleGenerator('.modal-type #name', '.modal-type #handle');
        },
        removeErrors() {
            this.nameError = false;
            this.handleError = false;
        },
        closeModal () {
            this.setShowTypeModal(false);
        },
        validateModal: function () {
            this.removeErrors();
            if (!this.name.trim()) {
                this.nameError = this.t('Name is required');
            }
            if (!this.handle.trim()) {
                this.handleError = this.t('Handle is required');
            } else {
                if (!/^[a-zA-Z0-9]+$/.test(this.handle)) {
                    this.handleError = this.t('Handle can only contain alphanumeric characters');
                }
            }
            for (let i in this.fileTypes) {
                if (i == this.handle.trim()) {
                    this.handleError = this.t('This handle is already defined');
                }
            }
        },
        save() {
            this.validateModal();
            if (this.hasError) {
                return;
            }
            this.addType({
                handle: this.handle,
                type: {
                    label: this.name,
                    extensions: []
                }
            });
            this.closeModal();
        },
        ...mapMutations(['addType', 'setShowTypeModal'])
    }
};
</script>