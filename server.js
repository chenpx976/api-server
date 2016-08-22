module.exports = function() {
    var Mock = require('mockjs');
    var random = Mock.Random;
    var _ = require('lodash');
    return {
        "getBasicData": {
            "no": 0,
            "error": "success",
            "data": {
                img: _.times(4, function(n) {
                    return {
                        id: n,
                        type: 1,
                        img_url: Mock.Random.image(),
                        text: Mock.Random.word(),
                        jump_url: Mock.Random.url()
                    }
                }),
                "record_url": Mock.Random.url(),
                "user_id": 1,
                "user_name": Mock.Random.name()
            }
        },
        "getProductContentList": {
            "no": 0,
            "error": "success",
            "data": {
                "rows": _.times(10, function(n) {
                    return {
                        "id": n,
                        "type": 1,
                        "type_name": "众筹",
                        "product_name":  Mock.Random.word(),
                        "img_url": Mock.Random.image('119x86'),
                        "jump_url": Mock.Random.url(),
                        "content": {
                            "target_money": Mock.Random.int(),
                            "support_num": Mock.Random.int(),
                            "supported_money": Mock.Random.int(),
                            "money_type": 1,
                            "progress_stage": 1,
                            "progress_bar": Mock.Random.string('number',1,3),
                            "left_days": Mock.Random.int()
                        }
                    }
                }),
                "total": 100
            }
        },
        userList: _.times(10, function(n){
            return {
                user_id: random.int(),
                user_name: random.cname(),
                school: random.city(),
                cover_img: random.image('750x620'),
                rank: n,
                vote_num: random.int()
            }
        })

    }
}
