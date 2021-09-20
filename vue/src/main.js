import { createApp } from 'vue'
import FileTypes from './components/FileTypes.vue';
import TypeModal from './components/TypeModal.vue';
import ExtensionModal from './components/ExtensionModal.vue';
import { store } from './stores/store.js';
import Draggable from 'vuedraggable';

const app = createApp({
    components: {
        FileTypes
    }
});
app.use(store);
app.component('draggable', Draggable);
app.component('type-modal', TypeModal);
app.component('extension-modal', ExtensionModal);

const Translate = {
    install(app) {
        app.config.globalProperties.t = (str, params) => {
            return window.Craft.t('file-types', str, params);
        }
    },
}
app.use(Translate);

app.mount('#content');
