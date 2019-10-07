//scope
{
    const itemContainerClass = "s-item   ";
    const imageClass="s-item__image-img";
    const titleClass="s-item__title";
    const priceClass="s-item__price";

    const items= document.getElementsByClassName(itemContainerClass);
    //console.log(items);

    const arr=[];

    Array.from(items).forEach( item =>{
        //console.log(item);
        const imgs = item.getElementsByClassName(imageClass);
        //console.log(imgs);
        if(imgs.length===0) return; //some have 0
        const img=imgs[0];
        //console.log(img);
        const src=img.src;
        console.log(src);

        if(!src) return;

        const title=item.getElementsByClassName(titleClass)[0].textContent;
        const price=item.getElementsByClassName(priceClass)[0].textContent;
        //console.log(title);
        //console.log(imgs.length);
        //console.log(img);
        arr.push({
            imgSrc: src,
            title,
            price,
            category: document.title.split("|")[0].trim(),
        }) 
    });
    console.log(JSON.stringify(arr)); 
}