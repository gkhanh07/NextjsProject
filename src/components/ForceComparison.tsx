const forceComparison = {
    us: {
        title: "Lực lượng Mỹ",
        forces: [
            {
                category: "Máy bay B-52",
                details: [
                    "193 chiếc B-52 (chiếm 50% tổng số B-52 của Mỹ)",
                    "Mỗi máy bay mang 25-30 tấn bom",
                    "Bay ở độ cao 10.000-12.500m",
                    "Thả bom chính xác trong bán kính 500m",
                    "Có khả năng tác chiến điện tử mạnh"
                ]
            },
            {
                category: "Máy bay chiến thuật",
                details: [
                    "1.000 máy bay các loại",
                    "F-4, A-7, A-6, F-111",
                    "Máy bay tiếp dầu KC-135",
                    "Máy bay trinh sát và chỉ huy"
                ]
            },
            {
                category: "Hỏa lực",
                details: [
                    "Hơn 40.000 tấn bom đạn",
                    "Bom thông minh điều khiển bằng laser",
                    "Bom chùm CBU các loại",
                    "Tên lửa chống radar"
                ]
            }
        ]
    },
    vietnam: {
        title: "Lực lượng Việt Nam",
        forces: [
            {
                category: "Phòng không",
                details: [
                    "36 tiểu đoàn tên lửa SAM-2",
                    "200 khẩu pháo 100mm",
                    "Hơn 1.600 khẩu pháo 57mm và 37mm",
                    "Hàng nghìn súng máy phòng không 12,7mm và 14,5mm"
                ]
            },
            {
                category: "Không quân",
                details: [
                    "Máy bay MiG-21 và MiG-17",
                    "Phi công được huấn luyện kỹ",
                    "Khả năng chiến đấu đêm",
                    "Sân bay dự bị và công sự che chắn"
                ]
            },
            {
                category: "Radar và Thông tin",
                details: [
                    "Hệ thống radar cảnh giới",
                    "Trạm quan sát bằng mắt",
                    "Hệ thống thông tin liên lạc",
                    "Khả năng chống nhiễu điện tử"
                ]
            }
        ]
    }
}

export default function ForceComparison() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Tương Quan Lực Lượng
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Lực lượng Mỹ */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-blue-800">
                            {forceComparison.us.title}
                        </h3>
                        {forceComparison.us.forces.map((force, index) => (
                            <div key={index} className="mb-6">
                                <h4 className="text-xl font-semibold mb-3 text-blue-600">
                                    {force.category}
                                </h4>
                                <ul className="space-y-2">
                                    {force.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Lực lượng Việt Nam */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-red-800">
                            {forceComparison.vietnam.title}
                        </h3>
                        {forceComparison.vietnam.forces.map((force, index) => (
                            <div key={index} className="mb-6">
                                <h4 className="text-xl font-semibold mb-3 text-red-600">
                                    {force.category}
                                </h4>
                                <ul className="space-y-2">
                                    {force.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-red-500 mr-2">•</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 