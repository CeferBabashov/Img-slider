let Arr = ['https://images.unsplash.com/photo-1662047920109-dbb718472918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
'https://images.unsplash.com/photo-1662047919286-19175909fbcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
'https://images.unsplash.com/photo-1568632102228-b7d3e77459c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
'https://images.unsplash.com/photo-1577986696086-c96095524959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
'https://images.unsplash.com/photo-1565067703613-c64e364c204f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'];
let img = document.querySelector('img');
let i=0;
let k = 0;
let load = document.querySelector('.loading');

function next(){
    i++;
    img.src = Arr[i];
    if(i == Arr.length){
        i=0;
        img.src = Arr[0];
    }
}

function back(){
        i--;
        img.src = Arr[i];
        if(i <= 0){
            i = Arr.length-1;
            img.src = Arr[i];
        }
}

setInterval(() => {
   next();
}, 2050);

// function loading(){
//     if ( k < 600){
//         k += 1.5
//     }
//     else {
//         k = 0
//     }
//     load.style.width = `${k}px`
// }

// setInterval(loading , 1.4)