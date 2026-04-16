import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Bem vindo ao seu carrinho de compras!");

//criando dois itens
const item1 = await createItem("Caixa de som", 99.99, 1);
const item2 = await createItem("Fone de ouvido", 50.00, 3);

// adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);


await cartService.displaycart(myCart);
// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);
await cartService.calculateTotal(myCart);
