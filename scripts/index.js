import navbar from "../component/navbar.js"
import { getData,append } from "./fetch.js"

document.getElementById("navbar").innerHTML = navbar();


let main = ()=>{

    let query = document.getElementById("query").value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    getData(url).then((res)=>{
        console.log(res)
        append(res,container)
    })
}


let container = document.getElementById("recepie");

// getData(url).then((res)=>{
//     console.log(res)
    
// })

document.getElementById("btn").addEventListener("click",main);

document.getElementById("abc").addEventListener("click",function(){
    window.location.href = "recepie.html"
})

