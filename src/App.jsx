import React from "react"
import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import LoadingSpinner from "./Components/LoadingSpinner"


const Landing = lazy(() => import('./Pages/Landing'))
const Footer = lazy(() => import('./Components/Footer'))
const Header = lazy(() => import('./Components/Header'))
const Contact = lazy(() => import('./Pages/ContactUs'))
const Locator = lazy(() => import('./Pages/Locator'))
const CategoryPage = lazy(() => import('./Pages/CategoryPage'))
const Enquiry = lazy(() => import('./Pages/Enquiry'))
const Service = lazy(() => import('./Pages/Service'))
const SingleProduct = lazy(() => import('./Pages/SingleProduct'))
const Booking = lazy(() => import('./Pages/Booking'))
const Terms = lazy(() => import('./Pages/Terms'))
const Policy = lazy(() => import('./Pages/Policy'))
const Search = lazy(() => import('./Pages/Search'))
const WhatsApp = lazy(() => import('./Components/Whatsapp'))




function App() {




  return (


    <>


      <Suspense>

        <Header />


      </Suspense>


      <Suspense fallback={<LoadingSpinner />}>


        <Routes>

          <Route path="/" element={<Landing />} />


          {/* Categories */}
          <Route path="/skid" element={<CategoryPage categoryKey="skid" />} />

          <Route path="/mini" element={<CategoryPage categoryKey="mini" />} />

          <Route path="/compressors" element={<CategoryPage categoryKey="compressors" />} />

          <Route path="/backhoe" element={<CategoryPage categoryKey="backhoe" />} />

          <Route path="/drills" element={<CategoryPage categoryKey="drills" />} />

          <Route path="/rock" element={<CategoryPage categoryKey="rock" />} />

          <Route path="/asphalt" element={<CategoryPage categoryKey="asphalt" />} />

          <Route path="/concrete" element={<CategoryPage categoryKey="concrete" />} />

          <Route path="/indo-farm-crane" element={<CategoryPage categoryKey="indo_farm_crane" />} />



          {/* Pages */}
          <Route path="/contact" element={<Contact />} />

          <Route path="/locator" element={<Locator />} />

          <Route path="/enquiry" element={<Enquiry />} />

          <Route path="/service" element={<Service />} />

          <Route path="/pro/:id" element={<SingleProduct />} />

          <Route path="/book" element={<Booking />} />

          <Route path="/terms" element={<Terms />} />

          <Route path="/policy" element={<Policy />} />

          <Route path="/search" element={<Search />} />


        </Routes>


      </Suspense>



      <Suspense>

        <Footer />

      </Suspense>
      <div className="position-relative">
        <WhatsApp />
      </div>


      <Toaster richColors position="bottom-center" />

    </>



  )
}

export default App

