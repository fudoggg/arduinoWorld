import styles from './Like.module.scss'

import React from 'react'

function Like({cart, onClick, active}) {
  const rootClasses = [styles.like_wrapper, active && styles.active, cart && styles.cart ]

  return (
    <div className={rootClasses.join(' ')}  onClick={e => onClick(e)}>
      {
        cart
        ?
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3.6C2 3.44087 2.06322 3.28826 2.17574 3.17574C2.28827 3.06321 2.44088 3 2.60002 3H4.40007C4.53392 3.00004 4.6639 3.04482 4.76936 3.12723C4.87482 3.20964 4.9497 3.32494 4.98209 3.4548L5.46811 5.4H19.4005C19.4886 5.40008 19.5756 5.41956 19.6554 5.45706C19.7351 5.49456 19.8056 5.54915 19.8618 5.61696C19.9181 5.68478 19.9587 5.76414 19.9808 5.84942C20.0029 5.9347 20.006 6.0238 19.9898 6.1104L18.1897 15.7104C18.164 15.8479 18.091 15.9721 17.9834 16.0615C17.8758 16.1509 17.7404 16.1999 17.6005 16.2H6.80015C6.66026 16.1999 6.52482 16.1509 6.41723 16.0615C6.30964 15.9721 6.23667 15.8479 6.21093 15.7104L4.41207 6.1284L3.93206 4.2H2.60002C2.44088 4.2 2.28827 4.13679 2.17574 4.02426C2.06322 3.91174 2 3.75913 2 3.6ZM5.72252 6.6L7.29816 15H17.1025L18.6781 6.6H5.72252ZM8.00019 16.2C7.36365 16.2 6.75318 16.4529 6.30308 16.9029C5.85298 17.353 5.60011 17.9635 5.60011 18.6C5.60011 19.2365 5.85298 19.847 6.30308 20.2971C6.75318 20.7471 7.36365 21 8.00019 21C8.63672 21 9.24719 20.7471 9.69729 20.2971C10.1474 19.847 10.4003 19.2365 10.4003 18.6C10.4003 17.9635 10.1474 17.353 9.69729 16.9029C9.24719 16.4529 8.63672 16.2 8.00019 16.2ZM16.4004 16.2C15.7639 16.2 15.1534 16.4529 14.7033 16.9029C14.2532 17.353 14.0004 17.9635 14.0004 18.6C14.0004 19.2365 14.2532 19.847 14.7033 20.2971C15.1534 20.7471 15.7639 21 16.4004 21C17.037 21 17.6475 20.7471 18.0976 20.2971C18.5477 19.847 18.8005 19.2365 18.8005 18.6C18.8005 17.9635 18.5477 17.353 18.0976 16.9029C17.6475 16.4529 17.037 16.2 16.4004 16.2ZM8.00019 17.4C8.31846 17.4 8.62369 17.5264 8.84874 17.7515C9.07379 17.9765 9.20022 18.2817 9.20022 18.6C9.20022 18.9183 9.07379 19.2235 8.84874 19.4485C8.62369 19.6736 8.31846 19.8 8.00019 19.8C7.68192 19.8 7.37668 19.6736 7.15163 19.4485C6.92658 19.2235 6.80015 18.9183 6.80015 18.6C6.80015 18.2817 6.92658 17.9765 7.15163 17.7515C7.37668 17.5264 7.68192 17.4 8.00019 17.4ZM16.4004 17.4C16.7187 17.4 17.0239 17.5264 17.249 17.7515C17.4741 17.9765 17.6005 18.2817 17.6005 18.6C17.6005 18.9183 17.4741 19.2235 17.249 19.4485C17.0239 19.6736 16.7187 19.8 16.4004 19.8C16.0822 19.8 15.7769 19.6736 15.5519 19.4485C15.3268 19.2235 15.2004 18.9183 15.2004 18.6C15.2004 18.2817 15.3268 17.9765 15.5519 17.7515C15.7769 17.5264 16.0822 17.4 16.4004 17.4Z" fill="#1AA5AA"/>
        </svg>
        :
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0002 22.75C-5.68749 9.57844 7.24627 -0.701924 12.7857 4.73596C12.8588 4.80746 12.9307 4.88156 13.0002 4.95826C13.0689 4.88163 13.1405 4.8079 13.2147 4.73726C18.7528 -0.704524 31.6878 9.57714 13.0002 22.75Z" fill="#1AA5AA"/>
        </svg>
      } 
    </div>
  )
}

export default Like