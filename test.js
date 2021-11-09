// 도넛 모양의 넓이를 구하는 문제
const readLine = require('readline-sync');

// 주어진 데이터
const r1 = 10
const r2 = 20

// 원의 넓이
const area1 = Math.pow(r1, 2) * Math.PI
const area2 = Math.pow(r2, 2) * Math.PI

let gap = area1 - area2

// if
if (gap < 0) {
    gap = gap * -1
}
// 삼항연산자
gap = gap < 0 ? gap * -1 : gap

gap = gap.toFixed(2)

// console.log("이 도형의 넓이는" + gap + "입니다.")
console.log(`이 도형의 넓이는 ${gap} 입니다.`)

