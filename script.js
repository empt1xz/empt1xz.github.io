const nm = document.getElementById('meunome')
let i;

i = setTimeout(()=>{
    nm.style.opacity = '1'
}, 4000)

const theme = document.getElementById('theme')

theme.addEventListener('click', ()=>{
    let circle = document.querySelector('div#circle')
    if (document.body.classList.contains('dark')){
        document.body.classList.remove('dark')
        circle.style.transform = 'translate(50px)'
        document.querySelector('#circle').style.background = 'black'
        document.body.style.background = 'gray'
        document.querySelector('#princ').style.color = 'black'
        document.querySelector('#inf').style.color = 'black'
        document.querySelector('#about').style.color = 'black'
        document.querySelector('#p2').style.color = 'black'
        document.querySelector('.pag2').style.background = 'gray'
        document.querySelector('#stk').style.color = 'black'
        
    }else {
        document.body.classList.add('dark')
        circle.style.transform = 'translate(0px)'
        document.querySelector('#circle').style.background = 'white'
        document.body.style.background = '#13131F'
        document.querySelector('#princ').style.color = 'white'
        document.querySelector('#inf').style.color = 'gray'
        document.querySelector('#about').style.color = '#c7c7c7'
        document.querySelector('#p2').style.color = 'gray'
        document.querySelector('.pag2').style.background = '#13131f'
        document.querySelector('#stk').style.color = 'white'
    }
   
})