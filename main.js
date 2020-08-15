window.addEventListener("load",start, false);

function start() {
	//Initializes the quotes, authors, and colors arrays
	const quotes = [
	  {
	    quote:'Be yourself, everyone else is already taken.',
	    author:'~ Oscar Wilde'
	  },
	  {
	    quote:'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.',
	    author:"~ Albert Einstein"
	  },
	  {
	    quote:'So many books, so little time.',
		author:'~ Frank Zappa'
	  },
	  {
	    quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
		author:'~ Bernard M. Baruch'
	  },
	  {
	    quote:'A room without books is like a body without a soul.',
		author:"~ Marcus Tullius Cicero"
	  },
	  {
	    quote:"You have gotta dance like there's nobody watching,<br>Love like you'll never be hurt,<br>Sing like there's nobody listening,<br>And live like it's heaven on earth.",
		author:'~ William W. Purkey'
	  },
	  {
	    quote:'You know you are in love when you cannot fall asleep because reality is finally better than your dreams.',
		author:'~ Dr.Seuss'
	  },
	  {
	    quote:'You only live once, but if you do it right, once is enough.',
		author:'~ Mae West'
	  },
	  {
	    quote:'Be the change that you wish to see in the world.' ,
		author:'~ Mahatma Ghandi'
	  },
	  {
	    quote:"In three words I can sum up everything I've learned about life: it goes on.",
		author:'~ Robert Frost'
	  },
	  {
	    quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
		author:'~ J.K. Rowling'
	  },
	  {
	    quote:"Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend",
		author:'~ Albert Camus'
	  },
	  {
	    quote:"No one can make you feel inferior without your consent." ,
		author:'~ Eleanor Roosevelt'
	  },
	  {
	    quote:"Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .",
		author:'~ C.S. Lewis'
	  },
	  {
	    quote:"If you tell the truth, you do not have to remember anything.",
		author:'~ Mark Twain'
	  },
	  {
	    quote:"I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
		author:'~ Maya Angelou'
	  },
	  {
	    quote:'A friend is someone who knows all about you and still loves you.',
		author:'~ Elbert Hubbard'
	  },
	  {
	    quote:'Always forgive your enemies; nothing annoys them so much.',
		author:'~ Oscar Wilde'
	  },
	  {
	    quote:'To live is the rarest thing in the world. Most people exist, that is all.',
		author:'~ Oscar Wilde'
	  },
	  {
	    quote:'Live as if you were to die tomorrow. Learn as if you were to live forever.' ,
		author:'~ Mahatma Ghandi'
	  },
	  {
	    quote:'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
		author:'~ Martin Luther King Jr'
	  },
	  {
	    quote:'I am so clever that sometimes I do not understand a single word of what I am saying.',
		author:'~ Oscar Wilde'
	  },
	  {
	    quote:'Without music, life would be a mistake.',
		author:"~ Friedrich Nietzsche"
	  },
	  {
	    quote:'We accept the love we think we deserve.',
		author:'~ Stephen Chbosky'
	  },
	  {
	    quote:'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
		author:'~ Ralph Waldo Emerson'
	  },
	  {
	    quote:"Google is your best friend",
	    author:"~ Developers"
	  }
	]
	
	const colours = [
	  {
	    back:"#29335c",
	    frame:"#773344"
	  },
	  {
	    back: "#0e0e0c",
	    frame:'#f71d15'
	  },
	  {
	    back: "#ff5500",
	    frame:"0e0e0c"
	  },
	  {
	    back: "#eb996e",
	    frame:"#352748"
	  },
	  {
	    back: "black",
	    frame:"red",
	  },
	  {
	    back:'yellow',
	    frame:'black'
	  },
	  {
	    back:"#452542",
	    frame: "#2fac85"
	  },
	  {
	    back:"#d03d30",
	    frame:"aed017"
	  },
	  {
	    back: "#f49469",
	    frame:"#1c0e36"
	  },
	  {
	    back:"#5db04c",
	    frame:"#fed217"
	  }
	]
	
	document.querySelector('button').addEventListener('click', ()=>{change(quotes,colours)}, false);
}


function change(quotes,colours)
{
	/*
	Animation function that changes the quotes displayed on the screen
	*/
	
	//Gets DOM elements
	var theme = document.querySelectorAll("meta")[2]
	var body = document.querySelector('body');
	var frame = document.querySelector('.quote')
	var quote = document.querySelector('.quote div');
	var author = document.querySelector('span');
	var quoteIndex = Math.floor(Math.random() * (quotes.length));
	var colorIndex = Math.floor(Math.random() * (colours.length));
	
	//Sets styles and texts
	body.style.backgroundColor = colours[colorIndex].back;
	frame.style.backgroundColor = colours[colorIndex].frame;
	quote.innerHTML = quotes[quoteIndex].quote
	author.innerText = quotes[quoteIndex].author
	theme.content = colours[colorIndex].back;
}	

function opaque(x)
{
	if(a == 100){clearInterval(id)}
	else{x.style.opacity = a/100; a+=1}
}