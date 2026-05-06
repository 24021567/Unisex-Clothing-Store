# Unisex Clothing Store

Ứng dụng web bán hàng quần áo Unisex đơn giản, có giao diện người dùng và trang admin.
Dự án sử dụng Node.js, Express, Sequelize với SQLite, EJS cho view engine và Stripe/QR cho thanh toán.

## Link online

```
https://unisex-clothing-store.onrender.com
```

## Tính năng chính

- Đăng ký/đăng nhập người dùng
- Giỏ hàng, chọn size và màu sắc
- Thanh toán Stripe và thanh toán QR chuyển khoản
- Quản lý sản phẩm từ trang admin
- Xem danh sách khách hàng và báo cáo doanh thu
- Hỗ trợ đa ngôn ngữ (Tiếng Việt / Tiếng Anh)

## Yêu cầu

- Node.js 18+ (hoặc tương đương)
- npm

## Cài đặt

1. Mở terminal trong thư mục dự án
2. Chạy:
   ```bash
   npm install
   ```

## Biến môi trường

Tạo file `.env` trong thư mục gốc với các biến sau:

```env
SESSION_SECRET=some_secret_key
ADMIN_EMAIL=admin@shop.com
ADMIN_PASSWORD=admin123
STRIPE_SECRET_KEY=your_stripe_secret_key
```

- `SESSION_SECRET`: khóa bí mật dùng cho session
- `ADMIN_EMAIL` / `ADMIN_PASSWORD`: tài khoản admin mặc định
- `STRIPE_SECRET_KEY`: khóa API Stripe để thanh toán trực tuyến

## Khởi chạy

```bash
npm start
```

Sau khi chạy, mở trình duyệt tại:

```
http://localhost:3000
```

## Triển khai lên Render

1. Tạo một web service mới trên Render.
2. Chọn `Node.js` và kết nối repository của bạn.
3. Chỉ định `build command` (nếu cần) và `start command` là:
   ```bash
   npm start
   ```
4. Thêm các biến môi trường trong Render:
   - `SESSION_SECRET`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
   - `STRIPE_SECRET_KEY`
5. Deploy và mở ứng dụng từ URL Render được cung cấp.

## Cấu trúc thư mục

- `app.js`: entrypoint ứng dụng
- `models/`: định nghĩa Sequelize
- `routes/`: định tuyến `auth`, `admin`, `shop`
- `views/`: các template EJS
- `public/`: CSS và tài nguyên frontend
- `middleware/`: middleware `auth` và `lang`
- `lib/seedCatalog.js`: seed dữ liệu sản phẩm ban đầu
- `locales/`: file ngôn ngữ `vi.json`, `en.json`

## Ghi chú

- Dữ liệu lưu trong SQLite cục bộ
- Phiên làm việc lưu bằng `connect-session-sequelize`
- Stripe chỉ hoạt động khi `STRIPE_SECRET_KEY` được cấu hình
- Thanh toán QR sử dụng thông tin ngân hàng được cấu hình trong route shop

Nếu cần mở rộng hoặc sửa giao diện, chỉnh sửa các file trong `views/` và `public/styles.css`.
