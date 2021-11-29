 
 let toggle = document.querySelector('.toggle ion-icon');
 let nav = document.querySelector('.navigation');
 let main = document.querySelector('.main');
 let listLink = document.querySelectorAll('.navigation li');
 let userIcon = document.querySelector('.user');
 let dropUser = document.querySelector('.dropdown-user');

 //toggle menu
 toggle.onclick = function(){
     nav.classList.toggle('active');
     main.classList.toggle('active');
 }

 //user dropdown
function activeDropUser(){
    dropUser.classList.remove('active');
    dropUser.classList.add('active');
}
function nonActiveDropUser(){
    dropUser.classList.remove('active');
}
userIcon.addEventListener('mouseover', activeDropUser);
userIcon.addEventListener('mouseout', nonActiveDropUser);
dropUser.addEventListener('mouseover', activeDropUser);
dropUser.addEventListener('mouseout', nonActiveDropUser);

 //add hovered class in hover list link
 // let listLink = document.querySelectorAll('.navigation li');
 // function hoverLink(){
 //     listLink.forEach((item) => 
 //     item.classList.remove('hovered'));
 //     this.classList.add('hovered');
 // }
 // listLink.forEach((item) => 
 // item.addEventListener('mouseover', hoverLink));

 //add active class in select list link
 function activeLink(){
     listLink.forEach((item) => 
     item.classList.remove('active'));
     this.classList.add('active');
 }
 listLink.forEach((item) => 
 item.addEventListener('click', activeLink));