//!APİ https://anthonyfs.pythonanywhere.com/api/products/

//!shopping cart dom selectors
const shopCard = document.querySelector(".offcanvas-body")
const cartProductTotal = document.querySelector(".cartProductTotal")
const cartProductAmount = document.querySelector(".cartProductAmount")
const cartProductName = document.querySelector(".cartProductName")
const cartProductImg = document.querySelector(".cartProductImg")
const degreeBtn = document.querySelector(".degreeBtn")
const increaceBtn = document.querySelector(".increaseBtn")
const removeBtn = document.querySelector(".removeBtn")
const totalPrice = document.querySelector("#totalPrice")
//!Filter attributes dom selectors
const searchInput = document.querySelector("#searchInput")
const category = document.querySelector("#category")
//!products dom selectors
const products = document.querySelector("#products")
const productName = document.querySelector(".productName")
const productDesc = document.querySelector(".productDesc")
const productImg = document.querySelector(".productImg")
const productPrice = document.querySelector(".productPrice")
const addCart = document.querySelector(".addCart")
const seeDetails = document.querySelector(".seeDetails")
//!Modal dom selectors
const modalName = document.querySelector(".modalName")
const modalBody = document.querySelector(".modalBody")

//!Fetching datas by api

API= "https://anthonyfs.pythonanywhere.com/api/products/"

const getFetch = ()=>{
    fetch(API)
    .then((res) => {
        if(!res.ok){
            throw new error("something went wrong",res.status)
        }
        return  res.json()
    })
    .then((data) => showData(data))
    .catch((err) => console.log(err,res.status))

}
const showData = (data)=>{
    productDatas = data
    
const  [...all] = productDatas
const {id,title,description,category,category_id,price,quantity,image} = all

console.log(description)
 
    for(let i = 0;i<productDatas.length;i++){
        products.innerHTML += ` <div class="col">
        <div class="card">
          <img
            src="${all[i].image}"
            class="p-2 productImg"
            height="250px"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title line-clamp-1 productName">${all[i].title}</h5>
            <p class="card-text line-clamp-3 productDesc">${all[i].description}</p>
          </div>
          <div
            class="card-footer w-100 fw-bold d-flex justify-content-between gap-3"
          >
            <span>Price:</span><span class="productPrice">Price: ${all[i].price}</span>
          </div>
          <div class="card-footer w-100 d-flex justify-content-center gap-3">
            <button class="btn btn-danger addCart">Sepete Ekle</button>
            <button
              class="btn btn-primary seeDetails"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              See Details
            </button>
          </div>
        </div>
      </div>`
       
    }


   }


getFetch()

