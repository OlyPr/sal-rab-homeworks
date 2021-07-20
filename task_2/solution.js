function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    // создайте переменную shippingSum

    // если productsSum равно 0,
    // то shippingSum присвоить значение 0

    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0

    // если productsSum больше 0 и меньше freeShippingMinSum,
    // то shippingSum присвоить значение shippingPrice

    // Конец решения задания №2.1.

    let shippingSum;

if ((productsSum === 0)) {
    shippingSum = 0;

} else if ((productsSum >= freeShippingMinSum)) {
    shippingSum = 0;

} else if (productsSum > 0 && productsSum < freeShippingMinSum) {
    shippingSum = shippingPrice;

} 

   return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    // создайте переменную discountPrice
    let discountPrice;
    // если productSum больше или равно discountMinSum,
    // то присвойте discountPrice значение discountPart процентов от productSum,
    // иначе присвойте discountPrice значения 0

    // Конец решения задания №2.2.
    if (productSum >= discountMinSum) 
        {discountPrice = discountPart * productSum / 100;
        }
    else {discountPrice = 0}

    return discountPrice;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productSum = sum;
               
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    // создайте переменную totalSum

    // присвойте totalSum значение productSum
    // уменьшите totalSum на discountSum
    let totalSum;
    totalSum = productSum - discountSum;
    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
    
    // прибавьте к totalSum значение shippingSum
    totalSum += shippingSum;

    let freeShipping;

    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false
    shippingSum === 0 ? freeShipping = true : freeShipping = false ;
    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
