var API = "https://anthonyfs.pythonanywhere.com/api/products/";
const shopCard = document.querySelector(".offcanvas-body");
const cartProductTotal = document.querySelector(".cartProductTotal");
const cartProductAmount = document.querySelector(".cartProductAmount");
const cartProductName = document.querySelector(".cartProductName");
const cartProductImg = document.querySelector(".cartProductImg");
const degreeBtn = document.querySelector(".degreeBtn");
const increaceBtn = document.querySelector(".increaseBtn");
const removeBtn = document.querySelector(".removeBtn");
const totalPrice = document.querySelector("#totalPrice");
//!Filter attributes dom selectors
const searchInput = document.querySelector("#searchInput");
const categoryArea = document.querySelector("#category");
//!Category buttons dom selectors
const btns = document.querySelector("#btns");
//!products dom selectors
const products = document.querySelector("#products");
const productName = document.querySelector(".productName");
const productDesc = document.querySelector(".productDesc");
const productImg = document.querySelector(".productImg");
const productPrice = document.querySelector(".productPrice");
const addCart = document.querySelector(".addCart");
const seeDetails = document.querySelector(".seeDetails");
//!Modal dom selectors
const modalName = document.querySelector(".modalName");
const modalBody = document.querySelector(".modalBody");
const getFetch = () => {
  fetch(API)
    .then((res) => {
      if (!res.ok) {
        throw new error("something went wrong", res.status);
      }
      return res.json();
    })
    .then((data) => showData(data))
    .catch((error) => console.log(error, res.status));
};
const showData = (data) => {
  const [...all] = data;
  const {
    id,
    title,
    description,
    category,
    category_id,
    price,
    quantity,
    image,
  } = all;
  var categoryArr = [];
  all.reduce((acc, ctg) => {
    if (categoryArr.indexOf(ctg.category) == -1) {
      categoryArr.push(ctg.category);
    }
  });
  const colors = [
    "primary",
    "secondary",
    "success",
    "info",
    "danger",
    "light",
    "dark",
  ];
  for (let i = 0; i < categoryArr.length; i++) {
    btns.innerHTML += `<button  class="btn btn-${colors[i]}">${categoryArr[i]}</button>`;
  }


  const show = (data, length) => {
    var y = -1;
    function clearShow() {
      products.innerHTML = "";
    }
    clearShow()
    for (let i = 0; i < length; i++) {
    

      y = y + 1;

      let shortDesc = data[i].description.split(" ").slice(0, 13).join("  ");
      products.innerHTML += ` <div class="col">
        <div class="card h-100">
          <img
            src="${data[y].image}"
            class="p-2 productImg"
            height="250px"
            alt="..."
          />
          <div class="card-body ">
            <h5 class="card-title line-clamp-1 productName">${data[y].title}</h5>
            <p class="card-text line-clamp-3 productDesc">${shortDesc}...</p>
          </div>
          <div
            class="card-footer w-100  fw-bold d-flex justify-content-between gap-3"
          >
            <span>Price:</span><span class="productPrice">Price: ${data[y].price}</span>
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
      </div>`;
    }
  };
  var filterd = "";
  
  btns.addEventListener(
    "click",

    (e) => {
      let value = e.target.textContent;
      let i = 0
      if (value != "ALL") {
        i++
        function clearHTML() {
          products.innerHTML = "";
        }
       

       var filtered = data.filter((x) => x.category.includes(value));
       filterd = filtered 
      
        clearHTML();
        categoryArea.innerHTML = `${value}`;
        show(filtered, filtered.length);
      }
      else{
        categoryArea.innerHTML = `${value}`;
        show(data, data.length);
      }
    }
  );
  
  searchInput.addEventListener("input",
  
  
     (e) => {
    let inpValue = searchInput.value
    const propOwn = Object.getOwnPropertyNames(filterd)
    if(propOwn.length >= 1 & categoryArea.textContent != "ALL"){
      let filteredInp = filterd.filter((x) => x.title.includes(inpValue))
      console.log(" if")
      show(filteredInp, filteredInp.length);
    }else if (categoryArea.textContent = "ALL"){
      let filteredInp = data.filter((x) => x.title.includes(inpValue))
      console.log("else if")
      show(filteredInp, filteredInp.length);
    }else{
      console.log("elsee ")

      let filteredInp = data.filter((x) => x.title.includes(inpValue))
      show(filteredInp, filteredInp.length);
    }
    

  }
  )


  show(data, data.length);
};
export const Dataui = () => {
  getFetch();
};
