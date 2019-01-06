
			/* IIFE */

(function() {
	var number = Math.random() * 10;
	console.log(number >= 5);
})();

(function(years) {
	var age = Math.random() * 10;
	console.log(number >= 5 - years);
})(3);

(function () {
	var score = Math.random() * 10;
	console.log(score >= 5);
})();

(function (goodluck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodluck);
})(5);