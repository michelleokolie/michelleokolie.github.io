let stickyBlock = document.querySelector('.title');
let origOffsetY = stickyBlock.offsetTop;

function onScroll() {
    window.scrollY >= origOffsetY ? stickyBlock.classList.add('sticky') :
        stickyBlock.classList.remove('sticky');
}

document.addEventListener('scroll', onScroll);