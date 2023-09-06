const sel = (q) => document.querySelector(q);
const selAll = (q) => document.querySelectorAll(q);

const options = sel('#options-lista').children;
const expanded = new Map();
// debugger;

for (let i = 0; i < options.length; i++) {

    const item = options[i];
    const subitem = item.querySelector('.sub-options');
    const seta = item.querySelector('.fa-chevron-right');

    subitem.style.height = 0;
    subitem.style.display = 'none';
    expanded.set(i, false);

    item.querySelector('.lista__option').addEventListener('click', () => {
        // console.table(expanded);
        if (expanded.get(i)) {
            subitem.style.height = 0;
            subitem.style.display = 'none';
            seta.style.rotate = 'none';
            expanded.set(i, false);
        }
        else {
            subitem.style.height = null;
            subitem.style.display = null;
            seta.style.rotate = '90deg';
            expanded.set(i, true);
        }
    })


    // console.log(typeof (i));
}


