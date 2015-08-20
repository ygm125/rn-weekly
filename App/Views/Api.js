'use strict';

var Weekly = require('./Weekly');

var Api = {
	getItem : function(id){
		var ret = null;
		Weekly.some((item) => {
			if(item.id == id){
				ret = item;
				return true;
			}
		});
		return ret;
	},
	parseData : function(item,str){
		var links = [];

		if(item.id == 1){
			/<title>.*?<\/title>/.exec(str)
			str.replace(/<title>(.*?)<\/title>\s*<link>(.*?)<\/link>/g,function($0,$1,$2){
				links.push({
					url : $2,
					text : $1
				})
			});

		}else if(item.id == 2){
			
		}

		return links;
	},
	analyzeId : function(id,cb){
		var item = this.getItem(id);
		if(item){
			fetch(item.home)
			.then((res)=>{
				return res.text();
			})
			.then((resText)=>{
				var data = this.parseData(item,resText);
				cb(data);
			});
		}else{
			cb(null);
		}
	}
}

module.exports = Api;
