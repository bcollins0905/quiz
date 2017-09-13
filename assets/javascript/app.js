//variables


var optionsOne = {
				question: ["Who is known for singing in the highest ocative reachable in the human vocal range?"],
					a : 'A)  Minnie Riperton',
					b : 'B)  Nina Simone',
					c : 'C)  Diana Ross', 
					d : 'D)  Etta James'
				};

var optionsTwo = {
				question: ["Who was The Hardest Working Man in Show Business?"],
					a : 'A)  2Pac',
					b : 'B)  Bojangles',
					c : 'C)  Miles Davis', 
					d : 'D)  James Brown'
				};
var optionsThree = {
				question:["My dad was a soul and funk artist and I was instrumental to the popularization of Ganster Rap.  Who am I?"],
					a : 'A)  Andre Nikatina',
					b : 'B)  Eazy-E',
					c : 'C)  Notorious B.I.G.', 
					d : 'D)  Dr. Dre'
				};

var optionsFour = {
	question:["Who sits on the dock of the bay?"],
					a : 'A)  Otis Redding',
					b : 'B)  James Brown',
					c : 'C)  Sam Cooke', 
					d : 'D)  Sammy Davis Jr.'
				};
var optionsFive = {
			  question:["R-E-S-P-E-C-T"],
					a : 'A)  Bessie Smith',
					b : 'B)  Erykah Badu',
					c : 'C)  Aretha Franklin', 
					d : 'D)  Whitney Houston'
				};

var optionsSix = {
			  question:['Who was "Bird"?'],
					a : 'A)  Billie Holiday',
					b : 'B)  Ray Charles',
					c : 'C)  Louis Armstrong', 
					d : 'D)  Charlie Parker'
				};

var optionsSeven = {
			  question:["What will not be televised?"],
					a : 'A)  The Radio',
					b : 'B)  YouTube',
					c : 'C)  The Revolution', 
					d : 'D)  Spotify'
				};

//functions

$.each(optionsOne, function (key, value) { 
  var options = $('<div>');
  options.text(value);
  $('#choices1').append(options);
})

$.each(optionsTwo, function (key, value) { 
  var options = $('<div>');
  options.text(value);
  $('#choices2').append(options);
})

$.each(optionsThree, function (key, value) { 
  var options = $('<div>');
  options.text(value);
  $('#choices3').append(options);
})

$.each(optionsFour, function (key, value) { 
  var options = $('<div>');
  options.text(value);
  $('#choices4').append(options);
})

$.each(optionsFive, function (key, value) { 
  var options = $('<div>');
  options.text(value);
  $('#choices5').append(options);
})

$.each(optionsSix, function (key, value) { 
  var options = $('<div>');
  options.text(value);
  $('#choices6').append(options);
})

$.each(optionsSeven, function (key, value) { 
  var options = $('<div>');
  options.text(value);
  $('#choices7').append(options);
})

//Timer



/*How should I be writing my function so that the button div
is nested within the options div?

ok I rewrote my function but I don't know how to loop through just the object

Why is my timer starting right when the page loads. (Is it having to do with the true false.
also I copied directly so why is it not working on my page)
*/					


