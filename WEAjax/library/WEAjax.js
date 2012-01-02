

/**
 * Cria uma tabela em HTML baseada em uma entrada JSON
 * 
 *
 * @return void Imprime no elemento de ID OutputElement o O resultado de JSONUrl
 */
var WEAjaxList = new Class({
	Implements: [Options, Events],
	options: {
		url: null, //The url for JSON
		data: null,
		element: {
			id: null
		},
		request: {
			queryraw: null, //Remove this line on production
			table: null,
			where: null,
			start: 0,
			limit: 1000,
			resulttype: null,
			resultparam: null
		}
		
	},
	initialize: function(options){
		this.setOptions(options);
	},
	
	getData: function(callback)
	{
		new Request.JSON({
			url: this.options.url, 
			onComplete: function(response, text){
				callback(response,text);
			},
			onError: function(text, error){
				console.error(error);
			}
		}).post(this.options.request);		
		return this;
	},
	getSelect: function( )
	{
		var element = this.options.element;
		this.getData(function(response, text){
			Array.each(response, function(item, i){
				new Element('option', {
					'value': item, //i
					'text':item
				}).inject(document.id(element.id));
			}
			)
		});
		
		return this;
	},
	setElement: function (element){
		this.options.element = element;
	},
	setData: function (data){
		this.options.data = data;
		return this;
	},
	setRequest: function (request){
		this.options.request = request;
		return this;
	}

});