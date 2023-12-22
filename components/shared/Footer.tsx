import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center flex flex-col gap-2 flex-between wrapper p-5 sm:flex-row'>
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt='Eventify logo'
            width={128}
            height={38}
          ></Image>
        </Link>

        <p className='p-regular-14'>
          Eventify. All Rights reserved
        </p>
        
      </div>
    </footer>
  )
}

export default Footer