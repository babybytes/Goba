
import Header from '../components/Header'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className="  w-screen h-screen flex flex-col bg-gradient-to-r from-bg via-neutral-900 to-black">
      <div className="flex">
        <Header />
      </div>
      <div className="flex">
        <Footer />
      </div>
      
    </div>
  )
}

export default Home
