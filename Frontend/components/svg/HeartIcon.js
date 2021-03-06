
const HeartIcon = ({fill, ...props}) => {
    return(
        <svg {...props} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0002 22.75C-5.68749 9.57844 7.24627 -0.701924 12.7857 4.73596C12.8588 4.80746 12.9307 4.88156 13.0002 4.95826C13.0689 4.88163 13.1405 4.8079 13.2147 4.73726C18.7528 -0.704524 31.6878 9.57714 13.0002 22.75Z" stroke={fill || "#1AA5AA"}/>
        </svg>
    )
}

export default HeartIcon