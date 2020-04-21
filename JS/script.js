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

class GoodsItem {
  constructor(image, title, price,) {
    this.image = image;
    this.title = title;
    this.price = price;
  }

  render() {
    return `<div class="goods-item">
                       <img class="img-goods" src="${this.image}" alt="photo-goods">
                     <div class="inf-goods">
                       <h3 class="name-goods">${this.title}</h3>
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
    this.goods = [
      {image: 'img/icon-cart.svg', title: 'Shirt', price: 150, },
      {image: 'img/icon-cart.svg', title: 'Socks', price: 50, },
      {image: 'img/icon-cart.svg',title: 'Jacket', price: 350, },
      {image: 'img/icon-cart.svg', title: 'Shoes', price: 250, }
    ];
  }
  calculateTotalPrice(){
    let totalSum = 0;
    this.goods.forEach((good) => {
      totalSum += this.price;
    });
    console.log(totalSum)
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.image, good.title, good.price,);
      listHtml += goodItem.render();
    })

    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}


const list = new GoodsList();
list.fetchGoods();
list.render();
