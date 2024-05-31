import CarousalPage from '../Components/CarouselPage/CarousalPage'
import CardDisplayPage from '../Page/CardDisplay/CardDisplayPage'
import BigCard from './BigCard'
import ClientsTestimonials from './Clienttest/ClientsTestimonials'
import Comp from './Comp'
import './MainPags.css'
import {Container} from 'react-bootstrap'
import NewPage from '../Page/NewEdit/NewPage.jsx'


const MainPags = () => {
  return (
    <>
    <CarousalPage />
      <BigCard />
      <Comp />
      <NewPage />
      <CardDisplayPage />
      <ClientsTestimonials />
    </>
  )
}

export default MainPags
