var chalk=require('chalk');

function dog(name) {
	this.name=name;
		this.stomach=[];
	// body...
}
	dog.prototype.eat = function(cat) {
		// body...
		this.stomach.push(cat);
	};

	dog.prototype.sayhi=function(){
		console.log('chao ban dog . my name is ' + chalk.blue(this.name));
	}
module.exports=dog;