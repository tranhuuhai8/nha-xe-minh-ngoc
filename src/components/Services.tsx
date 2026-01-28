import './services.css'

export default function Services() {
  return (
    <section className="services">
      <div className="services-container">

        <h2 className="services-title">DỊCH VỤ CỦA NHÀ XE MINH NGỌC</h2>
        <p className="services-subtitle">
          Chúng tôi cung cấp đa dạng dịch vụ vận chuyển, đáp ứng mọi nhu cầu của khách hàng
        </p>

        <div className="services-list">
          <div className="service-item">
            <span className="icon">🚗</span>
            <h3>Xe tiện chuyến</h3>
            <p>Hà Nội ⇄ Nam Định, đón trả tận nơi, chạy liên tục trong ngày</p>
          </div>

          <div className="service-item">
            <span className="icon">✈️</span>
            <h3>Đưa đón sân bay</h3>
            <p>Đưa đón sân bay Nội Bài đúng giờ, an toàn, giá hợp lý</p>
          </div>

          <div className="service-item">
            <span className="icon">🏥</span>
            <h3>Đưa đón bệnh viện</h3>
            <p>Phục vụ bệnh viện, trường học, nhà riêng theo yêu cầu</p>
          </div>

          <div className="service-item">
            <span className="icon">🚐</span>
            <h3>Bao xe du lịch</h3>
            <p>Nhận bao xe 5 – 7 chỗ, phục vụ du lịch, công việc, sự kiện</p>
          </div>
        </div>

      </div>
    </section>
  )
}
