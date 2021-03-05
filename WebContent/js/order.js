var quantity = document.querySelector("#quantity");

function increaseQuantity() {
	var btnIncrease = document.querySelector("#increase");
	if (btnIncrease == null) return;
	
	btnIncrease.addEventListener('click', function() {
		quantity.value = parseInt(quantity.value) + 1;
	});
}
increaseQuantity();

function decreaseQuantity() {
	var btnDecrease = document.querySelector("#decrease");
	if (btnDecrease == null) return;
	
	btnDecrease.addEventListener('click', function() {
		var qu = parseInt(quantity.value);
		if (qu < 2) return;
		
		quantity.value = qu - 1;
	});
}
decreaseQuantity();

function closeOrder() {
	var exit_order = document.querySelector(".order__background");
	
	if (exit_order == null) return;
	
	
	exit_order.addEventListener('click', function() {
		var order = document.querySelector(".order");
		order.style.display = "none";
	});
}
closeOrder();

function addScrollCart() {
	var cart_items = document.querySelector(".cart__items");
	if (cart_items == null) return;
	
	var height = cart_items.clientHeight;
	if (height >= 300) {
		cart_items.style.overflowY = "scroll";
	}
}
addScrollCart();