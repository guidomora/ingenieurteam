
import { Grid } from '@mui/material'
import React from 'react'
import Car from '../ui/header/subHeaders/Car'
import BookingMenu from '../ui/header/subHeaders/BookingMenu'
import OurServices from '../ui/OurServices'
import OurWork from '../ui/OurWork'

const Main = () => {
  return (
    <Grid>
        <Car />
        <BookingMenu/>
        <OurServices/>
        <OurWork />
    </Grid>
  )
}

export default Main