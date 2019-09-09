const image = document.createElement("img");
image.src = src;
image.className = "item__image"

window.addEventListener("load", () =>{
    const app = document.getElementById("content");
    app.append(container);
  });

const x=window.location;
console.log(x);
const urlParams = new URLSearchParams(window.location.search);
const title=urlParams.get("title");
const cost=urlParams.get("cost");
const src=urlParams.get("src");
console.log(title,cost,src);
//alert(title);
//alert(cost);
//alert(src);