const contentholder = document.querySelector(".content-displayer");
const container = document.querySelector(".question-container");
const submit = document.querySelector(".submit-button button");
const nocorona = document.querySelector(".no-corona")
const hascorona = document.querySelector(".has-corona")
const timerpage = document.querySelector(".timer-page")

nocorona.classList.add("hide-all");
hascorona.classList.add("hide-all")

container.classList.add("hide-all")
submit.classList.add("hide-all")
let start = () => {
    contentholder.classList.add("hide-all");
    container.classList.remove("hide-all");
    submit.classList.remove("hide-all")

    const questiontemplate1 = document.querySelector('#question-template1').innerHTML;
    const questiontemplate2 = document.querySelector('#question-template2').innerHTML;



    const data = [
        {
            qid: 0,
            question: "Do you experiencing any fever with headache and cough ?Do you experiencing any fever with headache and cough ? ",
            options: [{
                value: "yes",
                id: 0
        }, {
                value: "No",
                id: 1,
                checked: "checked",
                active: "active"
        }]
    },
        {
            qid: 1,
            question: "Do you experiencing any fever with headache and cough ?",
            options: [{
                value: "yes",
                id: 0,
                checked: "checked",
                active: "active"
        }, {
                value: "No",
                id: 1
        }, {
                value: "Partially",
                id: 2
        }, {
                value: "Sometimes",
                id: 3
        }, {
                value: "never",
                id: 4
        }]
    },
        {
            qid: 1,
            question: "Do you experiencing any fever with headache and cough ?",
            options: [{
                value: "yes",
                id: 0,
                checked: "checked",
                active: "active"
        }, {
                value: "No",
                id: 1
        }, {
                value: "Partially",
                id: 2
        }, {
                value: "Sometimes",
                id: 3
        }, {
                value: "never",
                id: 4
        }]
    },
        {
            qid: 1,
            question: "Do you experiencing any fever with headache and cough ?",
            options: [{
                value: "yes",
                id: 0,
                checked: "checked",
                active: "active"
        }, {
                value: "No",
                id: 1
        }, {
                value: "Partially",
                id: 2
        }, {
                value: "Sometimes",
                id: 3
        }, {
                value: "never",
                id: 4
        }]
    },
        {
            qid: 1,
            question: "Do you experiencing any fever with headache and cough ?",
            options: [{
                value: "yes",
                id: 0,
                checked: "checked",
                active: "active"
        }, {
                value: "No",
                id: 1
        }, {
                value: "Partially",
                id: 2
        }, {
                value: "Sometimes",
                id: 3
        }, {
                value: "never",
                id: 4
        }]
    },
        {
            qid: 1,
            question: "Do you experiencing any fever with headache and cough ?",
            options: [{
                value: "yes",
                id: 0,
                checked: "checked",
                active: "active"
        }, {
                value: "No",
                id: 1
        }, {
                value: "Partially",
                id: 2
        }, {
                value: "Sometimes",
                id: 3
        }, {
                value: "never",
                id: 4
        }]
    },
        {
            qid: 1,
            question: "Do you experiencing any fever with headache and cough ?",
            options: [{
                value: "yes",
                id: 0,
                checked: "checked",
                active: "active"
        }, {
                value: "No",
                id: 1
        }, {
                value: "Partially",
                id: 2
        }, {
                value: "Sometimes",
                id: 3
        }, {
                value: "never",
                id: 4
        }]
    },
        {
            qid: 1,
            question: "Do you experiencing any fever with headache and cough ?",
            options: [{
                value: "yes",
                id: 0,
                checked: "checked",
                active: "active"
        }, {
                value: "No",
                id: 1
        }, {
                value: "Partially",
                id: 2
        }, {
                value: "Sometimes",
                id: 3
        }, {
                value: "never",
                id: 4
        }]
    }
]


    let res = new Array(data.length);
    res[0] = 2
    res[1] = 1

    data.forEach((obj, i) => {
        let html;
        if (i % 2 === 0) {
            html = Mustache.render(questiontemplate1, {
                qid: data[i].qid,
                question: data[i].question,
                options: data[i].options
            })
        } else {
            html = Mustache.render(questiontemplate2, {
                qid: data[i].qid,
                question: data[i].question,
                options: data[i].options
            })
        }
        container.insertAdjacentHTML('beforeend', html)
    })


    $('input').on("click", (e) => {
        let option = e.target.id.split(" ")
        ques = parseInt(option[0]);
        res[ques] = parseInt(option[2])
    })

    const checkDisease = () => {
        contentholder.classList.remove("hide-all");
        container.classList.add("hide-all")
        timerpage.classList.add("hide-all");
        if (res[0] === 0 && ((res[1] === 0) || (res[1] === 3))) {
            nocorona.classList.add("hide-all")
            hascorona.classList.remove("hide-all")
        } else {
            nocorona.classList.remove("hide-all")
            hascorona.classList.add("hide-all")
        }
        submit.classList.add("hide-all")

    }


    submit.addEventListener('click', () => {
        checkDisease();
    })

}





setTimeout(() => {
    start();
}, 4000)
