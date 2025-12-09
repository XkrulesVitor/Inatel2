import cp2_logo from "../../public/LogoCp2_branco_3.png"
import Image from "next/image"
export function Footer(){
    return(
        <section>
            <footer className="fixed bottom-0 left-0 flex w-full p-6 items-center justify-center gap-4">
                <Image
                    src={cp2_logo}
                    alt="Cp2_Logo"
                />
                <p className="mt-2 text-center flex gap-1"><span className="font-bold">CP2eJR </span> © 2025. Todos os direitos reservados.</p>
            </footer>
        </section>
    )
}