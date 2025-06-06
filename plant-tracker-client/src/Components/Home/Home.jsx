import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import PlantCard from './PlantCard';
import Loading from "./Loading.json"
import Lottie from 'lottie-react';
import { Tooltip } from 'react-tooltip';
import * as motion from "motion/react-client"
import { useRef } from "react"



const Home = () => {

    const { plantData, loading } = use(AuthContext)
    console.log(plantData)

    const ball = {
        width: 100,
        height: 100,

        borderRadius: "50%",
    }

    const constraintsRef = useRef < HTMLDivElement > (null)
    const constraints = {
        backgroundColor: "var(--hue-1-transparent)",
        borderRadius: 10,
    }

    const box = {
        width: 100,
        height: 100,
        borderRadius: 10,
    }

    let plantNumber = 0

    return (
        <div>
            {/* Carousel Section */}
            <div className="slider p-4 sm:p-10">
                <div className="carousel w-full shadow-2xl rounded-xl">
                    {/* Slide 1 */}
                    <div id="slide1" className="carousel-item relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
                        <img src='/assets/plant4.jpg' className="w-full h-full object-cover" />
                        <div className='absolute top-6 sm:top-16 md:top-20 w-full sm:w-[90%] md:w-[70%] lg:w-[60%] space-y-3 px-4 sm:px-10 text-justify'>
                            <h1 className='text-2xl sm:text-3xl md:text-4xl'>Master Tropical Plant Care</h1>
                            <p className='text-sm sm:text-base'>"Learn essential watering techniques, humidity control, and light management for your tropical paradise. From prayer plants to bird of paradise - get expert care tips tailored to each species."</p>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div id="slide2" className="carousel-item relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
                        <img src="/assets/plant5.jpg" className="w-full h-full object-cover" />
                        <div className='absolute top-6 sm:top-16 md:top-20 w-[60%] sm:w-[90%] md:w-[70%] lg:w-[60%] space-y-3 px-4 sm:px-10 text-right right-0 '>
                            <h1 className='text-2xl sm:text-3xl md:text-4xl'>Discover Exotic Tropical Species</h1>
                            <p className='text-sm sm:text-base'>"Explore stunning varieties from lush Monstera deliciosa to vibrant Crotons and elegant Peace Lilies. Each plant comes with detailed care profiles and growth tracking features."</p>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div id="slide3" className="carousel-item relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
                        <img src="/assets/plant7(2).jpg" className="w-full h-full object-cover" />
                        <div className='absolute bottom-6 sm:bottom-16 md:bottom-20 w-[50%] sm:w-[60%] md:w-[50%] lg:w-[60%] space-y-3 px-4 sm:px-10 text-right right-0'>
                            <h1 className='text-2xl sm:text-3xl md:text-4xl'>Your Personal Plant Care Assistant</h1>
                            <p className='text-sm sm:text-base'>"Smart watering reminders, humidity alerts, and growth progress tracking ensure your tropical plants thrive year-round."</p>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 4 */}
                    <div id="slide4" className="carousel-item relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
                        <img src="/assets/plant6.jpg" className="w-full h-full object-cover" />
                        <div className='absolute bottom-10 sm:bottom-16 md:bottom-20 w-full sm:w-[90%] md:w-[70%] lg:w-[60%] space-y-3 px-4 sm:px-10 text-right right-0'>
                            <h1 className='text-2xl sm:text-3xl md:text-4xl'>Create Your Indoor Tropical Oasis</h1>
                            <p className='text-sm sm:text-base'>"Transform any space into a lush tropical retreat with personalized care plans for Fiddle Leaf Figs, Rubber Trees, and exotic flowering plants."</p>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tooltip Section */}
            {/* <div className='mx-auto flex justify-center mt-6'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    style={ball}><a className='border p-4 rounded-full flex items-center justify-center' data-tooltip-id="my-tooltip" data-tooltip-content="Hey there, hooman! Welcome To the website!">◕‿‿◕</a>
                    <Tooltip id="my-tooltip" /></motion.div>
            </div> */}

            <motion.div className='flex justify-center' ref={constraintsRef} style={constraints}>
                <p className='text-right'>you can drag me! <br />
                    Want to know about the website? Tap me!
                </p>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={box}>
                    <a className='border p-4 rounded-full flex items-center justify-center ' data-tooltip-id="my-tooltip" data-tooltip-content="Hey there, hooman! Welcome To the website! ->
                    
                    🌱 Plant Care Tracker - Your digital plant care assistant! Add plants, track watering & keep plants healthy.
                    ">◕‿‿◕</a>
                    <Tooltip className='max-w-sm' id="my-tooltip" />
                </motion.div>
            </motion.div>

            {/* <div className=' w-[5%] mx-auto'>
                <a className='border p-4 rounded-full flex items-center justify-center' data-tooltip-id="my-tooltip" data-tooltip-content="Hey there, hooman! Welcome To the website!">◕‿‿◕</a>
                <Tooltip id="my-tooltip" />
            </div> */}

            {/* Cards Section */}
            {loading ? (
                <div className='my-20'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl text-center mb-10'>New Arrivals</h1>
                    <p className='text-center'>Loading Data......</p>
                    <Lottie className='size-70 shadow-2xl mx-auto' animationData={Loading}></Lottie>
                </div>

            ) : (
                <div className="cards px-4 sm:px-10 md:px-20 py-10 sm:py-16 md:py-20 w-full sm:w-[90%] md:w-[80%] mx-auto">
                    <div className=' text-center mb-10'>
                        <h1 className='text-4xl sm:text-3xl md:text-5xl heading '>New Plants Added</h1>
                        <p className='text-sm'>You can add new plants in add plants section</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                        {plantData?.map((plant, index) => (
                            index < 6 && (
                                <div key={plant.id}>
                                    <PlantCard plant={plant} />
                                </div>
                            )
                        ))}
                    </div>
                </div>
            )}

            {/* Last Info Image Section */}
            <div className="last-first-section p-4 sm:p-10 mx-auto w-full sm:w-[90%] relative my-20">
                <img className='object-cover rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px]' src="/assets/plant10.jpg" alt="" />
                <div className='absolute top-6 sm:top-20 w-full sm:w-[90%] md:w-[70%] lg:w-[60%] px-4 sm:px-10'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl object-cover heading'>Why Choose Tropical Plants?</h1>
                    <p className='mt-3 text-sm sm:text-base w-[60%] object-cover'>"Discover the amazing benefits of growing tropical plants in your home. From cleaner air to a happier mood, these green companions offer more than just beauty - they transform your living space into a healthier, more peaceful environment."</p>
                    <ul className='mt-4 ml-6 list-disc text-sm sm:text-base'>
                        <li>Better air quality in your home</li>
                        <li>Reduced stress and improved mood</li>
                        <li>Beautiful green decoration</li>
                    </ul>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="last-second-section px-4 sm:px-10 my-30">
                <h1 className='text-3xl sm:text-3xl md:text-5xl text-center mt-20 heading'>Essential Care Tips for Success</h1>
                <div className='mt-10 w-full sm:w-[90%] md:w-[80%] mx-auto'>
                    <ul className="timeline timeline-vertical">
                        {[
                            ["Check Soil Before Watering", "Stick your finger 1-2 inches into the soil. If it feels dry, it's time to water. If it's still moist, wait a few more days. This prevents overwatering, the #1 cause of plant problems."],
                            ["Provide Bright, Indirect Light", "Most tropical plants love bright light but not direct sun. Place them near a window with a sheer curtain or a few feet away from a sunny window to avoid leaf burn."],
                            ["Wipe Leaves Monthly", "Clean leaves with a damp cloth to remove dust and improve photosynthesis. This simple step helps your plants breathe better and look more vibrant."],
                            ["Use Room Temperature Water", "Cold water can shock tropical plant roots. Let tap water sit overnight to reach room temperature and allow chlorine to evaporate before watering."],
                            ["Rotate Plants Weekly", "Turn your plants a quarter turn each week so all sides get equal light. This prevents lopsided growth and keeps your plants looking full and balanced."],
                            ["Watch for Yellow Leaves", "Yellow leaves usually mean overwatering or poor drainage. Remove yellow leaves immediately and adjust your watering schedule to prevent root rot."]
                        ].map(([title, desc], i) => (
                            <li key={i}>
                                <div className={`timeline-box p-4 sm:p-6 ${i % 2 === 0 ? "timeline-start" : "timeline-end"}`}>
                                    <div className='text-lg sm:text-xl md:text-2xl mb-2'>{title}</div>
                                    <div className='text-sm sm:text-base'>{desc}</div>
                                </div>
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
