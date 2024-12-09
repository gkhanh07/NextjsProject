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
        question: "Trung đoàn nào bắn rơi chiếc B-52 đầu tiên?",
        options: ["Trung đoàn 236", "Trung đoàn 238", "Trung đoàn 220", "Trung đoàn 261"],
        correctAnswer: 1
    },
    {
        id: 2,
        question: "Kế hoạch đánh B-52 bảo vệ Hà Nội, Hải Phòng được phê chuẩn vào ngày nào?",
        options: ["24/11/1972", "3/12/1972", "13/7/1972", "17/9/1967"],
        correctAnswer: 0
    }
]

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswerClick = (selectedAnswer: number) => {
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
            setScore(score + 1)
        }

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
                                {quizData[currentQuestion].options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerClick(index)}
                                        className="w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-blue-50 transition-colors"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
} 