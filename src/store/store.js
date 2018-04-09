import Vuex from 'vuex'
import Vue from 'vue'
import movie from './modules/movie'
import more from './modules/more'
import detail from './modules/detail'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        movie,
        more,
        detail
    }
})