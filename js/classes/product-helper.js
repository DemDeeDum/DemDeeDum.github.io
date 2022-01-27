'use-strict';

class ProductHelper {
    static getPrice(product) {
        return product.count * (product.isPromotion ?
            product.pricing.promotionPrice :
            product.pricing.retailPrice);
    }
}