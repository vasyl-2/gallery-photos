

function resizeAllGridItems(){
    const allItems = document.getElementsByClassName("photo");
    for(let x=0; x<allItems.length; x++){
        resizeGridItem(allItems[x]);
    }
}

function resizeGridItem(item) {
    const grid = document.getElementsByClassName("gallery")[0];
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    console.log('ROW___HEIGHT________', rowHeight);
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    let rowSpan;
    if(!!item.querySelector('.content')) {
        rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));

    } else {
        console.log('WRONG_____', item)
    }
    console.log('ROW___rowSpan_______', rowSpan);
    item.style.gridRowEnd = "span "+rowSpan;
}

resizeAllGridItems();
