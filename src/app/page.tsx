'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-[url("/hero-back.png")] bg-no-repeat bg-center bg-contain max-w-screen-xl mx-auto'>
      <div className='w-full h-[80vh] max-w-screen-xl mx-auto flex gap-10 justify-center items-center'>
        <div>
          <div className='text-2xl'>Welcome to KINGZLAND</div>
          <div className='text-7xl font-black'>
            Start Your Beautiful And Bright Future
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-3'>
          <motion.img
            src={'/1.png'}
            alt={''}
            width={250}
            height={250}
            className='object-cover object-center rounded-3xl rotate-6'
          ></motion.img>
          <motion.div className='h-full w-full bg-yellow-300 rounded-3xl rotate-6'></motion.div>
          <motion.div className='h-full w-full bg-yellow-300 rounded-3xl -rotate-6'></motion.div>
          <motion.img
            src={'/2.png'}
            alt={''}
            width={250}
            height={250}
            className='object-cover object-center rounded-3xl rotate-12'
          ></motion.img>
        </div>
      </div>
    </div>
  );
}
