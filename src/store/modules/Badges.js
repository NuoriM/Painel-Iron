import axios from 'axios';

const state = {
    badges: []
}

const getters = {   
}

const actions = {
    async obterBadges({ commit }) {
        await axios.get('https://iron-panel.glitch.me/getBadges?id=&name=&description=').then(o => {
            //badges.push(o);
            commit('obterBadges', o);
        });

        
    }
}

const mutations = {
}

export default {
    state,
    getters,
    actions,
    mutations,
}