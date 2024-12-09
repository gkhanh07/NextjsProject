export default function Casualties() {
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
                <h2 className="text-5xl font-bold text-center mb-16">
                    Kết quả chiến dịch
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                        <h3 className="text-3xl font-bold mb-4 text-center">Máy Bay B-52</h3>
                        <p className="text-4xl font-bold text-center text-red-500">34</p>
                        <p className="text-lg text-center mt-2">chiếc bị bắn rơi</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                        <h3 className="text-3xl font-bold mb-4 text-center">Tổng Máy Bay</h3>
                        <p className="text-4xl font-bold text-center text-red-500">81</p>
                        <p className="text-lg text-center mt-2">chiếc bị bắn hạ</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                        <h3 className="text-3xl font-bold mb-4 text-center">Phi Công</h3>
                        <p className="text-4xl font-bold text-center text-red-500">43</p>
                        <p className="text-lg text-center mt-2">tên bị bắt sống</p>
                    </div>
                </div>

                <div className="mt-12 text-lg text-center max-w-4xl mx-auto leading-relaxed">
                    <p className="mb-4">
                        Chiến thắng "Điện Biên Phủ trên không" đã buộc Mỹ phải ký Hiệp định Paris về chấm dứt chiến tranh,
                        lập lại hòa bình ở Việt Nam (ngày 27/01/1973).
                    </p>
                    <p>
                        Đây là một trong những chiến thắng vẻ vang nhất của quân và dân ta trong cuộc kháng chiến chống Mỹ,
                        có ý nghĩa chiến lược quyết định đến thắng lợi cuối cùng.
                    </p>
                </div>
            </div>
        </section>
    )
}
