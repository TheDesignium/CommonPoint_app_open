const paramGenerator = param => {
    return {
        mode: 'cors',
        method: (param.method || 'get').toUpperCase(),
        body: param.body || undefined,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...param.header,
        }
    };
};

// TODO: エンドポイントを変えられるようにする
const urlGenerator = (path) => {
    return "https://jbnesuj1kb.execute-api.ap-northeast-1.amazonaws.com/dev/" + path;
};

const callApi = (url, param) => {
    return fetch(url, param)
        .then(res => res.json())
        .catch(e => e);
};

export default function (path, param = {}) {
    return callApi(urlGenerator(path), paramGenerator(param));
}
