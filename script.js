let moreBtn = document.getElementById('more');

let card = document.querySelector('.card');



moreBtn.onclick = (event) => {

    let cln = card.cloneNode(true);


    card.parentNode.insertBefore(cln, moreBtn)

}

moreBtn.onmouseover = (event) => {
    moreBtn.style.cssText = 'cursor: pointer;'
}


///


let likes = document.querySelector('.likes');
// let likesB = document.querySelector('.likes b');



const toggleHeart = (elemento) => {
    let heart = elemento.childNodes[1]
    let likesMore = heart.nextElementSibling


    console.log(heart.src)

    if (heart.src.includes('/img/icons/heart.svg')) {
        heart.src = '/img/red-heart.png'
        likesMore.textContent = '2 likes'

    } else {
        heart.src = '/img/icons/heart.svg'
        likesMore.textContent = '1 likes'
    }
};




likes.onmouseover = (event) => {
    likes.style.cssText = 'cursor: pointer;'
}


////
let search = document.querySelector('.busca')


search.onmouseover = (event) => {
    search.style.cssText = 'box-shadow: 0px 1px 3px black;'

}

search.onmouseout = (e) => {
    search.style.cssText = 'box-shadow:0;'
}