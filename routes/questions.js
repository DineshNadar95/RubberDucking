const express = require("express")
const router = express.Router()
const data = require("../data/question")


router.get('/', async (req, res) => {

    let title = "Quiz Up"

    try {
        result = await data.genQuiz();
        var randq = []
        for (i = 0; i < 10; i++) {
            randq[i] = result[i].id
        }
        res.render("quiz", { result: result, title: title, randq: randq })
    } catch (e) {

        res.status(404).render("error", { error: { status: 400, message: e } })
    }
})

router.post('/', async (req, res) => {
    let qid = []
    let displayMessage 
    qid = req.body.randq.split(",");
    let answers = []
    answers.push(req.body.zero);
    answers.push(req.body.one);
    answers.push(req.body.two);
    answers.push(req.body.three);
    answers.push(req.body.four);
    answers.push(req.body.five);
    answers.push(req.body.six);
    answers.push(req.body.seven);
    answers.push(req.body.eight);
    answers.push(req.body.nine);
    Score = await data.checkQuiz(qid,answers);
    try{
        Score = await data.checkQuiz(qid,answers);
        if(Score>=50){
            res.render("signup", { Score:Score })
        }
        else{
            displayMessage = "question"
            Message = "Try Again You have failed the Quiz."
            res.render("landing",{questionMessage:Message,displayMessage:displayMessage})
        }
        
           

        }catch(e){
            res.status(404).render("viewbody/error", { error: { status: 400, message: e } })
        }
})

module.exports = router