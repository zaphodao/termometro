input.onButtonPressed(Button.A, function () {
    temperatura = input.temperature() + 273.15
    basic.showString("" + temperatura + "kelvin")
})
input.onButtonPressed(Button.B, function () {
    temperatura = input.temperature() * 1.8 + 32
    basic.showString("" + temperatura + "fahrenheit")
})
let temperatura = 0
temperatura = input.temperature()
basic.showString("" + temperatura + "celsius")
