const form = document.querySelector('.myform');
const table = document.querySelector('.table');
const display = document.querySelector('.rows');
const warn = document.querySelector('.warn');
const id1 = document.querySelector('.idd');
let i=1;
let k=0;
// let details=[];
const updateAof = ((title1,author1,id1) =>{
    let temp=[{title : title1,author : author1,id : id1}];
    te[k]=temp[0];
    tee=temp[0];
    // localStorage.setItem('details',JSON.stringify(te));
    localStorage.setItem(`item${k}`,JSON.stringify(tee));
    k=k+1;
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
        <tr class="disp">
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
    // console.log(id.length);
    if(id.length==0){
        warning();
    }
    else{
    warn.classList.add('d-none');
    id1.classList.remove('wborder');
    updateUI(i,title,author,id);
    i=i+1;
    updateAof(title,author,id);
    // console.log(details.length);
    form.reset()
console.log(k);

    }
});

const deletee = document.querySelector('.disp');

table.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        i=i-1;
        // te1=localStorage.getItem('details');
        // te=JSON.parse(te1);
        // console.log(te.length);
        // let tr1=te[2];
        localStorage.removeItem('item0');
        e.target.parentElement.parentElement.remove();
    }
});



const todos = [
    {text : 'play football', author : 'anish'}
];
let te=[]
console.log(k);
while(true){
if(localStorage.getItem(`item${k}`)){
    te=localStorage.getItem(`item${k}`);
    te1=JSON.parse(te);
    console.log(te1);
    updateUI(i,te1['title'],te1['author'],te1['id']);
    i++;
    // te1=localStorage.getItem('details');
    // te=JSON.parse(te1);
    // console.log(te.length);
    // for(let j=0;j<te.length;j++){
    //     let tr1=te[j];
    //     console.log(tr1['title']);
    //     updateUI(i,tr1['title'],tr1['author'],tr1['id']);
    //     i++;
    //     k++;
    // }
    // k=te.length;
    k++;
    // let tr1=te[1];
    // console.log(tr1);
    // console.log(tr1['title']);
}
else{
    break;
}
}