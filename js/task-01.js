const categoriesItemsRef = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesItemsRef.length);
console.log('\n');

categoriesItemsRef.forEach((category) => {
    console.log(`Category name:${category.firstElementChild.textContent}`);
    console.log('Elements:', category.lastElementChild.children.length);
    console.log('\n');
})