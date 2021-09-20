import { createStore } from 'vuex';

const store = createStore({
    state () {
        return {
            fileTypes: {},
            showTypeModal: false,
            showExtensionModal: false
        }
    },
    mutations: {
        setShowTypeModal(state, value) {
            state.showTypeModal = value;
        },
        setShowExtensionModal(state, value) {
            state.showExtensionModal = value;
        },
        setFileTypes(state, value) {
            for (let i in value) {
                let extensions = [];
                for (let j in value[i].extensions) {
                    let ext = value[i].extensions[j];
                    extensions.push({id: ext, ext: ext})
                }
                value[i].extensions = extensions;
            }
            state.fileTypes = value;
        },
        deleteExtension(state, {group, id}) {
            let extensions = state.fileTypes[group].extensions;
            let newExtensions = [];
            for (let i in extensions) {
                let ext = extensions[i];
                if (ext.id != id) {
                    newExtensions.push(ext);
                }
            }
            state.fileTypes[group].extensions = newExtensions;
        },
        deleteType(state, name) {
            delete state.fileTypes[name];
        },
        addType(state, {handle, type}) {
            state.fileTypes[handle] = type;
        },
        addExtension(state, {type, extension}) {
            state.fileTypes[type].extensions.push({
                id: extension,
                ext: extension
            })
        }
    }
});

export {store};