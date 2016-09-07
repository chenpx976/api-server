const mockjs = require('mockjs');

const data = mockjs.mock({
    banner: {
        img: '@image(750x375,,,,"this is banner")',
        url: '@url("http", "tieba.baidu.com")',
    },
    'list|10': [{
        'id|+1': 1,
        username: '@cname',
        'level|1-30': 1,
        title: '@ctitle(5,15)',
        'order|+1': 1,
        'count|10-300': 1,
        datetime: '@datetime'
    }],
    page: {
        total: 100,
        current: 1
    }
});


module.exports = function() {
    return {
        getList: data
    }
}
