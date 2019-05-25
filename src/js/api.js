import request from './requst';

export default {
    getCurrencies(onSuccess, onError) {
        return request('currencies', {})
            .then(json => onSuccess(json))
            .catch(e => onError(e));
    },
    issueAmount({id}, onSuccess, onError) {
        return request(`currencies/${id}/issue-amounts`, {})
            .then(json => onSuccess(json))
            .catch(e => onError(e));
    },
    lastestIssueAmount({id}, onSuccess, onError) {
        return request(`currencies/${id}/issue-amounts/latest`, {})
            .then(json => onSuccess(json))
            .catch(e => onError(e));
    },
    accountAmount({id}, onSuccess, onError) {
        return request(`currencies/${id}/account-amounts`, {})
            .then(json => onSuccess(json))
            .catch(e => onError(e));
    },
    latestAccountAmount({id}, onSuccess, onError) {
        return request(`currencies/${id}/account-amounts/latest`, {})
            .then(json => onSuccess(json))
            .catch(e => onError(e));
    }
}
