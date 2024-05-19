let quote = [
    {
        quote : 'Be yourself; everyone else is already taken.',
        author: '-- Oscar Wilde',
    },
    {
        quote : 'A room without books is like a body without a soul.',
        author: '-- Marcus Tullius Cicero',
    },
    {
        quote : 'You only live once, but if you do it right, once is enough',
        author: '-- Mae West',
    },
    {
        quote : 'Be the change that you wish to see in the world.',
        author: '-- Mahatma Gandhi',
    },
    {
        quote : "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart",
        author: '-- Roy T. Bennett',
    },
    {
        quote : 'Success is not how high you have climbed, but how you make a positive difference to the world.',
        author: '-- Roy T. Bennett',
    },
    {
        quote : 'Control Your Own Destiny or Someone Else Will',
        author: '-- Jack Welch',
    },
    {
        quote : 'Curiosity is the engine of achievement.',
        author: '-- Ken Robinson',
    },
    
]




function newQuote(){

    let random = Math.floor(Math.random() * quote.length);
    document.getElementById('quote').innerHTML = `<i class="fa-solid fa-quote-left"></i> ${quote[random].quote} <i class="fa-solid fa-quote-right"></i>`;
    document.getElementById('author').innerHTML = `${quote[random].author}`;
    
}


