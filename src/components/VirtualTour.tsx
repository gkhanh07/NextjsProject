"use client"

import { useState } from 'react'

const tourLocations = [
    {
        id: 1,
        title: "Tuyến lửa Vĩnh Linh",
        description: "Nơi Trung đoàn 238 nghiên cứu cách đánh B-52 và lập chiến công đầu tiên, cách Hà Nội 600km."
    },
    {
        id: 2,
        title: "Vòng đai phòng thủ Hà Nội",
        description: "Hệ thống phòng không ba thứ quân được bố trí chiến lược, với tên lửa, pháo cao xạ và không quân."
    },
    {
        id: 3,
        title: "Mạng lưới Ra-đa",
        description: "Hệ thống phát hiện sớm được bố trí để vừa bảo vệ miền Bắc, vừa có thể phát hiện B-52 từ xa."
    },
    {
        id: 4,
        title: "Trận địa pháo phòng không",
        description: "Lực lượng pháo phòng không được bố trí ôm sát các mục tiêu trọng yếu để đánh địch khi bay bằng và bổ nhào."
    }
]

export default function VirtualTour() {
    const [activeLocation, setActiveLocation] = useState(0)

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Tham Quan Ảo
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Preview Area */}
                    <div className="bg-slate-200 h-[400px] rounded-lg flex items-center justify-center">
                        <p className="text-slate-600 text-center px-4">
                            Khu vực xem hình ảnh 360° {tourLocations[activeLocation].title}
                        </p>
                    </div>

                    {/* Location Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            {tourLocations[activeLocation].title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {tourLocations[activeLocation].description}
                        </p>

                        {/* Location Selector */}
                        <div className="space-y-4">
                            {tourLocations.map((location, index) => (
                                <button
                                    key={location.id}
                                    onClick={() => setActiveLocation(index)}
                                    className={`w-full text-left p-4 rounded-lg transition-colors ${activeLocation === index
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                        }`}
                                >
                                    {location.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 