const toggle=document.querySelector('.toggleNav');
const ul=document.querySelector('.flex-nav>ul');

//Es6 code

toggle.addEventListener('click',()=>{
    ul.classList.toggle("open");


});
//jquery
// $(function() {
//     $('.toggleNav').on('click',function() {
//       $('.flex-nav ul').toggleClass('open');
//     });
//   });