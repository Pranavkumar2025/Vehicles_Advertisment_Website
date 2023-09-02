const box1 = document.getElementById('box-1');

box1.innerHTML="<h1>Pranav</h1>"

const box2 = document.getElementById('box-2');
box2.style.backgroundColor = "red"

const box3 = document.getElementById('box-3');

box3.classList.add('roundbox');


const boxes = document.getElementsByClassName('box');

for(let i =0 ;i<=boxes.length;i++)
{
    boxes[i].classList.add('roundbox');
}
