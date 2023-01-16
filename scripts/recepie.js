import navbar from "../component/navbar.js"
import { getData,append } from "./fetch.js"

document.getElementById("navbar").innerHTML = navbar();

let container = document.getElementById("container");
let main = ()=>{
    let url = `https://www.themealdb.com/api/json/v1/1/random.php`;
    getData(url).then((res)=>{
        console.log(res)
        append(res,container)
    })
}




main();