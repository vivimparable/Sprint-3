// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function buy(idProduct) { //ID. Modificado para acordarme que aunque el valor sea distinto, es el mismo. El parametro actua como 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    
    
    let i =0;
    
    for( i; i<products.length;i++){
        if(idProduct==products[i].id){
            alert("Acabas de añadir el producto: "+ products[i].name+
            " con un precio de: "+ products[i].price+"$ .");
            cartList.push(products[i]);
            
            
        } 
        
    }  
    generateCart();

    
}

// Exercise 2
function cleanCart() {
    
    let i = 0;
    let mensaje = "";
    alert("Tens a la llista els següents productes els quals seràn borrats: ");
    
    for (i; i<cartList.length;i++){
        if(cart.length>0){
            mensaje+=cartList[i].name+" con el precio de "+ cartList[i].price+"$ .";
        }else if(cartList.length==0){
            mensaje+="No hi ha res";
        }
    }  
    alert(mensaje);
    cartList.length=0;    
    document.getElementById("mensaje1").innerText="";
    document.getElementById("mensaje2").innerText="";
    document.getElementById("checking").innerText="";

}




// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    var i = 0;
    var totalGrocery= subtotal.grocery.value-subtotal.grocery.discount;
    var totalBeauty=subtotal.beauty.value;
    var totalClothes=subtotal.clothes.value;
    var mensaje ="";

    for(i;i<cartList.length;i++){ 

        switch(cartList[i].type){
            case "grocery":
                totalGrocery+=cartList[i].price;   
            break;
            case "beauty":
                 totalBeauty+=cartList[i].price;  
            break;
            case "clothes":
                 totalClothes+=cartList[i].price;
            break;
        }
    }
    

    total= totalClothes+totalGrocery+totalBeauty;

        if(totalGrocery>0){
            mensaje +=" El total de grocery es de : "+ totalGrocery.toFixed(2);+"$ ";
        }if(totalBeauty>0){
            mensaje+=" El total de Beauty es de: "+ totalBeauty.toFixed(2);+"$ ";
        }if(totalClothes>0){
            mensaje+=" El total de clothes es de: "+ totalClothes.toFixed(2);+"$ ";

        }
        
    //ex4     
        if(totalGrocery == 0 && totalBeauty == 0 && totalClothes == 0){
            mensaje+="No hi ha res al carret.";
        }else{
            mensaje+= " sumant un total de: "+ total.toFixed(2) +"$.";
        }
        
        
        alert(mensaje);
        }
        
// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    
    //done
}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  
    let j = 0;
    cart.length=0; //PROBLEMA QUE HABIA*** Esteblecer el cart a 0, sino me va sumando en bucle todos los objetos que den name == true;
    let mensaje1="";

    for(j;j<cartList.length;j++){ //recorro array de cartlist

       if(!cart.some(cart => cart.name == cartList[j].name)){ //if N0(si es false) incluye el cartlis el nombre hago push del objeto al array

        let cartObjects = {
            name: cartList[j].name,
            price: cartList[j].price,
            type: cartList[j].type,
            quantity: 1,
            subtotal: cartList[j].price,
            subtotalWithDiscount: 0
        }
        
        cart.push(cartObjects);
        
       }else // No hace falte else if (cart.some(cart => cart.name == cartList[j].name)){ If SI(si es true) incluye el nombre, recorro el array de cart y le hago a queantity ++;
        {
            for(let k= 0; k<cart.length;k++){ //map
               

                if(cart[k].name == cartList[j].name){
                     
                    cart[k].quantity++;
                    cart[k].subtotal=cart[k].price*cart[k].quantity;// modificar el subtotal multiplicando el precio por la cantidad.
                   
                    
                }    
                
            }
       } 
    }
    for(let i = 0;i<cart.length;i++){
        mensaje1+=cart[i].name+" X"+cart[i].quantity+", ";
        
    }
    document.getElementById("checking").innerText=mensaje1;
    applyPromotionsCart();
    
  console.log(cart);//FUNCIONA
    

//Usar some?? let resultadoCarrito = cart.some(cart  => cart == productodisponibleCartList);

         
        
    
    
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    let i = 0;
    let mensaje1="";
    let mensaje2="";

    for(i;i<cart.length;i++){
        
        if(cart[i].name == 'cooking oil' && cart[i].quantity>=3){
             mensaje1 ="Hola, tens una promoció per comprar una quantitat de: "+ cart[i].quantity+" "+ cart[i].name+"!";
              let subtotalnew1 =cart[i].price =10;
              cart[i].subtotalWithDiscount+=subtotalnew1*cart[i].quantity;
            
            let result1 = cart[i].subtotal-cart[i].subtotalWithDiscount;
            subtotal.grocery.discount= result1;
            
             
            
        }else if(cart[i].name== "Instant cupcake mixture" && cart[i].quantity>=10){
            mensaje2="Hola, tens una promoció per comprar una quantitat de: "+ cart[i].quantity+" "+ cart[i].name+"!";;
            let subtotalnew2 = cart[i].subtotal/3*2;
            cart[i].subtotalWithDiscount += subtotalnew2;

            let result2 = cart[i].subtotal-cart[i].subtotalWithDiscount;
            subtotal.grocery.discount= result2;
           
                
        }

        
    }document.getElementById("mensaje1").innerText=mensaje1;
    document.getElementById("mensaje2").innerText=mensaje2;

}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
