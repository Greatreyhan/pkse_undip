import React from 'react'

export default function VisMis() {
    return (
        <div className='md:w-10/12 w-11/12  flex justify-around items-stretch mx-auto mt-8 md:mt-0'>
            <div className='flex flex-auto flex-col'>
                <div className='px-8 w-full py-4 bg-white border border-neutral shadow-[5px_5px_0px_0px_rgba(0,0,0)] mb-2'>
                    <h2 className='text-2xl font-bold'>Visi.</h2>
                    <p className='mt-2'>Memperkuat kolaborasi dalam satu rasa demi meningkatkan Paguyuban KSE Undip yang sukses jaya</p>
                </div>
                <div className='px-8 w-full py-4 bg-white border border-neutral shadow-[5px_5px_0px_0px_rgba(0,0,0)] my-2'>
                    <h2 className='text-2xl font-bold'>Misi.</h2>
                    <p className='mt-2'><strong>INTERNAL</strong>: Menyatukan rasa kepemilikan dalam iklim internal beswan yang aktif, dedikatif, dan kolaboratif</p>
                    <p className='mt-1'><strong>EKSTERNAL</strong>: Menjalin hubungan dua arah dengan
                    yayasan, donatur, masyarakat dan organisasi lain untuk
                    mencapai cita bersama</p>

                    <p className='mt-1'><strong>KOLABORATIF</strong>: Meningkatkan kolaborasi pihak internal
                    dan eksternal dalam membangun ekosistem sirkular </p>

                    <p className='mt-1'><strong>SUKSES JAYA</strong>: Mengoptimalkan potensi sumber daya
                    dalam pengembangan program bermanfaat dan
                    berkelanjutan</p>
                </div>
            </div>
        </div>
    )
}
