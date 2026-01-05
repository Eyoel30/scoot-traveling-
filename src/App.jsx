import { BrowserRouter } from "react-router-dom"
import './App.css'
import AppRoutes from './routes/routes.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App


//  <userInfo.Provider value={user}>
//         <h1>the current user is {user}</h1>
//         <Header />
//       </userInfo.Provider>