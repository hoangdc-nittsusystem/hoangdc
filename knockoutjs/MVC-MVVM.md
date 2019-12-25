# MVC
![](https://www.w3schools.in/wp-content/uploads/2019/03/MVC-Architecture.png)

## 1. Model
* Đại diện cho dữ liệu của ứng dụng
* Có các thao tác lên Database

## 2. View
* Hiển thị dữ liệu của ứng dụng được cung cấp qua Controller tới người dùng
* Không cung cấp bất cứ logic nào liên quan đến việc dữ liệu này là gì hay việc người dùng sử dụng dữ liệu như thế nào??

### 3. Controller
* Tiếp nhận mọi request từ phía người dùng. Qua router để tìm đến controller tương ứng
* Thay đổi, thêm, xóa, lấy dữ liệu ứng dụng thông qua Model
* Đưa dữ liệu đã xử lí đến View, View nhận dữ liệu, sau đó xử lí rồi trả ra kết quả cuối cùng để Controller trả về cho người dùng ( các file `.html`)

-----------------------

# MVVM
