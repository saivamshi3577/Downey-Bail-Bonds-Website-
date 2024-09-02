import React from 'react'
import Arrest from "../BailProcess/arrestBookings"
import JailpartA9 from "../BailProcess/JailPartA9"
import JailpartB9 from "../BailProcess/JailPartB9"
function ArrestandBookingMain(){
  return (
    <div>
      <Arrest/>
      <JailpartA9/>
      <JailpartB9/>
    </div>
  )
}

export default ArrestandBookingMain

