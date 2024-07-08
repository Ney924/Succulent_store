import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { MainWidget } from '../../components/MainWidget'
import { ProductsList } from '../../components/ProductsList'
import { SortBar } from '../../components/SortBar'
import s from './App.module.scss'

function App() {
  return (
   <div className={s.root}>
      <Header/>
      <MainWidget/>
      <div className={s.body}>
        <SortBar/>
        <ProductsList />
      </div>
      <Footer/>
   </div>
  )
}

export default App
