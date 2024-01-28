/**
 * Encapsulate a group of closely related algorithms/strategies,
 * so they are easily interchangable.
 */

class PaymentStrategy{
    pay(amount){
    }
}
class CreditCard extends PaymentStrategy{
    pay(amount){
        console.log(`Paid Rs. ${amount} via Credit card.`);
    }
}
class DebitCard extends PaymentStrategy{
    pay(amount){
        console.log(`Paid Rs. ${amount} via Debit card.`);
    }
}
class Upi extends PaymentStrategy{
    pay(amount){
        console.log(`Paid Rs. ${amount} via Upi.`);
    }
}

class ShoppingCart
{
    #paymentMode
    #cart
    constructor(paymentMode)
    {
        this.#paymentMode = paymentMode,
        this.#cart = []
    }
    addItem(item)
    {
        this.#cart.push(item);
    }
    checkout()
    {
        let totalAmount = this.#cart.reduce((total, item) => total+item.value, 0);
        console.log(`\nTotal Number of Items: ${this.#cart.length}`);
        console.log(`Amount Payable: Rs.${totalAmount}/-`);
        this.#paymentMode.pay(totalAmount);
    }
}

let debitCard = new DebitCard();
let creditCard = new CreditCard();
let upi = new Upi();

let cart1 = new ShoppingCart(debitCard);
cart1.addItem({name: 'Coke', value: 70});
cart1.addItem({name: 'Hair oil', value: 45});
cart1.addItem({name: 'Chips', value: 30});
cart1.checkout();

let cart2 = new ShoppingCart(upi);
cart2.addItem({name: '1kg Wheat', value: 120});
cart2.addItem({name: '1kg Rice', value: 90});
cart2.checkout();

let cart3 = new ShoppingCart(creditCard);
cart3.addItem({name: 'Tissue Box', value: 40});
cart3.checkout();