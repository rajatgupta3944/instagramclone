import { Button } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import HomePage from "./pages/HomePage"
import { Navigate, Route, Routes } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import PageLayout from "./Layouts/PageLayout"
import ProfilePage from "./pages/ProfilePage"
import useAuthStore from "./store/authStore"

function App() {
  const authUser = useAuthStore(state => state.user);

  return (
      <PageLayout>
        <Routes>
          <Route path="/" element={authUser ? <HomePage /> : <Navigate to='/auth' />}></Route>
          <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to='/' />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </PageLayout>
  )
}

export default App
