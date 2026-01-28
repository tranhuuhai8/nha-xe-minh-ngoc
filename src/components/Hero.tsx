import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-content">
          <h1>
            XE GHÉP <br />
            <span>HÀ NỘI ⇄ NAM ĐỊNH</span>
          </h1>

          <p className="price">
            GIÁ TỪ <strong>250K / NGƯỜI</strong>
          </p>

          <div className="services">
            XE ĐI SÂN BAY – TRƯỜNG HỌC – BỆNH VIỆN – NHÀ RIÊNG
          </div>

          <div className="hotline-box">
            <p>HOTLINE</p>
            <h3>0912 203 993</h3>
          </div>

          <a href="tel:0912203993" className="btn-book">
            ĐẶT XE NGAY
          </a>
        </div>

        {/* RIGHT */}
        <div className="hero-image">
          <img src="/images/car-white.png" alt="Xe ghép" />
          <img src="/images/car-red.png" className="car-red" />
        </div>
      </div>
    </section>
  )
}
