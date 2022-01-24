const createMenu = require('../src/restaurant');
 
describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it ('Verifique se o retorno da função createMenu() é um objeto que possui a chave fetchMenu, a qual tem como valor uma função.', () => {
    expect(typeof createMenu().fetchMenu).toBe('function');
	}),
  it ('Verifique se "objetoRetornado.fetchMenu()" retorna um objeto cujas chaves são somente `food` e `drink`, considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.', () => {
    const meuRestaurante = createMenu({ food: {}, drink: {} });
		expect(Object.keys(meuRestaurante.fetchMenu())).toEqual(["food", "drink"]);
	}),
	it ('Verifique se o menu passado pra função createMenu é identico ao menu recuperado pela função "objetoRetornado.fetchMenu".', () => {
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
		expect(meuRestaurante.fetchMenu()).toEqual({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
	}),
  it ('Verifique se "objetoRetornado.consumption", após a criação do menu, retorna um array vazio.', () => {
    const meuRestaurante = createMenu();
		expect(meuRestaurante.consumption).toEqual([]);
	}),
	it ('Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro (como `objetoRetornado.order("coxinha")`), tal string é adicionada ao array retornado em `objetoRetornado.consumption`.', () => {
    const meuRestaurante = createMenu();
		meuRestaurante.order('coxinha');
		expect(meuRestaurante.consumption).toEqual(['coxinha']);
	}),
	it ('Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
    const meuRestaurante = createMenu();
		meuRestaurante.order('coxinha');
		meuRestaurante.order('agua');
		meuRestaurante.order('sopa');
		meuRestaurante.order('sashimi');
		expect(meuRestaurante.consumption).toEqual(["coxinha", "agua", "sopa", "sashimi"]);
	}),
	it ('Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.', () => {
    const meuRestaurante = createMenu();
		meuRestaurante.order('coxinha');
		meuRestaurante.order('agua');
		meuRestaurante.order('coxinha');
		expect(meuRestaurante.consumption).toEqual(['coxinha', 'agua', 'coxinha']);
	}),
	it ('Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption.', () => {
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
		meuRestaurante.order('coxinha');
		meuRestaurante.order('agua');
		meuRestaurante.order('coxinha');
		expect(meuRestaurante.pay()).toEqual(11.70);
  });
});
