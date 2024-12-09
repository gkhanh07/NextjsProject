"use client"

import { useState } from 'react'
import image1 from '../app/assets/quangu2.png'

const tourLocations = [
    {
        id: 1,
        title: "Bệnh viện Bạch Mai bị bom tàn phá",
        description: "",
        imageUrl: 'http://baohagiang.vn/file/4028eaa4679b32c401679c0c74382a7e/122022/3_20221209151208.png'
    },
    {
        id: 2,
        title: "Quân dân ta chiến đấu bên các ụ pháo",
        description: "",
        imageUrl: "http://baohagiang.vn/file/4028eaa4679b32c401679c0c74382a7e/122022/4_20221209151223.jpg"
    },
    {
        id: 3,
        title: "Xác máy bay B52 bị bắn rơi ở đường Hoàng Hoa Thám, Hà Nội năm 1972",
        description: "",
        imageUrl: "https://file3.qdnd.vn/data/images/0/2022/12/05/vuhuyen/trien-lam1.jpg?dpi=150&quality=100&w=870"
    },
    {
        id: 4,
        title: "Quang cảnh sau đợt Mỹ ném bom B52 ở Tây Mỗ năm 1972",
        description: "",
        imageUrl: "https://file3.qdnd.vn/data/images/0/2022/12/05/vuhuyen/trien-lam4.jpg?dpi=150&quality=100&w=870"
    }
]

export default function VirtualTour() {
    const [activeLocation, setActiveLocation] = useState(0)

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Tài Liệu Hình Ảnh
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Preview Area */}
                    <div className="bg-slate-200 h-[400px] rounded-lg flex items-center justify-center">
                        <img
                            src={tourLocations[activeLocation].imageUrl}
                            alt={tourLocations[activeLocation].title}
                            className="w-full h-full object-cover rounded-lg"
                        />
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
