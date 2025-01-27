import React, { useState } from 'react'
import styled from 'styled-components';


export const OutfitCard = ({ image, content}) => {
  const StyledWrapper = styled.div`

 .card {
  background-image: url(${image});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 445px;
  width: 250px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 400ms;
}


 .card:hover {
  transform: scale(1.1, 1.1);
}

`;

  const [isDialogOpen, setIsDialogOpen] = useState(false);
 
  return (
    <>
     <StyledWrapper>
      <div className="card red transition-all duration-300 transform 
      bg-[url(/src/assets/Y2k/img1.jpg)]" 
      onClick={() => setIsDialogOpen(true)}
      > 
      {/* <img src={image} alt={title} className="w-full h-fit object-cover rounded-md" />  */}
      </div>
       {/* Dialog (Modal) */}
       {isDialogOpen && (
        <div className="font-custom-h fixed inset-0 z-[999] flex items-center  justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          {/* Modal Content */}
           <div className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm"> 
            {/* Modal Body */}
            <div className=" border-slate-200 py-4 leading-normal flex items-center justify-center
            text-slate-600 font-light ">
             
             <img src={image} alt="image" className="w-50 h-89 object-cover rounded-md " />
             

            </div>
            <div className=''>
            {content}
            </div>
            {/* Modal Footer (Buttons) */}
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="rounded-md border border-black py-3 px-3  text-sm bg- text-slate-600 transition-all hover:bg-slate-300 focus:bg-slate-100 active:bg-slate-100"
              >
                Cancel
              </button>
             
            </div>
           </div>
        </div>
        )}
      
    </StyledWrapper>
     

      
    </>
   
);
}

