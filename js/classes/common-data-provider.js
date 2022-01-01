'use strict';

class CommonDataProvider {
    constructor() {
        this.getMethod = 'GET';
        this.url = 'https://sheets.googleapis.com/v4/spreadsheets/1yCvXswSRiiWyU6V90QZOFGSGSXuST4R7nUBLN21LttM/values/Sheet1!A2:G2?key=AIzaSyCQc89-y4cimUMnpadCkIwW3_Qn1m739n0';
    }

    getClothesItemsData() {

        return [{
                id: '12',
                image: {
                    alt: 'grey-dress',
                    src: 'images/2.jpg'
                },
                isTopSell: true,
                title: {
                    text: 'Платье Футляр'
                },
                pricing: {
                    retailPrice: 2000,
                    wholesalePrice: 1700
                }
            },
            {
                id: '13',
                image: {
                    alt: 'white-sweeter',
                    src: 'images/1.jpg'
                },
                isTopSell: true,
                title: {
                    text: 'Кофта белая'
                },
                pricing: {
                    retailPrice: 1500,
                    wholesalePrice: 1300
                }
            },
            {
                id: '14',
                image: {
                    alt: 'black-jacket',
                    src: 'images/3.jpg'
                },
                isTopSell: true,
                title: {
                    text: 'Куртка Черная'
                },
                pricing: {
                    retailPrice: 2500,
                    wholesalePrice: 2200
                }
            }, {
                id: '15',
                image: {
                    alt: 'marine-green-dress',
                    src: 'images/4.jpg'
                },
                isTopSell: true,
                title: {
                    text: 'Платье Бирюзовое'
                },
                pricing: {
                    retailPrice: 2100,
                    wholesalePrice: 1800
                }
            }, {
                id: '16',
                image: {
                    alt: 'black-white-coat',
                    src: 'images/5.jpg'
                },
                isTopSell: true,
                title: {
                    text: 'Черное белое пальто'
                },
                pricing: {
                    retailPrice: 2700,
                    wholesalePrice: 2400
                }
            }, {
                id: '17',
                image: {
                    alt: 'black-jacket',
                    src: 'images/6.jpg'
                },
                isTopSell: false,
                title: {
                    text: 'Куртка черная'
                },
                pricing: {
                    retailPrice: 2200,
                    wholesalePrice: 2000
                }
            },
            {
                id: '18',
                image: {
                    alt: 'black-jacket',
                    src: 'images/7.jpg'
                },
                isTopSell: true,
                title: {
                    text: 'Куртка dwafawwa'
                },
                pricing: {
                    retailPrice: 5000,
                    wholesalePrice: 4600
                }
            }
        ];
    }
}