const imagelist= ["https://m.media-amazon.com/images/I/61o0bX0hyTL._SX679_.jpg","https://m.media-amazon.com/images/I/71D9VfP+qqL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71DSA+AvbVL._SX679_.jpg","https://m.media-amazon.com/images/I/31Cud2WnszL._SX300_SY300_QL70_FMwebp_.jpg",
    "https://m.media-amazon.com/images/I/41uYSN1XJbL._SX300_SY300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/411JSvfkGQL._SX300_SY300_QL70_FMwebp_.jpg"
]

let idx = 0;
let lastidx = imagelist.length-1;
const nextbutton = document.getElementById('nextbutton');
// image.src = imagelist[]
function nextbuttonclick(){
    if (idx==imagelist.length){
        alert("We have reached at the end of the list");
        return;
    }
    const image = document.getElementById("image");
    image.src = imagelist[idx];
   
    idx++;

}
function previousbuttonclick(){
    if (lastidx<=0){
        alert("We have reached at the front of the list");
        return;
    }
    const image = document.getElementById("image");
    image.src = imagelist[lastidx];
    lastidx--;
}



