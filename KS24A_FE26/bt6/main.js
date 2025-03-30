let dateArray = ["2025-03-12"];
let result = [];
if (dateArray.length===0){
    console.log(` Mảng rỗng `)
}else{
    for (let date of dateArray) {
        let parts = date.split("-");
        if (parts.length !== 3) {
            console.log("Dữ liệu không hợp lệ");
            continue;
        }
        let year = parts[0];
        let month = parts[1];
        let day = parts[2];
        let formattedDate = day + "/" + month + "/" + year;
        result.push(formattedDate);
    }
    
    console.log(result);
}

