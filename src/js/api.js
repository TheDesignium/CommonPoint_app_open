import request from './requst';

export default {
    getCurrencies() {
        return request('currencies', {})
    },
    issueAmount(id) {
        return request(`currencies/${id}/issue-amounts`, {});
    },
    lastestIssueAmount(id) {
        return request(`currencies/${id}/issue-amounts/latest`, {});
    },
    accountAmount(id) {
        return request(`currencies/${id}/account-amounts`, {});
    },
    latestAccountAmount(id) {
        return request(`currencies/${id}/account-amounts/latest`, {});
    }
}
