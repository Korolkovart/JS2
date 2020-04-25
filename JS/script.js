// const goods = [
//     { image: 'photo', title: 'Shirt', price: 150},
//     { image: 'photo', title: 'Socks', price: 50 },
//     { image: 'photo', title: 'Jacket', price: 350 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//     { image: 'photo', title: 'Shoes', price: 250 },
//   ];
  
// const renderGoodsItem = (image, title, price) => {
//     return `<div class="goods-item">
//                   <img class="img-goods" src="${image}" alt="photo-goods">
//                 <div class="inf-goods">
//                   <h3 class="name-goods">${title}</h3>
//                   <p class="price-goods">${price}</p>
//                   <button class="goods-button" type="button"> Добавить в корзину</button>
//                 </div>
//             </div>`;
//   };
  
// const renderGoodsList = (list=goods) => {
//     let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.price));
//     document.querySelector('.goods-list').innerHTML = goodsList.join("");
//   }
  
// renderGoodsList(goods);
// //запятую убралс помощью .join(" ");
// //Не много не понял второе задание - я бы убрал масив с объектом и передавл новые значения через функцию,
// //новые значения передвал бы через вызов функции  

// const addToCart = document.querySelector('goods-button');
// addToCart.addEventListener("click");

function makeGETRequest(url, callback) {
  return new Promise((resolve, reject) => {
      let xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject;
      xhr.open("GET", url, true);
      xhr.onload = () => resolve(callback(xhr.responseText));
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }
// function makeGETRequest(url, callback) {
//   var xhr;

//   if (window.XMLHttpRequest) {
//     xhr = new XMLHttpRequest();
//   } else if (window.ActiveXObject) { 
//     xhr = new ActiveXObject("Microsoft.XMLHTTP");
//   }

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       callback(xhr.responseText);
//     }
//   }

//   xhr.open('GET', url, true);
//   xhr.send();
// }

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class GoodsItem {
  constructor(id_product,product_name, price,) {
    this.id_product = id_product;
    this.product_name = product_name;
    this.price = price;
  }

  render() {
    return `<div class="goods-item">
                       <img class="img-goods" src="./img/icon-cart.svg" alt="photo-goods">
                     <div class="inf-goods">
                      <span> #${this.id_product}</span>
                       <h3 class="name-goods">${this.product_name}</h3>
                       <p class="price-goods">${this.price} ₽</p>
                       <button class="goods-button" type="button"> Добавить в корзину</button>
                     </div>
                 </div>`;
  };
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
    })
  }



  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
      listHtml += goodItem.render();
    })
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  calculateTotalPrice(){
    let totalSum = 0;
    this.goods.forEach((good) => {
        totalSum += good.price;
    });
    return totalSum
  }
  renderTotalPrice(){
    let totalPriceCart = `Сумма:   ${this.calculateTotalPrice()}`;
    document.querySelector('.total-price').innerHTML = totalPriceCart;
  }
}

class CartItem{
  constructor(id_product, product_name, price,) {
    this.id_product = id_product;
    this.product_name = product_name;
    this.price = price;
  }

  render() {
    return `<div class="basket-item">
            <span>${this.id_product}</span>
            <h2 class="title-basket-item">${this.product_name}</h2>
            <span class="price-basket-item">${this.price} ₽</span>
            <button class="cart-button" type="button">Удалить</button>
            </div>`;
  };
}

class Cart{
  constructor(){
    this.goods = [];
  }
  getCart(){
      makeGETRequest(`${API_URL}/getBasket.json`, (goods) => {
      this.goods.contents = JSON.parse(goods);
      console.log(this.goods.contents)
    })
  }

  renderCart(){
      let cartHtml = '';
      this.goods.forEach((good) => {
      const cartItem = new CartItem(good.id_product, good.product_name, good.price);
      cartHtml += cartItem.render();
    })
    document.querySelector('.basket').innerHTML = cartHtml;
  }
  moveCart(){
    let activeBasket = document.querySelector('.basket');
    activeBasket.classList.toggle('active-basket');
  }
  renderMoveCart(){
    let elem = document.querySelector('.cart-button')
    elem.addEventListener("click", () => this.moveCart());
    
  }

  addItemCart(){
    //добавляем товары 
  }
  render(){
    //отрисовка корзины  
  }
  delItemCart(){
    //удаляем товары 
  }
  render(){
    //отрисовка корзины  
  }
  getOrder(){
    //сформировать заказ
  }
  render(){
    //отрисковка формирования заказа
  }

  
}


const list = new GoodsList();

list.fetchGoods();


setTimeout(() => { list.render()}, 1000);
setTimeout(() => {list.renderTotalPrice()}, 1000);


const cart = new Cart();
cart.getCart()
setTimeout(() => {cart.renderCart()}, 1000); 

cart.renderMoveCart()



// const basket = new CartItem();
// basket.render()