const mediaItems = [
    {
        type: 'text',
        title: 'Lực lượng phòng không',
        description: 'Tại Hà Nội, Hải Phòng: 5 trung đoàn tên lửa, 6 trung đoàn pháo cao xạ, 4 trung đoàn không quân, 4 trung đoàn Ra-đa. Dân quân tự vệ 9 tỉnh có 1.316 khẩu pháo cao xạ.'
    },
    {
        type: 'text',
        title: 'Chiến lược từ xa',
        description: 'Bảo vệ bầu trời Hà Nội từ xa là sự chủ động, cảnh giác, sớm phát hiện và triệt tiêu các nhân tố bất lợi từ xa về không gian địa lý và thời gian.'
    },
    {
        type: 'text',
        title: 'Bài học hiện đại',
        description: 'Trong thời đại công nghiệp 4.0, bài học về sự chủ động chuẩn bị, dự báo sớm tình hình và xây dựng thế trận chiến tranh nhân dân vẫn còn nguyên giá trị.'
    }
]

export default function Gallery() {
    return (
        <section className="py-20 bg-slate-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Thư Viện Tư Liệu
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mediaItems.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
                            <h3 className="font-bold text-2xl mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-lg">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 