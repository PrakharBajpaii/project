const productData = [
    {
        id: 1,
        title : 'Baby Soap',
        brand : 'Johnsons & Johnsons',
        price : 60,
        image : 'https://images-cdn.ubuy.co.in/635416512cfc9d641241cac3-johnson-39-s-baby-soap-bar-gentle.jpg',
        ageRange: '0-5 yrs'
    },
    {
        id: 2,
        title : 'Baby Shampoo',
        brand : 'Johnsons & Johnsons',
        price : 199,
        image : 'https://images-cdn.ubuy.co.in/63dc2451d08074216d55cb12-johnson-39-s-baby-shampoo-500-ml.jpg',
        ageRange: '0-5 yrs'
    },
    {
        id: 3,
        title : 'Voidrop U Shape Pillow',
        brand : 'Johnsons & Johnsons',
        price : 157,
        image : 'https://cdn.fcglcdn.com/brainbees/images/products/438x531/15830965a.webp',
        ageRange: '0-5 yrs'
    },
    {
        id: 4,
        title : 'Baby Skincare Wipes',
        brand : 'Johnsons & Johnsons',
        price : 60,
        image : 'https://www.johnsonsbaby.in/sites/jbaby_in/files/styles/product_image/public/product-images/72s_1.jpg',
        ageRange: '0-5 yrs'
    },
    {
        id: 5,
        title : 'Baby Lotion',
        brand : 'Johnsons & Johnsons',
        price : 259,
        image : 'data:image/jpeg;base64,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',
        ageRange: '0-5 yrs'
    },
    {
        id: 6,
        title : 'Baby Blanket',
        brand : 'Johnsons & Johnsons',
        price : 300,
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzXJOx59iHuN_FwxiCGklYxUpNivn0g42vw&s',
        ageRange: '0-5 yrs'
    },
    {
        id: 7,
        title : 'Baby Carrier Bag',
        brand : 'Johnsons & Johnsons',
        price : 430,
        image : 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRWF_bf8MqtypILyH4BLj2w6pn4DxE_RJ2doF4ZL93RXNThW3NYlfy29zJMLAcZH9LUWyGUl0aeTjwSfhA_IrykmUNYXwPSmiwH3xmMo6O0W9V89u74w7KtbPMsX8pBlId8GrJSwIQ&usqp=CAc',
        ageRange: '0-5 yrs'
    },
    {
        id: 8,
        title : 'Baby Clothes',
        brand : 'Johnsons & Johnsons',
        price : 329,
        image : 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWccFD29O15rXuDYQo-nTUSBW-XfMqCu9Dex411ftH7hZhzrhN3fmzk2vDNBJyJT5L4Vag-naeQyb4MZicJtP8S1ZYaZHjd3b2wwMgMmuHmOlnpBVM6UzfflKm&usqp=CAc',
        ageRange: '0-5 yrs'
    },
];

export default productData;