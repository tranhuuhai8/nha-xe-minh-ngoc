'use client'
import './booking-form.css'

export default function BookingForm() {
  return (
    <section id="booking" className="booking">
      <div className="booking-container">

        {/* LEFT CONTENT */}
        <div className="booking-info">
          <h2>ĐẶT XE NHANH – ĐÓN TRẢ TẬN NƠI</h2>
          <p>
            Nhà xe <strong>Minh Ngọc</strong> nhận đặt xe tiện chuyến
            Hà Nội ⇄ Nam Định, đưa đón sân bay, bệnh viện, nhà riêng.
          </p>

          <ul>
            <li>✔ 30 phút / 1 chuyến</li>
            <li>✔ Xe đời mới – sạch sẽ</li>
            <li>✔ Giá chỉ từ <strong>250.000đ/người</strong></li>
          </ul>

          <div className="booking-hotline">
            📞 HOTLINE: <strong>0912 203 993</strong>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="booking-form">
          <h3>GỬI YÊU CẦU ĐẶT XE</h3>

          <form>
            <input type="text" placeholder="Họ và tên" required />
            <input type="tel" placeholder="Số điện thoại" required />
            <input type="text" placeholder="Tuyến đi (VD: Hà Nội - Nam Định)" />
            <textarea placeholder="Ghi chú thêm (nếu có)" />

            <button type="submit">GỬI YÊU CẦU</button>
          </form>
        </div>

      </div>
    </section>
  )
}
