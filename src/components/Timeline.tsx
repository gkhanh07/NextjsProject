"use client"

import { useState } from 'react'

const timelineData = [
    {
        date: '17/12/1972',
        title: 'Lệnh Tập Kích',
        content: '10 giờ 30 phút, Tổng thống Mỹ Richard Nixon ra lệnh mở cuộc tập kích bằng không quân vào Hà Nội, Hải Phòng và một số thành phố, thị xã trên miền Bắc Việt Nam.',
        details: [
            'Đây là cuộc tập kích đường không chiến lược lớn nhất của Mỹ',
            'Mục tiêu nhằm phá hoại tiềm lực kinh tế, quốc phòng miền Bắc',
            'Ép buộc Việt Nam phải chấp nhận điều kiện của Mỹ tại Hội nghị Paris',
            'Huy động lực lượng B-52 với quy mô chưa từng có',
            'Bắt đầu cho chiến dịch kéo dài 12 ngày đêm lịch sử'
        ],
        image: 'https://special.nhandan.vn/HaNoi_DienBienPhutrenkhong_12ngaydem/assets/s3mB04lM60/tieu-doan-ten-lua-x-ttxvn-1920x1079.jpg'
    },
    {
        date: '18/12/1972',
        title: 'Ngày Mở Đầu Chiến Dịch',
        content: 'Ngày đầu tiên của chiến dịch với nhiều diễn biến quan trọng, đỉnh điểm là việc bắn rơi chiếc B-52 đầu tiên trên bầu trời Hà Nội.',
        details: [
            'Sáng 18/12/1972, Phủ Thủ tướng điện chỉ đạo các bộ, cơ quan và một số địa phương: "Địch có thể ném bom Hà Nội-Hải Phòng, cần thực hiện tốt kế hoạch sơ tán nhân dân của thành phố".',

            'Bộ Tổng Tham mưu điện chỉ đạo các đơn vị: "Đề phòng địch dùng B-52 đánh phá các mục tiêu trọng điểm. Các binh chủng: pháo cao xạ, tên lửa, ra-đa, không quân, pháo binh sẵn sàng chiến đấu, kịp thời đánh trả máy bay, tàu chiến địch. Tổ chức quan sát, báo động, sơ tán, đào hầm hào, phối hợp với Công an và nhân dân làm tốt công tác bảo vệ an ninh, bảo vệ tài sản...".',

            '18 giờ 50 phút, ngày 18/12/1972, Quân chủng Phòng không-Không quân chuyển trạng thái sẵn sàng chiến đấu cấp 1.',

            '19 giờ 10 phút, ngày 18/12/1972, Đại đội ra-đa 16 phát hiện nhiễu B-52.',

            '19 giờ 15 phút, ngày 18/12/1972, Trung đoàn 291 phát hiện B-52 và báo cáo: "B-52 đang vào miền bắc".'
        ]
    },
    {
        date: '19-22/12/1972',
        title: 'Bộ Chính Trị Họp Chỉ Đạo',
        content: 'Bộ Chính trị họp và chỉ đạo về đánh máy bay B-52. Đêm 19/12, địch tiếp tục ném bom nhiều địa điểm.',
        details: [
            '• Sáng 19/12/1972, Bộ Chính trị họp, chỉ đạo về đánh máy bay B-52.',

            '• Đêm 19/12/1972, máy bay B-52 tiếp tục ném bom Hà Nội, Hải Phòng, Bắc Giang, Thái Nguyên, Nam Định.',

            '• Riêng ở Hà Nội, địch sử dụng 87 lần chiếc B-52 và hơn 200 lần chiếc máy bay cường kích ném 3 đợt bom xuống 68 điểm thuộc nội và ngoại thành. Các lực lượng phòng không ba thứ quân của ta đã anh dũng chiến đấu, bắn rơi 1 máy bay B-52; 1 máy bay F-4.',

            '• Đêm 20/12/1972 (bắt đầu từ lúc 19 giờ 27 phút), địch sử dụng 93 lần chiếc B-52 và hơn 100 lần chiếc máy bay cường kích các loại vào đánh phá Hà Nội và một số mục tiêu ở khu vực Hải Phòng, Thái Nguyên.',

            '• Rút kinh nghiệm các trận đánh trước, quân và dân ta đã anh dũng, mưu trí, lập công xuất sắc: chỉ với 35 quả đạn đã bắn rơi 7 chiếc B-52 (có 5 chiếc rơi tại chỗ). Đại đội tự vệ của 3 nhà máy (Cơ khí Mai Động, Gỗ Hà Nội và Cơ khí Lương Yên), bằng 19 viên đạn 14,5 mm đã bắn rơi 1 máy bay F-111 "cánh cụp cánh xòe" của địch.',

            '• Ngày 21/12/1972, địch sử dụng 180 lần chiếc máy bay chiến thuật; ban đêm địch huy động 24 lần chiếc B-52, 36 lần chiếc máy bay chiến thuật đánh phá các mục tiêu trọng yếu của ta tại Hà Nội và một số khu vực tại Bắc Giang, Hải Phòng.',

            '• Phát huy khí thế chiến thắng của 3 ngày trước, quân và dân ta đã bắn rơi 11 máy bay, trong đó có 3 chiếc B-52; 2 chiếc F-4; 2 chiếc A-7; 1 chiếc F-111; 1 chiếc A-6; 1 chiếc RA-50; 1 chiếc F-105.',

            '• Ngày 22/12/1972, ban ngày, địch sử dụng 56 lần chiếc máy bay chiến thuật đánh phá các mục tiêu quanh Hà Nội; ban đêm, địch sử dụng 24 lần chiếc B-52 và 30 máy bay chiến thuật hộ tống, cùng 9 máy bay F-111 đánh các mục tiêu tại Hà Nội, Hải Phòng, Bắc Ninh... Chúng dội bom xuống Bệnh viện Bạch Mai - bệnh viện lớn nhất miền Bắc.'
        ]
    },
    {
        date: '23-26/12/1972',
        title: 'Những Ngày Chiến Đấu Ác Liệt',
        content: 'Địch tiếp tục đánh phá dữ dội, đặc biệt là cuộc tập kích vào khu phố Khâm Thiên và Hai Bà Trưng.',
        details: [
            '• Ngày 23/12/1972, ban ngày, địch sử dụng 54 lần chiếc máy bay chiến thuật đánh phá các khu vực ngoại thành Hà Nội; ban đêm, địch sử dụng 33 chiếc B-52 đánh Đồng Mỏ (Lạng Sơn) và khu vực Bắc Giang; 30 máy bay F-4 và F-105 và 7 máy bay chiến thuật của Hải quân, 11 máy bay F-111 đánh phá các sân bay: Nội Bài, Yên Bái, Kiến An (Hải Phòng) và một số mục tiêu tại Hà Nội, Hải Phòng, Quảng Ninh. Ta bắn rơi 4 máy bay, trong đó có 2 chiếc B-52; 1 chiếc F-4; 1 chiếc A-7.',

            '• Ngày 24/12/1972, ban ngày, địch sử dụng 44 lần chiếc máy bay chiến thuật đánh phá khu vực Thái Nguyên, Hà Bắc; ban đêm, địch sử dụng 33 lần chiếc B-52, 39 lần chiếc máy bay chiến thuật đánh phá ác liệt Ga Kép, Bắc Giang, các sân bay Yên Bái và khu vực Vĩnh Tuy (Hà Nội). Quân và dân miền bắc đã bắn rơi 5 máy bay: 1 chiếc B-52; 2 chiếc F-4; 2 chiếc A-7.',

            '• Trước những thất bại nặng nề, 24 giờ 00 ngày 24/12/1972, lấy cớ nghỉ lễ Noel, địch tạm ngừng tập kích để củng cố tinh thần, lực lượng và tìm thủ đoạn đánh phá mới.',

            '• Ngày 25/12/1972, Bộ Chính trị, Quân ủy Trung ương nhận định: địch sẽ đánh phá trở lại Hà Nội ác liệt hơn, quân và dân Thủ đô Hà Nội cùng các địa phương miền bắc cần rút kinh nghiệm các trận đánh trước, tiếp tục củng cố tinh thần, lực lượng đánh địch trong những ngày tới. Tranh thủ thời gian địch ngừng đánh phá, cán bộ, chiến sĩ lực lượng phòng không ba thứ quân của các địa phương, nhất là Hà Nội, Hải Phòng, Thái Nguyên đã khẩn trương rút kinh nghiệm, tìm cách đánh, kịp thời ứng phó với các thủ đoạn đánh phá của địch.',

            '• Ngày 26/12/1972, từ 13 giờ 00 đến tối, địch sử dụng 56 lần chiếc máy bay cường kích các loại ném bom dữ dội các khu vực trận địa tên lửa và trạm biến thế Đông Anh.',

            '• Từ 22 giờ 05 phút đến 23 giờ 20 phút, địch sử dụng 105 lần chiếc B-52 và 110 lần chiếc máy bay chiến thuật hộ tống đánh phá ồ ạt, liên tục vào nhiều mục tiêu khu vực Hà Nội, Hải Phòng, Thái Nguyên, ném bom rải thảm dữ dội tàn phá tất cả các mục tiêu nội, ngoại thành Hà Nội, đặc biệt là khu phố Khâm Thiên và khu phố Hai Bà Trưng, Hà Nội.'
        ]
    },
    {
        date: '27-28/12/1972',
        title: 'Chiến Thắng Vang Dội',
        content: 'Quân và dân miền Bắc lập nhiều chiến công xuất sắc, bắn rơi nhiều máy bay địch, trong đó có chiến công của phi công Vũ Xuân Thiều.',
        details: [
            '• Ngày 27/12/1972, buổi sáng, địch huy động 100 lần chiếc máy bay chiến thuật; ban đêm, địch tăng cường huy động 36 lần chiếc B-52, 66 lần chiếc máy bay chiến thuật yểm hộ, xen kẽ, địch dùng 17 lần chiếc F-111 tập trung đánh phá dữ dội vào khu vực Hà Nội.',

            '• Ngày và đêm 27/12/1972, quân và dân miền bắc đã bắn rơi 14 máy bay trong đó có 5 chiếc B-52; 5 chiếc F-4; 02 chiếc A-7; 1 chiếc A-6; 1 máy bay lên thẳng HH-53.',

            '• Ngày 28/12/1972, ban ngày địch huy động 131 lần chiếc máy bay chiến thuật; ban đêm, địch sử dụng khoảng 60 lần chiếc B-52 đánh vào các mục tiêu ở khu vực nội, ngoại thành Hà Nội.',

            '• Quân và dân ta tiếp tục chiến đấu dũng cảm, bắn rơi 3 máy bay, trong đó có 2 chiếc B-52 (1 chiếc do phi công Vũ Xuân Thiều lái chiếc máy bay MiG-21 tiêu diệt và đã anh dũng hy sinh); 1 chiếc RA-5C.'
        ]
    },
    {
        date: '29-30/12/1972',
        title: 'Kết Thúc Chiến Dịch',
        content: 'Những ngày cuối của chiến dịch, quân và dân ta tiếp tục giành thắng lợi. Ngày 30/12, Mỹ buộc phải tuyên bố ngừng ném bom từ vĩ tuyến 20 trở ra.',
        details: [
            '• Ngày 29/12/1972, ban ngày, địch sử dụng 60 lần chiếc máy bay chiến thuật đánh phá các mục tiêu ở Hà Nội, Hải Phòng, Thái Nguyên, Lạng Sơn.',

            '• Ban đêm, địch sử dụng 30 lần chiếc B-52 và 60 lần chiếc máy bay chiến thuật đánh phá các mục tiêu ở Hà Nội, Hải Phòng, Thái Nguyên. Quân và dân ta bắn rơi 2 máy bay, trong đó có 1 chiếc B-52; 1 chiếc F-4.',

            '• Ngày 30/12/1972, địch sử dụng 60 lần chiếc máy bay chiến thuật đánh phá các mục tiêu ở Hà Nội, Hải Phòng, Thái Nguyên, Lạng Sơn. Quân và dân ta bắn rơi 2 máy bay F-4.',

            '• 19 giờ 00 ngày 30/12/1972, Mỹ tuyên bố ngừng ném bom từ vĩ tuyến 20 trở ra.',

            '• Tổng kết 12 ngày đêm, quân và dân miền Bắc đã bắn rơi 81 máy bay các loại, trong đó có 34 máy bay B-52, bắt sống 43 giặc lái Mỹ.',

            '• Chiến thắng "Điện Biên Phủ trên không" đã buộc Mỹ phải ký Hiệp định Paris về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam (ngày 27/01/1973).'
        ]
    }
]

