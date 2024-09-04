const productPrices = [1000, 2000, 3000, 4000, 5000];

function discount25(productPrice) {
    return productPrice * 0.25
}

function discount50(productPrice) {
    return productPrice * 0.5
}

const discountedProductPrices = productPrices.map(discount50);

console.log(discountedProductPrices)
