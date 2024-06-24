import { Header } from '../../components/Header'
import { MainWidget } from '../../components/MainWidget'
import { Products } from '../../components/Products'
import { SortBar } from '../../components/SortBar'
import s from './App.module.scss'

function App() {
  return (
   <div className={s.root}>
      <Header/>
      <MainWidget/>
      <div className={s.body}>
        <SortBar/>
        <Products />
      </div>
   </div>
  )
}

export default App
