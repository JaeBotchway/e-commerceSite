let myIndex = 0;
// slide();

// function slide() {
//   let i;
//   let x = document.getElementsByClassName("img-slide");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(slide, 2000); // Change image every 2 seconds
// }





let items = {
    quantity: 0,
    image: "",
    size: "",
    color: "",
}


let img1 = document.getElementById("imgField");


let colorRed = () => {
    img1.src = "images/iphone-red.jpg";
}

let colorYellow = () => {
    img1.src = "images/iphone-yellow.jpg";
}


let colorBlue = () => {
    img1.src = "images/iphone-blueblack.jpg";
}

let colorBlack = () => {
    img1.src = "images/iphone-black2.jpg";
}


let quantity = parseInt(document.getElementById('numberField').value);

let Subtract = () => {
    if (quantity > 1) {
        quantity -= 1;
        document.getElementById('numberField').value = quantity;
    }
}



let Add = () => {
    if (quantity < 20) {
        quantity += 1;
        document.getElementById('numberField').value = quantity;
    }
}



let addCart = () => {
    document.getElementById("overlay").style.width = "25rem";
    
   let src = document.getElementById('imgField').src
   items.image = src;
  document.getElementById('imageSmall').src = src

    let newQuantity = parseInt(document.getElementById('numberField').value);

    document.getElementById('cart-count').innerText =  newQuantity; 

    document.getElementById('qtySelected').innerHTML = newQuantity;
    items.quantity = newQuantity;
    let subTotal = newQuantity * 699.00;
    document.getElementById('subTotal').innerHTML = subTotal;


    let sOption = document.getElementById("sOptions").value;
    items.size = sOption;
    document.getElementById('sizeSelected').innerHTML = sOption;


    localStorage.setItem(0, JSON.stringify(items));

}

let closeNav = () => {
    document.getElementById('overlay').style.width = "0";
}



