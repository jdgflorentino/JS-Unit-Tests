/* eslint-disable max-len */

let restaurant = {};

const orderFromMenu = (pedido) => { restaurant.consumption.push(pedido); };

const createMenu = (objeto) => {
restaurant = {
fetchMenu: () => objeto,
consumption: [],
order: orderFromMenu,
pay: () => {
const menu = Object.entries(restaurant.fetchMenu());
const valores = Object.assign(menu[0][1], menu[1][1]);
let soma = 0;
for (let index = 0; index < restaurant.consumption.length; index += 1) {
soma += valores[restaurant.consumption[index]];
}
return soma;
},
};
return restaurant;
};

module.exports = createMenu;
