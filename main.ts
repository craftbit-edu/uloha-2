function otocDoprava (čas: number) {
    wuKong.mecanumRun(wuKong.RunList.right, 250)
    basic.pause(čas)
    wuKong.mecanumStop()
}
function jedRovne2 (čas: number) {
    wuKong.mecanumRun(wuKong.RunList.Front, 250)
    basic.pause(1000)
    wuKong.mecanumStop()
}
function jedRovne (čas: number) {
    wuKong.mecanumRun(wuKong.RunList.Front, 250)
    basic.pause(1000)
    wuKong.mecanumStop()
}
function otocDoleva (čas: number) {
    wuKong.mecanumRun(wuKong.RunList.left, 250)
    basic.pause(čas)
    wuKong.mecanumStop()
}
function Nastavení () {
    wuKong.mecanumWheel(
    wuKong.ServoList.S5,
    wuKong.ServoList.S1,
    wuKong.ServoList.S7,
    wuKong.ServoList.S3
    )
    rychlost = 250
}
let rychlost = 0
Nastavení()
for (let index = 0; index < 3; index++) {
    jedRovne(300)
    otocDoprava(250)
}
basic.forever(function () {
	
})
basic.forever(function () {
    if (grove.measureInCentimetersV2(DigitalPin.P2) <= 10) {
        rychlost = 0
    } else if (grove.measureInCentimetersV2(DigitalPin.P2) <= 20) {
        rychlost = 0.25
    } else if (grove.measureInCentimetersV2(DigitalPin.P2) <= 30) {
        rychlost = 0.5
    } else {
        rychlost = 1
    }
    wuKong.mecanumRun(wuKong.RunList.Front, 250 * rychlost)
})
