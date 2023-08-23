import Image from 'next/image'
import {MdClose, MdRemove, MdOutlineHome, MdCheckBoxOutlineBlank, MdPlayCircle, MdSkipNext, MdSkipPrevious, MdShuffle, MdLoop} from 'react-icons/md'
import { Slider } from "@/components/ui/slider"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-64">
      <div className=' bg-gray-100 w-96 h-80 shadow-3xl rounded-md flex flex-col justify-between'>
        <div className='bg-white flex flex-row justify-between p-2'>
          <MdOutlineHome/>
          <div className='flex flex-row space-x-2'>
            <MdRemove/>
            <MdCheckBoxOutlineBlank/>
            <MdClose/>
          </div>
        </div>
        <div className='bg-white'>
          <Slider defaultValue={[33]} max={100} step={1} />
          <div className='flex items-center justify-center space-x-4 my-2'>
            <MdShuffle/>
            <MdSkipPrevious/>
            <MdPlayCircle/>
            <MdSkipNext/>
            <MdLoop/>
          </div>
        </div>
      </div>
    </main>
  )
}
