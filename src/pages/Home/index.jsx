import React from 'react'
import * as C from "./styles";
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Featured from '../../components/Featured';
import PropertyList from '../../components/PropertyList';
import FeaturedProperties from '../../components/FeaturedProperties';
import MailList from '../../components/MailList';
import Footer from '../../components/Footer';


const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <C.homeContainer>
        <Featured />
        <C.homeTitle1>Browse by property type</C.homeTitle1>
        <PropertyList />
        <C.homeTitle1>Homes guests love.</C.homeTitle1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </C.homeContainer>
    </>
  )
}

export default Home