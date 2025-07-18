import EventBooking from '@/components/GetStated/EventBooking'
import HolidayParties from '@/components/GetStated/HolidayParties'
import PerfactEvent from '@/components/GetStated/PerfactEvent'
import PlanTheVison from '@/components/GetStated/PlanTheVison'
import StartYourEvent from '@/components/GetStated/StartYourEvent'
import React from 'react'

export default function GetStarted() {
  return (
    <>
    <div className='w-full relative'>
        <PerfactEvent/>
        <PlanTheVison/>
        <HolidayParties/>
        <EventBooking/>
        <StartYourEvent/>
    </div>
    </>
  )
}
