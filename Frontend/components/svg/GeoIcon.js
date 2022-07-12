
const GeoIcon = ({fill, ...props}) => {
    return(
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8603 13.175C16.249 14.5025 15.4207 15.825 14.5737 17.0125C13.7702 18.132 12.911 19.2044 12 20.225C11.0889 19.2044 10.2298 18.132 9.42633 17.0125C8.57933 15.825 7.751 14.5025 7.13967 13.175C6.52133 11.8337 6.16667 10.5775 6.16667 9.5C6.16667 7.8424 6.78125 6.25269 7.87521 5.08058C8.96917 3.90848 10.4529 3.25 12 3.25C13.5471 3.25 15.0308 3.90848 16.1248 5.08058C17.2188 6.25269 17.8333 7.8424 17.8333 9.5C17.8333 10.5775 17.4775 11.8337 16.8603 13.175ZM12 22C12 22 19 14.8925 19 9.5C19 7.51088 18.2625 5.60322 16.9497 4.1967C15.637 2.79018 13.8565 2 12 2C10.1435 2 8.36301 2.79018 7.05025 4.1967C5.7375 5.60322 5 7.51088 5 9.5C5 14.8925 12 22 12 22Z" fill={fill || "white"}/>
            <path d="M12 11C11.4696 11 10.9609 10.7893 10.5858 10.4142C10.2107 10.0391 10 9.53043 10 9C10 8.46957 10.2107 7.96086 10.5858 7.58579C10.9609 7.21071 11.4696 7 12 7C12.5304 7 13.0391 7.21071 13.4142 7.58579C13.7893 7.96086 14 8.46957 14 9C14 9.53043 13.7893 10.0391 13.4142 10.4142C13.0391 10.7893 12.5304 11 12 11ZM12 12C12.7956 12 13.5587 11.6839 14.1213 11.1213C14.6839 10.5587 15 9.79565 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7956 6 12 6C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.31607 7.44129 9 8.20435 9 9C9 9.79565 9.31607 10.5587 9.87868 11.1213C10.4413 11.6839 11.2044 12 12 12Z" fill={fill || "white"}/>
        </svg>

    )
}

export default GeoIcon