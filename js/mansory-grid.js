

function resizeAllGridItems(){
    const allItems = document.getElementsByClassName("photo");
    for(let x=0; x<allItems.length; x++){
        resizeGridItem(allItems[x]);
    }
}

function resizeGridItem(item) {
    // getting parent element
    const grid = document.getElementsByClassName("gallery")[0];

    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

    console.log('ROW___HEIGHT________', rowHeight);
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));

    const content = item.querySelector('.content');

    // getting height of photo element
    const { height } = content.getBoundingClientRect();
    const calculated = (height + rowGap) / (rowHeight + rowGap);
    const rowSpan = Math.ceil(calculated);

    console.log('ROW___rowSpan_______', rowSpan);
    
    item.style.gridRowEnd = `span ${rowSpan}`;
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

