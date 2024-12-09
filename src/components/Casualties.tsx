export default function Casualties() {
    const casualtiesData = [
        {
            title: "Máy Bay B-52",
            count: 34,
            description: "chiếc bị bắn rơi"
        },
        {
            title: "Tổng Máy Bay",
            count: 81,
            description: "chiếc bị bắn hạ"
        },
        {
            title: "Phi Công",
            count: 43,
            description: "tên bị bắt sống"
        }
    ];

    return (
        <section
            className="py-12 relative min-h-screen"
            style={{
                backgroundImage: `url('https://cdn.giaoducthoidai.vn/images/b4508baace0d9fe4c8bbd296e259642ecbe9dd3ef6a7012cecb319fe5d081d55a3cdb3be35bbcc26cac7f9ce597737af4aa6f04d8e0c92039ba00ba3adc43ed43310f99b89111cb75a50539ee7076b088c6ef7a90934f8ced53eb91605a91145/images653612_dienbienphutrenkhong1.jpg.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
                <h2 className="text-8xl font-bold text-center mb-16">
                    Kết quả chiến dịch
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {casualtiesData.map((item, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                            <h3 className="text-4xl font-bold mb-4 text-center">{item.title}</h3>
                            <p className="text-5xl font-bold text-center text-red-500">{item.count}</p>
                            <p className="text-xl text-center mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-2xl text-center max-w-4xl mx-auto leading-relaxed">
                    <p className="mb-4">
                        Chiến thắng "Điện Biên Phủ trên không" đã buộc Mỹ phải ký Hiệp định Paris về chấm dứt chiến tranh,
                        lập lại hòa bình ở Việt Nam (ngày 27/01/1973).
                    </p>
                    <p>
                        Đây là một trong những chiến thắng vẻ vang nhất của quân và dân ta trong cuộc kháng chiến chống Mỹ,
                        có ý nghĩa chiến lược quyết định đến thắng lợi cuối cùng.
                    </p>
                </div>

                {/* Thêm hình ảnh mới phía dưới */}
                <div className="mt-16 text-center">
                    <img
                        src="https://special.nhandan.vn/HaNoi_DienBienPhutrenkhong_12ngaydem/assets/4Vwqt9QG8G/21-12-png-toi-ac-my-tai-hn-1920x2950.webp"
                        alt="Điện Biên Phủ trên không"
                        className="mx-auto w-full max-w-3xl rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
