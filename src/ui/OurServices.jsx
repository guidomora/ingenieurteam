import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import change from "../imgs/ChangeAceptances.png"
import classic from "../imgs/classic.png"
import inspection from "../imgs/inspection.png"
import accident from "../imgs/accident.png"
import brands from '../imgs/Carbrands.png'
import { Link } from 'react-router-dom'

const OurServices = () => {
    return (
        <Grid>
            <Box mb={10} display={'flex'} justifyContent={'center'} pt={15}>
                <svg
                    className='ourservices'
                    xmlns="http://www.w3.org/2000/svg"
                    width="398"
                    height="52"
                    fill="none"
                    viewBox="0 0 398 52"
                >
                    <path
                        fill="#282828"
                        d="M23.152 51.448c-4.181 0-8.021-.981-11.52-2.944-3.499-1.963-6.272-4.672-8.32-8.128C1.264 36.877.24 32.931.24 28.536c0-4.352 1.024-8.256 3.072-11.712 2.048-3.499 4.821-6.23 8.32-8.192 3.499-1.963 7.339-2.944 11.52-2.944 4.224 0 8.064.981 11.52 2.944 3.499 1.963 6.25 4.693 8.256 8.192C44.976 20.28 46 24.184 46 28.536c0 4.395-1.024 8.341-3.072 11.84-2.005 3.456-4.757 6.165-8.256 8.128-3.499 1.963-7.339 2.944-11.52 2.944zm0-8c2.688 0 5.056-.597 7.104-1.792 2.048-1.237 3.648-2.987 4.8-5.248 1.152-2.261 1.728-4.885 1.728-7.872s-.576-5.59-1.728-7.808c-1.152-2.261-2.752-3.99-4.8-5.184-2.048-1.195-4.416-1.792-7.104-1.792-2.688 0-5.077.597-7.168 1.792-2.048 1.195-3.648 2.923-4.8 5.184-1.152 2.219-1.728 4.821-1.728 7.808s.576 5.61 1.728 7.872c1.152 2.261 2.752 4.01 4.8 5.248 2.09 1.195 4.48 1.792 7.168 1.792zm62.986-27.904V51h-9.024v-4.48c-1.152 1.536-2.667 2.752-4.544 3.648-1.835.853-3.84 1.28-6.016 1.28-2.773 0-5.227-.576-7.36-1.728-2.133-1.195-3.819-2.923-5.056-5.184-1.195-2.304-1.792-5.035-1.792-8.192v-20.8h8.96v19.52c0 2.816.704 4.992 2.112 6.528 1.408 1.493 3.328 2.24 5.76 2.24 2.475 0 4.416-.747 5.824-2.24 1.408-1.536 2.112-3.712 2.112-6.528v-19.52h9.024zm17.801 5.504c1.152-1.877 2.645-3.35 4.48-4.416 1.877-1.067 4.01-1.6 6.4-1.6v9.408h-2.368c-2.816 0-4.95.661-6.4 1.984-1.408 1.323-2.112 3.627-2.112 6.912V51h-8.96V15.544h8.96v5.504zm45.733 30.528c-2.902 0-5.504-.512-7.808-1.536-2.304-1.067-4.139-2.496-5.504-4.288-1.323-1.792-2.048-3.776-2.176-5.952h9.024c.17 1.365.832 2.496 1.984 3.392 1.194.896 2.666 1.344 4.416 1.344 1.706 0 3.029-.341 3.968-1.024.981-.683 1.472-1.557 1.472-2.624 0-1.152-.598-2.005-1.792-2.56-1.152-.597-3.008-1.237-5.568-1.92-2.646-.64-4.822-1.301-6.528-1.984-1.664-.683-3.115-1.728-4.352-3.136-1.195-1.408-1.792-3.307-1.792-5.696 0-1.963.554-3.755 1.664-5.376 1.152-1.621 2.773-2.901 4.864-3.84 2.133-.939 4.629-1.408 7.488-1.408 4.224 0 7.594 1.067 10.112 3.2 2.517 2.09 3.904 4.928 4.16 8.512h-8.576c-.128-1.408-.726-2.517-1.792-3.328-1.024-.853-2.411-1.28-4.16-1.28-1.622 0-2.88.299-3.776.896-.854.597-1.28 1.43-1.28 2.496 0 1.195.597 2.112 1.792 2.752 1.194.597 3.05 1.216 5.568 1.856 2.56.64 4.672 1.301 6.336 1.984 1.664.683 3.093 1.75 4.288 3.2 1.237 1.408 1.877 3.285 1.92 5.632 0 2.048-.576 3.883-1.728 5.504-1.11 1.621-2.731 2.901-4.864 3.84-2.091.896-4.544 1.344-7.36 1.344zm54.267-19.072c0 1.28-.086 2.432-.256 3.456h-25.92c.213 2.56 1.109 4.565 2.688 6.016 1.578 1.45 3.52 2.176 5.824 2.176 3.328 0 5.696-1.43 7.104-4.288h9.664c-1.024 3.413-2.987 6.23-5.888 8.448-2.902 2.176-6.464 3.264-10.688 3.264-3.414 0-6.486-.747-9.216-2.24-2.688-1.536-4.8-3.69-6.336-6.464-1.494-2.773-2.241-5.973-2.241-9.6 0-3.67.747-6.89 2.241-9.664 1.493-2.773 3.584-4.907 6.272-6.4 2.688-1.493 5.781-2.24 9.28-2.24 3.37 0 6.378.725 9.024 2.176 2.688 1.45 4.757 3.52 6.208 6.208 1.493 2.645 2.24 5.696 2.24 9.152zm-9.28-2.56c-.043-2.304-.875-4.139-2.496-5.504-1.622-1.408-3.606-2.112-5.952-2.112-2.219 0-4.096.683-5.632 2.048-1.494 1.323-2.411 3.179-2.752 5.568h16.832zm24.78-8.896c1.152-1.877 2.645-3.35 4.48-4.416 1.877-1.067 4.01-1.6 6.4-1.6v9.408h-2.368c-2.816 0-4.95.661-6.4 1.984-1.408 1.323-2.112 3.627-2.112 6.912V51h-8.96V15.544h8.96v5.504zm31.699 21.696l8.96-27.2h9.536L256.514 51h-10.88l-13.056-35.456h9.6l8.96 27.2zM279.21 11.32c-1.579 0-2.901-.49-3.968-1.472-1.024-1.024-1.536-2.283-1.536-3.776 0-1.493.512-2.73 1.536-3.712 1.067-1.024 2.389-1.536 3.968-1.536 1.579 0 2.88.512 3.904 1.536 1.067.981 1.6 2.219 1.6 3.712 0 1.493-.533 2.752-1.6 3.776-1.024.981-2.325 1.472-3.904 1.472zm4.416 4.224V51h-8.96V15.544h8.96zm6.548 17.728c0-3.67.747-6.87 2.241-9.6 1.493-2.773 3.562-4.907 6.208-6.4 2.645-1.536 5.674-2.304 9.088-2.304 4.394 0 8.021 1.11 10.88 3.328 2.901 2.176 4.842 5.248 5.824 9.216h-9.664c-.512-1.536-1.387-2.73-2.624-3.584-1.195-.896-2.688-1.344-4.48-1.344-2.56 0-4.587.939-6.08 2.816-1.494 1.835-2.24 4.459-2.24 7.872 0 3.37.746 5.995 2.24 7.872 1.493 1.835 3.52 2.752 6.08 2.752 3.626 0 5.994-1.621 7.104-4.864h9.664c-.982 3.84-2.923 6.89-5.824 9.152-2.902 2.261-6.528 3.392-10.88 3.392-3.414 0-6.443-.747-9.088-2.24-2.646-1.536-4.715-3.67-6.208-6.4-1.494-2.773-2.241-5.995-2.241-9.664zm73.765-.768c0 1.28-.086 2.432-.256 3.456h-25.92c.213 2.56 1.109 4.565 2.688 6.016 1.578 1.45 3.52 2.176 5.824 2.176 3.328 0 5.696-1.43 7.104-4.288h9.664c-1.024 3.413-2.987 6.23-5.888 8.448-2.902 2.176-6.464 3.264-10.688 3.264-3.414 0-6.486-.747-9.216-2.24-2.688-1.536-4.8-3.69-6.336-6.464-1.494-2.773-2.241-5.973-2.241-9.6 0-3.67.747-6.89 2.241-9.664 1.493-2.773 3.584-4.907 6.272-6.4 2.688-1.493 5.781-2.24 9.28-2.24 3.37 0 6.378.725 9.024 2.176 2.688 1.45 4.757 3.52 6.208 6.208 1.493 2.645 2.24 5.696 2.24 9.152zm-9.28-2.56c-.043-2.304-.875-4.139-2.496-5.504-1.622-1.408-3.606-2.112-5.952-2.112-2.219 0-4.096.683-5.632 2.048-1.494 1.323-2.411 3.179-2.752 5.568h16.832zm29.388 21.632c-2.902 0-5.504-.512-7.808-1.536-2.304-1.067-4.139-2.496-5.504-4.288-1.323-1.792-2.048-3.776-2.176-5.952h9.024c.17 1.365.832 2.496 1.984 3.392 1.194.896 2.666 1.344 4.416 1.344 1.706 0 3.029-.341 3.968-1.024.981-.683 1.472-1.557 1.472-2.624 0-1.152-.598-2.005-1.792-2.56-1.152-.597-3.008-1.237-5.569-1.92-2.645-.64-4.821-1.301-6.527-1.984-1.664-.683-3.115-1.728-4.352-3.136-1.195-1.408-1.792-3.307-1.792-5.696 0-1.963.554-3.755 1.664-5.376 1.152-1.621 2.773-2.901 4.864-3.84 2.133-.939 4.629-1.408 7.488-1.408 4.224 0 7.594 1.067 10.112 3.2 2.517 2.09 3.904 4.928 4.16 8.512h-8.576c-.128-1.408-.726-2.517-1.792-3.328-1.024-.853-2.411-1.28-4.16-1.28-1.622 0-2.88.299-3.776.896-.854.597-1.28 1.43-1.28 2.496 0 1.195.597 2.112 1.792 2.752 1.194.597 3.05 1.216 5.568 1.856 2.56.64 4.672 1.301 6.336 1.984 1.664.683 3.093 1.75 4.288 3.2 1.237 1.408 1.877 3.285 1.92 5.632 0 2.048-.576 3.883-1.728 5.504-1.11 1.621-2.731 2.901-4.864 3.84-2.091.896-4.544 1.344-7.36 1.344z"
                    ></path>
                </svg>
            </Box>
            <Box display={'flex'} flexDirection={"column"}
                flexWrap={'wrap'} alignContent={'center'} justifyContent={'center'}>
                <Box display={'flex'} sx={{flexDirection:{xs:'column', md:'row'}, alignItems:{xs:'center', md:'unset'}}}>
                    <Card sx={{ m: 2, backgroundColor: "secondary.main", width: {xs:300, md:420}, height: 510, borderRadius: 5 }}>
                        <CardMedia component='img' src={change} sx={{ height: 260 }} />
                        <Typography m={3} fontSize={20} fontWeight={600}>Change acceptances</Typography>
                        <Typography ml={3} fontSize={14} color={'#808387'}>Special wheels, spoilers, or would it rather be a chassis
                            change? Our test engineers assess and document the
                            changes for you in accordance with the regulations.</Typography>
                        <Button variant="contained" sx={{ m: 3, width: 140, textTransform: "none", borderRadius: 4, fontSize: 12 }}>
                            <Link className='links2' to={'/services'}>Learn more</Link>
                        </Button>                    </Card>
                    <Card sx={{ m: 2, backgroundColor: "secondary.main", width: {xs:300, md:420}, height: 510, borderRadius: 5 }}>
                        <CardMedia component='img' src={inspection} sx={{ height: 260 }} />
                        <Typography m={3} fontSize={20} fontWeight={600}>Inspection</Typography>
                        <Typography ml={3} fontSize={14} color={'#808387'}>Is your general inspection due? Our test engineers, like
                            our competitors from TÜV and Dekra, are authorized to
                            carry out the HU both in our test center and in our
                            bases.</Typography>
                        <Button variant="contained" sx={{ m: 3, width: 140, textTransform: "none", borderRadius: 4, fontSize: 12 }}>
                            <Link className='links2' to={'/services'}>Learn more</Link>
                        </Button>
                    </Card>
                </Box>
                <Box display={'flex'} sx={{flexDirection:{xs:'column', md:'row'}, alignItems:{xs:'center', md:'unset'}}}>
                    <Card sx={{ m: 2, backgroundColor: "secondary.main", width: {xs:300, md:420}, height:{xs:560, md:510}, borderRadius: 5 }}>
                        <CardMedia component='img' src={accident} sx={{ height: 260 }} />
                        <Typography m={3} fontSize={20} fontWeight={600}>Accident and valuation reports</Typography>
                        <Typography ml={3} fontSize={14} color={'#808387'}>If you have been involved in an accident through no
                            fault of your own, we offer you to prepare an
                            independent damage report so that you can enforce
                            your right to compensation.</Typography>
                        <Button variant="contained" sx={{ m: 3, width: 140, textTransform: "none", borderRadius: 4, fontSize: 12 }}>
                            <Link className='links2' to={'/services'}>Learn more</Link>
                        </Button>                    </Card>
                    <Card sx={{ m: 2, backgroundColor: "secondary.main", width: {xs:300, md:420}, height: 510, borderRadius: 5 }}>
                        <CardMedia component='img' src={classic} sx={{ height: 260 }} />
                        <Typography m={3} fontSize={20} fontWeight={600}>Classic car - report</Typography>
                        <Typography ml={3} fontSize={14} color={'#808387'}>Is your vehicle older than 30 years and largely in its
                            original condition? Our test engineers also carry out
                            classic car inspections in accordance with Section 23
                            StVZO</Typography>
                        <Button variant="contained" sx={{ m: 3, width: 140, textTransform: "none", borderRadius: 4, fontSize: 12 }}>
                            <Link className='links2' to={'/services'}>Learn more</Link>
                        </Button>
                    </Card>
                </Box>
            </Box>
            <Box sx={{display:{xs:'none', md:'flex'}}} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} pt={15} pb={15} flexWrap={'wrap'}>
                <CardMedia component='img' src={brands} height={312} sx={{ width: {xs:320, md:1108} }} />
            </Box>
        </Grid>
    )
}
export default OurServices