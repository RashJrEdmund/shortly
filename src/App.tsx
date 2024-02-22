import { Route, Routes } from 'react-router-dom';
import {
  FeaturePage,
  HomePage,
  LoginPage,
  PricingPage,
  ResourcePage,
  SignUpPage
} from './core/pages';
import { NavBar, Footer } from './core/ui/components/molecules';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/features' element={<FeaturePage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/resources' element={<ResourcePage />} />

        {/* AUTH PAGES */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;
