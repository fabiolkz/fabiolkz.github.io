let title = document.querySelector('#title').textContent;
let subtite = document.querySelector('#sub-title').textContent;

titleArray = title.split('');

console.log (titleArray);

for (i = 0; i < titleArray.length; i++) {
    subtite.textContent = i;
}