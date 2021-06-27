const createRectangle = () => {
    let newRectangle = document.createElement('div')
    newRectangle.className = "indiv_rect"
    newRectangle.style.height = "50rem"
    newRectangle.style.width = "0.25rem"
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    newRectangle.style.backgroundColor = "#"+randomColor
    document.querySelector('#art_body').append(newRectangle)
}

const createRectangles = () => {
    document.querySelectorAll(".indiv_rect").forEach(itm => {itm.remove()})
    for(let i=0; i<141; i++){
        createRectangle()
    }
}

setInterval(createRectangles, 2000)

const main = () => {
    document.addEventListener('DOMContentLoaded', () => {
        createRectangles()
    })
}

main()