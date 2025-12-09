import { Header } from "./_components/header"
import { Calculo_Notas } from "./_components/calculo_notas"
import { Footer } from "./_components/footer"
export default function Home(){
  return(
    <main>
      <Header />
      <Calculo_Notas />
      <Footer />
    </main>
  )
}