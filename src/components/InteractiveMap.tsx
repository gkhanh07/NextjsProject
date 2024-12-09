"use client"

import { useEffect } from 'react'
import 'leaflet/dist/leaflet.css'

export default function InteractiveMap() {
    useEffect(() => {
        // Khởi tạo bản đồ sử dụng Leaflet
        if (typeof window !== 'undefined') {
            const L = require('leaflet')
            const map = L.map('map').setView([21.0285, 105.8542], 13)

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

            // Thêm các marker cho các điểm lịch sử
            L.marker([21.0285, 105.8542])
                .addTo(map)
                .bindPopup('Hồ Gươm')
        }
    }, [])

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Bản Đồ Chiến Sự
                </h2>
                <div id="map" className="h-[600px] rounded-lg shadow-lg" />
            </div>
        </section>
    )
} 