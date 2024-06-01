const  myList = document.querySelector('ul');
fetch("products.json")
    .then(
       (response)=>{
        if (!response.ok){
            throw new Error(`HTTP error! status=${response.status}`);
       }
       return response.json();
    })
    .then((data)=>{
        for(const product of data.products){
            const listItem=document.createElement('li');

            const nameElement=document.createElement('strong');
            nameElement.textContent=product.Name;

            const priceElement=document.createElement("strong");
            priceElement.textContent=`$${product.Price}`;

            listItem.append(
                nameElement,
                `can be found in ${product.Location}.Cost:`,
                priceElement);
             
                myList.appendChild(listItem);

        }
    })
    .catch((error)=>{

    const p =document.createElement('p');
    p.appendChild(document.createTextNode(`Error:${error.message}`));
    document.body.insertBefore(p,myList);

    });