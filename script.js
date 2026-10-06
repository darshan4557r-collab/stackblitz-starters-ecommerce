const products = [
  {
      id: 1,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPNY9X-Fg-o6t7h8Cf39S7jAWjmVyFUu-p7YzhSfuSyg&s",
      name: "running shoes",
      price: 2999,
      inStock: true
  },
  {
      id: 2,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgm_1TdkZuR586L7j5eMBXtMltc8_D60a2VRk5XOHpSg&s=10",
      name: "casual shoes",
      price: 1999,
      inStock: true
  },
  {
      id: 3,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLBY6a2_IWUwzeKHpbP-B9cNjjMciM6pbR320uUL_v6A&s=10",
      name: "formal shoes",
      price: 2999,
      inStock: true
  },
  {
      id: 4,
      imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPiOj30QDIeiDC-IAs5UaCjQJzMOu10MhhheBg9WF5g&s=10",
      name: "sports shoes",
      price: 3999,
      inStock: true

  },
  {
      id: 5,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0W2TCexHSv3xXjbj9U5gSJSRVVhv2mETr6xNjtlEgrw&s=10"  ,
       name: "sneakers",
      price: 4499,
      inStock: true
  },
  {
      id: 6,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmlwxCSEkgjUKSkWflmrsAOqmiIfz4NtEZ0T8uOUTkQw&s=10",
      name: "slippers",
      price: 999,
      inStock: true
  },
  {
      id: 7,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUGzSy7MecXA1tf9yal9HrKBoEri64MfHCdWNp_dRNw&s=10",
      name: "sandals",
      price: 1499,
      inStock: true
  }

]


const container = document.querySelector(".products");
const searchInput = document.getElementById("search-input");

function displayProducts(productsToDisplay) {
container.innerHTML = "";


productsToDisplay.forEach((products) => {  
  container.innerHTML += `
    <div class="product-card">
      <img src="${products.imgSrc}" alt="${products.name}" />
      <h3>${products.name}</h3>
      <p>Price: ₹${products.price}</p>

    <button>add to cart</button>
    </div>
  `;  

});
}
// display all products
displayProducts(products);

searchInput.addEventListener("input", (e) => {
const searchTerm = e.target.value.toLowerCase();
const filteredProducts = products.filter((products) =>
  products.name.toLowerCase().includes(searchTerm),
);
displayProducts(filteredProducts);
});
