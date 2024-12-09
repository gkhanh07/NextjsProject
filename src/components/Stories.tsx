const stories = [
    {
        name: 'Chủ tịch Hồ Chí Minh',
        role: 'Lời dạy lịch sử',
        story: '"Ở Việt Nam, Mỹ sẽ nhất định thua nhưng nó chỉ thua sau khi thua trên bầu trời Hà Nội"'
    },
    {
        name: 'Đại tướng Võ Nguyên Giáp',
        role: 'Tổng Tư lệnh',
        story: '"Âm mưu của Mỹ cho B-52 đánh Thủ đô Hà Nội - linh hồn của cuộc kháng chiến - sẽ là hành động gây sức ép cuối cùng. Chúng ta phải kiên quyết đánh thắng chúng trên bầu trời Thủ đô."'
    },
    {
        name: 'Tinh thần quyết chiến',
        role: 'Khẩu hiệu chiến đấu',
        story: '"Dọn đường mà đi, đánh địch mà tiến" - "Muốn bắt cọp thì phải vào tận hang". Tinh thần của cán bộ, chiến sĩ trong suốt quá trình nghiên cứu và chiến đấu.'
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
                            <div className="mb-4">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-blue-600 text-2xl font-bold">
                                        {story.name.charAt(0)}
                                    </span>
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