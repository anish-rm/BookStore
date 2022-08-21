const form = document.querySelector('.myform');
const table = document.querySelector('.table');
const display = document.querySelector('.rows');
const warn = document.querySelector('.warn');
const id1 = document.querySelector('.idd');
let i=1;
const updateUI = ((title,author,id)=>{

    
    if(i%2!=0){
        const html = `
        <tr class="disp">
        <th scope="row" class="id${i}">${i}</th>
        <th scope="row">${title}</th>
        <th scope="row">${author}</th>    
        <th scope="row" class="d-flex justify-content-between align-items-center">${id} <i class="far fa-trash-alt delete"></i></th>        
        </tr>`;
        display.innerHTML+=html;
    }
    else{
        const html = `
        <tr class="disp2">
        <th scope="row">${i}</th>
        <th scope="row">${title}</th>
        <th scope="row">${author}</th>    
        <th scope="row" class="d-flex justify-content-between align-items-center">${id} <i class="far fa-trash-alt delete"></i></th>        
        </tr>`;
        display.innerHTML+=html;
    }
    i=i+1;
});

const warning = (()=>{
    warn.classList.remove('d-none');
    id1.classList.add('wborder');
});

form.addEventListener('submit',e=>{
    e.preventDefault();
    const title = form.title.value;
    const author = form.author.value;
    const id = form.id.value;
    console.log(id.length);
    if(id.length==0){
        warning();
    }
    else{
    warn.classList.add('d-none');
    id1.classList.remove('wborder');
    updateUI(title,author,id);
    form.reset()
    }
});

const deletee = document.querySelector('.disp');

table.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        i=i-1;
        e.target.parentElement.parentElement.remove();
        console.log(e.target.parentElement.parentElement);
    }
});


