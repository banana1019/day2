const arr = ['타노스', '아이언맨', '블랙위도우']

console.log(arr.length)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

// arr[3] = "블랙팬서"
const changedLength = arr.push('블랙팬서') // 변경된 길이를 알려줌

console.log(changedLength)

console.log(arr)

arr.splice(1, 1)

console.log(arr)

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "블랙위도우") {
        continue
    }
    console.log(i)
    console.log(arr[i])
}