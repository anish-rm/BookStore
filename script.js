const form = document.querySelector('.myform');
const table = document.querySelector('.table');
const display = document.querySelector('.rows');
const warn = document.querySelector('.warn');
const id1 = document.querySelector('.idd');
let i=1;
let j=0;
if(localStorage.getItem('title')){
    j=details.length;
}
let details=[];
const updateAof = ((title1,author1,id1) =>{
    let temp=[{title : title1,author : author1,id : id1}];
    details[j]=temp[0];
    localStorage.setItem('details',JSON.stringify(details));
    j=j+1;
});
const updateUI = ((i,title,author,id)=>{
    let id1= parseInt(id);
    if(i%2!=0){
        const html = `
        <tr class="disp">
        <th scope="row" class="id${i}">${i}</th>
        <th scope="row">${title}</th>
        <th scope="row">${author}</th>    
        <th scope="row" class="d-flex justify-content-between align-items-center">${id1+1} <i class="far fa-trash-alt delete"></i></th>        
        </tr>`;
        display.innerHTML+=html;
    }
    else{
        const html = `
        <tr class="disp2">
        <th scope="row">${i}</th>
        <th scope="row">${title}</th>
        <th scope="row">${author}</th>    
        <th scope="row" class="d-flex justify-content-between align-items-center">${id1+1} <i class="far fa-trash-alt delete"></i></th>        
        </tr>`;
        display.innerHTML+=html;
    }
    id1=id1+1;
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
    localStorage.setItem('title',title);
    updateUI(i,title,author,id);
    i=i+1;
    updateAof(title,author,id);
    console.log(details.length);
    form.reset()
    }
});

const deletee = document.querySelector('.disp');

table.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        i=i-1;
        e.target.parentElement.parentElement.remove();
    }
});



const todos = [
    {text : 'play football', author : 'anish'},
    {text : 'see insta', author : 'agal'},
    {text : 'get the whole world', author : 'aadvik'}
];