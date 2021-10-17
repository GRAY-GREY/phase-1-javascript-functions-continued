function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(wrap = '*') {
    const part1 = "You are";
    return function (adj = 'special') {
        return `${part1} ${wrap}${adj}${wrap}!`;
    }
}