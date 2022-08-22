input.onButtonPressed(Button.A, function () {
    RunApp = 1
})
function Spin () {
    motobit.enable(MotorPower.On)
    motobit.invert(Motor.Left, true)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
}
input.onButtonPressed(Button.B, function () {
    RunApp = 0
    motobit.enable(MotorPower.Off)
})
let SpinEnable = 0
let RunApp = 0
motobit.enable(MotorPower.Off)
basic.showLeds(`
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    # . . . #
    `)
music.playMelody("E B C5 A B G A F ", 360)
basic.forever(function () {
    if (RunApp) {
        SpinEnable = pins.digitalReadPin(DigitalPin.P0)
        if (SpinEnable) {
            Spin()
        } else {
            motobit.enable(MotorPower.Off)
        }
    }
})
