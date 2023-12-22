'use client'

import { Button } from '@/components/ui/button'
import { createUser, updateUser } from '@/lib/actions/user.actions'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    
    <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md: py-10'>

      <div className='wrapper grid grid-cols-1 md:grid-cols-2 2xl:gap-0'>

        <div className='flex flex-col gap-6 justify-center'>

          <h1 className='h1-bold'>
            Host, Connect, Celebrate: Your Events, Our Platform!
          </h1>

          <p className='p-regular-18'>
            Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.
          </p>

          <Button size={"lg"} className='button w-full sm:w-fit' onClick={async () => {
            const user = {
              clerkId: "BCDEFGHIJKLMNOPQRSTUV", 
              firstName: 'John',
              lastName: 'Doe25', 
              userName: 'johnny86',
              email: 'johny86@example.com',
              photo: 'https://i.pravatar.cc/300?img=32',
            };
            
            
            console.log(user);
            const updatedUser = await createUser(user)
          }}>
            <Link href={"#events"}>
              Explore Now
            </Link>
          </Button>

        </div>

        <Image
          src={"/assets/images/hero.png"}
          alt="hero"
          width={1000}
          height={1000}
          className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
        >
        </Image>

      </div>

    </section>

    <section id='events' className='wrapper flex flex-col my-8 gap-8 md:gap-12'>

      <h2 className='h2-bold'>
        Trust by <br /> Thousands of Events
      </h2>

      <div className='flex flex-col md:flex-row gap-5 w-full'>
        Search
        Category
      </div>

    </section>


    </>
  )
}
