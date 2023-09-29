import { Box, Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import logo from '../../imgs/ST.png'
import { scrollToSection, scrollToSection2, scrollToSectionDown } from '../../helpers/scroll'
import { useLocation } from 'react-router-dom'

export const Footer = () => {
  const location = useLocation()
  return (
    <Grid sx={{ backgroundColor: '#1E242D', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} height={430}>
      <Box pt={8} pl={7} pr={7} display={'flex'} height={300}
        flexWrap={'wrap'}
        sx={{ justifyContent: { xs: 'center', md: 'space-between' } }}>
        <Box display={'flex'}
          sx={{ justifyContent: { xs: 'space-evenly', md: 'space-between' } }} flexDirection={'column'}>
          <Box>
            <img className='img' src={logo} alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="162"
              height="16"
              fill="none"
              viewBox="0 0 162 16"
            >
              <path
                fill="#fff"
                d="M.24 15.065L2.22.925h1.697l-1.98 14.14H.239zM5.683 15.065L7.663.925h1.84l5.516 11.07L16.565.925h1.697l-1.98 14.14h-1.829L8.936 3.995 7.38 15.066H5.683zM26.235 15.327c-.977 0-1.863-.188-2.657-.565a5.727 5.727 0 01-1.991-1.586 6.463 6.463 0 01-1.152-2.343c-.229-.889-.273-1.838-.131-2.848a8.09 8.09 0 01.96-2.899 8.938 8.938 0 011.859-2.323 8.628 8.628 0 012.455-1.535 7.132 7.132 0 012.748-.555c1.065 0 2.041.249 2.93.747.896.498 1.627 1.219 2.193 2.162l-1.637.818a4.402 4.402 0 00-1.637-1.515 4.383 4.383 0 00-2.101-.526c-.714 0-1.412.145-2.092.435-.68.29-1.3.693-1.859 1.212a7.192 7.192 0 00-1.404 1.797c-.37.68-.61 1.418-.718 2.212a5.59 5.59 0 00.101 2.182c.182.68.475 1.279.88 1.798.41.511.915.912 1.515 1.201.6.29 1.263.435 1.99.435.58 0 1.146-.098 1.698-.293a5.975 5.975 0 001.556-.828 6.8 6.8 0 002.243-2.859h-3.476l.212-1.515h5.477a8.177 8.177 0 01-.97 2.788 8.985 8.985 0 01-1.819 2.293 8.564 8.564 0 01-2.425 1.555 7.034 7.034 0 01-2.748.555zM36.22 15.065L38.2.925h8.68l-.233 1.697h-6.982l-.566 4.02h5.719l-.232 1.696h-5.73l-.707 5.03h6.982l-.232 1.697h-8.68zM48.242 15.065l1.98-14.14h1.839l5.517 11.07L59.124.925h1.697l-1.98 14.14h-1.83l-5.516-11.07-1.556 11.07h-1.697zM62.58 15.065L64.56.925h1.698l-1.98 14.14H62.58zM68.023 15.065l1.98-14.14h8.68l-.232 1.697h-6.982l-.566 4.02h5.719l-.233 1.696H70.66l-.707 5.03h6.982l-.232 1.697h-8.68zM85.424 15.327c-1.132 0-2.075-.276-2.83-.828-.747-.552-1.283-1.293-1.606-2.222-.317-.936-.394-1.972-.233-3.11L81.907.925h1.698l-1.152 8.242c-.115.808-.07 1.552.131 2.232.202.68.56 1.222 1.071 1.626.512.404 1.183.606 2.011.606.829 0 1.556-.202 2.183-.606a4.686 4.686 0 001.515-1.626c.39-.68.643-1.424.758-2.232L91.274.925h1.697L91.82 9.167a8.036 8.036 0 01-.727 2.403 7.113 7.113 0 01-1.384 1.96 6.125 6.125 0 01-1.93 1.323 5.792 5.792 0 01-2.354.474zM94.297 15.065l1.98-14.14h4.972c.754 0 1.411.185 1.97.556.559.37.974.872 1.243 1.505.27.626.35 1.326.243 2.1a4.56 4.56 0 01-.657 1.859 4.924 4.924 0 01-1.314 1.404 4.714 4.714 0 01-1.707.767l2.617 5.949h-1.96l-2.557-5.807h-2.324l-.808 5.807h-1.698zm2.749-7.504h3.102a2.7 2.7 0 001.303-.334 3.201 3.201 0 001.051-.919c.283-.39.458-.828.525-1.313.074-.491.024-.929-.151-1.312a2.06 2.06 0 00-.788-.92 2.17 2.17 0 00-1.213-.343h-3.102l-.727 5.14zM119.237.925l-.243 1.697h-4.708l-1.738 12.443h-1.697l1.738-12.443H107.9l.233-1.697h11.104zM120.295 15.065l1.981-14.14h8.679l-.232 1.697h-6.982l-.566 4.02h5.719l-.232 1.696h-5.729l-.708 5.03h6.982l-.232 1.697h-8.68zM138.741.925h2.051l3.162 14.14h-1.798l-.657-2.889h-6.618l-1.455 2.889h-1.809l7.124-14.14zm-3.001 9.555h5.375l-1.657-7.383-3.718 7.383zM146.175 15.065l4.719-14.14h1.303l2.415 10.04 5.213-10.04h1.304l.768 14.14h-1.728l-.546-10.261-4.93 9.493h-1.112l-2.263-9.493-3.415 10.26h-1.728z"
              ></path>
            </svg>
          </Box>
          <Typography color={'grey'}>TÜV SÜD AUTO PARTNER<br /> IN NEUSS</Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
          <Box display={'flex'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                fill="#2271E9"
                fillRule="evenodd"
                d="M4.333 13.524C4.333 6.992 9.54 1.668 16 1.668s11.667 5.325 11.667 11.857c0 3.154-.899 6.54-2.488 9.465-1.586 2.922-3.905 5.46-6.805 6.816a5.6 5.6 0 01-4.748 0c-2.9-1.355-5.218-3.894-6.805-6.816-1.589-2.925-2.488-6.311-2.488-9.465zM16 3.668c-5.322 0-9.667 4.396-9.667 9.857 0 2.797.804 5.857 2.245 8.51 1.444 2.658 3.483 4.832 5.895 5.96a3.6 3.6 0 003.054 0c2.412-1.128 4.451-3.302 5.895-5.96 1.441-2.653 2.245-5.713 2.245-8.51 0-5.46-4.345-9.857-9.667-9.857zm0 6.666a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <Link sx={{ textDecoration: 'none' }} href='https://www.google.com/maps/place/Heinrich-Pesch-Stra%C3%9Fe+5a,+50739+K%C3%B6ln,+Alemania/@50.9761526,6.92362,18z/data=!3m1!4b1!4m6!3m5!1s0x47bf2ff516b34efb:0x89a570688681b4ce!8m2!3d50.9761509!4d6.9249075!16s%2Fg%2F11g9qpv7lw?entry=ttu'
              target='blank'>
              <Typography color={'white'} sx={{ ml: { xs: 2, md: 5 }, fontSize: { xs: 16, md: 20 } }} >Heinrich-Pesch-Str.<br /> 5a 50739 Kölna</Typography>
            </Link>
          </Box>
          <Box display={'flex'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#2271E9"
                fillRule="evenodd"
                d="M3.01 1.542c2.24-2.24 6.02-2.07 7.58.726l.865 1.55c1.019 1.825.585 4.128-.906 5.637a.842.842 0 00-.138.448c-.017.342.104 1.133 1.329 2.357 1.224 1.224 2.014 1.346 2.356 1.33a.842.842 0 00.449-.139c1.51-1.49 3.812-1.925 5.637-.906l1.55.865c2.795 1.56 2.966 5.34.726 7.58-1.199 1.198-2.792 2.263-4.664 2.334-2.775.105-7.382-.612-11.944-5.174C1.287 13.588.57 8.98.676 6.206.747 4.334 1.812 2.741 3.01 1.542zm5.834 1.7c-.8-1.431-2.945-1.76-4.42-.285C3.39 3.99 2.718 5.132 2.674 6.282c-.087 2.314.484 6.348 4.59 10.454 4.106 4.106 8.14 4.677 10.454 4.59 1.15-.044 2.291-.716 3.325-1.75 1.475-1.475 1.146-3.62-.285-4.42l-1.55-.865c-.965-.538-2.32-.355-3.271.596-.094.094-.688.649-1.744.7-1.08.053-2.388-.433-3.867-1.913-1.48-1.48-1.966-2.788-1.913-3.868.052-1.056.607-1.65.7-1.743.95-.95 1.134-2.306.596-3.27l-.865-1.55z"
                clipRule="evenodd"
              ></path>
            </svg>
            <Typography ml={5} color={'white'} sx={{ ml: { xs: 2, md: 5 }, fontSize: { xs: 16, md: 20 } }}>+49 221 57 000 807</Typography>
          </Box>
          <Box display={'flex'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                fill="#2271E9"
                fillRule="evenodd"
                d="M16 3.667C9.188 3.667 3.667 9.189 3.667 16c0 6.812 5.521 12.333 12.333 12.333 6.811 0 12.333-5.521 12.333-12.333C28.333 9.19 22.812 3.667 16 3.667zM1.667 16C1.667 8.084 8.084 1.667 16 1.667S30.333 8.084 30.333 16 23.916 30.333 16 30.333 1.667 23.916 1.667 16zM16 9.667a1 1 0 011 1v4.919l3.04 3.04a1 1 0 01-1.414 1.415l-3.333-3.334A1 1 0 0115 16v-5.333a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <Typography ml={5} color={'white'} sx={{ ml: { xs: 2, md: 5 }, fontSize: { xs: 16, md: 20 } }}>Mon-Fir, 9:00-19:00</Typography>
          </Box>
        </Box>
      </Box>
      <Box pt={5} display={'flex'} justifyContent={'center'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1280"
          height="1"
          fill="none"
          viewBox="0 0 1280 1"
        >
          <path stroke="#fff" d="M0 0.5L1280 0.5" opacity="0.12"></path>
        </svg>
      </Box>
      <Box display={'flex'} justifyContent={'space-between'} pt={4} pl={7} pr={7}>
        <Typography color={'grey'} sx={{ fontSize: { xs: 12, md: 16 } }}>© ST-Ingenieurteam 2023</Typography>
        <Box width={170} display={'flex'} justifyContent={'space-evenly'}>
          <svg     // fb
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="none"
            viewBox="0 0 36 36"
          >
            <circle cx="18" cy="18" r="17.4" stroke="#fff" strokeWidth="1.2"></circle>
            <path
              fill="#fff"
              d="M18.6 19.232v6.346h-2.915v-6.346h-2.422V16.66h2.422v-.936c0-3.475 1.452-5.303 4.524-5.303.941 0 1.177.152 1.693.275v2.545c-.578-.101-.74-.157-1.34-.157-.712 0-1.093.202-1.44.6-.348.398-.522 1.087-.522 2.074v.908h3.302l-.886 2.573H18.6v-.006z"
            ></path>
          </svg>
          <svg      //tiktok
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="none"
            viewBox="0 0 36 36"
          >
            <circle cx="18" cy="18" r="17.4" stroke="#fff" strokeWidth="1.2"></circle>
            <path
              fill="#fff"
              d="M21.024 10.997l-.366-.577h-2.213v5.194l-.007 5.072c.004.038.007.08.007.117a2.307 2.307 0 11-2.307-2.306c.264 0 .52.049.758.131v-2.532a4.531 4.531 0 00-.758-.064 4.783 4.783 0 00-4.77 4.775 4.778 4.778 0 004.774 4.771 4.778 4.778 0 004.773-4.771v-6.034c.954.954 2.187 1.884 3.551 2.182v-2.589c-1.481-.656-2.955-2.593-3.442-3.37z"
            ></path>
          </svg>
          <svg         //ig
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="36"
            fill="none"
            viewBox="0 0 37 36"
          >
            <circle
              cx="18.579"
              cy="18"
              r="17.4"
              stroke="#fff"
              strokeWidth="1.2"
            ></circle>
            <g fill="#fff" clipPath="url(#clip0_177_6752)">
              <path d="M18.579 11.785c2.025 0 2.264.009 3.06.044.74.033 1.14.157 1.407.26.352.137.607.303.87.566.267.267.43.519.566.87.104.267.228.67.26 1.407.036.8.045 1.04.045 3.061 0 2.025-.01 2.265-.045 3.061-.032.74-.157 1.14-.26 1.407a2.344 2.344 0 01-.566.87 2.33 2.33 0 01-.87.566c-.266.103-.67.227-1.406.26-.8.035-1.04.044-3.061.044-2.025 0-2.265-.009-3.062-.044-.74-.033-1.14-.157-1.406-.26a2.343 2.343 0 01-.87-.566 2.33 2.33 0 01-.566-.87c-.103-.267-.228-.67-.26-1.407-.036-.799-.045-1.039-.045-3.06 0-2.026.01-2.266.045-3.062.032-.74.157-1.14.26-1.406.136-.352.302-.607.566-.87a2.33 2.33 0 01.87-.566c.267-.104.67-.228 1.406-.26.797-.036 1.037-.045 3.062-.045zm0-1.365c-2.058 0-2.316.009-3.124.045-.805.035-1.359.165-1.838.352-.5.195-.924.453-1.344.876-.424.42-.681.844-.877 1.341-.186.483-.316 1.034-.352 1.839-.036.811-.044 1.069-.044 3.126 0 2.058.008 2.315.044 3.123.036.806.166 1.36.352 1.839.196.5.453.924.877 1.344.42.42.843.681 1.34.873.483.187 1.034.317 1.84.353.808.035 1.065.044 3.123.044 2.057 0 2.315-.009 3.123-.044.805-.036 1.359-.166 1.838-.353.498-.192.921-.453 1.342-.873.42-.42.68-.844.873-1.341.186-.483.317-1.033.352-1.839.036-.808.045-1.065.045-3.123 0-2.057-.01-2.315-.045-3.123-.035-.806-.166-1.36-.352-1.839a3.549 3.549 0 00-.867-1.347c-.42-.42-.844-.68-1.342-.873-.482-.187-1.033-.317-1.838-.353-.811-.038-1.069-.047-3.126-.047z"></path>
              <path d="M18.579 14.106a3.894 3.894 0 000 7.786 3.894 3.894 0 000-7.786zm0 6.418a2.526 2.526 0 110-5.051 2.526 2.526 0 010 5.051zM23.535 13.952a.91.91 0 11-1.819 0 .91.91 0 011.819 0z"></path>
            </g>
            <defs>
              <clipPath id="clip0_177_6752">
                <path
                  fill="#fff"
                  d="M0 0H15.158V15.158H0z"
                  transform="translate(11 10.42)"
                ></path>
              </clipPath>
            </defs>
          </svg>
        </Box>
      </Box>
    </Grid>
  )
}