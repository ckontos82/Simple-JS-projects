//App State

const reviews = [{id:0, personaName: "Anna G.", job: "Full Stack Dev", img: "https://img.freepik.com/free-photo/cheerful-middle-aged-woman-with-curly-hair_1262-20859.jpg", descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus officiis odit eius porro commodi iste quibusdam sit saepe rem culpa quos cumque, illo a, perspiciatis facere voluptatum veritatis delectus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, magnam hic! Soluta quo nesciunt eligendi nihil. Voluptatibus tenetur, culpa enim nemo hic excepturi sapiente? Ex rem error dolore neque totam!'}, 
{id:1, personaName: "John T.", job: "Java Junior Developer", img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg", descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus officiis odit eius porro commodi iste quibusdam sit saepe rem culpa quos cumque, illo a, perspiciatis facere voluptatum veritatis delectus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, magnam hic! Soluta quo nesciunt eligendi nihil. Voluptatibus tenetur, culpa enim nemo hic excepturi sapiente? Ex rem error dolore neque totam!'}, 
{id:2, personaName: "Bob D.", job: "Web Designer", img: "https://img.freepik.com/free-photo/blond-man-happy-expression_1194-2873.jpg", descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus officiis odit eius porro commodi iste quibusdam sit saepe rem culpa quos cumque, illo a, perspiciatis facere voluptatum veritatis delectus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, magnam hic! Soluta quo nesciunt eligendi nihil. Voluptatibus tenetur, culpa enim nemo hic excepturi sapiente? Ex rem error dolore neque totam!'}]

let personaId = Math.floor(Math.random() * reviews.length)

window.addEventListener('DOMContentLoaded', function () {
    showPersonaById(personaId)

    document.querySelector('#prevBtn').addEventListener('click', function() {
        onPrevBtnClicked()
    })

    document.querySelector('#nextBtn').addEventListener('click', function() {
        onNextBtnClicked()
    })
})

function showPersonaById(personaId) {
    const persona = reviews.find(p => p.id === personaId)
    const {personaName, job, img: image, descr} = persona
    document.querySelector('#personaImg').src = image
    document.querySelector('#personaName').innerHTML = personaName
    document.querySelector('#personaJob').innerHTML = job
    document.querySelector('#personaDescr').innerHTML = descr
}

function onPrevBtnClicked() {
    showPrevPersona()
}

function onNextBtnClicked() {
    showNextPersona()
}

function showPrevPersona() {
    personaId = (personaId < 0) ? reviews.length - 1 : --personaId
    showPersonaById(personaId)
}

function showNextPersona() {
    personaId = (++personaId % reviews.length)
    showPersonaById(personaId)
}