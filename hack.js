const kahoot = require('kahoot.js-updated')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const bot = new kahoot

rl.question('What name do you want to use? ', function saveInput(name){
    rl.question('What is the game code you want to hack? ', function saveInput(code){  

        bot.on('QuestionStart',q=>{
            q.answer(0);
        })
        
        bot.join(code, name)
        console.log('The bot has joined.')
    })
})
