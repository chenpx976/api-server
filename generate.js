module.exports = function() {
    var faker = require('faker');
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
                        img_url: faker.random.image(),
                        text: faker.random.words(),
                        jump_url: faker.internet.url()
                    }
                }),
                "record_url": faker.internet.url(),
                "user_id": 1,
                "user_name": faker.name.findName()
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
                        "product_name":  faker.random.words(),
                        "img_url": faker.image.imageUrl(119,86),
                        "jump_url": faker.internet.url(),
                        "content": {
                            "target_money": faker.random.number(),
                            "support_num": faker.random.number(),
                            "supported_money": faker.random.number(),
                            "money_type": 1,
                            "progress_stage": 1,
                            "progress_bar": faker.random.number({
                            	max:100,
                            	min:0
                            }),
                            "left_days": faker.random.number()
                        }
                    }
                }),
                "total": 100
            }
        }

    }
}
