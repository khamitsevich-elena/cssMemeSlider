alert("Прошу проверить работу чуть позже, невнимательно прочитала задание. Благодарю за понимание!");

window.addEventListener('DOMContentLoaded', () => {
    const controls = document.querySelectorAll('.info_controls_control_wrapper'),
    button = document.querySelectorAll('.info_controls_control'),
    images = document.querySelectorAll('.image_wrapper'),
    text = document.querySelectorAll('h2');

    let previously = 0;

    controls.forEach(item => {
        item.addEventListener('click', (e) => {
            for(let i = 0, length = images.length; i < length; i++){
                images[i].classList.remove('appear')
                images[i].classList.remove('disappear')
                text[i].classList.remove('appear')
                text[i].classList.remove('disappear')
                controls[i].style.cursor = `pointer`
            }
            for(let i = 0, length = controls.length; i < length; i++){
                if(item == controls[i]){
                    if(! (item == controls[previously])){
                        controls[i].style.cursor = `auto`
                        images[i].classList.add('appear')
                        images[previously].classList.add('disappear') 
                        text[i].classList.add('appear')
                        text[previously].classList.add('disappear')
                        text[previously].style.opacity = `0` 
                        text[i].style.opacity = `100`
                        images[previously].style.opacity = `0` 
                        images[i].style.opacity = `100`
                        button[previously].classList.toggle('active')
                        button[i].classList.toggle('active')
                        previously = i         
                    }
                }
           }
        })})
})
