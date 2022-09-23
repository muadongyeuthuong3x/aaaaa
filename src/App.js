import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function App() {

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className="App">
      TEXT (Hàm TEXT)
      Excel cho Microsoft 365 Excel cho Microsoft 365 dành cho máy Mac Excel cho web Xem thêm...
      Hàm TEXT giúp bạn thay đổi cách số hiển thị bằng cách áp dụng định dạng cho số bằng mã định dạng. Điều này hữu ích trong những trường hợp bạn muốn hiển thị số ở định dạng dễ đọc hơn hay bạn muốn kết hợp số với văn bản hoặc ký hiệu.

      Lưu ý: Hàm TEXT sẽ chuyển đổi số thành văn bản, điều này có thể khiến việc tham chiếu trong các tính toán sau này trở nên khó khăn. Tốt nhất bạn nên giữ giá trị gốc của mình ở một ô, rồi sử dụng hàm TEXT trong một ô khác. Sau đó, nếu bạn cần xây dựng các công thức khác, hãy luôn tham chiếu giá trị gốc và không tham chiếu kết quả hàm TEXT.

      Chi tiết Kỹ thuật
      Tổng quan
      Ở dạng đơn giản nhất, hàm TEXT cho biết:

      =TEXT (Giá trị bạn muốn định dạng, "Mã định dạng bạn muốn áp dụng")

      Dưới đây là một số ví dụ phổ biến mà bạn có thể sao chép trực tiếp vào Excel để thử nghiệm với chính mình. Lưu ý các mã định dạng trong dấu ngoặc kép.

      Công thức

      Mô tả

      =TEXT(1234.567,"$#,##0.00")

      Tiền tệ với dấu tách phần nghìn và 2 số thập phân, chẳng hạn như $1.234,57. Lưu ý rằng Excel làm tròn giá trị tới 2 chữ số thập phân.

      =TEXT(TODAY(),"MM/DD/YY")

      Ngày hôm nay có định dạng DD/MM/YY, chẳng hạn như 14/03/12

      =TEXT(TODAY(),"DDDD")

      Hôm nay là ngày trong tuần, chẳng hạn như Thứ 2

      =TEXT(NOW(),"H:MM SA/CH")

      Múi giờ hiện tại, chẳng hạn như 1:29 CH

      =TEXT(0.285,"0,0%")

      Phần trăm, chẳng hạn như 28,5 %

      = TEXT (4.34,"#?/?")

      Phân số, chẳng hạn như 4 1/3

      =TRIM(TEXT(0,34,"# ?/?"))

      Phân số, chẳng hạn như 1/3. Lưu ý phân số này sử dụng hàm TRIM để loại bỏ dấu cách đầu dòng bằng một giá trị thập phân.

      =TEXT(12200000,"0.00E+00")

      Ký hiệu khoa học, chẳng hạn như 1,22E + 07



      Đặc biệt (Số điện thoại), chẳng hạn như (123) 456-7898

      =TEXT(1234,"0000000")

      Thêm số các 0 đứng đầu (0), chẳng hạn như 0001234

      =TEXT(123456,"##0° 00' 00''")

      Tùy chỉnh - Vĩ độ/Kinh độ

      Lưu ý: Mặc dù bạn có thể sử dụng hàm TEXT để thay đổi định dạng nhưng đó không phải là cách duy nhất. Bạn có thể thay đổi định dạng mà không có công thức bằng cách nhấn Ctrl + 1 (hoặc Hình ảnh biểu tượng nút Command trên máy MAC+ 1 trên máy Mac), rồi chọn định dạng bạn muốn từ hộp thoại định dạng  số .

      Tải xuống ví dụ của chúng tôi
      Bạn có thể tải xuống sổ làm việc ví dụ chứa tất cả các ví dụ về hàm TEXT mà bạn sẽ tìm thấy trong bài viết này, cộng thêm một số nội dung bổ sung khác. Bạn có thể theo dõi hoặc tạo mã định dạng hàm TEXT của riêng mình.

      Tải xuống ví dụ về hàm văn TEXT trong Excel

      Các mã định dạng sẵn dùng khác
      Bạn có thể sử dụng hộp thoại Định dạng Ô để tìm các mã định dạng sẵn dùng khác:

      Nhấn Ctrl+1 (Hình ảnh biểu tượng nút Command trên máy MAC+1 trên máy Mac) để hiển thị hộp thoại Định dạng Ô.

      Chọn định dạng mà bạn muốn từ tab Số .

      Chọn tùy chọn Tùy chỉnh,

      Mã định dạng mà hiện bạn muốn được hiển thị trong hộp Kiểu. Trong trường hợp này, hãy chọn tất cả mọi thứ từ hộp Kiểu ngoại trừ dấu chấm phẩy (;) và ký hiệu @. Trong ví dụ dưới đây, chúng tôi đã chọn và sao chép chỉ dd/mm/yy.

      Nhấn Ctrl+C để sao chép mã định dạng, rồi nhấn Hủy bỏ để bỏ qua hộp thoại Định dạng Ô.

      Bây giờ, tất cả những gì bạn cần làm là nhấn Ctrl+V để dán mã định dạng vào công thức TEXT, chẳng hạn như: =TEXT(B2,"dd/mm/yy"). Đảm bảo rằng bạn dán mã định dạng trong dấu ngoặc kép ("mã định dạng"), nếu không Excel sẽ loại bỏ thông báo lỗi.

      Ví dụ về việc sử dụng hộp thoại Định dạng  Ô  Số  Tùy chỉnh để yêu cầu Excel tạo chuỗi định dạng cho bạn.

      TEXT (Hàm TEXT)
      Excel cho Microsoft 365 Excel cho Microsoft 365 dành cho máy Mac Excel cho web Xem thêm...
      Hàm TEXT giúp bạn thay đổi cách số hiển thị bằng cách áp dụng định dạng cho số bằng mã định dạng. Điều này hữu ích trong những trường hợp bạn muốn hiển thị số ở định dạng dễ đọc hơn hay bạn muốn kết hợp số với văn bản hoặc ký hiệu.

      Lưu ý: Hàm TEXT sẽ chuyển đổi số thành văn bản, điều này có thể khiến việc tham chiếu trong các tính toán sau này trở nên khó khăn. Tốt nhất bạn nên giữ giá trị gốc của mình ở một ô, rồi sử dụng hàm TEXT trong một ô khác. Sau đó, nếu bạn cần xây dựng các công thức khác, hãy luôn tham chiếu giá trị gốc và không tham chiếu kết quả hàm TEXT.

      Chi tiết Kỹ thuật
      Tổng quan
      Ở dạng đơn giản nhất, hàm TEXT cho biết:

      =TEXT (Giá trị bạn muốn định dạng, "Mã định dạng bạn muốn áp dụng")

      Dưới đây là một số ví dụ phổ biến mà bạn có thể sao chép trực tiếp vào Excel để thử nghiệm với chính mình. Lưu ý các mã định dạng trong dấu ngoặc kép.

      Công thức

      Mô tả

      =TEXT(1234.567,"$#,##0.00")

      Tiền tệ với dấu tách phần nghìn và 2 số thập phân, chẳng hạn như $1.234,57. Lưu ý rằng Excel làm tròn giá trị tới 2 chữ số thập phân.

      =TEXT(TODAY(),"MM/DD/YY")

      Ngày hôm nay có định dạng DD/MM/YY, chẳng hạn như 14/03/12

      =TEXT(TODAY(),"DDDD")

      Hôm nay là ngày trong tuần, chẳng hạn như Thứ 2

      =TEXT(NOW(),"H:MM SA/CH")

      Múi giờ hiện tại, chẳng hạn như 1:29 CH

      =TEXT(0.285,"0,0%")

      Phần trăm, chẳng hạn như 28,5 %

      = TEXT (4.34,"#?/?")

      Phân số, chẳng hạn như 4 1/3

      =TRIM(TEXT(0,34,"# ?/?"))

      Phân số, chẳng hạn như 1/3. Lưu ý phân số này sử dụng hàm TRIM để loại bỏ dấu cách đầu dòng bằng một giá trị thập phân.

      =TEXT(12200000,"0.00E+00")

      Ký hiệu khoa học, chẳng hạn như 1,22E + 07



      Đặc biệt (Số điện thoại), chẳng hạn như (123) 456-7898

      =TEXT(1234,"0000000")

      Thêm số các 0 đứng đầu (0), chẳng hạn như 0001234

      =TEXT(123456,"##0° 00' 00''")

      Tùy chỉnh - Vĩ độ/Kinh độ

      Lưu ý: Mặc dù bạn có thể sử dụng hàm TEXT để thay đổi định dạng nhưng đó không phải là cách duy nhất. Bạn có thể thay đổi định dạng mà không có công thức bằng cách nhấn Ctrl + 1 (hoặc Hình ảnh biểu tượng nút Command trên máy MAC+ 1 trên máy Mac), rồi chọn định dạng bạn muốn từ hộp thoại định dạng  số .

      Tải xuống ví dụ của chúng tôi
      Bạn có thể tải xuống sổ làm việc ví dụ chứa tất cả các ví dụ về hàm TEXT mà bạn sẽ tìm thấy trong bài viết này, cộng thêm một số nội dung bổ sung khác. Bạn có thể theo dõi hoặc tạo mã định dạng hàm TEXT của riêng mình.

      Tải xuống ví dụ về hàm văn TEXT trong Excel

      Các mã định dạng sẵn dùng khác
      Bạn có thể sử dụng hộp thoại Định dạng Ô để tìm các mã định dạng sẵn dùng khác:

      Nhấn Ctrl+1 (Hình ảnh biểu tượng nút Command trên máy MAC+1 trên máy Mac) để hiển thị hộp thoại Định dạng Ô.

      Chọn định dạng mà bạn muốn từ tab Số .

      Chọn tùy chọn Tùy chỉnh,

      Mã định dạng mà hiện bạn muốn được hiển thị trong hộp Kiểu. Trong trường hợp này, hãy chọn tất cả mọi thứ từ hộp Kiểu ngoại trừ dấu chấm phẩy (;) và ký hiệu @. Trong ví dụ dưới đây, chúng tôi đã chọn và sao chép chỉ dd/mm/yy.

      Nhấn Ctrl+C để sao chép mã định dạng, rồi nhấn Hủy bỏ để bỏ qua hộp thoại Định dạng Ô.

      Bây giờ, tất cả những gì bạn cần làm là nhấn Ctrl+V để dán mã định dạng vào công thức TEXT, chẳng hạn như: =TEXT(B2,"dd/mm/yy"). Đảm bảo rằng bạn dán mã định dạng trong dấu ngoặc kép ("mã định dạng"), nếu không Excel sẽ loại bỏ thông báo lỗi.

      Ví dụ về việc sử dụng hộp thoại Định dạng  Ô  Số  Tùy chỉnh để yêu cầu Excel tạo chuỗi định dạng cho bạn.
      TEXT (Hàm TEXT)
      Excel cho Microsoft 365 Excel cho Microsoft 365 dành cho máy Mac Excel cho web Xem thêm...
      Hàm TEXT giúp bạn thay đổi cách số hiển thị bằng cách áp dụng định dạng cho số bằng mã định dạng. Điều này hữu ích trong những trường hợp bạn muốn hiển thị số ở định dạng dễ đọc hơn hay bạn muốn kết hợp số với văn bản hoặc ký hiệu.

      Lưu ý: Hàm TEXT sẽ chuyển đổi số thành văn bản, điều này có thể khiến việc tham chiếu trong các tính toán sau này trở nên khó khăn. Tốt nhất bạn nên giữ giá trị gốc của mình ở một ô, rồi sử dụng hàm TEXT trong một ô khác. Sau đó, nếu bạn cần xây dựng các công thức khác, hãy luôn tham chiếu giá trị gốc và không tham chiếu kết quả hàm TEXT.

      Chi tiết Kỹ thuật
      Tổng quan
      Ở dạng đơn giản nhất, hàm TEXT cho biết:

      =TEXT (Giá trị bạn muốn định dạng, "Mã định dạng bạn muốn áp dụng")

      Dưới đây là một số ví dụ phổ biến mà bạn có thể sao chép trực tiếp vào Excel để thử nghiệm với chính mình. Lưu ý các mã định dạng trong dấu ngoặc kép.

      Công thức

      Mô tả

      =TEXT(1234.567,"$#,##0.00")

      Tiền tệ với dấu tách phần nghìn và 2 số thập phân, chẳng hạn như $1.234,57. Lưu ý rằng Excel làm tròn giá trị tới 2 chữ số thập phân.

      =TEXT(TODAY(),"MM/DD/YY")

      Ngày hôm nay có định dạng DD/MM/YY, chẳng hạn như 14/03/12

      =TEXT(TODAY(),"DDDD")

      Hôm nay là ngày trong tuần, chẳng hạn như Thứ 2

      =TEXT(NOW(),"H:MM SA/CH")

      Múi giờ hiện tại, chẳng hạn như 1:29 CH

      =TEXT(0.285,"0,0%")

      Phần trăm, chẳng hạn như 28,5 %

      = TEXT (4.34,"#?/?")

      Phân số, chẳng hạn như 4 1/3

      =TRIM(TEXT(0,34,"# ?/?"))

      Phân số, chẳng hạn như 1/3. Lưu ý phân số này sử dụng hàm TRIM để loại bỏ dấu cách đầu dòng bằng một giá trị thập phân.

      =TEXT(12200000,"0.00E+00")

      Ký hiệu khoa học, chẳng hạn như 1,22E + 07



      Đặc biệt (Số điện thoại), chẳng hạn như (123) 456-7898

      =TEXT(1234,"0000000")

      Thêm số các 0 đứng đầu (0), chẳng hạn như 0001234

      =TEXT(123456,"##0° 00' 00''")

      Tùy chỉnh - Vĩ độ/Kinh độ

      Lưu ý: Mặc dù bạn có thể sử dụng hàm TEXT để thay đổi định dạng nhưng đó không phải là cách duy nhất. Bạn có thể thay đổi định dạng mà không có công thức bằng cách nhấn Ctrl + 1 (hoặc Hình ảnh biểu tượng nút Command trên máy MAC+ 1 trên máy Mac), rồi chọn định dạng bạn muốn từ hộp thoại định dạng  số .

      Tải xuống ví dụ của chúng tôi
      Bạn có thể tải xuống sổ làm việc ví dụ chứa tất cả các ví dụ về hàm TEXT mà bạn sẽ tìm thấy trong bài viết này, cộng thêm một số nội dung bổ sung khác. Bạn có thể theo dõi hoặc tạo mã định dạng hàm TEXT của riêng mình.

      Tải xuống ví dụ về hàm văn TEXT trong Excel

      Các mã định dạng sẵn dùng khác
      Bạn có thể sử dụng hộp thoại Định dạng Ô để tìm các mã định dạng sẵn dùng khác:

      Nhấn Ctrl+1 (Hình ảnh biểu tượng nút Command trên máy MAC+1 trên máy Mac) để hiển thị hộp thoại Định dạng Ô.

      Chọn định dạng mà bạn muốn từ tab Số .

      Chọn tùy chọn Tùy chỉnh,

      Mã định dạng mà hiện bạn muốn được hiển thị trong hộp Kiểu. Trong trường hợp này, hãy chọn tất cả mọi thứ từ hộp Kiểu ngoại trừ dấu chấm phẩy (;) và ký hiệu @. Trong ví dụ dưới đây, chúng tôi đã chọn và sao chép chỉ dd/mm/yy.

      Nhấn Ctrl+C để sao chép mã định dạng, rồi nhấn Hủy bỏ để bỏ qua hộp thoại Định dạng Ô.

      Bây giờ, tất cả những gì bạn cần làm là nhấn Ctrl+V để dán mã định dạng vào công thức TEXT, chẳng hạn như: =TEXT(B2,"dd/mm/yy"). Đảm bảo rằng bạn dán mã định dạng trong dấu ngoặc kép ("mã định dạng"), nếu không Excel sẽ loại bỏ thông báo lỗi.

      Ví dụ về việc sử dụng hộp thoại Định dạng  Ô  Số  Tùy chỉnh để yêu cầu Excel tạo chuỗi định dạng cho bạn.
      TEXT (Hàm TEXT)
      Excel cho Microsoft 365 Excel cho Microsoft 365 dành cho máy Mac Excel cho web Xem thêm...
      Hàm TEXT giúp bạn thay đổi cách số hiển thị bằng cách áp dụng định dạng cho số bằng mã định dạng. Điều này hữu ích trong những trường hợp bạn muốn hiển thị số ở định dạng dễ đọc hơn hay bạn muốn kết hợp số với văn bản hoặc ký hiệu.

      Lưu ý: Hàm TEXT sẽ chuyển đổi số thành văn bản, điều này có thể khiến việc tham chiếu trong các tính toán sau này trở nên khó khăn. Tốt nhất bạn nên giữ giá trị gốc của mình ở một ô, rồi sử dụng hàm TEXT trong một ô khác. Sau đó, nếu bạn cần xây dựng các công thức khác, hãy luôn tham chiếu giá trị gốc và không tham chiếu kết quả hàm TEXT.

      Chi tiết Kỹ thuật
      Tổng quan
      Ở dạng đơn giản nhất, hàm TEXT cho biết:

      =TEXT (Giá trị bạn muốn định dạng, "Mã định dạng bạn muốn áp dụng")

      Dưới đây là một số ví dụ phổ biến mà bạn có thể sao chép trực tiếp vào Excel để thử nghiệm với chính mình. Lưu ý các mã định dạng trong dấu ngoặc kép.

      Công thức

      Mô tả

      =TEXT(1234.567,"$#,##0.00")

      Tiền tệ với dấu tách phần nghìn và 2 số thập phân, chẳng hạn như $1.234,57. Lưu ý rằng Excel làm tròn giá trị tới 2 chữ số thập phân.

      =TEXT(TODAY(),"MM/DD/YY")

      Ngày hôm nay có định dạng DD/MM/YY, chẳng hạn như 14/03/12

      =TEXT(TODAY(),"DDDD")

      Hôm nay là ngày trong tuần, chẳng hạn như Thứ 2

      =TEXT(NOW(),"H:MM SA/CH")

      Múi giờ hiện tại, chẳng hạn như 1:29 CH

      =TEXT(0.285,"0,0%")

      Phần trăm, chẳng hạn như 28,5 %

      = TEXT (4.34,"#?/?")

      Phân số, chẳng hạn như 4 1/3

      =TRIM(TEXT(0,34,"# ?/?"))

      Phân số, chẳng hạn như 1/3. Lưu ý phân số này sử dụng hàm TRIM để loại bỏ dấu cách đầu dòng bằng một giá trị thập phân.

      =TEXT(12200000,"0.00E+00")

      Ký hiệu khoa học, chẳng hạn như 1,22E + 07



      Đặc biệt (Số điện thoại), chẳng hạn như (123) 456-7898

      =TEXT(1234,"0000000")

      Thêm số các 0 đứng đầu (0), chẳng hạn như 0001234

      =TEXT(123456,"##0° 00' 00''")

      Tùy chỉnh - Vĩ độ/Kinh độ

      Lưu ý: Mặc dù bạn có thể sử dụng hàm TEXT để thay đổi định dạng nhưng đó không phải là cách duy nhất. Bạn có thể thay đổi định dạng mà không có công thức bằng cách nhấn Ctrl + 1 (hoặc Hình ảnh biểu tượng nút Command trên máy MAC+ 1 trên máy Mac), rồi chọn định dạng bạn muốn từ hộp thoại định dạng  số .

      Tải xuống ví dụ của chúng tôi
      Bạn có thể tải xuống sổ làm việc ví dụ chứa tất cả các ví dụ về hàm TEXT mà bạn sẽ tìm thấy trong bài viết này, cộng thêm một số nội dung bổ sung khác. Bạn có thể theo dõi hoặc tạo mã định dạng hàm TEXT của riêng mình.

      Tải xuống ví dụ về hàm văn TEXT trong Excel

      Các mã định dạng sẵn dùng khác
      Bạn có thể sử dụng hộp thoại Định dạng Ô để tìm các mã định dạng sẵn dùng khác:

      Nhấn Ctrl+1 (Hình ảnh biểu tượng nút Command trên máy MAC+1 trên máy Mac) để hiển thị hộp thoại Định dạng Ô.

      Chọn định dạng mà bạn muốn từ tab Số .

      Chọn tùy chọn Tùy chỉnh,

      Mã định dạng mà hiện bạn muốn được hiển thị trong hộp Kiểu. Trong trường hợp này, hãy chọn tất cả mọi thứ từ hộp Kiểu ngoại trừ dấu chấm phẩy (;) và ký hiệu @. Trong ví dụ dưới đây, chúng tôi đã chọn và sao chép chỉ dd/mm/yy.

      Nhấn Ctrl+C để sao chép mã định dạng, rồi nhấn Hủy bỏ để bỏ qua hộp thoại Định dạng Ô.

      Bây giờ, tất cả những gì bạn cần làm là nhấn Ctrl+V để dán mã định dạng vào công thức TEXT, chẳng hạn như: =TEXT(B2,"dd/mm/yy"). Đảm bảo rằng bạn dán mã định dạng trong dấu ngoặc kép ("mã định dạng"), nếu không Excel sẽ loại bỏ thông báo lỗi.

      Ví dụ về việc sử dụng hộp thoại Định dạng  Ô  Số  Tùy chỉnh để yêu cầu Excel tạo chuỗi định dạng cho bạn.
      TEXT (Hàm TEXT)
      Excel cho Microsoft 365 Excel cho Microsoft 365 dành cho máy Mac Excel cho web Xem thêm...
      Hàm TEXT giúp bạn thay đổi cách số hiển thị bằng cách áp dụng định dạng cho số bằng mã định dạng. Điều này hữu ích trong những trường hợp bạn muốn hiển thị số ở định dạng dễ đọc hơn hay bạn muốn kết hợp số với văn bản hoặc ký hiệu.

      Lưu ý: Hàm TEXT sẽ chuyển đổi số thành văn bản, điều này có thể khiến việc tham chiếu trong các tính toán sau này trở nên khó khăn. Tốt nhất bạn nên giữ giá trị gốc của mình ở một ô, rồi sử dụng hàm TEXT trong một ô khác. Sau đó, nếu bạn cần xây dựng các công thức khác, hãy luôn tham chiếu giá trị gốc và không tham chiếu kết quả hàm TEXT.

      Chi tiết Kỹ thuật
      Tổng quan
      Ở dạng đơn giản nhất, hàm TEXT cho biết:

      =TEXT (Giá trị bạn muốn định dạng, "Mã định dạng bạn muốn áp dụng")

      Dưới đây là một số ví dụ phổ biến mà bạn có thể sao chép trực tiếp vào Excel để thử nghiệm với chính mình. Lưu ý các mã định dạng trong dấu ngoặc kép.

      Công thức

      Mô tả

      =TEXT(1234.567,"$#,##0.00")

      Tiền tệ với dấu tách phần nghìn và 2 số thập phân, chẳng hạn như $1.234,57. Lưu ý rằng Excel làm tròn giá trị tới 2 chữ số thập phân.

      =TEXT(TODAY(),"MM/DD/YY")

      Ngày hôm nay có định dạng DD/MM/YY, chẳng hạn như 14/03/12

      =TEXT(TODAY(),"DDDD")

      Hôm nay là ngày trong tuần, chẳng hạn như Thứ 2

      =TEXT(NOW(),"H:MM SA/CH")

      Múi giờ hiện tại, chẳng hạn như 1:29 CH

      =TEXT(0.285,"0,0%")

      Phần trăm, chẳng hạn như 28,5 %

      = TEXT (4.34,"#?/?")

      Phân số, chẳng hạn như 4 1/3

      =TRIM(TEXT(0,34,"# ?/?"))

      Phân số, chẳng hạn như 1/3. Lưu ý phân số này sử dụng hàm TRIM để loại bỏ dấu cách đầu dòng bằng một giá trị thập phân.

      =TEXT(12200000,"0.00E+00")

      Ký hiệu khoa học, chẳng hạn như 1,22E + 07



      Đặc biệt (Số điện thoại), chẳng hạn như (123) 456-7898

      =TEXT(1234,"0000000")

      Thêm số các 0 đứng đầu (0), chẳng hạn như 0001234

      =TEXT(123456,"##0° 00' 00''")

      Tùy chỉnh - Vĩ độ/Kinh độ

      Lưu ý: Mặc dù bạn có thể sử dụng hàm TEXT để thay đổi định dạng nhưng đó không phải là cách duy nhất. Bạn có thể thay đổi định dạng mà không có công thức bằng cách nhấn Ctrl + 1 (hoặc Hình ảnh biểu tượng nút Command trên máy MAC+ 1 trên máy Mac), rồi chọn định dạng bạn muốn từ hộp thoại định dạng  số .

      Tải xuống ví dụ của chúng tôi
      Bạn có thể tải xuống sổ làm việc ví dụ chứa tất cả các ví dụ về hàm TEXT mà bạn sẽ tìm thấy trong bài viết này, cộng thêm một số nội dung bổ sung khác. Bạn có thể theo dõi hoặc tạo mã định dạng hàm TEXT của riêng mình.

      Tải xuống ví dụ về hàm văn TEXT trong Excel

      Các mã định dạng sẵn dùng khác
      Bạn có thể sử dụng hộp thoại Định dạng Ô để tìm các mã định dạng sẵn dùng khác:

      Nhấn Ctrl+1 (Hình ảnh biểu tượng nút Command trên máy MAC+1 trên máy Mac) để hiển thị hộp thoại Định dạng Ô.

      Chọn định dạng mà bạn muốn từ tab Số .

      Chọn tùy chọn Tùy chỉnh,

      Mã định dạng mà hiện bạn muốn được hiển thị trong hộp Kiểu. Trong trường hợp này, hãy chọn tất cả mọi thứ từ hộp Kiểu ngoại trừ dấu chấm phẩy (;) và ký hiệu @. Trong ví dụ dưới đây, chúng tôi đã chọn và sao chép chỉ dd/mm/yy.

      Nhấn Ctrl+C để sao chép mã định dạng, rồi nhấn Hủy bỏ để bỏ qua hộp thoại Định dạng Ô.

      Bây giờ, tất cả những gì bạn cần làm là nhấn Ctrl+V để dán mã định dạng vào công thức TEXT, chẳng hạn như: =TEXT(B2,"dd/mm/yy"). Đảm bảo rằng bạn dán mã định dạng trong dấu ngoặc kép ("mã định dạng"), nếu không Excel sẽ loại bỏ thông báo lỗi.

      Ví dụ về việc sử dụng hộp thoại Định dạng  Ô  Số  Tùy chỉnh để yêu cầu Excel tạo chuỗi định dạng cho bạn.
      TEXT (Hàm TEXT)
      Excel cho Microsoft 365 Excel cho Microsoft 365 dành cho máy Mac Excel cho web Xem thêm...
      Hàm TEXT giúp bạn thay đổi cách số hiển thị bằng cách áp dụng định dạng cho số bằng mã định dạng. Điều này hữu ích trong những trường hợp bạn muốn hiển thị số ở định dạng dễ đọc hơn hay bạn muốn kết hợp số với văn bản hoặc ký hiệu.

      Lưu ý: Hàm TEXT sẽ chuyển đổi số thành văn bản, điều này có thể khiến việc tham chiếu trong các tính toán sau này trở nên khó khăn. Tốt nhất bạn nên giữ giá trị gốc của mình ở một ô, rồi sử dụng hàm TEXT trong một ô khác. Sau đó, nếu bạn cần xây dựng các công thức khác, hãy luôn tham chiếu giá trị gốc và không tham chiếu kết quả hàm TEXT.

      Chi tiết Kỹ thuật
      Tổng quan
      Ở dạng đơn giản nhất, hàm TEXT cho biết:

      =TEXT (Giá trị bạn muốn định dạng, "Mã định dạng bạn muốn áp dụng")

      Dưới đây là một số ví dụ phổ biến mà bạn có thể sao chép trực tiếp vào Excel để thử nghiệm với chính mình. Lưu ý các mã định dạng trong dấu ngoặc kép.

      Công thức

      Mô tả

      =TEXT(1234.567,"$#,##0.00")

      Tiền tệ với dấu tách phần nghìn và 2 số thập phân, chẳng hạn như $1.234,57. Lưu ý rằng Excel làm tròn giá trị tới 2 chữ số thập phân.

      =TEXT(TODAY(),"MM/DD/YY")

      Ngày hôm nay có định dạng DD/MM/YY, chẳng hạn như 14/03/12

      =TEXT(TODAY(),"DDDD")

      Hôm nay là ngày trong tuần, chẳng hạn như Thứ 2

      =TEXT(NOW(),"H:MM SA/CH")

      Múi giờ hiện tại, chẳng hạn như 1:29 CH

      =TEXT(0.285,"0,0%")

      Phần trăm, chẳng hạn như 28,5 %

      = TEXT (4.34,"#?/?")

      Phân số, chẳng hạn như 4 1/3

      =TRIM(TEXT(0,34,"# ?/?"))

      Phân số, chẳng hạn như 1/3. Lưu ý phân số này sử dụng hàm TRIM để loại bỏ dấu cách đầu dòng bằng một giá trị thập phân.

      =TEXT(12200000,"0.00E+00")

      Ký hiệu khoa học, chẳng hạn như 1,22E + 07



      Đặc biệt (Số điện thoại), chẳng hạn như (123) 456-7898

      =TEXT(1234,"0000000")

      Thêm số các 0 đứng đầu (0), chẳng hạn như 0001234

      =TEXT(123456,"##0° 00' 00''")

      Tùy chỉnh - Vĩ độ/Kinh độ

      Lưu ý: Mặc dù bạn có thể sử dụng hàm TEXT để thay đổi định dạng nhưng đó không phải là cách duy nhất. Bạn có thể thay đổi định dạng mà không có công thức bằng cách nhấn Ctrl + 1 (hoặc Hình ảnh biểu tượng nút Command trên máy MAC+ 1 trên máy Mac), rồi chọn định dạng bạn muốn từ hộp thoại định dạng  số .

      Tải xuống ví dụ của chúng tôi
      Bạn có thể tải xuống sổ làm việc ví dụ chứa tất cả các ví dụ về hàm TEXT mà bạn sẽ tìm thấy trong bài viết này, cộng thêm một số nội dung bổ sung khác. Bạn có thể theo dõi hoặc tạo mã định dạng hàm TEXT của riêng mình.

      Tải xuống ví dụ về hàm văn TEXT trong Excel

      Các mã định dạng sẵn dùng khác
      Bạn có thể sử dụng hộp thoại Định dạng Ô để tìm các mã định dạng sẵn dùng khác:

      Nhấn Ctrl+1 (Hình ảnh biểu tượng nút Command trên máy MAC+1 trên máy Mac) để hiển thị hộp thoại Định dạng Ô.

      Chọn định dạng mà bạn muốn từ tab Số .

      Chọn tùy chọn Tùy chỉnh,

      Mã định dạng mà hiện bạn muốn được hiển thị trong hộp Kiểu. Trong trường hợp này, hãy chọn tất cả mọi thứ từ hộp Kiểu ngoại trừ dấu chấm phẩy (;) và ký hiệu @. Trong ví dụ dưới đây, chúng tôi đã chọn và sao chép chỉ dd/mm/yy.

      Nhấn Ctrl+C để sao chép mã định dạng, rồi nhấn Hủy bỏ để bỏ qua hộp thoại Định dạng Ô.

      Bây giờ, tất cả những gì bạn cần làm là nhấn Ctrl+V để dán mã định dạng vào công thức TEXT, chẳng hạn như: =TEXT(B2,"dd/mm/yy"). Đảm bảo rằng bạn dán mã định dạng trong dấu ngoặc kép ("mã định dạng"), nếu không Excel sẽ loại bỏ thông báo lỗi.

      Ví dụ về việc sử dụng hộp thoại Định dạng  Ô  Số  Tùy chỉnh để yêu cầu Excel tạo chuỗi định dạng cho bạn.
      TEXT (Hàm TEXT)
      Excel cho Microsoft 365 Excel cho Microsoft 365 dành cho máy Mac Excel cho web Xem thêm...
      Hàm TEXT giúp bạn thay đổi cách số hiển thị bằng cách áp dụng định dạng cho số bằng mã định dạng. Điều này hữu ích trong những trường hợp bạn muốn hiển thị số ở định dạng dễ đọc hơn hay bạn muốn kết hợp số với văn bản hoặc ký hiệu.

      Lưu ý: Hàm TEXT sẽ chuyển đổi số thành văn bản, điều này có thể khiến việc tham chiếu trong các tính toán sau này trở nên khó khăn. Tốt nhất bạn nên giữ giá trị gốc của mình ở một ô, rồi sử dụng hàm TEXT trong một ô khác. Sau đó, nếu bạn cần xây dựng các công thức khác, hãy luôn tham chiếu giá trị gốc và không tham chiếu kết quả hàm TEXT.

      Chi tiết Kỹ thuật
      Tổng quan
      Ở dạng đơn giản nhất, hàm TEXT cho biết:

      =TEXT (Giá trị bạn muốn định dạng, "Mã định dạng bạn muốn áp dụng")

      Dưới đây là một số ví dụ phổ biến mà bạn có thể sao chép trực tiếp vào Excel để thử nghiệm với chính mình. Lưu ý các mã định dạng trong dấu ngoặc kép.

      Công thức

      Mô tả

      =TEXT(1234.567,"$#,##0.00")

      Tiền tệ với dấu tách phần nghìn và 2 số thập phân, chẳng hạn như $1.234,57. Lưu ý rằng Excel làm tròn giá trị tới 2 chữ số thập phân.

      =TEXT(TODAY(),"MM/DD/YY")

      Ngày hôm nay có định dạng DD/MM/YY, chẳng hạn như 14/03/12

      =TEXT(TODAY(),"DDDD")

      Hôm nay là ngày trong tuần, chẳng hạn như Thứ 2

      =TEXT(NOW(),"H:MM SA/CH")

      Múi giờ hiện tại, chẳng hạn như 1:29 CH

      =TEXT(0.285,"0,0%")

      Phần trăm, chẳng hạn như 28,5 %

      = TEXT (4.34,"#?/?")

      Phân số, chẳng hạn như 4 1/3

      =TRIM(TEXT(0,34,"# ?/?"))

      Phân số, chẳng hạn như 1/3. Lưu ý phân số này sử dụng hàm TRIM để loại bỏ dấu cách đầu dòng bằng một giá trị thập phân.

      =TEXT(12200000,"0.00E+00")

      Ký hiệu khoa học, chẳng hạn như 1,22E + 07



      Đặc biệt (Số điện thoại), chẳng hạn như (123) 456-7898

      =TEXT(1234,"0000000")

      Thêm số các 0 đứng đầu (0), chẳng hạn như 0001234

      =TEXT(123456,"##0° 00' 00''")

      Tùy chỉnh - Vĩ độ/Kinh độ

      Lưu ý: Mặc dù bạn có thể sử dụng hàm TEXT để thay đổi định dạng nhưng đó không phải là cách duy nhất. Bạn có thể thay đổi định dạng mà không có công thức bằng cách nhấn Ctrl + 1 (hoặc Hình ảnh biểu tượng nút Command trên máy MAC+ 1 trên máy Mac), rồi chọn định dạng bạn muốn từ hộp thoại định dạng  số .

      Tải xuống ví dụ của chúng tôi
      Bạn có thể tải xuống sổ làm việc ví dụ chứa tất cả các ví dụ về hàm TEXT mà bạn sẽ tìm thấy trong bài viết này, cộng thêm một số nội dung bổ sung khác. Bạn có thể theo dõi hoặc tạo mã định dạng hàm TEXT của riêng mình.

      Tải xuống ví dụ về hàm văn TEXT trong Excel

      Các mã định dạng sẵn dùng khác
      Bạn có thể sử dụng hộp thoại Định dạng Ô để tìm các mã định dạng sẵn dùng khác:

      Nhấn Ctrl+1 (Hình ảnh biểu tượng nút Command trên máy MAC+1 trên máy Mac) để hiển thị hộp thoại Định dạng Ô.

      Chọn định dạng mà bạn muốn từ tab Số .

      Chọn tùy chọn Tùy chỉnh,

      Mã định dạng mà hiện bạn muốn được hiển thị trong hộp Kiểu. Trong trường hợp này, hãy chọn tất cả mọi thứ từ hộp Kiểu ngoại trừ dấu chấm phẩy (;) và ký hiệu @. Trong ví dụ dưới đây, chúng tôi đã chọn và sao chép chỉ dd/mm/yy.

      Nhấn Ctrl+C để sao chép mã định dạng, rồi nhấn Hủy bỏ để bỏ qua hộp thoại Định dạng Ô.

      Bây giờ, tất cả những gì bạn cần làm là nhấn Ctrl+V để dán mã định dạng vào công thức TEXT, chẳng hạn như: =TEXT(B2,"dd/mm/yy"). Đảm bảo rằng bạn dán mã định dạng trong dấu ngoặc kép ("mã định dạng"), nếu không Excel sẽ loại bỏ thông báo lỗi.

      Ví dụ về việc sử dụng hộp thoại Định dạng  Ô  Số  Tùy chỉnh để yêu cầu Excel tạo chuỗi định dạng cho bạn.

      <button onClick={scrollTop} className="buttonC">Scroll Top</button>

      {/* .buttonC {
  position: fixed;
  right: 200px;
  top: 80%;
} */}

    </div>
  );
}

export default App;
