
let storage = localStorage.getItem(0);



let storeValue = JSON.parse(storage);
let storeQuantity = storeValue.quantity;

let storeImage = storeValue.image;
let storeSize = storeValue.size;
let storeColor = storeValue.color;



document.getElementById('imageSmall').src = storeImage;
document.getElementById('updatedQuantity').value = Number(storeQuantity);
document.getElementById('totalPrice').innerHTML =storeQuantity *699;
document.getElementById('cart-count').innerText = storeQuantity;
document.getElementById('pickerCart').innerText = storeQuantity;
document.getElementById('qtyOrderSummary').innerText = storeQuantity;


console.log(document.querySelector("#memorySize").innerHTML);
document.getElementById('memorySize').innerText = storeSize;

document.getElementById('d-subTotal').innerHTML = storeQuantity * 699;
document.getElementById('d-Total').innerText = storeQuantity * 699.00;
document.getElementById('d-Discount').innerHTML ="0%";

let quantityUpdate = () =>{

    let value = document.getElementById('updatedQuantity').value;
    storeQuantity = value;

    console.log(storeQuantity);

    document.getElementById('updatedQuantity').value = Number(storeQuantity) ;
    document.getElementById('cart-count').innerText = Number(storeQuantity)
document.getElementById('pickerCart').innerText = Number(storeQuantity)
document.getElementById('qtyOrderSummary').innerText = Number(storeQuantity)


    let cart = value * 699;
    document.getElementById ('d-subTotal').innerText = cart;
    document.getElementById ('d-Total').innerText = cart;

    document.getElementById ('totalPrice').innerText = cart

    
}


let deleteAll = () => {

    let deleted = document.getElementById('trash');
    alert("do you want to delete item")
    deleted.remove();
    localStorage.clear()
    document.getElementById('d-subTotal').innerHTML = 0;
    document.getElementById('d-Discount').innerHTML = "0%"
    document.getElementById('d-Total').innerHTML = 0
    document.getElementById('updatedQuantity').innerHTML = 0;
    document.getElementById('memorySize').innerHTML = "0%"
    document.getElementById('totalPrice').innerHTML = 0
    document.getElementById('imageSmall').src = 0  ;
}


let applyDiscount = () => {

    let coupon = document.getElementById ('coupon').value
    console.log(coupon)
    if (coupon.length < 5){
        alert("Invalid Coupon")
    }
    else {
        document.getElementById('d-Discount').innerHTML = "50%";
        document.getElementById ('d-Total').innerHTML = 0.5* parseFloat (document.getElementById ("d-subTotal").innerHTML)
        console.log(document.getElementById('d-subTotal').innerHTML)
    }
}