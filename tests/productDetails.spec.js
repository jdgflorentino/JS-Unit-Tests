const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
	let product = productDetails('Alcool', 'Mascara');
  it('Verifica se productDetails é uma função.', () => {
    // Teste se productDetails é uma função.
		expect(typeof productDetails).toBe('function');
	}),
    // Teste se o retorno da função é um array.
	it('Verifica se a função `productDetails` retorna um array.', () => {
			expect(product).toEqual(expect.any(Array));
	}),
	it('Verifica se a função `productDetails` retorna um array.', () => {
		expect(product).toBeInstanceOf(Array);
  }),
	// Teste se o array retornado pela função contém dois itens dentro.
	it('Verifica se o array retornado pela função contém dois itens dentro.', () => {
		expect(product.length).toBe(2);
  }),
	// Teste se os dois itens dentro do array retornado pela função são objetos.
	it('Verifica se os dois itens dentro do array retornado pela função são objetos', () => {
		expect(typeof product[0] === 'object' && typeof product[1] === 'object' ).toEqual(true);
  }),
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
	it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
		expect(product[0] !== product[1]).toEqual(true);
	});
    // Teste se os dois productIds terminam com 123.
	it('Verifica se dois productIds terminam com 123.', () => {
		str1 = product[0].details.productId;
		str2 = product[1].details.productId;
		expect(str1.slice(str1.length -3) && str2.slice(str2.length -3)).toMatch('123');
	});
});

