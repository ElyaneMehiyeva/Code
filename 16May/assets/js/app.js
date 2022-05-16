var shop = document.querySelector(".fa-cart-shopping");
var modal = document.querySelector(".modal");
var closes = document.querySelector(".fa-circle-xmark");
var body = document.body;
var modalList = document.getElementById("modal-list");
var badge = document.getElementById("badge");
badge.innerText = Count();
var tfoot = document.getElementById("tfoot");
tfoot.innerText = Amount();
shop.addEventListener("click", function (e) {
    modalList.innerHTML = "";
    tfoot.innerText = "Total Amount :" + Amount() + "$";
    if (localStorage.getItem("products")) {
        products = JSON.parse(localStorage.getItem("products"));
        products.forEach(a => {
            modalList.innerHTML +=
                `
                <tr>
                    <th scope="row"><img src="${a.src}" alt=""></th>
                    <td>${a.name}</td>
                    <td>${a.price} <b>$</b></td>
                    <td>${a.count}</td>
                    <td>${a.count * a.price}</td>
                </tr>
                `;
        })

    }

    modal.style.display = "block";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
})
closes.addEventListener("click", function (e) {
    modal.style.display = "none";
    body.style.height = "auto";
    body.style.overflow = "auto";
})

var addBtns = document.querySelectorAll(".card-body .btn-success");

addBtns.forEach(addBtn => {

    addBtn.addEventListener("click", function (e) {
        e.preventDefault();        
        let imgSrc = addBtn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.src;
        let name = addBtn.parentElement.previousElementSibling.previousElementSibling.children[0].innerText;
        let price = addBtn.parentElement.previousElementSibling.children[0].children[1].innerText;
        price = parseInt(price);
        let dataId = addBtn.parentElement.parentElement.getAttribute("data-id");
        let count = 1;
        let product = {
            id: dataId,
            name: name,
            src: imgSrc,
            price: price,
            count: count,
        }
        let products = [];
        if (localStorage.getItem("products")) {
            products = JSON.parse(localStorage.getItem("products"));
        }
        var add = false;
        if(products.length == 0){
            add = true;
        } else{
            add = true;
            products.forEach(a=>{
                if(a.id==dataId){
                    a.count++;
                    add = false;                    
                } 
            })

        }
        if(add){
            products.push(product);
        }
        localStorage.setItem("products", JSON.stringify(products));
        badge.innerText = Count();
    });
});
function Count(){
    let count = 0;
    if (localStorage.getItem("products")) {
        products = JSON.parse(localStorage.getItem("products"));
        products.forEach(a=>{
            count+=a.count;
        })
    }
    return count;
}
function Amount(){
    let amount = 0;
    if (localStorage.getItem("products")) {
        products = JSON.parse(localStorage.getItem("products"));
        products.forEach(a=>{
            amount+=a.count * a.price;
        })
    }
    return amount;
}