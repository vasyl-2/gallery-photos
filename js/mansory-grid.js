function resizeAllGridItems() {
    const allItems = document.getElementsByClassName('photo');

    for(let x = 0; x < allItems.length; x++){
        resizeGridItem(allItems[x]);
    }
}

function resizeGridItem(item) {
    // getting parent element
    const grid = document.getElementsByClassName('gallery')[0];

    // getting grid-auto-rows property of parent element
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

    // getting grid-row-gap property of parent element
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));

    const content = item.querySelector('.content');
    
    // getting height of photo element
    const { height } = content.getBoundingClientRect();
    const calculated = (height + rowGap) / (rowHeight + rowGap);

    const rowSpan = Math.ceil(calculated);

    // set grid-row-end property on photo element
    item.style.gridRowEnd = `span ${rowSpan}`;
}

window.onload = resizeAllGridItems();
window.addEventListener('resize', resizeAllGridItems);

