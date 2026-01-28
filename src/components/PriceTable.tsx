import './price-table.css'

export default function PriceTable() {
  return (
    <section className="price-section">
      <div className="price-container">

        <h2 className="price-title">BẢNG GIÁ TUYẾN ĐƯỜNG</h2>

        <table className="price-table">
          <thead>
            <tr>
              <th>TUYẾN ĐƯỜNG</th>
              <th>GIÁ (VNĐ)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Hà Nội ⇄ Giao Thủy</td>
              <td>250.000</td>
            </tr>
            <tr>
              <td>Hà Nội ⇄ Xuân Trường</td>
              <td>250.000</td>
            </tr>
            <tr>
              <td>Hà Nội ⇄ Trực Ninh</td>
              <td>250.000</td>
            </tr>
            <tr>
              <td>Hà Nội ⇄ Nam Trực</td>
              <td>250.000</td>
            </tr>
            <tr>
              <td>Hà Nội ⇄ TP Nam Định</td>
              <td>250.000</td>
            </tr>
            <tr>
              <td>Sân bay Nội Bài ⇄ Nam Định</td>
              <td className="highlight">450.000</td>
            </tr>
            <tr>
              <td>Hà Nội ⇄ Nam Định (Bao xe 5 chỗ)</td>
              <td>900.000</td>
            </tr>
            <tr>
              <td>Hà Nội ⇄ Nam Định (Bao xe 7 chỗ)</td>
              <td>1.100.000</td>
            </tr>
          </tbody>
        </table>

        <p className="price-note">
          (*) Giá có thể thay đổi vào ngày lễ, Tết. Vui lòng liên hệ để được báo giá chính xác.
        </p>

      </div>
    </section>
  )
}
