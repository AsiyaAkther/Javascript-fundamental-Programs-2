let scroller = 0;
window.addEventListener("scroll", () => {
    let newScroller = window.scrollYOffset || document.documentElement.scrollTop
    if( newScroller > scroller){
        console.log("Scroller is down");
    }else{
        console.log("Scroller is up");
    }
    scroller = newScroller;
})