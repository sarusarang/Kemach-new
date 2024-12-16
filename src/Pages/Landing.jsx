import React from 'react'
import HomeSlider from '../Components/HomeSlider'
import About from '../Components/About'
import MostUsed from '../Components/MostUsed'
import Vison from '../Components/Vison'
import Dealers from '../Components/Dealers'

function Landing() {


    window.scrollTo(0, 0)


    return (
 

        <>

            <section className='w-100'>


                {/* Home slider */}
                <div>

                    <HomeSlider />

                </div>



                {/* About */}
                <div>

                    <About />

                </div>


                {/* Most Used */}
                <div>

                    <MostUsed />

                </div>


                {/* Vision */}
                <div>

                    <Vison />

                </div>


                {/* Dealers */}



            </section>



        </>


    )


}

export default Landing