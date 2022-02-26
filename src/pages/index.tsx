
import Header from '../components/Header'
import Landing from '../components/Landing'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className=" overflow-hidden w-screen h-screen flex flex-col bg-gradient-to-r from-bg via-neutral-900 to-black">
      <div className="flex">
        <Header />
      </div>
      <div className="flex grow">
        <Landing />
      </div>
      <div className="flex">
        <Footer />
      </div>
      
    </div>
  )
}

export default Home
