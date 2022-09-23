let form = document.forms.todo
let container = document.querySelector('.container')

let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')
let cancel = document.querySelector('.cancel')

let input = document.querySelector('.input')


let todos = [
    {
        id: 1, 
        task: "купить тесла",
        isDone: false,
        time: "10:34"
    },
    {
        id: 2, 
        task: "купить луну",
        isDone: true,
        time: "09:34"
    },
    {
        id: 3, 
        task: "поиграть в csgo",
        isDone: false,
        time: "12:34"
    }
]

let saves = []

const reload = (arr) => {
    container.innerHTML = ""

    for(let item of arr) {
        let div = document.createElement('div')   
        let topDiv = document.createElement('div')
        let topbox = document.createElement('div')      
        let img = document.createElement('img')   
        let changeBtn = document.createElement('img')   
        let span = document.createElement('span')   
        let time = document.createElement('time')  
        let save = document.querySelector('.save') 


        // if(item.isDone === true) {
        //     div.classList.add('done')
        // }
        div.classList.add('item')
        topDiv.classList.add('top')
        topbox.classList.add('topbox')
        changeBtn.classList.add('changeBtn')

        span.innerHTML = item.task
        time.innerHTML = item.time

        img.src = "./img/icons/Group 14.svg"
        changeBtn.src = "./img/icons/edit (2).svg"

        topDiv.append(span, topbox)
        topbox.append(changeBtn, img)
        div.append(topDiv, time)
        container.append(div)

        img.onclick = () => {
            todos = todos.filter(elem => elem.id !== item.id)
            reload(todos)
        }
        span.onclick = () => {
            item.isDone = !item.isDone

            reload(todos)
        }



            changeBtn.onclick = () => {
                save.onclick = () => {
                
                    console.log(item.task);
                    console.log(todos);
                    item.task = input.value
                    modal.style.display = 'none'
                    modal_bg.style.display = 'none'
        
                    setTimeout(
                        () => {
                            modal.style.opacity = '0'
                            modal_bg.style.opacity = '0'
                        }, 100)
                    reload(todos)
                    input.value = ''
      
            }
                openModal()
            }
    
            cancel.onclick = () => {
    
                closeModal()
    
            }
    

        
    }

}


const openModal = () => {
    modal.style.display = 'block'
    modal_bg.style.display = 'block'

    setTimeout(
        () => {
            modal.style.opacity = '1'
            modal_bg.style.opacity = '1'
        }, 100)
}

const closeModal = () => {
            modal.style.display = 'none'
            modal_bg.style.display = 'none'

            setTimeout(
                () => {
                    modal.style.opacity = '0'
                    modal_bg.style.opacity = '0'
                }, 100)
}

// const save_info = () => {
//             item.task = input.value
//             modal.style.display = 'none'
//             modal_bg.style.display = 'none'

//             setTimeout(
//                 () => {
//                     modal.style.opacity = '0'
//                     modal_bg.style.opacity = '0'
//                 }, 100)
//             reload(todos)
// }



form.onsubmit = (e) => {
    e.preventDefault()

    let task = {
        id: Math.random(),
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes() 
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })


    todos.push(task)

    reload(todos)
}




reload(todos)
