/*
* @Author: Administrator
* @Date:   2018-11-08 09:49:53
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-08 10:04:26
*/
export default {
    state: {
        show: false
    },
    getters: {
        not_show() {
            return !state.show;
        }
    },
    mutations: {
        switch_dialog(state){
            state.show = state.show ? false : true;
        }
    },
    actions: {
        switchDialog(context){
            context.commit('switch_dialog')
        }
    }
}