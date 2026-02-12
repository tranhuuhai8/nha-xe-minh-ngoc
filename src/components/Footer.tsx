import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h3>NHÀ XE MINH NGỌC</h3>
          <p>
            Chuyên xe tiện chuyến Hà Nội ⇄ Nam Định <br />
            Đón trả tận nơi – An toàn – Uy tín – Giá tốt
          </p>
        </div>

        <div className="footer-right">
          <p>HOTLINE</p>
          <a href="tel:0912203933" className="footer-hotline">
            0912 203 993
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Nhà xe Minh Ngọc. All rights reserved.
      </div>
    </footer>
  )
}
