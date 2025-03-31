function checkPrime(arr){
    if(!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ"
    }
    if(arr.length===0){
        return "Mảng rỗng"
    }
    return arr.filter(item => {
        if (typeof item !== "number" || item < 2 || !Number.isInteger(item)) return false;
        
        for (let i = 2; i <= Math.sqrt(item); i++) {
            if (item % i === 0) {
                return false; 
            }
        }
        return true;
    })
    }
let arr=[1,2,3,4,5,6,7,8,9,10]
console.log(checkPrime(arr))