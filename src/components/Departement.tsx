import React from 'react'
import Image from 'next/image'

export default function Departement() {
    return (
        <div className='mt-28 md:w-10/12 mx-auto' id="departement">
            <h2 className='font-bold text-3xl mx-auto text-center'>Departements.</h2>
            <ul className="timeline timeline-vertical mt-10">
                <li>
                    <hr />
                    <div className="timeline-end font-semibold">Pengurus Harian</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start timeline-box md:text-md text-sm relative pt-14"><div className='absolute -top-5 -left-2 border border-neutral shadow-[5px_5px_0px_0px_rgba(0,0,0)] w-16 h-16 p-3 bg-white flex items-center justify-center'><Image  src={'/Logo_Kabinet.png'} width={50} height={50} alt={'PH'} /></div><strong>PH</strong> terdiri dari ketua, wakil ketua, bendahara, dan sekretaris yang bertugas mengkoordinasi jalannya program dalam paguyuban dan sebagai penghubung dengan pihak eksternal.</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start font-semibold">Community Development</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box md:text-md text-sm relative pt-14"><div className='absolute -top-5 -left-2 border border-neutral shadow-[5px_5px_0px_0px_rgba(0,0,0)] w-16 h-16 bg-white flex items-center justify-center'><Image  src={'/Comdev.png'} width={50} height={50} alt={'PH'} /></div><strong>Comdev</strong> merupakan salah satu unit di bawah naungan Paguyuban Karya Salemba Empat yang berfokus pada pengabdian dan pemberdayaan masyarakat. Contoh kegiatan pemberdayaan yang dijalankan berupa program Bank Sampah, Hidroponik, Budidaya Maggot, dan masih banyak lagi. KSE Undip memiliki dua desa binaan yang berlokasi di Sumurboto (Comdev Alpha), dan Jangli (Comdev Beta).</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-end font-semibold">EDUKASI & TEKNOLOGI</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start timeline-box md:text-md text-sm relative pt-14"><div className='absolute -top-5 -left-2 border border-neutral shadow-[5px_5px_0px_0px_rgba(0,0,0)] w-16 h-16 bg-white flex items-center justify-center'><Image  src={'/Edutekno.png'} width={50} height={50} alt={'PH'} /></div><strong>Edutekno</strong> merupakan departemen yang bergerak dalam kegiatan pembelajaran, pengajaran, dan pendampingan terhadap beswan KSE di bidang pendidikan. Selain itu, departmen eduktekno juga bergerak dalam meningkatkan kemampuan dan potensi beswan dalam lingkup keilmiahan, riset, dan teknologi.</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start font-semibold">SOCIO & ENTREPRENEUR</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box md:text-md text-sm relative pt-14"><div className='absolute -top-5 -left-2 border border-neutral shadow-[5px_5px_0px_0px_rgba(0,0,0)] w-16 h-16 bg-white flex items-center justify-center'><Image  src={'/Sospre.png'} width={50} height={50} alt={'PH'} /></div><strong>Sociopreneur</strong> merupakan departemen yang menjadi wadah bagi beswan KSE Undip dalam melakukan kegiatan sosial untuk lingkungan dan masyarakat, serta wadah untuk mendukung terbentuknya jiwa wirausaha yang mampu mengembangkan dan mendukung lingkungan internal maupun eksternal Paguyuban KSE Undip.</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-end font-semibold">Media & Relation</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start timeline-box md:text-md text-sm relative pt-14"><div className='absolute -top-5 -left-2 border border-neutral shadow-[5px_5px_0px_0px_rgba(0,0,0)] w-16 h-16 p-1 bg-white flex items-center justify-center'><Image  src={'/Medrel.png'} width={50} height={50} alt={'PH'} /></div><strong>Medrel </strong>merupakan departemen yang berfokus pada media penyampaian publikasi kegiatan Paguyuban KSE Undip selama satu tahun kepengurusan serta media penghubung (relation) antara pihak internal paguyuban dengan pihak eksteknal.</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start font-semibold">HRD dan Mikat</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box md:text-md text-sm relative pt-14"><div className='absolute -top-5 -left-2 border border-neutral shadow-[5px_5px_0px_0px_rgba(0,0,0)] w-16 h-16 bg-white flex items-center justify-center'><Image  src={'/Hrdmikat.png'} width={50} height={50} alt={'PH'} /></div><strong>Hrdmikat</strong> merupakan departemen yang menaungi peran dalam meningkatkan rasa kepedulian, kekeluargaan dan solidaritas antar beswan guna mencapai tujuan dan cita-cita paguyuban KSE Undip 2023. Bergerak dan berfokus pada pengembangan internal beswan KSE UNDIP, baik dari segi softskill maupun minat bakat.</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-end font-semibold">PENGEMBANGAN MUTU ORGANISASI</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start timeline-box md:text-md text-sm relative pt-14"><div className='absolute -top-5 -left-2 border border-neutral shadow-[5px_5px_0px_0px_rgba(0,0,0)] w-16 h-16 bg-white flex items-center justify-center'><Image  src={'/Pmo.png'} width={50} height={50} alt={'PH'} /></div><strong>PMO</strong> adalah unit yang dibentuk dengan tujuan mengawasi, menjaga, dan meningkatkan stabilitas kinerja serta profesionalitas Paguyuban KSE Undip.</div>
                </li>
            </ul></div>
    )
}
