let share = document.querySelector('.article-preview .info .bottom .share .icon');
let popup = document.querySelector('.article-preview .info .bottom .share .popup');
let svg = document.querySelector('svg.share-svg path');

let active = false;
share.addEventListener('click', function() {
    active = (active) ? false : true;
    if(active) {
        popup.style.display = 'flex';
        share.style.backgroundColor = '#6d829a';
        svg.setAttribute('fill', '#ffffff');
        setTimeout(function() {
            popup.style.opacity = '1';
        }, 100);
    } else {
        popup.style.opacity = '0';
        share.style.backgroundColor = '#edf2f8';
        svg.setAttribute('fill', '#6d829a');
        setTimeout(function() {
            popup.style.display = 'none';
        }, 200);
    }
})