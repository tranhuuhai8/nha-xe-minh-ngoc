import './floating-contact.css'

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      {/* ZALO */}
      <a
        href="https://zalo.me/0912203933"
        target="_blank"
        rel="noopener noreferrer"
        className="fc-circle zalo ring-strong"
        aria-label="Chat Zalo"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
          alt="Zalo"
          className="zalo-logo"
        />
      </a>

      {/* PHONE */}
      <a
        href="tel:0912203933"
        className="fc-circle phone ring-strong"
        aria-label="Gọi điện"
      >
        <svg
          viewBox="0 0 512 512"
          width="26"
          height="26"
          fill="white"
          aria-hidden="true"
        >
          <path d="M391.1 351.1c-27.4 0-54.3-4.3-80-12.7-8.1-2.7-17 .4-21.9 7.4l-34.4 43.5c-62.2-32.6-112.5-82.9-145.1-145.1l43.5-34.4c7-4.9 10.1-13.8 7.4-21.9-8.4-25.7-12.7-52.6-12.7-80C147.9 96.5 140.4 89 131.1 89H72.9C63.6 89 56 96.5 56 105.9 56 283.1 228.9 456 406.1 456c9.4 0 16.9-7.6 16.9-16.9v-58.1c0-9.4-7.6-16.9-16.9-16.9z" />
        </svg>
      </a>
    </div>
  )
}
