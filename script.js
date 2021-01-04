let count = 1
let last = 0
let num = 0
let sec = 00
let min = 00
let winTime = ''
document.querySelector('#start').addEventListener('click', ()=>{
    sec = min = 0
    document.querySelector('.cadre').style.display = "flex"
    document.querySelector('.start').style.display = "none"
    document.querySelector('.time').style.display = "block"
    setInterval(() => {
        sec += 1
        if (sec >= 60) {
            sec -= 60
            min += 1
        }
        
        document.querySelector('#sec').innerText = ("00" + sec).slice(-2)
        document.querySelector('#min').innerText = ("00" + min).slice(-2)
    }, 1000);
    document.querySelectorAll('.icon').forEach(icon =>{
        icon.style.display = "none"
    })
    document.querySelectorAll('.card').forEach((card, index)=>{
        card.style.order = Math.floor(Math.random() * 20)
        card.addEventListener('click', ()=>{
            document.querySelectorAll('.icon')[index].style.display = "block"
            if (count == 1) {
                last = index
                count = 2
            } else {
                if (last == index) {
                    count = 2
                } else if (document.querySelectorAll('.card')[last].dataset.name == card.dataset.name) {
                    setTimeout(() => {
                        document.querySelectorAll('.icon')[last].style.display = "block"
                        document.querySelectorAll('.icon')[index].style.display = "block"
                        count = 1
                        last = 0 
                    }, 1000);

                    num += 1

                    if (num == 8) {
                        document.querySelector('.win').style.display = "block"
                        document.querySelector('#replay').style.display = "flex"
                        document.querySelector('.time').style.display = "none"
                        winTime = ("00" + min).slice(-2) + ":" + ("00" + sec).slice(-2)
                        document.querySelector('.win').innerHTML += ` ${winTime}`
                        document.querySelector('#replay').addEventListener('click', ()=>{
                            document.querySelector('.win').style.display = "none"
                            document.querySelector('#replay').style.display = "none"
                            document.querySelector('#start').style.display = "flex"
                            document.querySelector('#start').click()
                        })
                    }
                    
                } else {
                    setTimeout(() => {
                        document.querySelectorAll('.icon')[last].style.display = "none"
                        document.querySelectorAll('.icon')[index].style.display = "none"
                        count = 1
                        last = 0 
                    }, 1000);
                }
            }

        })
    })
})