"use client"

import { useState } from 'react'

type Question = {
    id: number
    question: string
    options: string[]
    correctAnswer: number
}

const quizData: Question[] = [
    {
        id: 1,
        question: "Trận 'Điện Biên Phủ trên không' diễn ra vào năm nào?",
        options: ["1964", "1965", "1972", "1975"],
        correctAnswer: 2
    },
    {
        id: 2,
        question: "Loại máy bay chủ yếu của Mỹ trong chiến dịch này là gì?",
        options: ["B-52 Stratofortress", "F-4 Phantom II", "B-17 Flying Fortress", "F-5 Tiger"],
        correctAnswer: 0
    },
    {
        id: 3,
        question: "Mục tiêu chính của Mỹ trong chiến dịch 'Điện Biên Phủ trên không' là gì?",
        options: ["Phá hủy các cơ sở quân sự", "Đánh vào tinh thần người dân", "Ngừng chiến tranh", "Cả a và b đều đúng"],
        correctAnswer: 3
    },
    {
        id: 4,
        question: "Chiến dịch 'Điện Biên Phủ trên không' kéo dài bao lâu?",
        options: ["10 ngày", "12 ngày đêm", "14 ngày", "20 ngày"],
        correctAnswer: 1
    },
    {
        id: 5,
        question: "Tổng thống Mỹ lúc đó là ai, người ra lệnh tiến hành chiến dịch ném bom này?",
        options: ["Lyndon B. Johnson", "Richard Nixon", "John F. Kennedy", "Dwight D. Eisenhower"],
        correctAnswer: 1
    },
    {
        id: 6,
        question: "Hà Nội đã phản ứng như thế nào với cuộc không kích của Mỹ trong trận 'Điện Biên Phủ trên không'?",
        options: ["Duy trì phòng không mạnh mẽ", "Đầu hàng ngay lập tức", "Lẩn trốn và sơ tán", "Không có phản ứng gì"],
        correctAnswer: 0
    },
    {
        id: 7,
        question: "Trung đoàn nào bắn rơi chiếc B-52 đầu tiên trong chiến dịch này?",
        options: ["Trung đoàn 236", "Trung đoàn 238", "Trung đoàn 220", "Trung đoàn 261"],
        correctAnswer: 1
    },
    {
        id: 8,
        question: "Kế hoạch đánh B-52 bảo vệ Hà Nội, Hải Phòng được phê chuẩn vào ngày nào?",
        options: ["24/11/1972", "3/12/1972", "13/7/1972", "17/9/1967"],
        correctAnswer: 0
    },
    {
        id: 9,
        question: "Sự kiện nào là điểm mấu chốt trong chiến dịch 'Điện Biên Phủ trên không'?",
        options: ["Hà Nội bị đánh bom", "Mỹ phải ngừng ném bom", "Mỹ rút quân khỏi miền Nam Việt Nam", "Cả a và b đều đúng"],
        correctAnswer: 1
    },
    {
        id: 10,
        question: "Đơn vị nào đã bắn rơi nhiều B-52 nhất trong trận 'Điện Biên Phủ trên không'?",
        options: ["Trung đoàn 238", "Trung đoàn 261", "Trung đoàn 79", "Trung đoàn 56"],
        correctAnswer: 2
    }
]

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [correctAnswer, setCorrectAnswer] = useState<number | null>(null)

    const handleAnswerClick = (selectedAnswer: number) => {
        if (selectedAnswer === null) return;  // Thêm kiểm tra để tránh khi chưa chọn

        setSelectedAnswer(selectedAnswer)

        // Kiểm tra nếu trả lời đúng
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
            setScore(score + 1)
        } else {
            setCorrectAnswer(quizData[currentQuestion].correctAnswer)  // Lưu câu trả lời đúng
        }

        // Tiến tới câu hỏi tiếp theo
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    const handleRestart = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
        setSelectedAnswer(null)
        setCorrectAnswer(null)
    }

    return (
        <section className="py-20 bg-slate-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Kiểm Tra Kiến Thức
                </h2>

                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    {showScore ? (
                        <div className="text-center">
                            <h3 className="text-2xl font-bold mb-4">
                                Kết quả của bạn
                            </h3>
                            <p className="text-xl mb-6">
                                {score} / {quizData.length} câu đúng
                            </p>
                            <button
                                onClick={handleRestart}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                            >
                                Làm lại
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className="mb-8">
                                <span className="text-sm text-gray-500">
                                    Câu hỏi {currentQuestion + 1}/{quizData.length}
                                </span>
                                <h3 className="text-xl font-semibold mt-2">
                                    {quizData[currentQuestion].question}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {quizData[currentQuestion].options.map((option, index) => {
                                    // Kiểm tra xem người chơi đã chọn câu trả lời chưa
                                    let optionClass = 'w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-blue-50 transition-colors';

                                    // Chỉ tô màu nếu người chơi đã chọn câu trả lời
                                    if (selectedAnswer !== null) {
                                        // Nếu người chơi đã chọn câu trả lời
                                        // Tô màu xanh cho câu trả lời đúng
                                        if (index === quizData[currentQuestion].correctAnswer) {
                                            optionClass += ' bg-green-100';
                                        }
                                        // Tô màu đỏ cho câu trả lời sai
                                        if (index === selectedAnswer && selectedAnswer !== quizData[currentQuestion].correctAnswer) {
                                            optionClass += ' bg-red-100';
                                        }
                                    }

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswerClick(index)}
                                            className={optionClass}
                                        >
                                            {option}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Hiển thị câu trả lời đúng nếu chọn sai */}
                            {selectedAnswer !== null && selectedAnswer !== quizData[currentQuestion].correctAnswer && (
                                <div className="mt-4 text-red-600">
                                    <p>Câu trả lời đúng là: {quizData[currentQuestion].options[correctAnswer as number]}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>

    )
}
