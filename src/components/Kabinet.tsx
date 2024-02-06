import React from 'react'
import Image from 'next/image'

export default function Kabinet() {
    return (
        <section className='md:w-10/12 mx-auto'>
            <div className="mx-auto max-w-screen-xl px-8 pt-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative overflow-hidden sm:h-full lg:order-last  flex justify-center items-center h-full py-8 md:py-0">
                        <Image className='bg-white px-12 py-6 border shadow-[-1px_-1px_rgba(0,_98,_90,_0.8),1px_1px_rgba(0,_98,_90,_0.8),5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]' src={"/Logo_Kabinet.png"} width={300} height={300} alt={'Logo Kabinet'} />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Kabinet Abhipraya</h2>
                        <h2 className="text-lg font-normal sm:text-lg">Satu Rasa Abhipraya<br /> Sukses Kolaborasi Raga</h2>
                        <p className="mt-4 text-primary-content">
                            <strong>7 Sisi</strong> melambangkan 7 Departemen yang menjadi pondasi berdirinya Abhipraya untuk saling berkolaborasi. <strong>Rumah</strong> Melambangkan sebuah naungan yang melindungi setiap anggota dan pengurusnya sebagai keluarga. <strong>Logo KSE Undip</strong> melambangkan identitas Paguyuban KSE Undip.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
