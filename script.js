var fetch_ProductData = async ()=>{
    var products = await fetch('https://dummyjson.com/products');
    var products_json = await products.json();
    return products_json;
    // var product_data = products_json;
    // return product_data;
}

var data = await fetch_ProductData();//since the async function always returns promise
console.log(data.products)

export default fetch_ProductData;