import Image from 'next/image'
import React from 'react'
import anu from "../../../public/Anuuu.jpg"

export default function Page() {
    return (
        <>
            <nav className='bg-purple-500 text-white'>
                <Image src={anu} alt='User' width={24} height={24} />
                <ul className='px-2 py-2 flex space-x-3 justify-around items-center'>
                    <li className='cursor-pointer text-decoration font-weight'>
                        Home
                    </li>
                    <li className='cursor-pointer flex-grow text-center'>
                        About
                    </li>
                    <li className='cursor-pointer'>
                        Contact
                    </li>
                </ul>
            </nav>

            <section className='bg-slate-600 flex flex-grow '>
                <div className='text-heading4-medium'>
                    Hello
                </div>
                <div className='flex-row'>
                    Bye
                </div>
            </section>
        </>
    )
}
