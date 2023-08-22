import Image from 'next/image'
import {MdClose, MdRemove, MdOutlineHome, MdCheckBoxOutlineBlank} from 'react-icons/md'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='bg-white w-96 h-96 shadow-2xl'>
        <div className='flex flex-row'>
          <MdOutlineHome/>
          <div className='flex flex-row'>
            <MdRemove/>
            <MdCheckBoxOutlineBlank/>
            <MdClose/>
          </div>
        </div>
      </div>
    </main>
  )
}
