/**
 * Stein saks og papir
 * 
 * Med variabel 
 * 
 * 0 er stein
 * 
 * 1 er saks
 * 
 * 2 er papir
 */
input.onButtonPressed(Button.A, function () {
    steinsakspapir = randint(0, 2)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Scissors)
        basic.showIcon(IconNames.Square)
    }
    basic.showNumber(steinsakspapir)
    basic.pause(1000)
    if (steinsakspapir == 0) {
        basic.showIcon(IconNames.Diamond)
    } else if (steinsakspapir == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (steinsakspapir == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showString("Hva skkjedde")
    }
})
let steinsakspapir = 0
steinsakspapir = 0
basic.forever(function () {
	
})