export default function Timeline() {
    const [activeDay, setActiveDay] = useState(0)
    const validActiveDay = Math.min(activeDay, timelineData.length - 1)

    return (
        <section
            className="py-12 relative min-h-screen"
            style={{
                backgroundImage: `url('https://special.nhandan.vn/HaNoi_DienBienPhutrenkhong_12ngaydem/assets/s3mB04lM60/tieu-doan-ten-lua-x-ttxvn-1920x1079.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
                {/* Tiêu đề chính */}
                <h2 className="text-5xl font-bold text-center mb-16">
                    Diễn Biến 12 Ngày Đêm
                </h2>

                <div className="flex justify-between mb-12">
                    <button
                        onClick={() => setActiveDay(prev => Math.max(0, prev - 1))}
                        disabled={activeDay === 0}
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded 
                        disabled:opacity-50 hover:bg-white/20 transition border border-white/30"
                    >
                        Ngày trước
                    </button>
                    <button
                        onClick={() => setActiveDay(prev => Math.min(timelineData.length - 1, prev + 1))}
                        disabled={activeDay === timelineData.length - 1}
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded 
                        disabled:opacity-50 hover:bg-white/20 transition border border-white/30"
                    >
                        Ngày sau
                    </button>
                </div>

                {timelineData[validActiveDay] && (
                    <div className="space-y-8">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="text-4xl font-bold text-white">
                                {timelineData[validActiveDay].date}
                            </div>
                            <div className="text-3xl font-semibold text-white/90">
                                {timelineData[validActiveDay].title}
                            </div>
                        </div>

                        <p className="text-xl text-white/80 text-center max-w-3xl mx-auto">
                            {timelineData[validActiveDay].content}
                        </p>

                        <div className="text-lg text-white/80 max-w-4xl mx-auto leading-loose space-y-8">
                            {timelineData[validActiveDay].details.map((detail, index) => (
                                <p key={index}>{detail}</p>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
} 