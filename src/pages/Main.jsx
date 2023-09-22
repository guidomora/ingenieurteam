import { Grid } from '@mui/material'
import React from 'react'
import Car from '../ui/header/subHeaders/Car'
import BookingMenu from '../ui/header/subHeaders/BookingMenu'
import OurServices from '../ui/OurServices'

const Main = () => {
  return (
    <Grid>
        <Car />
        <BookingMenu/>
        <OurServices/>
    </Grid>
  )
}

export default Main