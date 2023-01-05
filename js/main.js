var MenuItems = document.getElementById("MenuItems")
MenuItems.style.maxHeight = "0";

function menutoggle(){

	if(MenuItems.style.maxHeight == "0px")
	{
		MenuItems.style.maxHeight = "200px";
	}

	else
	{
		MenuItems.style.maxHeight = "0px";

	}
}
 
            //    account login

		var LoginForm = document.getElementById("LoginForm")
		var RegForm = document.getElementById("RegForm");
		var Indicator = document.getElementById("Indicator");

		function register(){
			RegForm.style.transform = "translateX(0px)";
			LoginForm.style.transform = "translateX(0px)";
			
		}

        function login(){
			RegForm.style.transform = "translateX(300px)";
			LoginForm.style.transform = "translateX(300px)";
		
		Indicator.style.transform = "translateX(0px)";Indicator.style.transform = "translateX(0px)";
		
		
		}

		

		
function validation(){

	var name = document.getElementById("name").value;
 
	var valid_name_regex = /^[A-Za-z]+$/;
 
	var password = document.getElementById("password").value;
 
	var valid_password_regex = /^[0-9]+$/;
 
	 var email = document.getElementById("email").value;
   
   
 
	   if(!(name.match(valid_name_regex)) || !(age.match(valid_password_regex)) || (city == "")){
 
		 if(!(name.match(valid_name_regex))){
 
		  document.getElementById("name_error").style.visibility = "visible";
		  document.getElementById("name").style.borderColor = "red";
		   
	   }else{
 
		  document.getElementById("name_error").style.visibility = "hidden";
		  document.getElementById("name").style.borderColor = "black";
 
	   }
 
	   if(!(password.match(valid_password_regex))){
 
		  document.getElementById("password_error").style.visibility = "visible";
		  document.getElementById("password").style.borderColor = "red";
		   
	   }else{
 
		  document.getElementById("password_error").style.visibility = "hidden";
		  document.getElementById("password").style.borderColor = "black";
 
	   }
	   if(!(email.match(valid_email_regex)) || !(age.match(valid_password_regex)) || (city == "")){
	   if(!(email.match(valid_email_regex))){
 
		document.getElementById("email_error").style.visibility = "visible";
		document.getElementById("email").style.borderColor = "red";
		 
	 }else{

		document.getElementById("email_error").style.visibility = "hidden";
		document.getElementById("email").style.borderColor = "black";

	 }
}
	// 	if(city == ""){
 
	// 	  document.getElementById("city_error").style.visibility = "visible";
	// 	  document.getElementById("city").style.borderColor = "red";
		   
	//    }else{
 
	// 	  document.getElementById("city_error").style.visibility = "hidden";
	// 	  document.getElementById("city").style.borderColor = "black";
 
	//    }
 
 
	   return false;
 
 
	 }else{
 
		document.getElementById("name_error").style.visibility = "hidden";
		document.getElementById("name").style.borderColor = "black";
		document.getElementById("email_error").style.visibility = "hidden";
		document.getElementById("email").style.borderColor = "black";

		document.getElementById("password_error").style.visibility = "hidden";
		document.getElementById("password").style.borderColor = "black";
		return true;
 
	 }
 
		  
 
 
	 
 
 
 
		 
		 
 
	
 
 
  }
 
 




// button

     const button = document.querySelector('button')
	 
     const addToCart = document.querySelector('.add-to-cart')
	 const addedToCart = document.querySelector('.added-to-cart')
     const bag = document.querySelector('.fa-bag-shopping')
	 const cart = document.querySelector('.fa-cart-shopping')

	 


	 button.addEventListener('click',() => {

		addedToCart.classList.add('added-to-cart-animation')
		addToCart.classList.add('add-to-cart-animation')


		
bag.style.animation = 'bag 2000ms 700ms ease-in-out forwards'
cart.style.animation = 'cart 2000ms ease-in-out forwards'
	 })
		
		
















    //    product gallery

	var ProductImg = document.getElementById(" ProductImg");
	var  SmallImg = document.getElementsByClassName("small-img");

       SmallImg[0].onclick = function(){
		ProductImg.src = SmallImg[0].src
	   }	;
	   SmallImg[1].onclick = function(){
		ProductImg.src = SmallImg[1].src
	   }	;
	   SmallImg[2].onclick = function(){
		ProductImg.src = SmallImg[2].src
	   }	;

	     SmallImg[3].onclick = function(){
		ProductImg.src = SmallImg[3].src
	   }	;





