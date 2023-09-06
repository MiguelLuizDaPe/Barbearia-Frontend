const sel = (q) => document.querySelector(q);
const selAll = (q) => document.querySelectorAll(q);

const options = sel('#options-lista').children;
const expanded = new Map();
// debugger;

for (let i = 0; i < options.length; i++) {

    const item = options[i];
    const subitem = item.querySelector('.sub-options');
    const seta = item.querySelector('.fa-chevron-right');
    const h = -1;

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
            // h = -1
        }
        else {
            subitem.style.height = null;
            subitem.style.display = null;
            seta.style.rotate = '0.25turn';
            expanded.set(i, true);
            // if (h === -1) {
            //     item = options[i];
            //     subitem = item.querySelector('.sub-options');
            //     seta = item.querySelector('.fa-chevron-right');
            //     subitem.style.height = 0;
            //     subitem.style.display = 'none';
            //     seta.style.rotate = 'none';
            //     expanded.set(h, false);
            // }
            // h = i


        }
    })

    // console.log(typeof (i));
}

const listItems = document.querySelector('#lista').children;
const telaAtras = document.querySelector('.customer')
const modal = document.querySelector('.customer-edit');


for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];

    item.addEventListener('click', () => {
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column'
        // modal.classList.add('ativo')
        // telaAtras.style.display = 'none'

        // modal.style.position = 'absolute';
    })

}


// for(){

// }


