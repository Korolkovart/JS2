// // const goods = [
// //     { image: 'photo', title: 'Shirt', price: 150},
// //     { image: 'photo', title: 'Socks', price: 50 },
// //     { image: 'photo', title: 'Jacket', price: 350 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //     { image: 'photo', title: 'Shoes', price: 250 },
// //   ];
  
// // const renderGoodsItem = (image, title, price) => {
// //     return `<div class="goods-item">
// //                   <img class="img-goods" src="${image}" alt="photo-goods">
// //                 <div class="inf-goods">
// //                   <h3 class="name-goods">${title}</h3>
// //                   <p class="price-goods">${price}</p>
// //                   <button class="goods-button" type="button"> Добавить в корзину</button>
// //                 </div>
// //             </div>`;
// //   };
  
// // const renderGoodsList = (list=goods) => {
// //     let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.price));
// //     document.querySelector('.goods-list').innerHTML = goodsList.join("");
// //   }
  
// // renderGoodsList(goods);
// // //запятую убралс помощью .join(" ");
// // //Не много не понял второе задание - я бы убрал масив с объектом и передавл новые значения через функцию,
// // //новые значения передвал бы через вызов функции  

// // const addToCart = document.querySelector('goods-button');
// // addToCart.addEventListener("click");

// function makeGETRequest(url, callback) {
//   return new Promise((resolve, reject) => {
//       let xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject;
//       xhr.open("GET", url, true);
//       xhr.onload = () => resolve(callback(xhr.responseText));
//       xhr.onerror = () => reject(xhr.statusText);
//       xhr.send();
//     });
//   }
// // function makeGETRequest(url, callback) {
// //   var xhr;

// //   if (window.XMLHttpRequest) {
// //     xhr = new XMLHttpRequest();
// //   } else if (window.ActiveXObject) { 
// //     xhr = new ActiveXObject("Microsoft.XMLHTTP");
// //   }

// //   xhr.onreadystatechange = function () {
// //     if (xhr.readyState === 4) {
// //       callback(xhr.responseText);
// //     }
// //   }

// //   xhr.open('GET', url, true);
// //   xhr.send();
// // }

// const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


// class GoodsItem {
//   constructor(id_product,product_name, price,) {
//     this.id_product = id_product;
//     this.product_name = product_name;
//     this.price = price;
//   }

//   render() {
//     return `<div class="goods-item">
//                        <img class="img-goods" src="./img/icon-cart.svg" alt="photo-goods">
//                      <div class="inf-goods">
//                       <span> #${this.id_product}</span>
//                        <h3 class="name-goods">${this.product_name}</h3>
//                        <p class="price-goods">${this.price.toLocaleString()} ₽</p>
//                        <button data-art="'+this.id_product+'" class="goods-button" type="button" onclick="cart.renderAddItemCart()"> Добавить в корзину</button>
//                      </div>
//                  </div>`;
//   };
// }

// class GoodsList {
//   constructor() {
//     this.goods = [];
//   }
//   fetchGoods() {
//     makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
//       this.goods = JSON.parse(goods);
//     })
//   }
//   render() {
//     let listHtml = '';
//     this.goods.forEach(good => {
//       const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
//       listHtml += goodItem.render();
//     })
//     document.querySelector('.goods-list').innerHTML = listHtml;
//   }
//   calculateTotalPrice(){
//     let totalSum = 0;
//     this.goods.forEach((good) => {
//         totalSum += good.price;
//     });
//     return totalSum
//   }
//   renderTotalPrice(){
//     let totalPriceCart = `Сумма:   ${this.calculateTotalPrice()}`;
//     document.querySelector('.total-price').innerHTML = totalPriceCart;
//   }



// }


// class CartItem{
//   constructor(id_product, product_name, price, quantity) {
//     this.id_product = id_product;
//     this.product_name = product_name;
//     this.price = price;
//     this.quantity = quantity
//   }

//   render() {
//     return `<div class="basket-item">
//             <span>#${this.id_product}</span>
//             <h2 class="title-basket-item">${this.product_name}</h2>
//             <span class="price-basket-item">${this.price.toLocaleString()} ₽</span>
//             <span class="quantity-basket-item">${this.quantity} шт</span>
//             <button class="cart-button" type="button">Удалить</button>
//             </div>`;
//   };
// }

// class Cart{
//   constructor(){
//     this.goods = [];
//   }
//   addItemCart(id_product){
//     let addItem;
//     list.goods.forEach(function(item){
//       if(id_product = item.id_product) {
//         addItem = {
//           id_product: item.id_product,
//           product_name: item.product_name,
//           price: item.price,
//           quantity: item.quantity
//         }
//       }
//     });
//     this.goods.push(addItem)
//   }
//   renderAddItemCart(){
//     let addItemtoCart = this.addItemCart()
//   }

//   getCart(){
//       makeGETRequest(`${API_URL}/getBasket.json`, (goods) => {
//       this.goods = JSON.parse(goods).contents;
//       console.log(this.goods)
//     })
//   }

//   renderCart(){
//       let cartHtml = '';
//       this.goods.forEach((good) => {
//       const cartItem = new CartItem(good.id_product, good.product_name, good.price, good.quantity);
//       cartHtml += cartItem.render();
//     })
//     document.querySelector('.basket').innerHTML = cartHtml;
//   }
//   moveCart(){
//     let activeBasket = document.querySelector('.basket');
//     activeBasket.classList.toggle('active-basket');
//   }
//   renderMoveCart(){
//     let elem = document.querySelector('.cart-button')
//     elem.addEventListener("click", () => this.moveCart());

    
//   }
//   qwer(){
//     // let addItem = document.querySelector('.goods-button')
//     // addItem.addEventListener('click', () => console.log(`${addItem.id}  push button`))
//     // console.log(`addItem push button`)
//     // let a = this.goods.find(item => item.id == 1);
//     // console.log(this.goods.product_name)
//   }
//   renderQwer(){
//     // console.log(addItem + ' push button')
//     //отрисовка корзины  
//     // addItem.addEventListener('click', () => console.log(addItem + ' push button'))
//   }
//   delItemCart(){
//     //удаляем товары 
//   }
//   render(){
//     //отрисовка корзины  
//   }
//   getOrder(){
//     //сформировать заказ
//   }
//   render(){
//     //отрисковка формирования заказа
//   }

  
// }


// const list = new GoodsList();

// list.fetchGoods();


// setTimeout(() => { list.render()}, 1000);
// setTimeout(() => {list.renderTotalPrice()}, 1000);


// const cart = new Cart();
// cart.getCart()
// setTimeout(() => {cart.renderCart()}, 1000); 

// cart.renderMoveCart()
// // cart.renderAddItemCart()

// cart.renderAddItemCart()


// // const basket = new CartItem();
// // basket.render()



const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        getProductUrl: '/getBasket.json',
        products: [],
        filteredGoods: [],
        searchLine: '',
        isVisible: false

    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        FilterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.products.filter(product => {
                return regexp.test(product.product_name);
            });
        },
        addProduct(product){
          console.log(`id товара - ${product.id_product}`);
      }
    },
    mounted(){
       this.getJson(`${API + this.catalogUrl}`)
           .then(data => {
               for(let el of data){
                   this.products.push(el);
                   this.filteredGoods.push(el)
               }
           });
        this.getJson(`${API + this.getProductUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filteredGoods.push(el)
                }
            })
    },
    computed: {
      moveCart() {
          return {
              isVisible: !this.isVisible,
              '': this.isVisible
          }
      }
  }
})
console.log(app.data)
