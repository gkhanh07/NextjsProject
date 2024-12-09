export default function Hero() {
    return (
        <section
            className="relative h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg/1200px-Victory_in_Battle_of_Dien_Bien_Phu.jpg')`
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-center text-white px-4 max-w-5xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                    Điện Biên Phủ Trên Không
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                    81 máy bay bị bắn rơi - 34 máy bay B-52 bị tiêu diệt
                </p>
                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                    Trong 12 ngày đêm cuối năm 1972, đế quốc Mỹ muốn biến Hà Nội thành bãi chiến trường
                    của cuộc đọ sức cuối cùng với tham vọng "đưa miền Bắc về thời kỳ đồ đá". Nhưng tất cả
                    mọi tính toán điên cuồng đó đều bị đảo lộn hoàn toàn. Quân và dân Thủ đô Hà Nội,
                    thành phố Hải Phòng và miền Bắc đã làm nên một chiến công vô cùng chói lọi!
                </p>
                {/* <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-colors text-lg font-semibold">
                    Khám Phá Chiến Thắng Lịch Sử
                </button> */}
            </div>
        </section>
    )
} 