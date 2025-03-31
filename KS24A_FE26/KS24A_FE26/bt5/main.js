function getNumbers(size) {
    let arr = [];
    for (let i = 0; i <size; i++) {
        let value = prompt(`Nhập số nguyên cho phần tử thứ ${i+1}:`);
        if (!value) {
            console.log("Bạn đã hủy nhập hoặc để trống. Thoát chương trình.");
            return [];
        }
        if (!/^-?\d+$/.test(value)) {
            console.log("Không phải số nguyên. Vui lòng nhập lại.");
            i--;
            continue;
        }
        arr.push(Number(value));
        console.log("Nhập thành công!");
    }
    return arr;
}
function findMaxAndIndices(size) {
    let arr=getNumbers(size)
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ!";
    }
    if (arr.length === 0) {
        return "Mảng rỗng!";
    }
    let maxValue = Math.max(...arr);
    let indexValueMax =arr.indexOf(maxValue)
    return { maxValue, indexValueMax };
}
let size=10
console.log(findMaxAndIndices(size));
