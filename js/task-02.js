const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsItems = ingredients.map((ingredient) => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');

    return listItem;
});

const ingredientsListRef = document.querySelector('#ingredients');
ingredientsListRef.append(...ingredientsItems);
