"use client"

import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Gallery from '@/components/Gallery'
import Stories from '@/components/Stories'
import ForceComparison from '@/components/ForceComparison'
import Casualties from '@/components/Casualties'
import Meaning from '@/components/Meaning'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setIsIntro(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col"
    >
      <AnimatePresence>
        {isIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-center text-white relative"
            >
              <h1 className="text-6xl font-bold mb-6 z-10">
                Điện Biên Phủ Trên Không
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-2xl mb-8 z-10"
              >
                Hà Nội 12 Ngày Đêm
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="h-1 w-full bg-white/30 mt-4 z-10"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, delay: 2 }}
                  className="h-full bg-white"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isIntro && (
        <>
          <Hero />
          <ForceComparison />
          <Timeline />
          <Casualties />
          <Gallery />
          <Stories />
          <Meaning />
        </>
      )}
    </motion.main>
  )
}
