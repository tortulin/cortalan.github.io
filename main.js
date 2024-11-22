let id = 0;
let display = $('#display');
let next = $('#next');
let slide = ['tok','pisne', 'calabash'];

display.textContent(slide[id]);
next.on('click', function(){
  id++;
  display.textContent(slide[id]);
});
