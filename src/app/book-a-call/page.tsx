'use client'
import React from "react";
import { InlineWidget } from "react-calendly";






const BookCall = () => {
 
  return (
   <div>
<div className="text-center mb-10 mt-10">
  <h1 className="font-semibold text-5xl mb-3">Book a call with our team</h1>
  <hr className="border-[#6439f5] border-t-4 w-2/12 mx-auto rounded-full" />
</div>
<div className="App">
      <InlineWidget url="https://calendly.com/mhma/15min" />
    </div>


    
</div>



  )
}

export default BookCall