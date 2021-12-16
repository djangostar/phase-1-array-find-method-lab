// code your solution here

//DECLARATION
//function superbowlWin(records) {
//    const win = records.find(records => records.result === "W")
//    return win ? win.year : undefined
//}

const superbowlWin = (records) => {
    const win = records.find(records => records.result === "W")
    return win ? win.year : undefined
}