"use client"

import { useState } from 'react'
import image1 from '../app/assets/quangu2.png'

const tourLocations = [
    {
        id: 1,
        title: "Cứ điểm Hồng Cúm",
        description: "Trận Hồng Cúm, từ ngày 31 tháng 3 đến 7 tháng 5 năm 1954, là trận đánh quan trọng của chiến dịch Điện Biên Phủ. Mục tiêu của Quân đội Nhân dân Việt Nam trong trận này là bao vây cô lập (nhưng không đánh dứt điểm) trung tâm đề kháng Isabelle (Phân khu Nam Điện Biên Phủ), mà phía Việt Nam gọi là Hồng Cúm, để ngăn không cho quân Pháp tại đây kéo về chi viện cho Phân khu trung tâm hoặc phá vây chạy sang Lào.",
        imageUrl: 'https://mytourcdn.com/upload_images/Image/Minh%20Hoang/Dien%20bien/Ph%C3%A2n%20khu%20H%E1%BB%93ng%20C%C3%BAm%20n%E1%BA%B1m%20%E1%BB%9F%20ph%C3%ADa%20Nam%20l%C3%B2ng%20ch%E1%BA%A3o%20%C4%90i%E1%BB%87n%20Bi%C3%AAn.jpg'
    },
    {
        id: 2,
        title: "Đồi độc lập",
        description: "Trận đồi Độc Lập là trận đánh diễn ra tại ngọn đồi cùng tên trong giai đoạn 1 của Chiến dịch Điện Biên Phủ. Đây là trận đánh thứ hai của chiến dịch, diễn ra từ đêm 14-3 đến rạng sáng 15-3. Sau trận đánh, Quân đội nhân dân Việt Nam hoàn toàn kiểm soát quả đồi, đẩy lùi đợt phản kích của Pháp, qua đó gần như đánh sụp Phân khu phía Bắc của cứ điểm Điện Biên Phủ",
        imageUrl: "https://cdn-images.vtv.vn/562122370168008704/2024/3/14/1-17104601550471439788328.jpg"
    },
    {
        id: 3,
        title: "Mạng lưới Ra-đa",
        description: "Vào lúc 14 giờ ngày 7-5-1954, Đại đội 360, Tiểu đoàn 130, Trung đoàn 209, Đại đoàn 312 vượt cầu Mường Thanh tiến công tiêu diệt ổ trọng liên 4 nòng của quân Pháp. Trận chiến quyết liệt tại đây đã gây thương vong lớn cho cả hai bên, hàng trăm chiến sĩ của ta đã nằm xuống bên kia cầu Mường Thanh",
        imageUrl: "https://lh5.googleusercontent.com/proxy/-lN_t1oHz6o0l7H-QDSP6KPZQvyQBn7LC_4X8Q4EyzpIUiI06Bw02wk0Y8xyMNILs0aF7FQ3imj2fNg8qzTDDr-IyaeISXvnUpHwWH-VoasPbY2nxR5dNRfK3hxPrGzJpYbTYtqM0WOSF8OL7KH9w7IyfrFH-_lo5PQ"
    },
    {
        id: 4,
        title: "Hầm chỉ huy tập đoàn cứ điểm Điện Biên Phủ",
        description: "Hầm Đờ Cát dài 20m, rộng 8m, bao gồm bốn gian. Đây là nơi làm việc và nghỉ ngơi của tướng Đờ Cát cùng bộ chỉ huy tập đoàn cứ điểm Điện Biên Phủ.",
        imageUrl: "https://travel-museum.s3.ap-southeast-1.amazonaws.com/6d4986e2-41fa-4b1c-bac9-f612f66ed385-ham-tuong-do-cat-dien-bien-30-09-2022-982384386jpg.jpg"
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
