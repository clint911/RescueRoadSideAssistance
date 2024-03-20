/**The reason for this style of architecture is to allow for a harmonious clean differentiation of pages**/
import  LandingPage  from "./pages/Landing/LandingPage.tsx";
import './App.css'
function App() {
  return (
    <div className='App'>
      <LandingPage />
    </div>
  )
}

export default App
