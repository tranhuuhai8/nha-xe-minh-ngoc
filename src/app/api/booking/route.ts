import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, phone, route, note } = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Website Nhà Xe Minh Ngọc" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: '📩 Yêu cầu đặt xe mới',
      html: `
        <h2>YÊU CẦU ĐẶT XE MỚI</h2>
        <p><strong>Họ tên:</strong> ${name}</p>
        <p><strong>Số điện thoại:</strong> ${phone}</p>
        <p><strong>Tuyến đi:</strong> ${route}</p>
        <p><strong>Ghi chú:</strong> ${note || 'Không có'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Gửi email thất bại' },
      { status: 500 }
    )
  }
}
