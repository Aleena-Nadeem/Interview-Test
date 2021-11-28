'use strict';
const products = require('./products.interface');
const cart = require('./cart.interface');
const { x } = require('tar');




class Test {
	constructor() {
		//displayProducts(); // You can comment this if you want
		//displayCart(); // You can comment this if you want
		displayproductNamePrice(); // You can comment this if you want
		leastPriceWithThisName();
		cartquantity();
		getMinmaxprice ();
		getTotalprice();
		
	}
}


const displayProducts = () => {
	console.log('products', products);
	console.log(products.length)
	
}
// 1. function to create an array productnameproce and display it.
const displayproductNamePrice = () => {
	const productNamePrice = [];
   	for (let i = 0; i < products.length; i++) {
				
		productNamePrice.push(products[i].productName, products[i].productPrice);
		
		}
    
	console.log(productNamePrice);
	}

//-----------------------------------------------------------------
//2. function to display the least price
	const leastPriceWithThisName = () => {
		const obj = {};
		for(let i = 0; i < products.length; i++){
		   const { productName, productPrice } = products[i];
		   obj[productName] = productPrice;
		};
		return obj;
	 };
	 console.log(leastPriceWithThisName());

//-----------------------------------------------------------------
//3. total quantity of items in a cart
const cartquantity = () => {
	const cartq = [];
   	for (let i = 0; i < cart.length; i++) {
				
		cartq.push(cart[i].quantity);		
		}

	console.log('3. Quantity array of cart',cartq);
	const sum= cartq.reduce(add,0)
	function add(accumulator, a) {
		return accumulator + a;
	  }
	  
	  console.log('3: Total Items in Cart Array', sum);
	  
	}
	
	function displayCart() {
	console.log('cart', cart);
}


//-----------------------------------------------------------------
//4. cart item with the least price and a cart item with the max price


function getMinmaxprice() {
	  let min = cart[0].price, max = cart[0].price;
	  
		for (let i = 0; i < cart.length; i++) {
		  let v = cart[i].price;
		  min = (v < min) ? v : min;
		  max = (v > max) ? v : max;
		}
	  
		console.log('4', 'Minimum Price in Cart:', min, 'Maximum Price in Cart:', max);
	  }
	  
//--------------------------------------------------------------
//5. total price of the cart, keep in mind any discounts applied to a cart item.

function getTotalprice() {
     let tp_array = []; 
	for (let i = 0; i < cart.length; i++) {
		if (cart[i].discountedPrice > 0) {
		tp_array.push(cart[i].discountedPrice)
	   }
	   else{
		tp_array.push(cart[i].price)
	   }
	
 }
 console.log('5. Array of discounted price and normal price', tp_array)
 
	const sum= tp_array.reduce(add,0)
	function add(accumulator, a) {
		return accumulator + a;
	  }
	  console.log('5. Total price of Cart',sum);
}

// Do not edit below this line
const test = new Test();
