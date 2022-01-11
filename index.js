function saturdayFun(option1 = "roller-skate") {
    return `This Saturday, I want to ${option1}!`
}

saturdayFun('bathe my dog');

function mondayWork(option2 = "go to the office") {
    return `This Monday, I will ${option2}.`
}

mondayWork("work from home");

function wrapAdjective(flair="*") {
     return function (adjective = "special") {
         return `You are ${flair}${adjective}${flair}!`
     }
}

wrapAdjective("||")("a hard worker");