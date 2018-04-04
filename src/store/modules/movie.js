import * as types from '../types'
import axios from 'axios'

const HOST = 'http://localhost:7000'

const state = {
    hotMovies: [],
    newMovies: [],
    topMovies: []
}

const mutations = {
    [types.FETCH_MOVIES](state, payload){
        console.log('payload:' + payload)
        switch(payload.tag) {
            case 'HOT_MOVIES':
                state.hotMovies = payload.res
                break
            case 'NEW_MOVIES':
                state.newMovies = payload.res
                break
            case 'TOP_MOVIES':
                state.topMovies = payload.res
                break
            default:
                state.hotMovies = payload.res
        }
    }
}

const actions = {
    [types.FETCH_MOVIES]({commit}){
        axios.get(HOST + '/movie/in_theaters?count=8')
            .then(res =>{
                console.log(types.HOT_MOVIES);
                console.log('in_theatersData:' + res.data);
                commit({
                    type: types.FETCH_MOVIES,
                    tag: types.HOT_MOVIES,
                    res: res.data
                })
            }).catch(err => console.log(err))
        
        axios.get(HOST + '/movie/coming_soon?count=8')
            .then(res => {
                commit({
                    type: types.FETCH_MOVIES,
                    tag: types.NEW_MOVIES,
                    res: res.data
                })
            }).catch(err => console.log(err))

        axios.get(HOST + '/movie/top250?count=8')
            .then(res => {
                commit({
                    type: types.FETCH_MOVIES,
                    tag: types.TOP_MOVIES,
                    res: res.data
                })
            }).catch(err => console.log(err))
    }
}

export default {
    state,
    mutations,
    actions
}