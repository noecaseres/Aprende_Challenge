import { Brand } from './components/Brand'
import { Diplomados } from './views/diplomados/Diplomados'
import { Footer } from './views/footer/Footer'
import { Header } from './views/header/Header'
import { Objetivos } from './views/objetivos/Objetivos'

function App() {

  return (
    <>
      <Brand/>
      <Header/>
      <Objetivos/>
      <Diplomados/>
      <Footer/>
    </>
  )
}

export default App
