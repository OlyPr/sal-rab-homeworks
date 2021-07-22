// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + через дефис телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - адрес доставки
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {
  //  console.log('name=' ,name);
  ///  console.log('phone=' ,phone);
  //  console.log('address=' ,address);
  //  console.log('goods=' ,goods);
  //  console.log('sum=' ,sum);

    let data = {client: name + ' '+/*' - ' +*/ phone, order: {}, goods: [{}]};

    data.order.address = 'ул. '+address.street +', дом '+address.house +', '+address.entrance +' подъезд, '+address.floor +' этаж, кв '+address.flat;
    data.order.sum = sum;

    // - goods: массив объектов с информацией о позициях заказа:
    //     - title - название позиции
    //     - count - количество в заказе
    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
     //   console.log('goods=' ,goods[i].title);
        let obj={};
        obj.title=goods[i].title;
        obj.count=goods[i].count;
       // console.log('obj=' ,obj);
      //  data.goods.push(obj);
        data.goods[i]=obj;
       // console.log('data.goods[i]=' ,data.goods[i]);   
       /// console.log('data.goods=' ,data.goods);   
       //  data.goods.push(obj);
    };

   // console.log('data=' ,data);
    let test={};
     /*  Создана дополнительная вложенность, т.к. в тесте требуется строка вида {"date":{"client":"Василий Иванович

       если формировать без нее, то сразу идет client и т.д.
     */
    test.data=data;
   // console.log('jsonData=' ,JSON.stringify(test));
   //let jsonData = JSON.stringify(data);
 //   console.log('jsonData=' ,jsonData);
 //   let jsonData1 = JSON.parse(data);

   // console.log('jsonData=' ,jsonData);
   // return jsonData;
   let jsonData = JSON.stringify(test);  
   return jsonData;
}
