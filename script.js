var fetch_ProductData = async ()=>{
    var products = await fetch('https://dummyjson.com/products');
    var products_json = await products.json();
    return products_json;
    // var product_data = products_json;
    // return product_data;
}

var data = await fetch_ProductData();//since the async function always returns promise
var productData = data.products;

var cart = document.getElementById("no_of_items")

let productDom = document.getElementsByClassName('product-cards')

var cartList = [];
for( let i=0;i<productData.length;i++){


let card_outline = document.createElement('div')
card_outline.setAttribute("class","card")

let image = document.createElement('img')
image.setAttribute("src",productData[i].images[0])
image.setAttribute("alt",productData[i].brand)
image.setAttribute("class","card-img-top")

let card_body = document.createElement('div')
card_body.setAttribute("class","card-body");

let heading = document.createElement('h5')
heading.setAttribute("class","card-title");
heading.textContent = productData[i].title;

let subtitle = document.createElement('p')
subtitle.setAttribute("class","card-text");
subtitle.textContent = productData[i].description;

let button = document.createElement('a')
button.setAttribute("class","btn btn-primary")
button.textContent="Add to cart";
button.onclick= function (e){
    console.log("clicked")
    cartList.push(e.id)
    cart.textContent = cartList.length;
    cart.setAttribute("style","background:yellow")
}

productDom[0].appendChild(card_outline)
card_outline.append(image)
card_outline.append(card_body)
card_body.append(heading,subtitle,button)
}




// export default fetch_ProductData;