# Cài đặt

Để có thể chạy được dự án một cách đơn giản nhất

## Clone repository

    ```sh
    git clone https://github.com/phuoc153258/f8_education
    ```

## Cài đặt các package cần thiết của dự án

    ```sh
    npm i
    ```

## Cấu hình file env

    ```sh
    PORT=YOUR_PORT

    NEXT_PUBLIC_API_URL = YOUR_API_URL

    NEXT_PUBLIC_STATIC_FILE_URL = YOUR_API_URL
    ```

## Trong thư mục dự án, bạn có thể chạy

    ```sh
    npm start
    ```

## Test

-   Khởi chạy trình chạy thử ở chế độ xem tương tác.

    ```sh
    npm test
    ```

## Build

-   Xây dựng ứng dụng để sản xuất vào thư mục `build`.\
-   Nó kết hợp chính xác React trong chế độ sản xuất và tối ưu hóa bản dựng để có hiệu suất tốt nhất.
-   Bản dựng được thu nhỏ và tên tệp bao gồm các giá trị băm.\
-   Ứng dụng của bạn đã sẵn sàng để được triển khai!

    ```sh
    npm run build
    ```

## Eject

** Lưu ý: đây là hoạt động một chiều. Sau khi bạn `eject`, bạn không thể quay lại!**

-   Nếu bạn không hài lòng với các lựa chọn cấu hình và công cụ xây dựng, bạn có thể `eject` bất cứ lúc nào. Lệnh này sẽ xóa phần phụ thuộc bản dựng duy nhất khỏi dự án của bạn.

-   Thay vào đó, nó sẽ sao chép tất cả các tệp cấu hình và các phần phụ thuộc chuyển tiếp (webpack, Babel, ESLint, v.v.) ngay vào dự án của bạn để bạn có toàn quyền kiểm soát chúng. Tất cả các lệnh ngoại trừ `eject` sẽ vẫn hoạt động, nhưng chúng sẽ trỏ đến các tập lệnh đã sao chép để bạn có thể chỉnh sửa chúng. Tại thời điểm này, bạn đang ở trên của riêng bạn.

-   Bạn không cần phải sử dụng `eject`. Bộ tính năng được tuyển chọn phù hợp với các triển khai vừa và nhỏ và bạn không nên cảm thấy bắt buộc phải sử dụng tính năng này. Tuy nhiên, chúng tôi hiểu rằng công cụ này sẽ không hữu ích nếu bạn không thể tùy chỉnh nó khi bạn đã sẵn sàng.

    ```sh
    npm run eject
    ```
