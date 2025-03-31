
let array = [];
console.log("Hãy nhập vào 10 số nguyên:");
let number;
for (let i = 0; i < 10; i++) {
        let input=prompt(`Nhập số nguyên thứ ${i + 1}:`);
        number=parseFloat(input)
        if (isNaN(number)|| !Number.isInteger(number)){
            console.log(`dữ liệu không hợp lệ`)
    }else{
        array.push(number)
        console.log(` Nhập thành công `)
    }
}
if (array.length === 0) {
    console.log("Mảng rỗng. Không có số nào để hiển thị.");
} else {
    console.log("Các số nguyên lớn hơn hoặc bằng 10 là:");
    let filteredArray = array.filter(num => num >= 10);
    if (filteredArray.length > 0) {
        filteredArray.forEach(num => console.log(num));
    } else {
        console.log("Không có số nào lớn hơn hoặc bằng 10.");
    }
}
