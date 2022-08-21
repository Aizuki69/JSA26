// Cách sử dụng hàm:
function tenHam(thamso1, thamso2, thamso3) {
    // Hàm mà trả về một giá trị thì phải có return
    return giatri;
  }
  
  // Cách sử dụng vòng lặp
  for (
    var i = 0; // khởi tạo biến đếm để đếm xem mình đang lặp đến phần tử thứ bao nhiêu rồi
    i < 10; // Điều kiện để dừng như ví dụ là sẽ đi từ 0 -> 9 vì 10 < 10 là sai mất rồi
    i = i + 1 // Điều kiện tăng/giảm như ví dụ là mỗi lần lặp sẽ tăng giá trị biến đếm thêm 1 đơn vị
  ) {
    console.log(i);
  }
  
  // Cách sử dụng câu lệnh điều kiện
  var check = true;
  if (check == true) {
    console.log("Đây là câu lệnh điều kiện đúng");
  } else {
    console.log("Đây là câu lệnh không điều kiện");
  }
  
  // Biến
  var tenBien = "Nguyễn Văn A";
  // Toán tử
  // + - * / % =
  
  // ---------------------------------------------------------------------------------------------------------------------
  
  // Lấy ra element theo tên thẻ
  var ulElement = document.querySelector("ul");
  // Lấy ra element theo id (có # ở đầu)
  var ulElement = document.querySelector("#list");
  // Lấy ra element theo class (có . ở đầu)
  var ulElement = document.querySelector(".list");
  // Kết hợp 2 cách trên
  var ulElement = document.querySelector("ul#list.list");