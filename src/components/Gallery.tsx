'use client'
import React, { useEffect, useState } from 'react'
import Pictures from "../../public/Gallery/pict.json"
import Image from 'next/image'

export default function Gallery() {
  const [picts, setPicts] = useState<string[][]>([])

  function chunkArray(arr: string[], size: number) {
    const result = [];

    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }

    return result;
  }

  useEffect(() => {
    const chuncked: string[] = Pictures.files
    setPicts(chunkArray(chuncked, 3))
  }, [])

  return (
    <div className='w-11/12 mx-auto my-16' id="galleries">
      <h2 className='font-bold text-2xl border-l-2 border-neutral px-2 py-2 mb-8'>Gallery.</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {picts?.map(arr => {
            return (
              <div className="grid gap-2">
                {arr?.map(img => {
                  return(
                  <div className="h-full max-w-full rounded-lg">
                    <Image className='h-full w-full object-cover border border-neutral'  src={`/Gallery/${img}`} width={500} height={500} alt={img} />
                  </div>
                  )
                })
                }
              </div>
            )
          })}
      </div>
    </div>
  )
}
