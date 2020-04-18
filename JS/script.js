const goods = [
    { image: 'photo', title: 'Shirt', price: 150},
    { image: 'photo', title: 'Socks', price: 50 },
    { image: 'photo', title: 'Jacket', price: 350 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
    { image: 'photo', title: 'Shoes', price: 250 },
  ];
  
const renderGoodsItem = (image, title, price) => {
    return `<div class="goods-item">
                  <img class="img-goods" src="${image}" alt="photo-goods">
                <div class="inf-goods">
                  <h3 class="name-goods">${title}</h3>
                  <p class="price-goods">${price}</p>
                  <button class="goods-button" type="button"> Добавить в корзину</button>
                </div>
            </div>`;
  };
  
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join("");
  }
  
renderGoodsList(goods);
//запятую убралс помощью .join(" ");
//Не много не понял второе задание - я бы убрал масив с объектом и передавл новые значения через функцию,
//новые значения передвал бы через вызов функции  
  