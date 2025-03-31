function enterSizeArr(arrNumber){
    if(!Array.isArray(arrNumber)){
        console.log("Dữ liệu không hợp lệ")
        return
    }
    let size=parseInt(Math.random()*(20-10)+10)
    if(size===0){
        console.log("Mảng rỗng")
    }else if(size<0){
        console.log("Độ dài mảng không thể bé hơn 0")
    }else{
        console.log(` Nhập mảng số nguyên có ${size} phần tử`)
    for(let i=0;i<size;i++){
        let value=prompt(`Nhập phần tử thứ ${i}:`)
        if(isNaN(value)||!Number.isInteger(Number(value))){
          console.log("Vui lòng nhập số")
          i--  
        }else{
            value=parseInt(value)
            arrNumber.push(value)
            console.log("Nhập thành công")
        }
    }
    console.log(`Mảng hiện tại là`,arrNumber)
    let numPrime=checkOddPrime(arrNumber)
    console.log(`Các số nguyên tố là:`, numPrime);
    let oddPrime = numPrime.filter(item => item !== 2);
    console.log(` Các số nguyên tố là số lẻ là`,oddPrime)
    }
}
function checkOddPrime(arrNumber){
    let checkNumPrime=arrNumber.filter(item=>{
        if (item < 2) return false;
        if (item === 2) return true;
        for (let i = 2; i <= Math.sqrt(item); i++) {
            if (item % i === 0) return false;
        }
        return true;
    });
    return checkNumPrime
    }
let arr=[]
enterSizeArr(arr)