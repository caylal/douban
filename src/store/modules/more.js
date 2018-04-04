import * as types from '../types'
import axios from 'axios'

const HOST = 'http://localhost:7000'

const state = {
   movies: []   
}

const getters = {
    [types.MORE_MOVIES]: state =>{
        return state.movies
    }
}
const mutations = {
    [types.MORE_MOVIES](state, payload){
        console.log('payload.data:' + payload)
       state.movies = payload;
    }
}

const actions = {
    [types.MORE_MOVIES]({commit}, payload){
       console.log('title:' + payload.title);

       axios.get(HOST + `/movie/${payload.title}?start =${payload.start}&count=${payload.count}`)
             .then(res =>{              
                console.log('moreMovies:' + res.data);
               commit(types.MORE_MOVIES, res.data)
             }).catch(err => console.log(err))

        // switch(payload.title){
        //     case types.HOT_MOVIES:
        //       axios.get(HOST + `/movie/in_theaters?count=20`)
        //       .then(res =>{
        //         commit({
        //             type: types.MORE_MOVIES,                   
        //             res: res.data
        //         })
        //       }).catch(err => console.log(err))
        //       break
            // case types.NEW_MOVIES:
            //  axios.get(HOST + '/movie/coming_soon?count=20')
            //  .then(res => {
            //     commit({
            //         type: types.MORE_MOVIES,                   
            //         res: res.data
            //     })
            //  }).catch(err => console.log(err))
            //   break
            // case types.TOP_MOVIES:
            // axios.get(HOST + '/movie/top250?count=20')
            // .then(res => {
            //     commit({
            //         type: types.MORE_MOVIES,                    
            //         res: res.data
            //     })
            // }).catch(err => console.log(err))
            //   break
            // default:
            // console.log('[Error]:Api is error!')
        

        // }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}