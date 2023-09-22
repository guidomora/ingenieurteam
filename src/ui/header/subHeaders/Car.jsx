import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import audi from "../../../imgs/audi.png"

const Car = () => {
    return (
        <Grid bgcolor={"secondary.main"} pb={8} pt={8} display={'flex'} justifyContent={"space-between"}>
            <Box pl={15} display={'flex'} flexDirection={"column"} justifyContent={"space-between"} height={350}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="541"
                    height="165"
                    fill="none"
                    viewBox="0 0 541 165"
                >
                    <path
                        fill="#282828"
                        d="M11.376 13.56v11.2h15.04v7.104h-15.04v11.84h16.96V51H2.416V6.264h25.92v7.296h-16.96zm44.75 1.472c4.224 0 7.638 1.344 10.24 4.032 2.603 2.645 3.904 6.357 3.904 11.136V51h-8.96V31.416c0-2.816-.704-4.97-2.111-6.464-1.408-1.536-3.328-2.304-5.76-2.304-2.475 0-4.438.768-5.889 2.304-1.407 1.493-2.111 3.648-2.111 6.464V51h-8.96V15.544h8.96v4.416c1.194-1.536 2.709-2.73 4.544-3.584 1.877-.896 3.925-1.344 6.144-1.344zm36.553-.064c2.645 0 4.97.533 6.976 1.6 2.005 1.024 3.584 2.368 4.736 4.032v-5.056h9.024v35.712c0 3.285-.661 6.208-1.984 8.768-1.323 2.603-3.307 4.65-5.952 6.144-2.645 1.536-5.845 2.304-9.6 2.304-5.035 0-9.173-1.173-12.416-3.52-3.2-2.347-5.013-5.547-5.44-9.6h8.896c.47 1.621 1.472 2.901 3.008 3.84 1.579.981 3.477 1.472 5.696 1.472 2.603 0 4.715-.79 6.336-2.368 1.621-1.536 2.432-3.883 2.432-7.04v-5.504c-1.152 1.664-2.752 3.05-4.8 4.16-2.005 1.11-4.31 1.664-6.912 1.664-2.987 0-5.717-.768-8.192-2.304-2.475-1.536-4.437-3.69-5.888-6.464-1.408-2.816-2.112-6.037-2.112-9.664 0-3.584.704-6.763 2.112-9.536 1.45-2.773 3.392-4.907 5.824-6.4 2.475-1.493 5.227-2.24 8.256-2.24zm11.712 18.304c0-2.176-.427-4.032-1.28-5.568-.853-1.579-2.005-2.773-3.456-3.584a9.06 9.06 0 00-4.672-1.28c-1.664 0-3.2.405-4.608 1.216-1.408.81-2.56 2.005-3.456 3.584-.853 1.536-1.28 3.37-1.28 5.504 0 2.133.427 4.01 1.28 5.632.896 1.579 2.048 2.795 3.456 3.648 1.45.853 2.987 1.28 4.608 1.28a9.425 9.425 0 004.672-1.216c1.451-.853 2.603-2.048 3.456-3.584.853-1.579 1.28-3.456 1.28-5.632zM126.71 11.32c-1.579 0-2.901-.49-3.968-1.472-1.024-1.024-1.536-2.283-1.536-3.776 0-1.493.512-2.73 1.536-3.712 1.067-1.024 2.389-1.536 3.968-1.536 1.579 0 2.88.512 3.904 1.536 1.067.981 1.6 2.219 1.6 3.712 0 1.493-.533 2.752-1.6 3.776-1.024.981-2.325 1.472-3.904 1.472zm4.416 4.224V51h-8.96V15.544h8.96zm28.501-.512c4.224 0 7.637 1.344 10.24 4.032 2.602 2.645 3.904 6.357 3.904 11.136V51h-8.96V31.416c0-2.816-.704-4.97-2.112-6.464-1.408-1.536-3.328-2.304-5.76-2.304-2.475 0-4.438.768-5.888 2.304-1.408 1.493-2.112 3.648-2.112 6.464V51h-8.96V15.544h8.96v4.416c1.194-1.536 2.709-2.73 4.544-3.584 1.877-.896 3.925-1.344 6.144-1.344zm55.624 17.472c0 1.28-.085 2.432-.256 3.456h-25.92c.213 2.56 1.109 4.565 2.688 6.016 1.579 1.45 3.52 2.176 5.824 2.176 3.328 0 5.696-1.43 7.104-4.288h9.664c-1.024 3.413-2.987 6.23-5.888 8.448-2.901 2.176-6.464 3.264-10.688 3.264-3.413 0-6.485-.747-9.216-2.24-2.688-1.536-4.8-3.69-6.336-6.464-1.493-2.773-2.24-5.973-2.24-9.6 0-3.67.747-6.89 2.24-9.664 1.493-2.773 3.584-4.907 6.272-6.4 2.688-1.493 5.781-2.24 9.28-2.24 3.371 0 6.379.725 9.024 2.176 2.688 1.45 4.757 3.52 6.208 6.208 1.493 2.645 2.24 5.696 2.24 9.152zm-9.28-2.56c-.043-2.304-.875-4.139-2.496-5.504-1.621-1.408-3.605-2.112-5.952-2.112-2.219 0-4.096.683-5.632 2.048-1.493 1.323-2.411 3.179-2.752 5.568h16.832zm48.78 2.56c0 1.28-.085 2.432-.256 3.456h-25.92c.213 2.56 1.109 4.565 2.688 6.016 1.579 1.45 3.52 2.176 5.824 2.176 3.328 0 5.696-1.43 7.104-4.288h9.664c-1.024 3.413-2.987 6.23-5.888 8.448-2.901 2.176-6.464 3.264-10.688 3.264-3.413 0-6.485-.747-9.216-2.24-2.688-1.536-4.8-3.69-6.336-6.464-1.493-2.773-2.24-5.973-2.24-9.6 0-3.67.747-6.89 2.24-9.664 1.493-2.773 3.584-4.907 6.272-6.4 2.688-1.493 5.781-2.24 9.28-2.24 3.371 0 6.379.725 9.024 2.176 2.688 1.45 4.757 3.52 6.208 6.208 1.493 2.645 2.24 5.696 2.24 9.152zm-9.28-2.56c-.043-2.304-.875-4.139-2.496-5.504-1.621-1.408-3.605-2.112-5.952-2.112-2.219 0-4.096.683-5.632 2.048-1.493 1.323-2.411 3.179-2.752 5.568h16.832zm24.78-8.896c1.152-1.877 2.645-3.35 4.48-4.416 1.877-1.067 4.011-1.6 6.4-1.6v9.408h-2.368c-2.816 0-4.949.661-6.4 1.984-1.408 1.323-2.112 3.627-2.112 6.912V51h-8.96V15.544h8.96v5.504zm21.459-9.728c-1.579 0-2.901-.49-3.968-1.472-1.024-1.024-1.536-2.283-1.536-3.776 0-1.493.512-2.73 1.536-3.712 1.067-1.024 2.389-1.536 3.968-1.536 1.579 0 2.88.512 3.904 1.536 1.067.981 1.6 2.219 1.6 3.712 0 1.493-.533 2.752-1.6 3.776-1.024.981-2.325 1.472-3.904 1.472zm4.416 4.224V51h-8.96V15.544h8.96zm28.501-.512c4.224 0 7.637 1.344 10.24 4.032 2.602 2.645 3.904 6.357 3.904 11.136V51h-8.96V31.416c0-2.816-.704-4.97-2.112-6.464-1.408-1.536-3.328-2.304-5.76-2.304-2.475 0-4.438.768-5.888 2.304-1.408 1.493-2.112 3.648-2.112 6.464V51h-8.96V15.544h8.96v4.416c1.194-1.536 2.709-2.73 4.544-3.584 1.877-.896 3.925-1.344 6.144-1.344zm36.552-.064c2.645 0 4.971.533 6.976 1.6 2.005 1.024 3.584 2.368 4.736 4.032v-5.056h9.024v35.712c0 3.285-.661 6.208-1.984 8.768-1.323 2.603-3.307 4.65-5.952 6.144-2.645 1.536-5.845 2.304-9.6 2.304-5.035 0-9.173-1.173-12.416-3.52-3.2-2.347-5.013-5.547-5.44-9.6h8.896c.469 1.621 1.472 2.901 3.008 3.84 1.579.981 3.477 1.472 5.696 1.472 2.603 0 4.715-.79 6.336-2.368 1.621-1.536 2.432-3.883 2.432-7.04v-5.504c-1.152 1.664-2.752 3.05-4.8 4.16-2.005 1.11-4.309 1.664-6.912 1.664-2.987 0-5.717-.768-8.192-2.304-2.475-1.536-4.437-3.69-5.888-6.464-1.408-2.816-2.112-6.037-2.112-9.664 0-3.584.704-6.763 2.112-9.536 1.451-2.773 3.392-4.907 5.824-6.4 2.475-1.493 5.227-2.24 8.256-2.24zm11.712 18.304c0-2.176-.427-4.032-1.28-5.568-.853-1.579-2.005-2.773-3.456-3.584a9.06 9.06 0 00-4.672-1.28c-1.664 0-3.2.405-4.608 1.216-1.408.81-2.56 2.005-3.456 3.584-.853 1.536-1.28 3.37-1.28 5.504 0 2.133.427 4.01 1.28 5.632.896 1.579 2.048 2.795 3.456 3.648 1.451.853 2.987 1.28 4.608 1.28a9.425 9.425 0 004.672-1.216c1.451-.853 2.603-2.048 3.456-3.584.853-1.579 1.28-3.456 1.28-5.632zM18.16 147.576c-3.413 0-6.485-.747-9.216-2.24-2.73-1.536-4.885-3.691-6.464-6.464-1.536-2.773-2.304-5.973-2.304-9.6s.79-6.827 2.368-9.6c1.621-2.773 3.819-4.907 6.592-6.4 2.773-1.536 5.867-2.304 9.28-2.304 3.413 0 6.507.768 9.28 2.304 2.773 1.493 4.95 3.627 6.528 6.4 1.621 2.773 2.432 5.973 2.432 9.6s-.832 6.827-2.496 9.6a17.008 17.008 0 01-6.656 6.464c-2.773 1.493-5.888 2.24-9.344 2.24zm0-7.808a9.342 9.342 0 004.544-1.152c1.45-.811 2.603-2.005 3.456-3.584.853-1.579 1.28-3.499 1.28-5.76 0-3.371-.896-5.952-2.688-7.744-1.75-1.835-3.904-2.752-6.464-2.752-2.56 0-4.715.917-6.464 2.752-1.707 1.792-2.56 4.373-2.56 7.744 0 3.371.832 5.973 2.496 7.808 1.707 1.792 3.84 2.688 6.4 2.688zm41.325-20.864h-6.209V147h-9.088v-28.096h-4.032v-7.36h4.032v-1.792c0-4.352 1.238-7.552 3.712-9.6 2.475-2.048 6.209-3.008 11.2-2.88v7.552c-2.175-.043-3.69.32-4.544 1.088-.853.768-1.28 2.155-1.28 4.16v1.472h6.208v7.36zm22.062 0h-6.208V147h-9.088v-28.096h-4.032v-7.36h4.032v-1.792c0-4.352 1.237-7.552 3.712-9.6s6.208-3.008 11.2-2.88v7.552c-2.176-.043-3.69.32-4.544 1.088-.853.768-1.28 2.155-1.28 4.16v1.472h6.208v7.36zm10.35-11.584c-1.578 0-2.9-.491-3.968-1.472-1.023-1.024-1.535-2.283-1.535-3.776 0-1.493.511-2.73 1.535-3.712 1.067-1.024 2.39-1.536 3.968-1.536 1.58 0 2.88.512 3.904 1.536 1.067.981 1.6 2.219 1.6 3.712 0 1.493-.533 2.752-1.6 3.776-1.023.981-2.325 1.472-3.904 1.472zm4.416 4.224V147h-8.96v-35.456h8.96zm6.549 17.728c0-3.669.747-6.869 2.24-9.6 1.493-2.773 3.563-4.907 6.208-6.4 2.645-1.536 5.675-2.304 9.088-2.304 4.395 0 8.021 1.109 10.88 3.328 2.901 2.176 4.843 5.248 5.824 9.216h-9.664c-.512-1.536-1.387-2.731-2.624-3.584-1.195-.896-2.688-1.344-4.48-1.344-2.56 0-4.587.939-6.08 2.816-1.493 1.835-2.24 4.459-2.24 7.872 0 3.371.747 5.995 2.24 7.872 1.493 1.835 3.52 2.752 6.08 2.752 3.627 0 5.995-1.621 7.104-4.864h9.664c-.981 3.84-2.923 6.891-5.824 9.152-2.901 2.261-6.528 3.392-10.88 3.392-3.413 0-6.443-.747-9.088-2.24-2.645-1.536-4.715-3.669-6.208-6.4-1.493-2.773-2.24-5.995-2.24-9.664zm73.764-.768c0 1.28-.085 2.432-.256 3.456h-25.92c.213 2.56 1.109 4.565 2.688 6.016 1.579 1.451 3.52 2.176 5.824 2.176 3.328 0 5.696-1.429 7.104-4.288h9.664c-1.024 3.413-2.987 6.229-5.888 8.448-2.901 2.176-6.464 3.264-10.688 3.264-3.413 0-6.485-.747-9.216-2.24-2.688-1.536-4.8-3.691-6.336-6.464-1.493-2.773-2.24-5.973-2.24-9.6 0-3.669.747-6.891 2.24-9.664 1.493-2.773 3.584-4.907 6.272-6.4 2.688-1.493 5.781-2.24 9.28-2.24 3.371 0 6.379.725 9.024 2.176 2.688 1.451 4.757 3.52 6.208 6.208 1.493 2.645 2.24 5.696 2.24 9.152zm-9.28-2.56c-.043-2.304-.875-4.139-2.496-5.504-1.621-1.408-3.605-2.112-5.952-2.112-2.219 0-4.096.683-5.632 2.048-1.493 1.323-2.411 3.179-2.752 5.568h16.832zm35.614-18.624c-1.579 0-2.901-.491-3.968-1.472-1.024-1.024-1.536-2.283-1.536-3.776 0-1.493.512-2.73 1.536-3.712 1.067-1.024 2.389-1.536 3.968-1.536 1.579 0 2.88.512 3.904 1.536 1.067.981 1.6 2.219 1.6 3.712 0 1.493-.533 2.752-1.6 3.776-1.024.981-2.325 1.472-3.904 1.472zm4.416 4.224V147h-8.96v-35.456h8.96zm28.501-.512c4.224 0 7.637 1.344 10.24 4.032 2.602 2.645 3.904 6.357 3.904 11.136V147h-8.96v-19.584c0-2.816-.704-4.971-2.112-6.464-1.408-1.536-3.328-2.304-5.76-2.304-2.475 0-4.438.768-5.888 2.304-1.408 1.493-2.112 3.648-2.112 6.464V147h-8.96v-35.456h8.96v4.416c1.194-1.536 2.709-2.731 4.544-3.584 1.877-.896 3.925-1.344 6.144-1.344z"
                    ></path>
                    <path
                        fill="#2271E9"
                        d="M271.615 124.6c0-4.395.981-8.32 2.944-11.776 2.005-3.499 4.715-6.208 8.128-8.128 3.456-1.963 7.317-2.944 11.584-2.944 4.992 0 9.365 1.28 13.12 3.84 3.755 2.56 6.379 6.101 7.872 10.624h-10.304c-1.024-2.133-2.475-3.733-4.352-4.8-1.835-1.067-3.968-1.6-6.4-1.6-2.603 0-4.928.619-6.976 1.856-2.005 1.195-3.584 2.901-4.736 5.12-1.109 2.219-1.664 4.821-1.664 7.808 0 2.944.555 5.547 1.664 7.808 1.152 2.219 2.731 3.947 4.736 5.184 2.048 1.195 4.373 1.792 6.976 1.792 2.432 0 4.565-.533 6.4-1.6 1.877-1.109 3.328-2.731 4.352-4.864h10.304c-1.493 4.565-4.117 8.128-7.872 10.688-3.712 2.517-8.085 3.776-13.12 3.776-4.267 0-8.128-.96-11.584-2.88-3.413-1.963-6.123-4.672-8.128-8.128-1.963-3.456-2.944-7.381-2.944-11.776zm67.045 22.976c-3.413 0-6.485-.747-9.216-2.24-2.731-1.536-4.885-3.691-6.464-6.464-1.536-2.773-2.304-5.973-2.304-9.6s.789-6.827 2.368-9.6c1.621-2.773 3.819-4.907 6.592-6.4 2.773-1.536 5.867-2.304 9.28-2.304 3.413 0 6.507.768 9.28 2.304 2.773 1.493 4.949 3.627 6.528 6.4 1.621 2.773 2.432 5.973 2.432 9.6s-.832 6.827-2.496 9.6a17.006 17.006 0 01-6.656 6.464c-2.773 1.493-5.888 2.24-9.344 2.24zm0-7.808a9.342 9.342 0 004.544-1.152c1.451-.811 2.603-2.005 3.456-3.584.853-1.579 1.28-3.499 1.28-5.76 0-3.371-.896-5.952-2.688-7.744-1.749-1.835-3.904-2.752-6.464-2.752-2.56 0-4.715.917-6.464 2.752-1.707 1.792-2.56 4.373-2.56 7.744 0 3.371.832 5.973 2.496 7.808 1.707 1.792 3.84 2.688 6.4 2.688zm34.029-40.128V147h-8.96V99.64h8.96zm24.596 47.936c-3.413 0-6.485-.747-9.216-2.24-2.731-1.536-4.885-3.691-6.464-6.464-1.536-2.773-2.304-5.973-2.304-9.6s.789-6.827 2.368-9.6c1.621-2.773 3.819-4.907 6.592-6.4 2.773-1.536 5.867-2.304 9.28-2.304 3.413 0 6.507.768 9.28 2.304 2.773 1.493 4.949 3.627 6.528 6.4 1.621 2.773 2.432 5.973 2.432 9.6s-.832 6.827-2.496 9.6a17.006 17.006 0 01-6.656 6.464c-2.773 1.493-5.888 2.24-9.344 2.24zm0-7.808a9.342 9.342 0 004.544-1.152c1.451-.811 2.603-2.005 3.456-3.584.853-1.579 1.28-3.499 1.28-5.76 0-3.371-.896-5.952-2.688-7.744-1.749-1.835-3.904-2.752-6.464-2.752-2.56 0-4.715.917-6.464 2.752-1.707 1.792-2.56 4.373-2.56 7.744 0 3.371.832 5.973 2.496 7.808 1.707 1.792 3.84 2.688 6.4 2.688zm38.957-28.8c2.645 0 4.97.533 6.976 1.6 2.005 1.024 3.584 2.368 4.736 4.032v-5.056h9.024v35.712c0 3.285-.662 6.208-1.984 8.768-1.323 2.603-3.307 4.651-5.952 6.144-2.646 1.536-5.846 2.304-9.6 2.304-5.035 0-9.174-1.173-12.416-3.52-3.2-2.347-5.014-5.547-5.44-9.6h8.896c.469 1.621 1.472 2.901 3.008 3.84 1.578.981 3.477 1.472 5.696 1.472 2.602 0 4.714-.789 6.336-2.368 1.621-1.536 2.432-3.883 2.432-7.04v-5.504c-1.152 1.664-2.752 3.051-4.8 4.16-2.006 1.109-4.31 1.664-6.912 1.664-2.987 0-5.718-.768-8.192-2.304-2.475-1.536-4.438-3.691-5.889-6.464-1.408-2.816-2.112-6.037-2.112-9.664 0-3.584.704-6.763 2.112-9.536 1.451-2.773 3.393-4.907 5.825-6.4 2.474-1.493 5.226-2.24 8.256-2.24zm11.712 18.304c0-2.176-.427-4.032-1.28-5.568-.854-1.579-2.006-2.773-3.456-3.584a9.064 9.064 0 00-4.672-1.28c-1.664 0-3.2.405-4.608 1.216-1.408.811-2.56 2.005-3.456 3.584-.854 1.536-1.28 3.371-1.28 5.504 0 2.133.426 4.011 1.28 5.632.896 1.579 2.048 2.795 3.456 3.648 1.45.853 2.986 1.28 4.608 1.28a9.422 9.422 0 004.672-1.216c1.45-.853 2.602-2.048 3.456-3.584.853-1.579 1.28-3.456 1.28-5.632zm37.423-18.24c4.224 0 7.637 1.344 10.24 4.032 2.602 2.645 3.904 6.357 3.904 11.136V147h-8.96v-19.584c0-2.816-.704-4.971-2.112-6.464-1.408-1.536-3.328-2.304-5.76-2.304-2.475 0-4.438.768-5.888 2.304-1.408 1.493-2.112 3.648-2.112 6.464V147h-8.96v-35.456h8.96v4.416c1.194-1.536 2.709-2.731 4.544-3.584 1.877-.896 3.925-1.344 6.144-1.344zm55.624 17.472c0 1.28-.085 2.432-.256 3.456h-25.92c.213 2.56 1.109 4.565 2.688 6.016 1.579 1.451 3.52 2.176 5.824 2.176 3.328 0 5.696-1.429 7.104-4.288h9.664c-1.024 3.413-2.987 6.229-5.888 8.448-2.901 2.176-6.464 3.264-10.688 3.264-3.413 0-6.485-.747-9.216-2.24-2.688-1.536-4.8-3.691-6.336-6.464-1.493-2.773-2.24-5.973-2.24-9.6 0-3.669.747-6.891 2.24-9.664 1.493-2.773 3.584-4.907 6.272-6.4 2.688-1.493 5.781-2.24 9.28-2.24 3.371 0 6.379.725 9.024 2.176 2.688 1.451 4.757 3.52 6.208 6.208 1.493 2.645 2.24 5.696 2.24 9.152zm-9.28-2.56c-.043-2.304-.875-4.139-2.496-5.504-1.621-1.408-3.605-2.112-5.952-2.112-2.219 0-4.096.683-5.632 2.048-1.493 1.323-2.411 3.179-2.752 5.568h16.832z"
                    ></path>
                </svg>
                <Button variant="contained" sx={{ width:200, textTransform: "none", borderRadius: 4, fontSize: 12 }}>Book an Appointment</Button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="181"
                    height="84"
                    fill="none"
                    viewBox="0 0 181 84"
                >
                    <path
                        fill="#1F3B60"
                        fillOpacity="0.5"
                        d="M2.278 15V3.364h7.216v1.511h-5.46V8.42h4.943v1.506H4.034V15H2.278zm9.239 0V6.273h1.699V15h-1.699zm.858-10.074a1.08 1.08 0 01-.761-.295.96.96 0 01-.313-.716c0-.28.104-.52.313-.716.212-.2.465-.301.761-.301s.547.1.756.3a.941.941 0 01.318.717.953.953 0 01-.318.716 1.06 1.06 0 01-.756.295zM17.2 9.818V15h-1.699V6.273h1.631v1.42h.108c.2-.462.515-.833.943-1.113.432-.28.976-.42 1.63-.42.596 0 1.117.124 1.563.374.447.246.794.614 1.04 1.102.246.489.37 1.093.37 1.813V15h-1.7V9.653c0-.632-.164-1.126-.494-1.483-.33-.36-.782-.54-1.358-.54-.394 0-.744.086-1.05.256a1.84 1.84 0 00-.722.75c-.175.326-.262.72-.262 1.182zm11.131 5.353c-.705 0-1.333-.18-1.886-.54-.55-.364-.982-.881-1.296-1.552-.31-.674-.466-1.482-.466-2.426 0-.943.157-1.75.472-2.42.318-.67.754-1.184 1.307-1.54a3.399 3.399 0 011.88-.534c.542 0 .978.091 1.307.273.334.178.591.386.773.625.186.238.33.449.432.63h.102V3.364h1.699V15h-1.66v-1.358h-.141a4.49 4.49 0 01-.444.636c-.189.239-.45.447-.784.625-.333.178-.765.268-1.295.268zm.375-1.45c.489 0 .902-.128 1.239-.386.34-.261.598-.623.772-1.085.178-.462.267-1 .267-1.614 0-.606-.087-1.136-.261-1.59-.174-.455-.43-.81-.767-1.063-.337-.254-.754-.38-1.25-.38-.511 0-.938.132-1.278.397-.341.265-.599.627-.773 1.085-.17.459-.256.976-.256 1.551 0 .584.087 1.108.261 1.574.175.466.432.835.773 1.108.345.27.77.404 1.273.404zm16.136-2.34V6.273h1.705V15h-1.67v-1.511h-.092c-.2.465-.522.854-.965 1.164-.44.307-.987.46-1.642.46-.561 0-1.057-.122-1.49-.369-.427-.25-.764-.619-1.01-1.108-.243-.488-.364-1.092-.364-1.812V6.273h1.699v5.346c0 .595.165 1.069.494 1.42.33.353.758.53 1.284.53.318 0 .635-.08.95-.24.317-.159.58-.4.789-.721.212-.322.316-.731.312-1.227zM55.37 8.403l-1.54.273a1.82 1.82 0 00-.306-.562 1.517 1.517 0 00-.557-.438c-.235-.114-.529-.17-.88-.17-.482 0-.883.108-1.205.324-.322.212-.483.486-.483.823 0 .292.108.527.324.705.215.178.564.324 1.045.437l1.386.319c.803.185 1.402.471 1.796.858.394.386.59.888.59 1.505 0 .523-.15.989-.454 1.398-.299.405-.718.723-1.255.954-.535.232-1.154.347-1.858.347-.978 0-1.775-.208-2.392-.625-.618-.42-.997-1.017-1.137-1.79l1.642-.25c.102.428.313.752.63.972.32.216.734.324 1.245.324.557 0 1.002-.116 1.335-.347.334-.235.5-.52.5-.858a.891.891 0 00-.306-.687c-.201-.186-.51-.326-.926-.42l-1.478-.324c-.814-.186-1.416-.482-1.807-.887-.386-.405-.58-.918-.58-1.54 0-.515.145-.966.433-1.352.288-.386.685-.687 1.193-.903.507-.22 1.089-.33 1.744-.33.943 0 1.686.205 2.227.614.542.405.9.949 1.074 1.63zm9.95 6.773c-.819 0-1.533-.187-2.143-.562a3.793 3.793 0 01-1.42-1.574c-.337-.674-.506-1.462-.506-2.364 0-.905.169-1.697.506-2.375a3.786 3.786 0 011.42-1.58c.61-.374 1.324-.562 2.142-.562.818 0 1.532.188 2.142.563.61.375 1.084.901 1.42 1.58.338.677.506 1.469.506 2.374 0 .902-.168 1.69-.505 2.364a3.793 3.793 0 01-1.42 1.574c-.61.375-1.325.562-2.143.562zm.005-1.426c.53 0 .97-.14 1.318-.42.349-.28.606-.654.773-1.12.17-.466.255-.979.255-1.54 0-.556-.085-1.068-.255-1.534a2.5 2.5 0 00-.773-1.13c-.348-.284-.788-.426-1.318-.426-.534 0-.977.142-1.33.426a2.54 2.54 0 00-.778 1.13c-.167.466-.25.978-.25 1.535 0 .56.083 1.073.25 1.54.17.465.43.838.778 1.118.353.28.796.421 1.33.421zm7.657-3.932V15h-1.698V6.273h1.63v1.42h.108c.201-.462.516-.833.944-1.113.431-.28.975-.42 1.63-.42.595 0 1.116.124 1.563.374.447.246.793.614 1.04 1.102.246.489.369 1.093.369 1.813V15h-1.7V9.653c0-.632-.164-1.126-.493-1.483-.33-.36-.783-.54-1.358-.54-.394 0-.745.086-1.052.256-.302.17-.543.42-.721.75-.174.326-.261.72-.261 1.182zm20.11-2.778a3.55 3.55 0 00-.443-.926 2.832 2.832 0 00-1.523-1.154 3.495 3.495 0 00-1.063-.153c-.655 0-1.246.168-1.772.505-.527.338-.943.832-1.25 1.483-.303.648-.455 1.442-.455 2.381 0 .943.154 1.74.46 2.392.307.652.728 1.146 1.262 1.483.534.337 1.142.506 1.824.506.632 0 1.183-.129 1.653-.386a2.692 2.692 0 001.097-1.091c.261-.474.392-1.03.392-1.67l.454.084h-3.33V9.045h4.575v1.324c0 .978-.209 1.826-.625 2.546a4.257 4.257 0 01-1.716 1.659c-.728.39-1.56.585-2.5.585-1.053 0-1.978-.242-2.773-.727-.792-.485-1.41-1.173-1.852-2.063-.444-.894-.665-1.954-.665-3.181 0-.929.129-1.762.386-2.5.258-.74.62-1.366 1.085-1.881a4.738 4.738 0 011.654-1.188 5.176 5.176 0 012.085-.414c.629 0 1.214.092 1.756.278.545.186 1.03.449 1.454.79a4.472 4.472 0 011.631 2.767h-1.801zm7.649 8.136c-.818 0-1.532-.187-2.142-.562a3.793 3.793 0 01-1.42-1.574c-.338-.674-.506-1.462-.506-2.364 0-.905.168-1.697.506-2.375a3.786 3.786 0 011.42-1.58c.61-.374 1.324-.562 2.142-.562.818 0 1.532.188 2.142.563.61.375 1.083.901 1.421 1.58.337.677.505 1.469.505 2.374 0 .902-.168 1.69-.505 2.364a3.8 3.8 0 01-1.421 1.574c-.61.375-1.324.562-2.142.562zm.006-1.426c.53 0 .969-.14 1.318-.42a2.47 2.47 0 00.773-1.12c.17-.466.255-.979.255-1.54 0-.556-.085-1.068-.255-1.534a2.506 2.506 0 00-.773-1.13c-.349-.284-.788-.426-1.318-.426-.534 0-.977.142-1.33.426a2.538 2.538 0 00-.778 1.13c-.167.466-.25.978-.25 1.535 0 .56.083 1.073.25 1.54.17.465.43.838.778 1.118.353.28.796.421 1.33.421zm9.635 1.426c-.818 0-1.533-.187-2.142-.562a3.792 3.792 0 01-1.421-1.574c-.337-.674-.506-1.462-.506-2.364 0-.905.169-1.697.506-2.375a3.785 3.785 0 011.421-1.58c.609-.374 1.324-.562 2.142-.562.818 0 1.532.188 2.142.563.61.375 1.083.901 1.42 1.58.337.677.506 1.469.506 2.374 0 .902-.169 1.69-.506 2.364a3.79 3.79 0 01-1.42 1.574c-.61.375-1.324.562-2.142.562zm.005-1.426c.531 0 .97-.14 1.319-.42.348-.28.606-.654.772-1.12.171-.466.256-.979.256-1.54 0-.556-.085-1.068-.256-1.534a2.497 2.497 0 00-.772-1.13c-.349-.284-.788-.426-1.319-.426-.534 0-.977.142-1.329.426a2.54 2.54 0 00-.779 1.13c-.166.466-.25.978-.25 1.535 0 .56.084 1.073.25 1.54.171.465.43.838.779 1.118.352.28.795.421 1.329.421zm9.618 4.704c-.693 0-1.29-.09-1.79-.272-.496-.182-.901-.422-1.215-.722-.315-.299-.55-.627-.705-.983l1.46-.602c.103.167.239.343.409.528.175.19.409.35.705.483.299.133.684.2 1.153.2.644 0 1.176-.158 1.597-.472.42-.311.631-.807.631-1.489v-1.716h-.108c-.103.186-.25.392-.444.62-.189.227-.45.424-.784.59-.333.167-.767.25-1.301.25-.689 0-1.31-.16-1.863-.483-.55-.325-.985-.805-1.307-1.437-.318-.636-.478-1.419-.478-2.347 0-.928.158-1.723.472-2.386.318-.663.754-1.17 1.307-1.523a3.399 3.399 0 011.881-.534c.541 0 .979.091 1.312.273.333.178.593.386.778.625.19.238.336.449.438.63h.125V6.274h1.665v8.92c0 .75-.174 1.366-.523 1.847-.348.48-.82.837-1.415 1.068-.591.231-1.257.346-2 .346zm-.017-4.994c.489 0 .902-.113 1.239-.34.341-.232.598-.561.773-.99.178-.431.267-.948.267-1.55 0-.588-.087-1.105-.262-1.552-.174-.447-.43-.795-.767-1.045-.337-.254-.754-.38-1.25-.38-.511 0-.937.132-1.278.397a2.397 2.397 0 00-.773 1.068c-.17.45-.256.955-.256 1.511 0 .572.088 1.074.262 1.506.174.432.432.77.772 1.012.345.242.769.363 1.273.363zm7.932-10.096V15h-1.699V3.364h1.699zm6.047 11.812c-.86 0-1.6-.184-2.222-.551a3.747 3.747 0 01-1.432-1.563c-.333-.674-.5-1.463-.5-2.369 0-.894.167-1.682.5-2.363.338-.682.807-1.214 1.41-1.597.606-.383 1.314-.574 2.125-.574.492 0 .969.082 1.431.244.463.163.877.419 1.245.767.367.349.657.802.869 1.358.212.553.318 1.226.318 2.018v.602h-6.937V9.875h5.272c0-.447-.09-.843-.272-1.188a2.067 2.067 0 00-.767-.823c-.326-.201-.709-.301-1.148-.301-.477 0-.894.117-1.25.352a2.365 2.365 0 00-.818.909c-.19.371-.284.774-.284 1.21v.994c0 .584.102 1.08.306 1.489.209.41.499.722.87.938.371.212.805.318 1.301.318.322 0 .615-.046.881-.137a1.825 1.825 0 001.13-1.108l1.608.29c-.129.474-.36.888-.693 1.245a3.354 3.354 0 01-1.244.823c-.496.194-1.063.29-1.699.29zM143.83 15V6.273h1.63v1.42h.108c.182-.48.479-.856.892-1.125.413-.273.907-.409 1.483-.409.584 0 1.072.136 1.466.41.398.272.691.647.881 1.124h.091a2.45 2.45 0 01.994-1.113c.455-.28.996-.42 1.625-.42.792 0 1.438.247 1.938.743.503.497.755 1.245.755 2.245V15h-1.699V9.307c0-.591-.161-1.02-.483-1.284a1.756 1.756 0 00-1.153-.398c-.553 0-.983.17-1.29.511-.307.337-.46.771-.46 1.302V15h-1.693V9.199c0-.474-.148-.854-.443-1.142-.296-.288-.68-.432-1.154-.432-.322 0-.619.085-.892.256a1.87 1.87 0 00-.653.699 2.14 2.14 0 00-.245 1.04V15h-1.698zm16.68.193a3.564 3.564 0 01-1.5-.307 2.533 2.533 0 01-1.063-.903c-.257-.394-.386-.877-.386-1.449 0-.492.095-.898.284-1.216a2.1 2.1 0 01.767-.755 4.006 4.006 0 011.08-.421 10.7 10.7 0 011.216-.216l1.272-.148c.326-.041.563-.108.711-.198.147-.091.221-.24.221-.444v-.04c0-.496-.14-.88-.42-1.153-.277-.273-.69-.409-1.239-.409-.572 0-1.023.127-1.352.38-.326.25-.551.53-.676.836l-1.597-.364c.19-.53.466-.958.83-1.284.367-.33.789-.568 1.267-.716a4.943 4.943 0 011.505-.227c.349 0 .718.042 1.108.125.394.08.762.227 1.103.443.344.216.627.525.846.926.22.398.33.915.33 1.552V15h-1.659v-1.193h-.069c-.109.22-.274.435-.494.647-.22.213-.502.389-.846.529-.345.14-.758.21-1.239.21zm.369-1.364c.47 0 .871-.092 1.205-.278.337-.185.593-.428.767-.727.178-.303.267-.627.267-.972v-1.125c-.061.06-.178.118-.352.17a5.5 5.5 0 01-.586.131c-.219.034-.433.067-.642.097l-.522.068a4.21 4.21 0 00-.904.21c-.269.099-.485.24-.648.426-.159.182-.238.425-.238.728 0 .42.155.739.466.954.31.213.706.319 1.187.319zm6.201 4.444v-12h1.659v1.415h.142a4.66 4.66 0 01.426-.631 2.4 2.4 0 01.773-.625c.329-.182.765-.273 1.306-.273.705 0 1.334.178 1.887.534.553.356.986.87 1.301 1.54.318.67.477 1.477.477 2.42 0 .944-.157 1.752-.471 2.426-.315.671-.747 1.188-1.296 1.552-.549.36-1.176.54-1.881.54-.53 0-.964-.09-1.301-.268a2.473 2.473 0 01-.784-.625 4.725 4.725 0 01-.437-.636h-.103v4.63h-1.698zm1.664-7.637c0 .614.089 1.152.267 1.614.178.462.436.824.773 1.085.337.258.75.387 1.239.387.507 0 .932-.135 1.272-.404.341-.272.599-.642.773-1.108.178-.466.267-.99.267-1.574 0-.575-.087-1.092-.261-1.55-.171-.46-.428-.82-.773-1.086-.341-.265-.767-.398-1.278-.398-.493 0-.909.127-1.25.38-.337.255-.593.609-.767 1.063-.175.455-.262.985-.262 1.591zm9.33 4.472c-.311 0-.578-.11-.801-.33a1.098 1.098 0 01-.335-.806c0-.311.111-.576.335-.796.223-.223.49-.335.801-.335.31 0 .578.112.801.335.223.22.335.485.335.796 0 .208-.053.4-.159.574-.102.17-.239.306-.409.409-.17.102-.36.153-.568.153zm0-6.352c-.311 0-.578-.112-.801-.336a1.091 1.091 0 01-.335-.8c0-.311.111-.576.335-.796.223-.224.49-.335.801-.335.31 0 .578.111.801.335.223.22.335.485.335.795 0 .209-.053.4-.159.574-.102.17-.239.307-.409.41-.17.102-.36.153-.568.153z"
                    ></path>
                    <rect
                        width="49"
                        height="49"
                        x="0.5"
                        y="34.5"
                        fill="#fff"
                        rx="12.5"
                    ></rect>
                    <path
                        fill="#1A73E8"
                        d="M27.17 46.56a9.413 9.413 0 00-2.832-.435c-2.88 0-5.458 1.3-7.181 3.346l4.428 3.724 5.585-6.635z"
                    ></path>
                    <path
                        fill="#EA4335"
                        d="M17.156 49.471a9.343 9.343 0 00-2.195 6.026c0 1.76.35 3.193.928 4.471l5.696-6.773-4.429-3.724z"
                    ></path>
                    <path
                        fill="#4285F4"
                        d="M24.338 51.917a3.588 3.588 0 012.737 5.903l5.58-6.635a9.38 9.38 0 00-5.49-4.62L21.591 53.2a3.575 3.575 0 012.747-1.283z"
                    ></path>
                    <path
                        fill="#FBBC04"
                        d="M24.338 59.088a3.588 3.588 0 01-3.586-3.586 3.553 3.553 0 01.838-2.302l-5.701 6.773c.976 2.16 2.593 3.894 4.259 6.079l6.927-8.232a3.582 3.582 0 01-2.737 1.268z"
                    ></path>
                    <path
                        fill="#34A853"
                        d="M26.937 68.295c3.13-4.89 6.773-7.112 6.773-12.798 0-1.56-.382-3.029-1.055-4.323L20.153 66.052c.53.695 1.066 1.432 1.586 2.249C23.638 71.239 23.113 73 24.338 73s.7-1.766 2.599-4.705z"
                    ></path>
                    <rect
                        width="49"
                        height="49"
                        x="0.5"
                        y="34.5"
                        stroke="#F2F2F2"
                        rx="12.5"
                    ></rect>
                    <path
                        fill="#5F6368"
                        fillRule="evenodd"
                        d="M118.762 59.868l4.672-1.94c-.259-.655-1.027-1.107-1.941-1.107-1.168-.005-2.787 1.027-2.731 3.047zm5.485 1.88l1.783 1.185c-.575.852-1.958 2.319-4.356 2.319-2.968 0-5.113-2.297-5.113-5.225 0-3.11 2.162-5.226 4.859-5.226 2.477.085 4.018 1.682 4.712 3.916l-6.998 2.89c.537 1.05 1.366 1.585 2.534 1.585 1.163 0 1.975-.575 2.568-1.444m-11.343 3.188h2.297v-15.35h-2.297v15.35zm-3.747-4.893c0-1.84-1.23-3.188-2.793-3.188-1.58 0-2.912 1.349-2.912 3.188 0 1.823 1.326 3.15 2.912 3.15 1.569 0 2.793-1.327 2.793-3.15zm2.021-4.926v9.367c0 3.86-2.275 5.446-4.966 5.446-2.534 0-4.058-1.704-4.633-3.087l1.997-.83c.356.853 1.231 1.863 2.636 1.863 2.567-.292 2.793-1.953 2.793-3.82h-.085c-.513.632-1.506 1.19-2.753 1.19-2.613 0-5.011-2.274-5.011-5.208 0-2.951 2.392-5.248 5.011-5.248 1.247 0 2.24.553 2.753 1.168h.079v-.852c0-.006 2.179-.006 2.179-.006v.017zm-25.055 4.91c0-1.88-1.344-3.166-2.895-3.166-1.558 0-2.895 1.286-2.895 3.166 0 1.862 1.343 3.165 2.895 3.165 1.551 0 2.895-1.309 2.895-3.166zm2.257 0c0 3.007-2.314 5.225-5.152 5.225-2.839 0-5.153-2.218-5.153-5.225 0-3.03 2.314-5.226 5.153-5.226 2.838 0 5.152 2.195 5.152 5.225zm9.31 0c0-1.88-1.342-3.166-2.894-3.166-1.558 0-2.895 1.286-2.895 3.166 0 1.862 1.343 3.165 2.895 3.165s2.895-1.309 2.895-3.166zm2.258 0c0 3.007-2.314 5.225-5.152 5.225-2.839 0-5.152-2.218-5.152-5.225 0-3.03 2.313-5.226 5.152-5.226 2.838 0 5.152 2.195 5.152 5.225zm-30.698 5.225c-4.47 0-8.239-3.645-8.239-8.126C61 52.651 64.764 49 69.239 49c2.477 0 4.238.97 5.564 2.24l-1.563 1.563c-.948-.891-2.235-1.585-4.001-1.585-3.267 0-5.813 2.635-5.813 5.868 0 3.268 2.557 5.87 5.813 5.87 2.116 0 3.324-.853 4.097-1.626.632-.632 1.05-1.546 1.207-2.793H69.24v-2.218h7.449c.079.395.118.869.118 1.383 0 1.664-.457 3.724-1.918 5.186-1.423 1.495-3.245 2.29-5.644 2.29"
                        clipRule="evenodd"
                    ></path>
                    <path
                        fill="#63666A"
                        d="M131.523 64.82V51.174h1.762l4.739 8.311h.072l4.739-8.31h1.762V64.82h-1.762l.072-10.383h-.072l-4.262 7.477h-1.024l-4.263-7.477h-.071c.13 3.453.071 6.93.071 10.383h-1.763zm18.575.238c-1 0-1.81-.286-2.477-.858-.667-.571-1-1.333-1-2.262 0-1.024.405-1.81 1.191-2.382.786-.571 1.762-.857 2.905-.857 1.024 0 1.881.19 2.524.572-.017-1.981-1.386-2.525-2.453-2.525-1.007.048-1.881.47-2.238 1.358l-1.596-.691c.215-.548.643-1.072 1.286-1.548s1.477-.714 2.525-.714c1.19 0 2.19.357 2.976 1.047.786.691 1.191 1.691 1.191 2.953v5.644h-1.667V63.51c-.779.977-1.831 1.527-3.167 1.548zm3.143-4.334c-1.026-.781-3.167-.879-4.167-.072-.786.762-.869 1.784-.048 2.382 1.986 1.274 4.287-.71 4.215-2.31zm8.525 4.334c-.714 0-1.357-.143-1.905-.453-.547-.31-.976-.69-1.262-1.143h-.095l.071 1.286v4.12h-1.738V55.413h1.667V56.7h.071c.286-.452.691-.833 1.263-1.143.571-.31 1.214-.452 1.905-.452 1.214 0 2.238.476 3.119 1.428.881.953 1.309 2.144 1.309 3.549 0 1.405-.428 2.595-1.309 3.548-.857.953-1.905 1.429-3.096 1.429zm-.285-1.62c.809 0 1.5-.31 2.095-.928.596-.62.881-1.43.881-2.453 0-1.024-.285-1.834-.881-2.453-.595-.619-1.286-.929-2.095-.929-.834 0-1.524.31-2.096.905-.571.62-.857 1.43-.857 2.453 0 1.024.286 1.858.857 2.453.572.667 1.262.952 2.096.952zm9.811 1.62c-1.048 0-1.905-.262-2.572-.762-.691-.5-1.167-1.143-1.5-1.905l1.571-.643c.501 1.166 1.334 1.762 2.525 1.762.547 0 1-.119 1.333-.357.357-.239.524-.548.524-.953 0-.619-.428-1.024-1.286-1.238l-1.881-.453c-.595-.142-1.167-.452-1.691-.857-.524-.405-.809-1-.809-1.715 0-.833.357-1.5 1.095-2 .738-.524 1.595-.762 2.596-.762.833 0 1.571.19 2.214.572.643.38 1.12.905 1.381 1.619l-1.524.62c-.333-.834-1.047-1.24-2.143-1.24-.524 0-.952.12-1.309.334-.357.215-.524.5-.524.881 0 .524.405.905 1.238 1.096l1.858.428c.881.215 1.524.548 1.953 1.048.428.5.619 1.048.619 1.667 0 .834-.334 1.548-1.024 2.096-.667.476-1.548.762-2.644.762z"
                    ></path>
                </svg>
            </Box>
            <Box>
                <img src={audi} alt="" />
            </Box>
        </Grid>
    )
}

export default Car