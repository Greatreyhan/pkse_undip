'use client'
import React, { useState, useEffect } from 'react'
import Stat from './Stat';

export default function Hero() {
    const [count, setCount] = useState<number>(0);
    const [dynamicWord, setDynamicWord] = useState<string>("")
    const word: string[] = ["Sharing", "Networking", "Developing"]

    useEffect(() => {
        const timer = setInterval(() => {
            if (count >= 2) setCount(0)
            else setCount(count + 1)
            setDynamicWord(word[count])
        }, 1000);
        return () => clearInterval(timer);
    }, [count]);

    return (
        <div className='relative'>
            <section
                style={{
                    backgroundImage: `url('/Hero.jpg')`,
                }}
                className="relative bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0  bg-transparent from-base-100 to-white/25 bg-gradient-to-r"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left ">
                        <h1 className="text-3xl text-secondary-content font-extrabold sm:text-5xl">
                            PKSE
                            <strong className="font-extrabold text-neutral">-UNDIP </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            Paguyuban Karya Salemba Empat di Universitas Diponegoro untuk <strong>{dynamicWord}</strong>
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block md:mx-0 mx-auto rounded bg-primary px-12 py-3 text-md font-medium text-primary-content shadow hover:bg-secondary/80 focus:outline-none focus:ring sm:w-auto"
                            >
                                Kontak Kami
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full flex justify-center mx-auto absolute -bottom-10">
                <Stat />
            </div>
        </div>
    )
}
