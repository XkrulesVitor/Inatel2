import icon from '../../public/Logo.png'

import Image from 'next/image';

export function Header(){

    return(
        <header className="relative w-full p-6 mx-auto flex items-center text-white overflow-hidden">   
                    <div className='absolute left-30 top-6'>
                        <a href='#'>
                        <Image
                        src={icon}
                        alt='Ícone'
                        className='w-40 h-auto'
                        />
                    </a>
                    </div>
                    <div className='flex items-center justify-center pt-5 gap-8 w-full max-w-[720px] mx-auto'>
                        <a href='#' className='border-b-2 border-transparent hover:border-white transition-colors pb-2'>
                            <h1 className='font-aboreto'>CÁLCULO DE NOTAS</h1>
                        </a>
                        <a href='#' className='border-b-2 border-transparent hover:border-white transition-colors pb-2'>
                            <h1 className='font-aboreto'>CRITÉRIOS DE AVALIAÇÃO</h1>
                        </a>
                        <a href='#' className='border-b-2 border-transparent hover:border-white transition-colors pb-2'>
                            <h1 className='font-aboreto'>MATÉRIAS</h1>
                        </a>
                        <a href='#' className='border-b-2 border-transparent hover:border-white transition-colors pb-2'>
                            <h1 className='font-aboreto'>SOBRE</h1>
                        </a>
                    </div>
        </header>
    )
}