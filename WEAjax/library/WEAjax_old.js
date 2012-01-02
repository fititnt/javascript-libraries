

/**
 * Cria uma tabela em HTML baseada em uma entrada JSON
 * 
 *
 * @return void Imprime no elemento de ID OutputElement o O resultado de JSONUrl
 */
var WEAjaxList = new Class({
	Implements: [Options, Events],
	options: {
		url:'index.php', //The url for JSON
		query:{
			queryraw: null, //Remove this line on production
			table: null,
			where: null,
			start: 0,
			limit: 1000,
			resulttype: null,
			resultparam: null
		},
		data: null,
		we:{
			data: null,
			remoteData: null
		},
		select:{
			id: null
		}
		
	},
	initialize: function(options){
		this.setOptions(options);
		//console.log(this.options);
	//this.getData();
	},
	
	getData: function(customOptions)
	{
		this.getRemoteData(customOptions,function(response, text){
			this.setData(response);
		}.bind(this)
		
	);
		console.log(this.options.data);
		return this;
	},
	
	getRemoteData: function(customOptions, callback)
	{
		var self = this;
		var remoteData;
		//console.log(this.options.we.remoteData);
		if(!customOptions){
			customOptions = this.options.query;
		}
		var requested = new Request.JSON({
			url: this.options.url, 
			onRequest: function(){
			//Fired when the Request is sent.
			},
			onComplete: function(response, text){
				
				//Return raw response:
				//self.options.we.remoteDataRAW = text;
				remoteData = response;//Maybe use just for debug?
				callback(response,text);
				
				//console.log(this.options.we.remoteData);
			}.bind(this),
			onError: function(text, error){
				console.error(error);
			}
		}).post(customOptions);
		
		console.dir(remoteData);
		this.options.we.remoteData = remoteData;
		
		return this;
	},
	setSelect: function( options )
	{
		//var self = this;
		if(options.select){
			this.options.select = options.select;
		}
		
		if(options.remote){
			this.options.remote = options.remote;
		}
		this.getData(options.remote);
		//console.dir(this.options.data);
		
		//document.id(select.id);
		Array.each(this.options.we.remoteData, function(item, i){
			new Element('option', {
				'value': i, 
				'text':item
			}).inject(document.id(options.select.id));
			//console.log(item);
		}
		)
		//console.log(this.options.we.remoteData);
		return this;
	//console.log(self.options, select);
		
	},
	
	setData: function (data){
		this.options.data = data;
	},
	setQueryOpt: function (query){
		this.options.query = query;
	}

});