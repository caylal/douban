import * as types from '../types'
import axios from 'axios'
import { resolve } from 'path';

const HOST = 'http://localhost:7000'

const state = {
   subject: []   
}
const getters = {
    [types.DETAIL_MOVIES]: state =>{
        return state.subject;
    }
}
const mutations = {
    [types.DETAIL_MOVIES](state, payload){
    console.log('subject.data:' + payload)
       state.subject = payload;
       console.log('subject.data:' + state.subject)
    }
}

const actions = {
    [types.DETAIL_MOVIES]({commit}, payload){
       return new Promise((resolve, reject) =>{
            axios.get(HOST + `/movie/subject/` + payload.id)
            .then(res =>{              
                console.log('detailMovie:' + res.data);
                commit(types.DETAIL_MOVIES, res.data);
                resolve(res.data);
            }).catch(err => console.log(err))
       })      
    }
}

export default {
    state, 
    getters,  
    mutations,
    actions
}