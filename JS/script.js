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
  var xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class GoodsItem {
  constructor(product_name, price,) {
    // this.image = image;
    this.product_name = product_name;
    this.price = price;
  }

  render() {
    return `<div class="goods-item">
                       <img class="img-goods" src="./img/icon-cart.svg" alt="photo-goods">
                     <div class="inf-goods">
                       <h3 class="name-goods">${this.product_name}</h3>
                       <p class="price-goods">${this.price}</p>
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
    // const readFile = () =>{
    //   const promis = new Promis ((resolve, reject) => {

    //     setTimeout(() => {

    //       resolve(
    //         makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
    //         this.goods = JSON.parse(goods)
    //         })
    //       )

    //     }, 1);
    //   })
    //   return promis
    // }
        

     
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
    })
  }



  render() {
    

    // const promis1 = new Promis ((resolve1, reject) => {

    //   setTimeout(() => {

    //     resolve1(
    //         let listHtml = '' ;
    //         this.goods.forEach(good => {
    //         const goodItem = new GoodsItem(good.product_name, good.price,);
    //         listHtml += goodItem.render();
    //         });
    //         document.querySelector('.goods-list').innerHTML = listHtml;
    //         )
        
    //   }, 1000);
  
    // });



    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price,);
      listHtml += goodItem.render();
    })
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  calculateTotalPrice(){
    let totalSum = 0;
    this.goods.forEach((good) => {
      if (good.price !== undefined){
        totalSum += good.price;
      }
    });
    return totalSum
  }
  renderTotalPrice(){
    let totalPriceCart = `Сумма:   ${this.calculateTotalPrice()}`;
    document.querySelector('.total-price').innerHTML = totalPriceCart;
  }

 
}
class CartItem{
  constructor(product_name, price,) {
    // this.image = image;
    this.product_name = product_name;
    this.price = price;
  }

  render() {
    return `<p>kuku</p>`
  };
}



class Cart{
  constructor(){
    this.goods = [];
  }
  getCart(){
      makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
    })
  }

  render(){
      let listHtml = '';
      this.goods.forEach(good => {
      const cartItem = new CartItem(good.product_name, good.price,);
      listHtml += cartItem.render();
    })
    document.querySelector('.basket .active-basket').innerHTML = listHtml;
  }
  


  
  moveCart(){

    let activeBasket = document.querySelector('.basket');
    activeBasket.classList.toggle('active-basket');
    
  }
  renderElem(){
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

;


const cart = new Cart();
cart.getCart()
setTimeout(() => {cart.render()}, 1000); 


cart.renderElem()



// const basket = new cartItem();
// basket.render()