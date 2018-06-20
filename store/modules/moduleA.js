const state = {
    fruits: [{
        name:'apple',
        price: 10
    }, {
        name: 'orange',
        price: 5
    }],
    count:11
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
    increment (state, payload) {
        state.count += payload.amount
    }
}

export default {
    state,
    namespaced: true,
    getters,
    actions,
    mutations
}
