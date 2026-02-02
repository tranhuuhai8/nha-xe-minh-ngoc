'use client'

import { useEffect, useRef } from 'react'
import './hero.css'

export default function Hero() {
  const carRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = carRef.current
    if (!el) return

    // Scroll reveal – chỉ desktop
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (window.innerWidth <= 768) return
        el.classList.toggle('show', entry.isIntersecting)
      },
      { threshold: 0.35 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />

      <div className="hero-container">
        {/* CONTENT */}
        <div className="hero-content">
          <h1>
            XE GHÉP
            <br />
            <span>HÀ NỘI ⇄ NAM ĐỊNH</span>
          </h1>

          <p className="hero-desc">
            An toàn – Tiện lợi – Nhanh chóng – Đón trả tận nơi
          </p>

          <p className="hero-price">
            Giá chỉ từ <strong>250.000đ / người</strong>
          </p>

          <div className="hero-service-box">
            Nhận đón trả tại:{' '}
            <strong>Sân bay – Bệnh viện – Trường học – Nhà riêng</strong>
          </div>

          <div className="hero-actions">
            <a href="tel:0912203933" className="hero-hotline">
              📞 0912 203 933
            </a>

            <a href="#dat-xe" className="hero-btn">
              ĐẶT XE NGAY
            </a>
          </div>
        </div>

        {/* CAR */}
        <div ref={carRef} className="hero-image scroll-reveal">
          <img src="car.png" alt="Xe ghép Minh Ngọc" className="car-pro" />
        </div>
      </div>
    </section>
  )
}
