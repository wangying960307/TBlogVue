import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0,
        shoppingList: [],
        message: null,
        user: null
    },
    mutations: {
        setUser(state, user){
            state.user = user
        },

        addShopping (state, shop) {
            state.shoppingList.push(shop)
        },

        delShopping (state, index) {
            state.shoppingList.splice(index,1)
        },

        viewMessage(state, message){
            state.message = message
        }
    }
})
