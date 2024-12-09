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
        ]
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

            '19 giờ 15 phút, ngày 18/12/1972, Trung đoàn 291 phát hiện B-52 và báo cáo: "B-52 đang vào miền bắc".',

            '19 giờ 25 phút, ngày 18/12/1972 không quân ta được lệnh cất cánh đón đánh các tốp máy bay chiến thuật của địch.',

            'Từ 19 giờ 25 phút đến 20 giờ 18 phút, ngày 18/12/1972, nhiều tốp B-52 (mỗi tốp 3 chiếc) liên tiếp dội bom xuống khu vực sân bay Nội Bài, Đông Anh, Yên Viên, Gia Lâm.',

            '19 giờ 44 phút, ngày 18/12/1972, quả đạn tên lửa đầu tiên của Tiểu đoàn 78 thuộc Trung đoàn Tên lửa 257 được phóng lên - cuộc chiến đấu 12 ngày đêm của lực lượng phòng không ba thứ quân bảo vệ Hà Nội bắt đầu.',

            'Trung đoàn Tên lửa 261 được lệnh đánh tập trung, tiêu diệt tốp máy bay 671 từ hướng Tam Đảo đánh phá các kho tàng ở Đông Anh, Cổ Loa. Một kíp chiến đấu của Tiểu đoàn 59 đã phóng 2 quả đạn từ cự ly thích hợp, hạ 1 máy bay B-52. Đây là chiếc B-52 đầu tiên bị bắn rơi tại chỗ trên bầu trời Hà Nội, cách trận địa chưa đầy 10km.',

            'Thắng lợi hạ gục tại chỗ "Siêu pháo đài bay B-52" ngay trong đêm đầu tiên có ý nghĩa đặc biệt quan trọng về tư tưởng và tác chiến, giải tỏa những lo lắng, băn khoăn của Bộ Chính trị, Bộ Tổng Tư lệnh và tất cả cán bộ, chiến sĩ trực tiếp chiến đấu bảo vệ Hà Nội.',

            'Đêm 18 rạng ngày 19/12, Mỹ huy động 90 lần chiếc B-52 ném 3 đợt bom xuống Thủ đô Hà Nội, xen kẽ có 8 lần chiếc F-111 và 127 lần chiếc máy bay cường kích; ném khoảng 6.600 quả bom xuống 135 địa điểm thuộc Thủ đô Hà Nội, 85 khu vực dân, làm chết 300 người. Quân và dân ta anh dũng chiến đấu, bắn rơi 6 máy bay các loại, trong đó có 3 máy bay B-52 (2 chiếc rơi tại chỗ).'
        ]
    },
    {
        date: '19/12/1972',
        title: 'Bộ Chính Trị Họp Chỉ Đạo',
        content: 'Bộ Chính trị họp và chỉ đạo về đánh máy bay B-52. Đêm 19/12, địch tiếp tục ném bom nhiều địa điểm.',
        details: [
            'Sáng 19/12/1972, Bộ Chính trị họp, chỉ đạo về đánh máy bay B-52.',

            'Đêm 19/12/1972, máy bay B-52 tiếp tục ném bom Hà Nội, Hải Phòng, Bắc Giang, Thái Nguyên, Nam Định.',

            'Riêng ở Hà Nội, địch sử dụng 87 lần chiếc B-52 và hơn 200 lần chiếc máy bay cường kích ném 3 đợt bom xuống 68 điểm thuộc nội và ngoại thành. Các lực lượng phòng không ba thứ quân của ta đã anh dũng chiến đấu, bắn rơi 1 máy bay B-52; 1 máy bay F-4.'
        ]
    },
    {
        date: '20/12/1972',
        title: 'Chiến Thắng Vang Dội',
        content: 'Địch tấn công dữ dội nhưng bị tổn thất nặng nề với 7 B-52 bị bắn hạ.',
        details: [
            'Đêm 20/12/1972 (bắt đầu từ lúc 19 giờ 27 phút), địch sử dụng 93 lần chiếc B-52 và hơn 100 lần chiếc máy bay cường kích các loại vào đánh phá Hà Nội và một số mục tiêu ở khu vực Hải Phòng, Thái Nguyên.',

            'Rút kinh nghiệm các trận đánh trước, quân và dân ta đã anh dũng, mưu trí, lập công xuất sắc: chỉ với 35 quả đạn đã bắn rơi 7 chiếc B-52 (có 5 chiếc rơi tại chỗ). Đại đội tự vệ của 3 nhà máy (Cơ khí Mai Động, Gỗ Hà Nội và Cơ khí Lương Yên), bằng 19 viên đạn 14,5 mm đã bắn rơi 1 máy bay F-111 "cánh cụp cánh xòe" của địch.'
        ]
    },
    {
        date: '21/12/1972',
        title: 'Tiếp Tục Chiến Thắng',
        content: 'Quân và dân ta bắn rơi 11 máy bay địch các loại.',
        details: [
            'Ngày 21/12/1972, địch sử dụng 180 lần chiếc máy bay chiến thuật; ban đêm địch huy động 24 lần chiếc B-52, 36 lần chiếc máy bay chiến thuật đánh phá các mục tiêu trọng yếu của ta tại Hà Nội và một số khu vực tại Bắc Giang, Hải Phòng.',

            'Phát huy khí thế chiến thắng của 3 ngày trước, quân và dân ta đã bắn rơi 11 máy bay, trong đó có 3 chiếc B-52; 2 chiếc F-4; 2 chiếc A-7; 1 chiếc F-111; 1 chiếc A-6; 1 chiếc RA-50; 1 chiếc F-105.'
        ]
    },
    {
        date: '22/12/1972',
        title: 'Đánh Phá Bệnh Viện Bạch Mai',
        content: 'Địch tấn công dã man vào Bệnh viện Bạch Mai - bệnh viện lớn nhất miền Bắc.',
        details: [
            'Ngày 22/12/1972, ban ngày, địch sử dụng 56 lần chiếc máy bay chiến thuật đánh phá các mục tiêu quanh Hà Nội; ban đêm, địch sử dụng 24 lần chiếc B-52 và 30 máy bay chiến thuật hộ tống, cùng 9 máy bay F-111 đánh các mục tiêu tại Hà Nội, Hải Phòng, Bắc Ninh.... Chúng dội bom xuống Bệnh viện Bạch Mai - bệnh viện lớn nhất miền bắc...'
        ]
    },
    {
        date: '23/12/1972',
        title: 'Tiếp Tục Đánh Trả',
        content: 'Địch tấn công nhiều mục tiêu, quân dân ta bắn rơi thêm 4 máy bay.',
        details: [
            'Ngày 23/12/1972, ban ngày, địch sử dụng 54 lần chiếc máy bay chiến thuật đánh phá các khu vực ngoại thành Hà Nội; ban đêm, địch sử dụng 33 chiếc B-52 đánh Đồng Mỏ (Lạng Sơn) và khu vực Bắc Giang; 30 máy bay F-4 và F-105 và 7 máy bay chiến thuật của Hải quân, 11 máy bay F-111 đánh phá các sân bay: Nội Bài, Yên Bái, Kiến An (Hải Phòng) và một số mục tiêu tại Hà Nội, Hải Phòng, Quảng Ninh.',
            'Ta bắn rơi 4 máy bay, trong đó có 2 chiếc B-52; 1 chiếc F-4; 1 chiếc A-7.'
        ]
    },
    {
        date: '24/12/1972',
        title: 'Địch Tạm Ngừng Tập Kích',
        content: 'Sau thất bại nặng nề, địch buộc phải tạm ngừng tập kích với cớ nghỉ lễ Noel.',
        details: [
            'Ngày 24/12/1972, ban ngày, địch sử dụng 44 lần chiếc máy bay chiến thuật đánh phá khu vực Thái Nguyên, Hà Bắc; ban đêm, địch sử dụng 33 lần chiếc B-52, 39 lần chiếc máy bay chiến thuật đánh phá ác liệt Ga Kép, Bắc Giang, các sân bay Yên Bái và khu vực Vĩnh Tuy (Hà Nội).',
            'Quân và dân miền bắc đã bắn rơi 5 máy bay: 1 chiếc B-52; 2 chiếc F-4; 2 chiếc A-7.',
            'Trước những thất bại nặng nề, 24 giờ 00 ngày 24/12/1972, lấy cớ nghỉ lễ Noel, địch tạm ngừng tập kích để củng cố tinh thần, lực lượng và tìm thủ đoạn đánh phá mới.'
        ]
    },
    {
        date: '25/12/1972',
        title: 'Chuẩn Bị Đối Phó',
        content: 'Bộ Chính trị và Quân ủy Trung ương chỉ đạo rút kinh nghiệm và chuẩn bị cho các trận đánh sắp tới.',
        details: [
            'Ngày 25/12/1972, Bộ Chính trị, Quân ủy Trung ương nhận định: địch sẽ đánh phá trở lại Hà Nội ác liệt hơn, quân và dân Thủ đô Hà Nội cùng các địa phương miền bắc cần rút kinh nghiệm các trận đánh trước, tiếp tục củng cố tinh thần, lực lượng đánh địch trong những ngày tới.',
            'Tranh thủ thời gian địch ngừng đánh phá, cán bộ, chiến sĩ lực lượng phòng không ba thứ quân của các địa phương, nhất là Hà Nội, Hải Phòng, Thái Nguyên đã khẩn trương rút kinh nghiệm, tìm cách đánh, kịp thời ứng phó với các thủ đoạn đánh phá của địch.'
        ]
    },
    {
        date: '26/12/1972',
        title: 'Đánh Phá Khâm Thiên',
        content: 'Địch tập kích trở lại với cường độ cao, đánh phá dữ dội khu phố Khâm Thiên và nhiều khu vực khác.',
        details: [
            'Ngày 26/12/1972, từ 13 giờ 00 đến tối, địch sử dụng 56 lần chiếc máy bay cường kích các loại ném bom dữ dội các khu vực trận địa tên lửa và trạm biến thế Đông Anh.',
            'Từ 22 giờ 05 phút đến 23 giờ 20 phút, địch sử dụng 105 lần chiếc B-52 và 110 lần chiếc máy bay chiến thuật hộ tống đánh phá ồ ạt, liên tục vào nhiều mục tiêu khu vực Hà Nội, Hải Phòng, Thái Nguyên, ném bom rải thảm dữ dội tàn phá tất cả các mục tiêu nội, ngoại thành Hà Nội, đặc biệt là khu phố Khâm Thiên và khu phố Hai Bà Trưng, Hà Nội.'
        ]
    },
    {
        date: '27/12/1972',
        title: 'Chiến Thắng Vang Dội',
        content: 'Quân và dân miền Bắc lập chiến công xuất sắc, bắn rơi 14 máy bay địch trong một ngày.',
        details: [
            'Ngày 27/12/1972, buổi sáng, địch huy động 100 lần chiếc máy bay chiến thuật; ban đêm, địch tăng cường huy động 36 lần chiếc B-52, 66 lần chiếc máy bay chiến thuật yểm hộ, xen kẽ, địch dùng 17 lần chiếc F-111 tập trung đánh phá dữ dội vào khu vực Hà Nội.',

            'Ngày và đêm 27/12/1972, quân và dân miền bắc đã bắn rơi 14 máy bay trong đó có 5 chiếc B-52; 5 chiếc F-4; 02 chiếc A-7; 1 chiếc A-6; 1 máy bay lên thẳng HH-53.'
        ]
    },
    {
        date: '28/12/1972',
        title: 'Hy Sinh Anh Dũng',
        content: 'Phi công Vũ Xuân Thiều anh dũng hy sinh sau khi bắn rơi B-52 của địch.',
        details: [
            'Ngày 28/12/1972, ban ngày địch huy động 131 lần chiếc máy bay chiến thuật; ban đêm, địch sử dụng khoảng 60 lần chiếc B-52 đánh vào các mục tiêu ở khu vực nội, ngoại thành Hà Nội.',

            'Quân và dân ta tiếp tục chiến đấu dũng cảm, bắn rơi 3 máy bay, trong đó có 2 chiếc B-52 (1 chiếc do phi công Vũ Xuân Thiều lái chiếc máy bay MiG-21 tiêu diệt và đã anh dũng hy sinh); 1 chiếc RA-5C.'
        ]
    }
]

export default function Timeline() {
    const [activeDay, setActiveDay] = useState(0)
    const [showDetails, setShowDetails] = useState(false)

    const validActiveDay = Math.min(Math.max(0, activeDay), timelineData.length - 1)

    return (
        <section className="py-20 bg-slate-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Dòng Thời Gian 12 Ngày Đêm
                </h2>

                <div className="flex overflow-x-auto space-x-4 mb-8">
                    {timelineData.map((day, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveDay(index)
                                setShowDetails(false)
                            }}
                            className={`px-4 py-2 rounded-lg whitespace-nowrap ${validActiveDay === index
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-blue-600'
                                }`}
                        >
                            {day.date}
                        </button>
                    ))}
                </div>

                {timelineData.length > 0 && (
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">
                            {timelineData[validActiveDay].title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                            {timelineData[validActiveDay].content}
                        </p>

                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            {showDetails ? "Ẩn chi tiết" : "Xem chi tiết"}
                        </button>

                        {showDetails && (
                            <ul className="mt-4 space-y-2">
                                {timelineData[validActiveDay].details.map((detail, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
} 