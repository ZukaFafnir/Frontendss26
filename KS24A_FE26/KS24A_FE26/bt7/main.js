function checkInput(){
    if(!Array.isArray(array)){
        console.log("Dữ liệu không hợp lệ")
        return
    }
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
console.log(`${array}`)
if (array.length === 0) {
    console.log("Mảng rỗng. Không có số nào để hiển thị.");
} else {
    isEvenSquare(array)  
}
}
function isEvenSquare(array){
    let evenNum=array.filter(arr => arr%2===0)
    let isSquareEvenNum=evenNum.map(item=> item*item)
    if(isSquareEvenNum.length===0){
        console.log(` Mảng không có số chẵn`)
        return
    }
    console.log(` Danh sách số chẵn sau khi bình phương là ${isSquareEvenNum}`)
}
let array = ``;
checkInput(array)
