import React from 'react'

import y2k from "/src/assets/Card/y2k.jpeg"
import oldMoney from "/src/assets/Card/oldMoney.jpg"
import darkfem from "/src/assets/Card/darkfem.jpeg"
import cottagecore from "/src/assets/Card/cottagecore.jpg"
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Fairy from "/src/assets/magic.gif"; // Importing the image


function Home() {
    
      return (
        <>
       
        <div className="bg-fixed bg-cover bg-center h-screen " style={{ backgroundImage: 'url(/public/HomeImg/background4.jpg)' }}>
          <div className="h-full overflow-y-auto absolute inset-0 bg-black bg-opacity-20">
            <div className="h-screen">
             
                <div className='font-custom-h py-3 flex items-center justify-center'>
                    <div className="image-container ">
                        <img src={Fairy} className='hidden lg:block w-32 h-32 opacity-60' alt="My Local Image" />
                    </div>
                   
                    <h1 className="text-white pt-10 lg:pr-12 text-4xl  break-words sm:text-5xl md:text-6xl font-bold text-shadow transform transition-all duration-300 hover:scale-110 hover:text-black max-w-full overflow-hidden break-words text-center">
                        The Fashion Fairy
                    </h1>
                   
                   
                </div>
                
              
                <div className="flex items-center justify-center px-4 text-center min-h-screen w-full">
                    <p className="font-custom-h text-slate-900 text-lg   
                    max-w-xl sm:text-lg md:text-lg transform transition-all duration-300 hover:scale-110 hover:text-black">
                        In the heart of Everglow, a town where fashion was an afterthought, lived Lina, a girl with an extraordinary gift—she was a Fashion Fairy.<br />
                        With a flick of her hand and a sprinkle of shimmering fabric dust, she could transform the plainest outfits into breathtaking ensembles.<br />
                        But Lina’s magic wasn’t just about clothes; it was about confidence.<br />
                        One day, she met Mia, a shy artist who hid behind oversized sweaters.<br />
                        “You don’t need to disappear,” Lina said with a warm smile. With a wave of her wand, Mia’s outfit blossomed into a chic yet comfortable bohemian dress,
                        reflecting her creative soul.<br />
                        Then came Jake, who dreaded school events because he had “nothing cool to wear.”<br />
                        Lina crafted a sleek, modern look that made him stand tall, radiating self-assurance.<br />
                        Word spread, and soon, the town was transformed. Colors danced in the streets, and people walked with newfound pride. But Lina always reminded them:<br />
                           
                            “Fashion isn’t about trends; it’s about telling your story with confidence.”
                         <br /><br />

                            <span className='text-3xl'>
                            Click on any card below if you're curious!
                         </span> 
                    </p>
                    
                </div>
                <div>
                    <div className="cards-container flex flex-wrap justify-between  
                    justify-evenly gap-10 p-4 w-full max-w-screen-lg mx-auto">
                            <Card image={y2k} title="Y2k" page="y2k" content="Velvet, vinyl, and a touch of millennium magic." />
                            <Card image={oldMoney} title="Old Money" page="oldMoney" content="Old money doesn’t chase trends; it sets traditions." />
                            <Card image={darkfem} title="Dark Feminine" page="darkfem" content="I don't need your approval, I approve of myself." />
                            <Card image={cottagecore} title="Cottage Core" page="cottagecore"content="Sundays are for slow walks and warm tea." /> 
                        </div>
                </div>
                <div className='m-4 p-4'>
                    <Footer/>
                </div>
           
            </div>
           
            
          </div>
        </div>
       
        </>
      );
}

export default Home