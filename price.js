function productQuantity(shirtQuantity, pantQuantity, tshirtQuantity){
    const perShirtPrice = 500;
    const perPantPrice = 600;
    const perTshirtPrice = 300;

    const shirtTotalPrice = shirtQuantity * perShirtPrice;
    const pantTotalPrice = pantQuantity * perPantPrice;
    const tshirtTotalPrice = tshirtQuantity * perTshirtPrice;

    const totalPrice = shirtTotalPrice + pantTotalPrice + tshirtTotalPrice;

    return totalPrice;
}

const price = productQuantity(1, 5, 5);
console.log('Total price is', price);