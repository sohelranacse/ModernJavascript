// tagged template literals

function modifier(strings, ...values) {
    // console.log(strings, values)
    return strings.reduce((prev, current) => {
        return prev + current + (values.length ? "Mr."+values.shift() : "" )
    }, "")
}

var player1 = "Shakib"
var player2 = "Tamim"

console.log(modifier`We have ${player1} and ${player2} in our cricket team.`)