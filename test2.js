const readLine = require('readline-sync');

// 1ft = 3.5달러
// 300 * 200

console.log("1피트당 샷시 가격은 얼마인가요?")
const perFeet = parseFloat(readLine.prompt())

// const perFeet = 3.5

console.log("가로 길이는 얼마인가요? cm")
const width = parseInt(readLine.prompt())

console.log("세로 길이는 얼마인가요? cm")
const height = parseInt(readLine.prompt())

// 창문 => 가로 * 2, 세로 * 2 => 전체 샷시 길이
const totalLength = (width * 2) + (height * 2)

console.log(totalLength)

// 길이(cm) => ft
const totalFeet = Math.ceil(totalLength / 30.48)

// totalFeet = Math.ceil(totalFeet)

console.log(totalFeet)

// 가격 계산
// 업자가 미터 단위로 판다

const totalPay = totalFeet * perFeet

console.log(`총 ${totalPay} 달러입니다.`)