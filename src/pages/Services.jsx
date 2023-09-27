import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import BookingMenu from '../ui/header/subHeaders/BookingMenu'
import Key from '../ui/svg/Key'

const Services = () => {
    return (
        <Grid>
            <Box bgcolor={'secondary.main'}>
                <Typography pt={10} textAlign={'center'} fontWeight={600} fontSize={60}
                    color={'primary.main'}>Our services</Typography>
                <Box pt={20} pb={10}>
                    <BookingMenu />
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'center'}>
                <Box pt={8} display={'flex'} flexWrap={'wrap'}
                    justifyContent={'space-around'} alignItems={'center'} width={900}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        height={280} width={400}
                        bgcolor={'secondary.main'}>
                        <Key />
                        <Typography pt={4} fontWeight={600}>Inspection</Typography>
                        <Typography pb={2} color={'#808387'}>General inspections and safety <br />
                            checks according to §29 StVZO</Typography>
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        height={280} width={400}
                        bgcolor={'secondary.main'}>
                        <Key />
                        <Typography pt={4} fontWeight={600}>Emissions</Typography>
                        <Typography pb={2} color={'#808387'}>Emissions tests according
                        <br /> to §47a StVZO</Typography>
                    </Box>
                    <Box
                        mt={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        height={280} width={400}
                        bgcolor={'secondary.main'}>
                        <Key />
                        <Typography pt={4} fontWeight={600}>Safety systems</Typography>
                        <Typography pb={2} color={'#808387'}>Safety check truck and <br />
                         KOM according to §29 StVZO</Typography>
                    </Box>
                    <Box
                        mt={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        height={280} width={400}
                        bgcolor={'secondary.main'}>
                        <Key />
                        <Typography pt={4} fontWeight={600}>Documents</Typography>
                        <Typography pb={2} color={'#808387'}>Change approvals according <br />
                         to §19.3 StVZO</Typography>
                    </Box>
                    <Box
                        mt={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        height={280} width={400}
                        bgcolor={'secondary.main'}>
                        <Key />
                        <Typography pt={4} fontWeight={600}>Gas</Typography>
                        <Typography pb={2} color={'#808387'}>Gas system tests according <br />
                         to §41a StVZO</Typography>
                    </Box>
                    <Box
                        mt={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        height={280} width={400}
                        bgcolor={'secondary.main'}>
                        <Key />
                        <Typography pt={4} fontWeight={600}>Liquid</Typography>
                        <Typography pb={2} color={'#808387'}>Testing of liquid gas systems in vehicles <br />
                         in accordance with DVGW G607</Typography>
                    </Box>
                    <Box
                        mt={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        height={280} width={400}
                        bgcolor={'secondary.main'}>
                        <Key />
                        <Typography pt={4} fontWeight={600}>Classic cars</Typography>
                        <Typography pb={2} color={'#808387'}>Expert opinion for classic car classification <br />
                         according to §23 StVZO (H license plate)</Typography>
                    </Box>
                    <Box
                        mt={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        height={280} width={400}
                        bgcolor={'secondary.main'}>
                        <Key />
                        <Typography pt={4} fontWeight={600}>UVV</Typography>
                        <Typography pb={2} color={'#808387'}>UVV tests according <br /> to GUV-V D29</Typography>
                    </Box>
                    <Box
                        mt={4}
                        mb={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        height={280} width={400}
                        bgcolor={'secondary.main'}>
                        <Key />
                        <Typography pt={4} fontWeight={600}>Used cars</Typography>
                        <Typography pb={2} color={'#808387'}>User car check</Typography>
                    </Box>
                </Box>
            </Box>

        </Grid>
    )
}

export default Services