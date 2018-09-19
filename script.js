const quotes = [


{

name: 'Gucci Mane',
quote: 'If a man does not have sauce, then he is lost. But the same man can get lost in the sauce.'


}
,
{

name: 'Elon Musk',
quote: 'When something is important enough, you do it even if the odds are not in your favor.'


}
,
{

name: 'Kanye West',
quote: 'People always tell you Be humble. Be humble. When was the last time someone told you to be amazing? Be great! Be great! Be awesome! Be awesome!'


}
,
{

name: 'Frank Ocean',
quote: 'The Internet made fame wack and anonymity cool.'


}
,
{

name: 'Sten Nadolny, Die Entdeckung der Langsamkeit',
quote: 'Learning and seeing are more important than education. '


}

]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote (){


let number = Math.floor(Math.random()*quotes.length);
console.log(number);

}