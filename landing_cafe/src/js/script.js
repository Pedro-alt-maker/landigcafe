let voltar_topo = document.querySelector('.direction')

window.addEventListener('scroll', function(){
  if(document.documentElement.scrollTop > 200){
    voltar_topo.style.display ='block'
  }
  else{
    voltar_topo.style.display = 'none'
  }
  voltar_topo.addEventListener('click', function(){
    document.documentElement.scrollTop = 0
  })
})
const menu = document.querySelector('.menu')
const altarnar = menu.querySelector('i')
if(altarnar.classList.contains('fa-bars')){
  
}
menu.addEventListener('click',function(){
  
const menu = document.querySelector('.menu')
const altarnar = menu.querySelector('i')
if(altarnar.classList.contains('fa-bars')){
  altarnar.classList.remove('fa-bars')  
  altarnar.classList.add('fa-times') 
}else{
  altarnar.classList.remove('fa-times')
  altarnar.classList.add('fa-bars')
}  
navbar.classList.toggle('mynabar')                                 
})  
const navbar = document.querySelector('.navbar')
const item = document.querySelectorAll('.item')
item.forEach(function(item){
  item.addEventListener('click',function(){
    navbar.classList.remove('mynabar')
    altarnar.classList.remove('fa-times')
    altarnar.classList.add('fa-bars')
  })
})


  
ScrollReveal().reveal('.secthome',{
  origin:'left',
  distance:'2%',
  duration:3000
})

ScrollReveal().reveal('.cardpopular',{
  origin:'rigth',
  distance:'39%',
  duration:2000
})
pesquisa


ScrollReveal().reveal('#pesquisa',{
  origin:'rigth',
  distance:'39%',
  duration:5000
})

ScrollReveal().reveal('.sobre_description',{
  origin:'bottom',
  distance:'39%',
  duration:2000
})

ScrollReveal().reveal('.logo',{
  origin:'top',
  distance:'39%',
  duration:2000
})


ScrollReveal().reveal('.boxbtn',{
  origin:'bottom',
  distance:'39%',
  duration:2000
})


ScrollReveal().reveal('.banner',{
  origin:'rigth',
  distance:'39%',
  duration:2000
})

