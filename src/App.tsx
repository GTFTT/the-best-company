import styles from './App.module.css'
import Header from "./compoentns/Header/Header.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MainPage />
    </div>
  )
}

export default App
