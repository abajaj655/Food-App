let getData = async(url) => {
    

    let res = await fetch(url);
    let data = await res.json();
    return data.meals;
}

let append = (data,container) => {
    
    container.innerHTML = null;

    data.forEach(({ strMealThumb,strMeal,strInstructions })=>{
        let img = document.createElement("img");
        img.src = strMealThumb;

        let h3 = document.createElement("h3");
        h3.innerText = strMeal;

        let h4 = document.createElement("h4");
        h4.innerText = "Recipe:-";

        let p = document.createElement("p");
        p.innerText = strInstructions;

        let div = document.createElement("div");
        div.append(img,h3,h4,p);

        container.append(div);
    })
}

export { getData,append }