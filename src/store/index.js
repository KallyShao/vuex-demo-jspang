/*
* @Author: Administrator
* @Date:   2018-11-08 09:42:53
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-08 09:51:49
*/
import Vue from 'vue'
import vuex from 'vuex';
import dialog_store from './dialog_store';

Vue.use(vuex);

let store = new vuex.Store({
    modules: {
        dialog: dialog_store
    }
});

export default store;