const questions = require("./questions.json")

easyQuestions = questions.easy
mediumQuestions = questions.medium
hardQuestions = questions.hard
async function genQuiz() {



    let questionArr = []

    for (i = 0; i < 4; i++) {
        rand = Math.random() * easyQuestions.length
        if (questionArr.includes(easyQuestions[Math.floor(rand)])) {
            i = i - 1
            continue
        }
        else {
            questionArr.push(easyQuestions[Math.floor(rand)])
        }
    }

    for (i = 0; i < 4; i++) {
        rand = Math.random() * mediumQuestions.length
        if (questionArr.includes(mediumQuestions[Math.floor(rand)])) {
            i = i - 1
            continue
        }
        else {
            questionArr.push(mediumQuestions[Math.floor(rand)])
        }
    }

    for (i = 0; i < 2; i++) {
        rand = Math.random() * hardQuestions.length
        if (questionArr.includes(hardQuestions[Math.floor(rand)])) {
            i = i - 1
            continue
        }
        else {
            questionArr.push(hardQuestions[Math.floor(rand)])
        }
    }

    let finalQuestionArr = []

    for (i = 0; i < questionArr.length; i++) {
        pushObj = {
            "id": questionArr[i].id,
            "question": questionArr[i].question,
            "options": questionArr[i].options
        }
        finalQuestionArr.push(pushObj)
    }

    return finalQuestionArr
}

// $(function(){

//     data= await genQuiz()

//     $('#quiz-div').append(data)
// })

async function checkQuiz(ids, ans) {

    let escore = 0
    let mscore = 0
    let hscore = 0
    for (i = 0; i < 10; i++) {
        if (ids[i] >= 1 && ids[i] <= 20) {
            if (easyQuestions[ids[i] - 1].answer == ans[i]) {
                escore = escore + 5
            }
            // console.log("easy")
        }
        else if (ids[i] >= 21 && ids[i] <= 40) {
            if (mediumQuestions[ids[i] - 21].answer == ans[i]) {
                mscore = mscore + 10
            }
            // console.log("medium")
        }
        else {
            if (hardQuestions[ids[i] - 41].answer == ans[i]) {
                hscore = hscore + 20
                
            }
            // console.log("hard")
        }
    }
    return (escore + mscore + hscore)

}

// async function main(){
//     console.log(await genQuiz())
// }
// main()

module.exports = {
    genQuiz, checkQuiz
};