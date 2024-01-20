function resizeAllGridItems() {
    const allItems = document.getElementsByClassName('photo');

    for(let x = 0; x < allItems.length; x++){
        resizeGridItem(allItems[x]);
    }
}

function resizeGridItem(item) {
    // getting parent element
    const grid = document.getElementsByClassName('gallery')[0];

    // getting styles of parent element
    const computedStyles = window.getComputedStyle(grid);

    // getting grid-auto-rows and grid-row-gap properties of parent element
    const rowHeight = parseInt(computedStyles.getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(computedStyles.getPropertyValue('grid-row-gap'));

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

