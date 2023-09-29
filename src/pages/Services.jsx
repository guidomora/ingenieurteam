import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Key from '../ui/svg/Key'
import Emissions from '../ui/svg/Emissions'
import Safety from '../ui/svg/Safety'
import Documents from '../ui/svg/Documents'
import Gas from '../ui/svg/Gas'
import Liquid from '../ui/svg/Liquid'
import Classic from '../ui/svg/Classic'
import Uvv from '../ui/svg/Uvv'
import Used from '../ui/svg/Used'

const Services = () => {
    return (
        <Grid>
            <Box bgcolor={'secondary.main'}>
                <Typography pt={10} fontWeight={600} textAlign={'center'} sx={{fontSize:{xs:50, md:64}, pb:{xs:5, md:10}}}
                    color={'primary.main'}>Our services</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'center'}>
                <Box pt={8} display={'flex'} flexWrap={'wrap'}
                    justifyContent={'space-around'} alignItems={'center'} width={900}>
                    <Box
                        sx={{ height: 280, width: { xs: 300, md: 400 }, mt:{xs:4, md:0} }}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        bgcolor={'secondary.main'}>
                        <Key />
                        <Typography pt={4} fontWeight={600}>Inspection</Typography>
                        <Typography pb={2} color={'#808387'}>General inspections and safety <br />
                            checks according to §29 StVZO</Typography>
                    </Box>
                    <Box
                        sx={{mt:{xs:4, md:0}, height: 280, width: { xs: 300, md: 400 } }}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        bgcolor={'secondary.main'}>
                        <Emissions />
                        <Typography pt={4} fontWeight={600}>Emissions</Typography>
                        <Typography pb={2} color={'#808387'}>Emissions tests according
                            <br /> to §47a StVZO</Typography>
                    </Box>
                    <Box
                        sx={{ height: 280, width: { xs: 300, md: 400 } }}
                        mt={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        bgcolor={'secondary.main'}>
                        <Safety />
                        <Typography pt={4} fontWeight={600}>Safety systems</Typography>
                        <Typography pb={2} color={'#808387'}>Safety check truck and <br />
                            KOM according to §29 StVZO</Typography>
                    </Box>
                    <Box
                        sx={{ height: 280, width: { xs: 300, md: 400 } }}
                        mt={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        bgcolor={'secondary.main'}>
                        <Documents />
                        <Typography pt={4} fontWeight={600}>Documents</Typography>
                        <Typography pb={2} color={'#808387'}>Change approvals according <br />
                            to §19.3 StVZO</Typography>
                    </Box>
                    <Box
                        sx={{ height: 280, width: { xs: 300, md: 400 } }}
                        mt={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        bgcolor={'secondary.main'}>
                        <Gas />
                        <Typography pt={4} fontWeight={600}>Gas</Typography>
                        <Typography pb={2} color={'#808387'}>Gas system tests according <br />
                            to §41a StVZO</Typography>
                    </Box>
                    <Box
                        sx={{ height: 280, width: { xs: 300, md: 400 } }}
                        mt={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        bgcolor={'secondary.main'}>
                        <Liquid />
                        <Typography pt={4} fontWeight={600}>Liquid</Typography>
                        <Typography pb={2} color={'#808387'}>Testing of liquid gas systems in vehicles <br />
                            in accordance with DVGW G607</Typography>
                    </Box>
                    <Box
                        sx={{ height: 280, width: { xs: 300, md: 400 } }}
                        mt={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        bgcolor={'secondary.main'}>
                        <Classic />
                        <Typography pt={4} fontWeight={600}>Classic cars</Typography>
                        <Typography pb={2} color={'#808387'}>Expert opinion for classic car classification <br />
                            according to §23 StVZO (H license plate)</Typography>
                    </Box>
                    <Box
                        sx={{ height: 280, width: { xs: 300, md: 400 } }}
                        mt={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                        p={5}
                        borderRadius={5}
                        bgcolor={'secondary.main'}>
                        <Uvv />
                        <Typography pt={4} fontWeight={600}>UVV</Typography>
                        <Typography pb={2} color={'#808387'}>UVV tests according <br /> to GUV-V D29</Typography>
                    </Box>
                    <Box
                        sx={{ height: 280, width: { xs: 300, md: 400 } }}
                        mt={4}
                        mb={4}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        p={5}
                        borderRadius={5}
                        bgcolor={'secondary.main'}>
                        <Used />
                        <Typography pt={3} pb={2} fontWeight={600}>Used cars</Typography>
                        <Typography pb={6} color={'#808387'}>User car check</Typography>
                    </Box>
                </Box>
            </Box>

        </Grid>
    )
}

export default Services