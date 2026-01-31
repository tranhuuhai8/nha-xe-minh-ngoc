'use client'

import { useEffect, useRef } from 'react'
import './about.css'

export default function AboutSection() {
  const imgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = { threshold: 0.3 }

    const observe = (el: HTMLElement | null) => {
      if (!el) return

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('show')
        } else {
          el.classList.remove('show')
        }
      }, options)

      observer.observe(el)
      return () => observer.disconnect()
    }

    const cleanImg = observe(imgRef.current)
    const cleanText = observe(textRef.current)

    return () => {
      cleanImg && cleanImg()
      cleanText && cleanText()
    }
  }, [])

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* LEFT – IMAGES */}
        <div ref={imgRef} className="about-images fade-up">
          <img
            src="xe-san-bay.jpg"
            alt="Xe Minh Ngọc đón khách sân bay"
            className="img-main"
          />
          <img
            src="xe-don-khach.jpg"
            alt="Nhà xe Minh Ngọc đón trả tận nơi"
            className="img-sub"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div ref={textRef} className="about-content fade-up delay">
          <h4 className="about-subtitle">
            ☰ XE TIỆN CHUYẾN HÀ NỘI ⇄ NAM ĐỊNH
          </h4>

          <h2 className="about-title">
            AN TOÀN – TIỆN LỢI – NHANH CHÓNG <br />
            LỊCH SỰ – CHU ĐÁO – NHIỆT TÌNH
          </h2>

          <p className="about-text">
            <strong>Nhà xe Minh Ngọc</strong> là đơn vị hoạt động trong lĩnh vực
            <strong> xe tiện chuyến Hà Nội – Nam Định</strong>, chuyên cung cấp
            dịch vụ đưa đón hành khách tận nơi với tiêu chí an toàn và đúng giờ.
            Chúng tôi luôn nỗ lực mang đến trải nghiệm di chuyển thuận tiện,
            giá cả hợp lý, phù hợp với mọi đối tượng khách hàng.
          </p>

          <ul className="about-list">
            <li>
              ✔ Chạy <strong>LIÊN TỤC</strong> mỗi ngày, phục vụ{' '}
              <strong>24/7</strong>
            </li>
            <li>
              ✔ <strong>30 phút / 1 chuyến</strong> – Đón trả{' '}
              <strong>TẬN NƠI</strong>
            </li>
            <li>
              ✔ <strong>MIỄN PHÍ</strong> trẻ em dưới 5 tuổi
            </li>
            <li>✔ Nhận bao xe, gửi hàng, thuê xe du lịch theo yêu cầu</li>
          </ul>

          <a href="tel:0912203993" className="about-btn">
            ĐẶT XE NGAY
          </a>
        </div>
      </div>
    </section>
  )
}
