import styles from './App.module.css'
import Header from "./compoentns/Header/Header.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";
import Footer from "./compoentns/Footer/Footer.tsx";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  )
}

export default App
