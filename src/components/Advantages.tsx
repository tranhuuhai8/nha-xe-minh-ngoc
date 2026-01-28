import './advantages.css'

export default function Advantages() {
  return (
    <section className="advantages">
      <div className="advantages-container">

        <h2 className="advantages-title">
          5 LÝ DO QUÝ KHÁCH ĐẶT NIỀM TIN VÀO <br /> NHÀ XE MINH NGỌC
        </h2>

        <div className="advantages-content">

          {/* LEFT */}
          <div className="advantages-list">
            <div className="adv-item">
              <span>🚗</span>
              <p><strong>100%</strong> xe đưa đón là <strong>ĐỜI MỚI</strong>, sạch sẽ</p>
            </div>

            <div className="adv-item">
              <span>⏱</span>
              <p><strong>CAM KẾT</strong> không để khách chờ lâu</p>
            </div>

            <div className="adv-item">
              <span>🕒</span>
              <p><strong>SẴN SÀNG</strong> phục vụ quý khách <strong>24/7</strong></p>
            </div>

            <div className="adv-item">
              <span>🔒</span>
              <p><strong>An toàn tuyệt đối</strong> – Bảo mật thông tin</p>
            </div>

            <div className="adv-item">
              <span>💰</span>
              <p><strong>Giá tốt nhất</strong> – Chỉ từ <strong>250.000đ/người</strong></p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="advantages-right">
            <img
              src="/images/noi-that-xe.jpg"
              alt="Nội thất xe Minh Ngọc"
            />

            <a href="tel:0912203993" className="hotline-btn">
              GỌI NGAY HOTLINE: <strong>0912 203 993</strong>
            </a>

            <p className="note">
              (*) Vui lòng liên hệ trước 2 – 4 tiếng để đặt lịch
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}


