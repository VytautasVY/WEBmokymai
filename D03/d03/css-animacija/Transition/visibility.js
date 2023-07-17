var toggle = document.getElementById('toggle');
var content = document.getElementById('content');

toggle.addEventListener('click', function(){
  content.classList.toggle('open');
  console.log('mygtukas paspaustas');
});