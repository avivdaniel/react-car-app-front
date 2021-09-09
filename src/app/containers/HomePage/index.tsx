import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import Navbar from "../../components/navbar";
import TopSection from "./topSection";
import BookCard from "../../components/bookCard";
import BookingSteps from "./bookingSteps";
import AboutUs from "./aboutUs";
import TopCars from "./topCars";
import Footer from "../../components/footer";

const PageContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
  `}
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <BookCard />
      <BookingSteps />
      <AboutUs />
      <TopCars />
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
