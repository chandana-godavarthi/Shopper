import axios from "axios"

var products;
const fetch = async ()=>{
    try{
        const response = await axios.get("https://dummyjson.com/products");
        products = response.data;
        console.log(products);
        
    }
    catch(err){
        console.log(err.message);
    }
}
fetch();
export default products;