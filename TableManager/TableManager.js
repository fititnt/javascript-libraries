/**
 * Cria uma tabela em HTML baseada em uma entrada JSON
 * 
 * @param JSONUrl O enderedo de onde os dados devem ser pegos
 * @param OutputElement O id do elemento que sera usado para imprimir o resultado
 *
 * @return void Imprime no elemento de ID OutputElement o O resultado de JSONUrl
 */
var TableManager = new Class({
	Implements: [Options, Events],
	options: {
	},
	initialize: function(options){
		this.setOptions(options);
	}
});