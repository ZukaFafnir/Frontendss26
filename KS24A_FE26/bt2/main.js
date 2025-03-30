function filterLongStrings(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }
    if(arr.length===0){
        return "Mảng rỗng"
    }
    return arr.filter(str => str.length > 5&& typeof str==="string");
}
let strings = `"hello","JavaScript", "AI", "coding"`
console.log(filterLongStrings(strings));
