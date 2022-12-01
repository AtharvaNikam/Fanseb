import React from "react";
import Hero from "./Hero/Hero";
import Footer from "../common/Footer/Footer";
import Testimonials from "./Testimonial/Testimonials";
import OurProcess from "./OurProcess/Process";
import Contact from "../common/Contact/Contact";
import About from "../common/About/About";
import Product from "../common/ProductPage/Product";
import MuchMore from "./MuchMore/MuchMore";
import Login from "../common/Login/Login";

import Parallax from "./Parallax/Parallax";
import RangeSlider from "./Slider/RangeSlider";
// import Slider from "./Slider/Slider";
import AllProduct from "../common/AllProduct/AllProduct";
import SingleProduct from "../common/SingleProduct/SingleProduct";
import Cart from "../common/Cart/Cart";
import Checkout from "../common/Checkout/Checkout";
import WishList from "../common/WishList/WishList";
import EmptyCart from "../common/EmptyCart/EmptyCart";
import Header from "../common/Header/Header";
import Account from "../common/Account/Account";
import Creators from "./Creators/Creators";
import Influencer from "./Influencer/Influencer";
import Instagram from "./Instagram/Instagram";
import Counter from "./Counter/Counter";
import Galaxy from "../Galaxy/Galaxy";
export default function Home() {
  return (
    <>
      <Galaxy id="app" />
      {/* <Login /> */}
      {/* <Header /> */}
      <Hero />
      <Influencer />
      <RangeSlider />
      {/* <Testimonials /> */}
      {/* <About /> */}
      {/* <Product /> */}
      {/* <Contact/> */}
      {/* <AllProduct /> */}
      {/* <SingleProduct /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      {/* <WishList /> */}
      {/* <EmptyCart /> */}
      {/* <Account /> */}
      {/* <OurProcess /> */}
      {/* <Parallax /> */}
      {/* <Creators /> */}
      <MuchMore />
      <Instagram />
      <Counter />
      <Footer />
    </>
  );
}
