import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const About = () => {
  return (
    <section className='about'>
        <Header></Header>
    <div className="bg-[url('/images/bakers2.jpg')] bg-cover bg-center h-screen flex items-center justify-center bg-no-repeat w-full">
    <div className="flex flex-col items-center">
    <h1 className="text-[white] text-7xl font-bold animate-bounce">About Us</h1>
            <p className="text-[white] text-xl fon-bold">Welcome to SG_Baker's, where we believe every cake should tell a story.
               Founded with a passion for baking and a love for creating beautiful, delicious treats, 
                our bakery has become a favorite destination for cake lovers.</p>
             <p className="text-[white] text-xl fon-bold">We specialize in custom cakes that are crafted with the finest ingredients 
                and attention to detail, ensuring each slice is as delightful as the last.</p>

           <p className="text-[white] text-xl fon-bold">Our team is dedicated to making every celebration special—whether 
               it’s a wedding, birthday, anniversary, or just a treat for yourself.
                From classic flavors to inventive designs, we’re here to turn your ideas into edible art.
                We’re more than just bakers; we’re creators, and each creation is made with love, care, and a sprinkle of magic. </p>

     <h2 className="text-[white] text-7xl font-bold">Why Choose Us?</h2>

     <p className="text-[white] text-xl fon-bold">At SG_Baker's , our priority is quality.
      We take pride in using locally sourced ingredients and never compromising on taste.
       Each cake is freshly baked, beautifully decorated, and designed to bring joy to every occasion.</p>

    <p className="text-[white] text-xl fon-bold">Let us be part of your next celebration! Visit our gallery to see our latest creations, 
    or stop by to say hello—we’d love to bake something special for you.</p>
    </div>

     
    </div>
    <Footer></Footer>
    </section>
  )
}

export default About