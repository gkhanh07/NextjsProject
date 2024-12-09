const stories = [
    {
        name: 'Chủ tịch Hồ Chí Minh',
        role: 'Lời dạy lịch sử',
        story: '"Ở Việt Nam, Mỹ sẽ nhất định thua nhưng nó chỉ thua sau khi thua trên bầu trời Hà Nội"',
        image: 'https://cdnimage.daihoidang.vn/t400x500/Media/Graphic/Profile/2020/11/21/chu-tich-ho-chi-minh.JPG'
    },
    {
        name: 'Đại tướng Võ Nguyên Giáp',
        role: 'Tổng Tư lệnh',
        story: '"Âm mưu của Mỹ cho B-52 đánh Thủ đô Hà Nội - linh hồn của cuộc kháng chiến - sẽ là hành động gây sức ép cuối cùng. Chúng ta phải kiên quyết đánh thắng chúng trên bầu trời Thủ đô."',
        image: 'https://tulieuvankien.dangcongsan.vn/Uploads/2018/6/5/19/vonguyengiap.jpg'
    },
    {
        name: 'Phạm Tuân',
        role: 'Anh Hùng',
        story: 'Anh hùng Lực lượng vũ trang nhân dân Phạm Tuân, phi công Việt Nam đầu tiên bắn rơi B52 Mỹ trên bầu trời Hà Nội',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdCDnLFFZMb82mShAIyTLUYfoqNauiRK67w&s'
    }

]

export default function Stories() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Câu Chuyện Nhân Chứng
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {stories.map((story, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="mb-4 flex items-center">
                                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold">{story.name}</h3>
                                    <p className="text-gray-600">{story.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700">{story.story}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 