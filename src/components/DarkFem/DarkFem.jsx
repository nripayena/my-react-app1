import React from 'react'
import { OutfitCard } from  "/src/components/Card/OutfitCard.jsx";
import img1 from "/src/assets/DarkFem/img1.jpg"
import img2 from "/src/assets/DarkFem/img2.jpg"
import img3 from "/src/assets/DarkFem/img3.jpg"
import img4 from "/src/assets/DarkFem/img4.jpg"
import img5 from "/src/assets/DarkFem/img5.jpg"
import img6 from "/src/assets/DarkFem/img6.jpg"
import img7 from "/src/assets/DarkFem/img7.jpg"
import img8 from "/src/assets/DarkFem/img8.jpg"
import img9 from "/src/assets/DarkFem/img9.jpg"
export default function DarkFem() {
  const imageCaptions = [
    "A Simple off-shoulder top, low-rise boot-cut jeans, sneakers and Silver Hoop earring and Voila! you have your 1st oufit. ",
    "Paris Hilton core.A cowl neck top, mini-skirt, matching kitten heels and accessorize.",
    "Oversized leather jacket screams y2k.",
    "All baddies in y2k were wearing Newsboy Cap. This outfit is just a simple fitted shirt , boot-cut jeans and sneakers.",
    "Super baggy jeans and a simple tank top and accessorize with silver jewellary.",
    "What's more iconic than dress over jeans?!",
    "A quirky animal print dress is a staple.",
    "Fitted midi skirt, and a quirky printed top.",
    "A quirky printed top, boot-cut jeans, newsboy hat and lots of accessories!"
  ]
  return (
    <>
       <div className="font-custom-h flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl transform transition-all duration-300 hover:scale-105 hover:text-black ">
          Dark Feminine Core
        </h1>
        <p className="text-slate-900 pt-2 px-3 text-lg break-words max-w-2xl">
          You dont need generational wealth to look like a million bucks! A crisp plain white shirt and simple jeans can do the trick,
          Its all about minimalism, basic staple pieces and gold jewellery.
        </p>
      </div>
    
      <div className="flex items-center justify-center px-4 text-center  w-full">
      
      
      <div className='group grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 mt-10 mx-auto p-4 w-full max-w-[1200px] place-items-center'>
      
        <OutfitCard image={img1} content= {imageCaptions[0]} />
        <OutfitCard image={img2} content= {imageCaptions[1]}/>
        <OutfitCard image={img3} content= {imageCaptions[2]}/>
        <OutfitCard image={img4} content= {imageCaptions[3]}/>
        <OutfitCard image={img5} content= {imageCaptions[4]}/>
        <OutfitCard image={img6} content= {imageCaptions[5]}/>
        <OutfitCard image={img7} content= {imageCaptions[6]}/>
        <OutfitCard image={img8} content= {imageCaptions[7]}/>
        <OutfitCard image={img9} content= {imageCaptions[8]}/>
       </div>

     </div>
    </>
   
  )
}
