import { AllRoutes } from "./routes/AllRoutes"
import './App.css'
import 'flowbite';
import { Footer, Header } from './Components';

function App() {

  return (
    <div className='App'>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
