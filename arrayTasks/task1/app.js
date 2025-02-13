const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      actualPrice: 2499,
      discount: 10,
      discountedPrice: 2249,
      brand: "Boat",
      rating: 4.5,
      stock: 20,
      image: "https://images.pexels.com/photos/7552741/pexels-photo-7552741.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "High-quality wireless headphones with noise cancellation and deep bass.",
    },
    {
      id: 2,
      name: "Smartwatch Series 5",
      category: "Wearable",
      actualPrice: 5999,
      discount: 15,
      discountedPrice: 5099,
      brand: "Noise",
      rating: 4.7,
      stock: 15,
      image: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Feature-packed smartwatch with heart rate monitoring and fitness tracking.",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      category: "Laptops",
      actualPrice: 74999,
      discount: 5,
      discountedPrice: 71249,
      brand: "Asus",
      rating: 4.8,
      stock: 10,
      image: "https://images.pexels.com/photos/3746213/pexels-photo-3746213.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Powerful gaming laptop with RTX 4060 GPU and 16GB RAM.",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      category: "Accessories",
      actualPrice: 999,
      discount: 20,
      discountedPrice: 799,
      brand: "Logitech",
      rating: 4.3,
      stock: 30,
      image: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Ergonomic wireless mouse with adjustable DPI settings.",
    },
    {
      id: 5,
      name: "55-inch 4K Smart TV",
      category: "Home Appliances",
      actualPrice: 45999,
      discount: 12,
      discountedPrice: 40479,
      brand: "Samsung",
      rating: 4.6,
      stock: 8,
      image: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Ultra HD Smart TV with Dolby Vision and built-in apps support.",
    },
    {
      id: 6,
      name: "Noise Cancelling Earbuds",
      category: "Electronics",
      actualPrice: 3499,
      discount: 18,
      discountedPrice: 2869,
      brand: "Sony",
      rating: 4.7,
      stock: 25,
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Compact wireless earbuds with active noise cancellation.",
    },
    {
      id: 7,
      name: "Mechanical Gaming Keyboard",
      category: "Accessories",
      actualPrice: 4499,
      discount: 25,
      discountedPrice: 3374,
      brand: "Redragon",
      rating: 4.5,
      stock: 12,
      image: "https://images.pexels.com/photos/3829232/pexels-photo-3829232.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "RGB mechanical keyboard with customizable keys.",
    },
    {
      id: 8,
      name: "Smartphone 5G",
      category: "Mobiles",
      actualPrice: 34999,
      discount: 10,
      discountedPrice: 31499,
      brand: "OnePlus",
      rating: 4.8,
      stock: 22,
      image: "https://images.pexels.com/photos/5082573/pexels-photo-5082573.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Latest 5G smartphone with AMOLED display and fast charging.",
    },
    {
      id: 9,
      name: "Power Bank 20000mAh",
      category: "Accessories",
      actualPrice: 1999,
      discount: 15,
      discountedPrice: 1699,
      brand: "MI",
      rating: 4.4,
      stock: 18,
      image: "https://images.pexels.com/photos/518530/pexels-photo-518530.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "High-capacity power bank with fast charging support.",
    },
    {
      id: 10,
      name: "Full HD Webcam",
      category: "Electronics",
      actualPrice: 2999,
      discount: 10,
      discountedPrice: 2699,
      brand: "Logitech",
      rating: 4.6,
      stock: 10,
      image: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Full HD 1080p webcam with built-in microphone.",
    },
    {
      id: 11,
      name: "Tablet 10-inch",
      category: "Tablets",
      actualPrice: 22999,
      discount: 8,
      discountedPrice: 21159,
      brand: "Samsung",
      rating: 4.4,
      stock: 14,
      image: "https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "10-inch tablet with stylus support and HD display.",
    },
    {
      id: 12,
      name: "Bluetooth Speaker",
      category: "Electronics",
      actualPrice: 4999,
      discount: 20,
      discountedPrice: 3999,
      brand: "JBL",
      rating: 4.5,
      stock: 18,
      image: "https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Portable Bluetooth speaker with deep bass and waterproof design.",
    },
    {
      id: 13,
      name: "Gaming Monitor 144Hz",
      category: "Electronics",
      actualPrice: 24999,
      discount: 12,
      discountedPrice: 21999,
      brand: "LG",
      rating: 4.7,
      stock: 9,
      image: "https://images.pexels.com/photos/442575/pexels-photo-442575.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "144Hz refresh rate gaming monitor with IPS panel.",
    },
    {
      id: 14,
      name: "Fitness Band",
      category: "Wearable",
      actualPrice: 2999,
      discount: 10,
      discountedPrice: 2699,
      brand: "MI",
      rating: 4.4,
      stock: 16,
      image: "https://images.pexels.com/photos/4397832/pexels-photo-4397832.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Smart fitness band with step counter and heart rate monitoring.",
    },
    {
      id: 15,
      name: "Digital Camera",
      category: "Electronics",
      actualPrice: 38999,
      discount: 15,
      discountedPrice: 33149,
      brand: "Canon",
      rating: 4.8,
      stock: 5,
      image: "https://images.pexels.com/photos/1149288/pexels-photo-1149288.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "DSLR camera with 24MP sensor and 4K video recording.",
    }
  ];
  
  console.log(products);
  
  


//   products.map((item)=>{
//     console.log(item);
//   })


const productContainer = document.getElementById('productContainer');
// console.log(productContainer);


productContainer.innerHTML = products.map((product)=>{
    return(`
        <div class="cards">
            <img src=${product.image} alt=${product.name}>
            <h2>${product.name}</h2>
            <p>${product.discount}% off</p>
            <pre>$${product.discountedPrice}  <strike>$${product.actualPrice}</strike></pre>
            <div class="addtocartContainer">
                <i class="fa-regular fa-heart"></i>
                <button>  add to cart  </button>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>

        
        `)
}).join("")
  


// console.log(Math.floor(39999 * 0.1));
// console.log(Math.ceil(39999 * 0.1));
// console.log(Math.round(39999.4 * 0.1));


// // Remove decimal points
// console.log(Math.floor(39999.4 * 0.1));