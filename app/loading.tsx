import Image from 'next/image'
import Logo from '@/public/assets/images/logo.png'

const loading = () => {
  return (
    <div className="h-full w-full absolute top-0 flex flex-col justify-center items-center bg-slate-100 z-50">
        <Image className="w-[450px] animate-pulse" src={Logo} alt="404 switch" />
    </div>
  )
}

export default loading