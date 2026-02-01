import './floating-contact.css'

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      {/* ZALO */}
      <a
        href="https://zalo.me/0912203933"
        target="_blank"
        className="fc-circle zalo"
        aria-label="Chat Zalo"
      >
        <svg
          viewBox="0 0 512 512"
          width="26"
          height="26"
          fill="white"
          aria-hidden="true"
        >
          <path d="M256 32C132.3 32 32 125.1 32 240c0 65.4 34.4 123.8 88.1 161.9-3.8 13.9-13.9 50.3-15.9 58.3-.2.8.1 1.6.8 2.1.4.3.9.5 1.4.5.3 0 .7-.1 1-.2 9.3-4.9 55.4-29.1 74.6-39.4 23.1 6.4 47.6 9.8 73 9.8 123.7 0 224-93.1 224-208S379.7 32 256 32z" />
          <path d="M352 288H160c-8.8 0-16-7.2-16-16s7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0-64H160c-8.8 0-16-7.2-16-16s7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
        </svg>
      </a>

      {/* PHONE */}
      <a
        href="tel:0912203993"
        className="fc-circle phone"
        aria-label="Gọi điện"
      >
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          fill="white"
          aria-hidden="true"
        >
          <path d="M391.1 351.1c-27.4 0-54.3-4.3-80-12.7-8.1-2.7-17 .4-21.9 7.4l-34.4 43.5c-62.2-32.6-112.5-82.9-145.1-145.1l43.5-34.4c7-4.9 10.1-13.8 7.4-21.9-8.4-25.7-12.7-52.6-12.7-80C147.9 96.5 140.4 89 131.1 89H72.9C63.6 89 56 96.5 56 105.9 56 283.1 228.9 456 406.1 456c9.4 0 16.9-7.6 16.9-16.9v-58.1c0-9.4-7.6-16.9-16.9-16.9z" />
        </svg>
      </a>
    </div>
  )
}
