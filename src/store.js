import Vue from 'vue'
import Vuex from 'vuex'
import api from './js/api';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currencies: [],
        issueAmounts: {}
    },
    mutations: {
        setCurrencies(state, data) {
            state.currencies = data;
        },
        setIssueAmounts(state, data) {
            state.issueAmounts = {...state.issueAmounts, ...data};
        },

    },
    actions: {
        getCurrencies({commit, state}) {
            return api.getCurrencies(
                json => {
                    commit('setCurrencies', json['currencies']);
                    return true;
                },
                err => {
                    console.error(err);
                    return false;
                }
            );
        },
        getIssueAmount({commit, state}, payload) {
            return api.issueAmount(
                payload,
                json => {
                    commit('setIssueAmounts', {
                        [payload.id]: json["issue_amounts"]
                    });
                    return true;
                },
                err => {
                    console.error(err);
                    return false;
                }
            )
        },
        getIssueAmountsById({commit, state}, payload) {
            return api.issueAmountsById(
                payload,
                json => {
                    commit('setIssueAmounts', json["issue_amounts"]);
                    return true;
                },
                err => {
                    console.error(err);
                    return false;
                }
            )
        }

    }
})

