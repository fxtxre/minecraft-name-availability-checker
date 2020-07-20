const cherio = require('cheerio');
const rp = require('request-promise');
const Table = require('cli-table');
const fs = require('fs'), readline = require('readline');


var rd = readline.createInterface({
	input: fs.createReadStream('Name.txt'),
	console: false
	
});

console.log("Minecraft ID Checker\n");

var options = {
	url: 'https://axis.iaero.me/accinfo?username=', 
	json:true,
	method: 'GET',
}
		rd.on('line', function(line){
			options.url = 'https://axis.iaero.me/accinfo?username=' + line + '&format=json';
			rp(options).then((data_local) =>{
				let userData = [];
				for(let user in data_local.data){
						//userData.push({uuid: data_local.data.uuid});
						//console.log(data_local.data.username);
						if(data_local.data.username == null){
							fs.appendFile('here.txt', '\n free: ' + line, function(err){
								
							});
							
							console.log('free:' + line); 
						}else{
							//console.log('not free:' + line);
							//fs.appendFile('here.txt', '\n not free: ' + line, function(err){
								
							//});
						}
						break;
				}
		
			});		
		});
