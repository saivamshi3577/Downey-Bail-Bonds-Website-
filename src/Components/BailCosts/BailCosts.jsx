import React from 'react'
import PaymentOptions from "../BailCosts/PaymentOptions"
import Bailbondspay from "../BailCosts/bailybondspay"
import Payments from "../BailCosts/payments"
function BailCosts() {
  return (
    <div>
      <PaymentOptions/>
      <Payments/>
      <Bailbondspay/>
      
    </div>
  )
}

export default BailCosts
