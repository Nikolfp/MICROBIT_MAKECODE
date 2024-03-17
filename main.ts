radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showString("Are you ok?")
    } else if (receivedNumber == 2) {
        basic.showString("Are you polite?")
    } else {
        basic.showString("Are you patient?")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("YES")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "YES") {
        basic.showIcon(IconNames.Yes)
    } else if (receivedString == "NO") {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("NO")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(randint(1, 3))
})
radio.setGroup(5)
