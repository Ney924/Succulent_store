import { Header } from '../../components/Header'
import { MainWidget } from '../../components/MainWidget'
import { SortBar } from '../../components/SortBar'
import s from './App.module.scss'

function App() {
  return (
   <div className={s.root}>
      <Header/>
      <MainWidget/>
      <div className={s.body}>
        <SortBar/>
      </div>
   </div>
  )
}

export default App