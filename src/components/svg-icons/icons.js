import css from './icon.module.scss'

const IconWrapper = ({children, cssClass, isActive}) => {
    return (
        <div className={ isActive ? css[cssClass + "__active"] : css[cssClass] }>
            {children}
        </div>
    )
}

function Icon(
    SVGComponent,
    classStyle = "default-icon"
) {
    const Component = () => <IconWrapper cssClass={classStyle}><SVGComponent/></IconWrapper>
    // eslint-disable-next-line react/display-name
    Component.Active = () => <IconWrapper isActive={true} cssClass={classStyle}><SVGComponent/></IconWrapper>
    return Component;
}

class Icons {
    static ChevronDown = new Icon(
        () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    )

    static ChevronUp = new Icon(
        () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        "green"
    )

    static LogOut = new Icon(
        () => (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.4541 21H5.4541C4.92367 21 4.41496 20.7893 4.03989 20.4142C3.66482 20.0391 3.4541 19.5304 3.4541 19V5C3.4541 4.46957 3.66482 3.96086 4.03989 3.58579C4.41496 3.21071 4.92367 3 5.4541 3H9.4541"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.4541 17L21.4541 12L16.4541 7"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.4541 12H9.4541"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    )

    static Home = new Icon(
        () => (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.4541 9L12.4541 2L21.4541 9V20C21.4541 20.5304 21.2434 21.0391 20.8683 21.4142C20.4932 21.7893 19.9845 22 19.4541 22H5.4541C4.92367 22 4.41496 21.7893 4.03989 21.4142C3.66482 21.0391 3.4541 20.5304 3.4541 20V9Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.4541 9L12.4541 2L21.4541 9V20C21.4541 20.5304 21.2434 21.0391 20.8683 21.4142C20.4932 21.7893 19.9845 22 19.4541 22H5.4541C4.92367 22 4.41496 21.7893 4.03989 21.4142C3.66482 21.0391 3.4541 20.5304 3.4541 20V9Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.4541 22V12H15.4541V22"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.4541 22V12H15.4541V22"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        "green"
    )

    static LogIn = new Icon(
        () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 17L15 12L10 7"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 12H3"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    )

    static PlusCircle = new Icon(
        () => (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4541 22C17.9769 22 22.4541 17.5228 22.4541 12C22.4541 6.47715 17.9769 2 12.4541 2C6.93125 2 2.4541 6.47715 2.4541 12C2.4541 17.5228 6.93125 22 12.4541 22Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.4541 8V16"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.4541 12H16.4541"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        "green"
    )

    static Settings = new Icon(
        () => (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_157_1337)">
                    <path d="M12.4541 15C14.111 15 15.4541 13.6569 15.4541 12C15.4541 10.3431 14.111 9 12.4541 9C10.7972 9 9.4541 10.3431 9.4541 12C9.4541 13.6569 10.7972 15 12.4541 15Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.4541 15C14.111 15 15.4541 13.6569 15.4541 12C15.4541 10.3431 14.111 9 12.4541 9C10.7972 9 9.4541 10.3431 9.4541 12C9.4541 13.6569 10.7972 15 12.4541 15Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.8541 15C19.721 15.3016 19.6813 15.6362 19.7401 15.9606C19.7989 16.285 19.9536 16.5843 20.1841 16.82L20.2441 16.88C20.4301 17.0657 20.5776 17.2863 20.6782 17.5291C20.7789 17.7719 20.8307 18.0322 20.8307 18.295C20.8307 18.5578 20.7789 18.8181 20.6782 19.0609C20.5776 19.3037 20.4301 19.5243 20.2441 19.71C20.0584 19.896 19.8378 20.0435 19.595 20.1441C19.3522 20.2448 19.0919 20.2966 18.8291 20.2966C18.5663 20.2966 18.306 20.2448 18.0632 20.1441C17.8204 20.0435 17.5998 19.896 17.4141 19.71L17.3541 19.65C17.1184 19.4195 16.8191 19.2648 16.4947 19.206C16.1703 19.1472 15.8357 19.1869 15.5341 19.32C15.2383 19.4468 14.9861 19.6572 14.8084 19.9255C14.6307 20.1938 14.5354 20.5082 14.5341 20.83V21C14.5341 21.5304 14.3234 22.0391 13.9483 22.4142C13.5732 22.7893 13.0645 23 12.5341 23C12.0037 23 11.495 22.7893 11.1199 22.4142C10.7448 22.0391 10.5341 21.5304 10.5341 21V20.91C10.5264 20.579 10.4192 20.258 10.2266 19.9887C10.034 19.7194 9.76484 19.5143 9.4541 19.4C9.15249 19.2669 8.81791 19.2272 8.49351 19.286C8.16912 19.3448 7.86978 19.4995 7.6341 19.73L7.5741 19.79C7.38836 19.976 7.16778 20.1235 6.92498 20.2241C6.68219 20.3248 6.42193 20.3766 6.1591 20.3766C5.89627 20.3766 5.63602 20.3248 5.39322 20.2241C5.15042 20.1235 4.92985 19.976 4.7441 19.79C4.55815 19.6043 4.41063 19.3837 4.30998 19.1409C4.20933 18.8981 4.15753 18.6378 4.15753 18.375C4.15753 18.1122 4.20933 17.8519 4.30998 17.6091C4.41063 17.3663 4.55815 17.1457 4.7441 16.96L4.8041 16.9C5.03464 16.6643 5.18929 16.365 5.24811 16.0406C5.30692 15.7162 5.26722 15.3816 5.1341 15.08C5.00734 14.7842 4.79686 14.532 4.52857 14.3543C4.26028 14.1766 3.94589 14.0813 3.6241 14.08H3.4541C2.92367 14.08 2.41496 13.8693 2.03989 13.4942C1.66482 13.1191 1.4541 12.6104 1.4541 12.08C1.4541 11.5496 1.66482 11.0409 2.03989 10.6658C2.41496 10.2907 2.92367 10.08 3.4541 10.08H3.5441C3.8751 10.0723 4.19611 9.96512 4.4654 9.77251C4.7347 9.5799 4.93982 9.31074 5.0541 9C5.18722 8.69838 5.22692 8.36381 5.16811 8.03941C5.10929 7.71502 4.95464 7.41568 4.7241 7.18L4.6641 7.12C4.47815 6.93425 4.33063 6.71368 4.22998 6.47088C4.12933 6.22808 4.07753 5.96783 4.07753 5.705C4.07753 5.44217 4.12933 5.18192 4.22998 4.93912C4.33063 4.69632 4.47815 4.47575 4.6641 4.29C4.84985 4.10405 5.07042 3.95653 5.31322 3.85588C5.55602 3.75523 5.81627 3.70343 6.0791 3.70343C6.34193 3.70343 6.60219 3.75523 6.84498 3.85588C7.08778 3.95653 7.30836 4.10405 7.4941 4.29L7.5541 4.35C7.78978 4.58054 8.08912 4.73519 8.41351 4.794C8.73791 4.85282 9.07249 4.81312 9.3741 4.68H9.4541C9.74987 4.55324 10.0021 4.34276 10.1798 4.07447C10.3575 3.80618 10.4528 3.49179 10.4541 3.17V3C10.4541 2.46957 10.6648 1.96086 11.0399 1.58579C11.415 1.21071 11.9237 1 12.4541 1C12.9845 1 13.4932 1.21071 13.8683 1.58579C14.2434 1.96086 14.4541 2.46957 14.4541 3V3.09C14.4554 3.41179 14.5507 3.72618 14.7284 3.99447C14.9061 4.26276 15.1583 4.47324 15.4541 4.6C15.7557 4.73312 16.0903 4.77282 16.4147 4.714C16.7391 4.65519 17.0384 4.50054 17.2741 4.27L17.3341 4.21C17.5198 4.02405 17.7404 3.87653 17.9832 3.77588C18.226 3.67523 18.4863 3.62343 18.7491 3.62343C19.0119 3.62343 19.2722 3.67523 19.515 3.77588C19.7578 3.87653 19.9784 4.02405 20.1641 4.21C20.3501 4.39575 20.4976 4.61632 20.5982 4.85912C20.6989 5.10192 20.7507 5.36217 20.7507 5.625C20.7507 5.88783 20.6989 6.14808 20.5982 6.39088C20.4976 6.63368 20.3501 6.85425 20.1641 7.04L20.1041 7.1C19.8736 7.33568 19.7189 7.63502 19.6601 7.95941C19.6013 8.28381 19.641 8.61838 19.7741 8.92V9C19.9009 9.29577 20.1113 9.54802 20.3796 9.72569C20.6479 9.90337 20.9623 9.99872 21.2841 10H21.4541C21.9845 10 22.4932 10.2107 22.8683 10.5858C23.2434 10.9609 23.4541 11.4696 23.4541 12C23.4541 12.5304 23.2434 13.0391 22.8683 13.4142C22.4932 13.7893 21.9845 14 21.4541 14H21.3641C21.0423 14.0013 20.7279 14.0966 20.4596 14.2743C20.1913 14.452 19.9809 14.7042 19.8541 15Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.8541 15C19.721 15.3016 19.6813 15.6362 19.7401 15.9606C19.7989 16.285 19.9536 16.5843 20.1841 16.82L20.2441 16.88C20.4301 17.0657 20.5776 17.2863 20.6782 17.5291C20.7789 17.7719 20.8307 18.0322 20.8307 18.295C20.8307 18.5578 20.7789 18.8181 20.6782 19.0609C20.5776 19.3037 20.4301 19.5243 20.2441 19.71C20.0584 19.896 19.8378 20.0435 19.595 20.1441C19.3522 20.2448 19.0919 20.2966 18.8291 20.2966C18.5663 20.2966 18.306 20.2448 18.0632 20.1441C17.8204 20.0435 17.5998 19.896 17.4141 19.71L17.3541 19.65C17.1184 19.4195 16.8191 19.2648 16.4947 19.206C16.1703 19.1472 15.8357 19.1869 15.5341 19.32C15.2383 19.4468 14.9861 19.6572 14.8084 19.9255C14.6307 20.1938 14.5354 20.5082 14.5341 20.83V21C14.5341 21.5304 14.3234 22.0391 13.9483 22.4142C13.5732 22.7893 13.0645 23 12.5341 23C12.0037 23 11.495 22.7893 11.1199 22.4142C10.7448 22.0391 10.5341 21.5304 10.5341 21V20.91C10.5264 20.579 10.4192 20.258 10.2266 19.9887C10.034 19.7194 9.76484 19.5143 9.4541 19.4C9.15249 19.2669 8.81791 19.2272 8.49351 19.286C8.16912 19.3448 7.86978 19.4995 7.6341 19.73L7.5741 19.79C7.38836 19.976 7.16778 20.1235 6.92498 20.2241C6.68219 20.3248 6.42193 20.3766 6.1591 20.3766C5.89627 20.3766 5.63602 20.3248 5.39322 20.2241C5.15042 20.1235 4.92985 19.976 4.7441 19.79C4.55815 19.6043 4.41063 19.3837 4.30998 19.1409C4.20933 18.8981 4.15753 18.6378 4.15753 18.375C4.15753 18.1122 4.20933 17.8519 4.30998 17.6091C4.41063 17.3663 4.55815 17.1457 4.7441 16.96L4.8041 16.9C5.03464 16.6643 5.18929 16.365 5.24811 16.0406C5.30692 15.7162 5.26722 15.3816 5.1341 15.08C5.00734 14.7842 4.79686 14.532 4.52857 14.3543C4.26028 14.1766 3.94589 14.0813 3.6241 14.08H3.4541C2.92367 14.08 2.41496 13.8693 2.03989 13.4942C1.66482 13.1191 1.4541 12.6104 1.4541 12.08C1.4541 11.5496 1.66482 11.0409 2.03989 10.6658C2.41496 10.2907 2.92367 10.08 3.4541 10.08H3.5441C3.8751 10.0723 4.19611 9.96512 4.4654 9.77251C4.7347 9.5799 4.93982 9.31074 5.0541 9C5.18722 8.69838 5.22692 8.36381 5.16811 8.03941C5.10929 7.71502 4.95464 7.41568 4.7241 7.18L4.6641 7.12C4.47815 6.93425 4.33063 6.71368 4.22998 6.47088C4.12933 6.22808 4.07753 5.96783 4.07753 5.705C4.07753 5.44217 4.12933 5.18192 4.22998 4.93912C4.33063 4.69632 4.47815 4.47575 4.6641 4.29C4.84985 4.10405 5.07042 3.95653 5.31322 3.85588C5.55602 3.75523 5.81627 3.70343 6.0791 3.70343C6.34193 3.70343 6.60219 3.75523 6.84498 3.85588C7.08778 3.95653 7.30836 4.10405 7.4941 4.29L7.5541 4.35C7.78978 4.58054 8.08912 4.73519 8.41351 4.794C8.73791 4.85282 9.07249 4.81312 9.3741 4.68H9.4541C9.74987 4.55324 10.0021 4.34276 10.1798 4.07447C10.3575 3.80618 10.4528 3.49179 10.4541 3.17V3C10.4541 2.46957 10.6648 1.96086 11.0399 1.58579C11.415 1.21071 11.9237 1 12.4541 1C12.9845 1 13.4932 1.21071 13.8683 1.58579C14.2434 1.96086 14.4541 2.46957 14.4541 3V3.09C14.4554 3.41179 14.5507 3.72618 14.7284 3.99447C14.9061 4.26276 15.1583 4.47324 15.4541 4.6C15.7557 4.73312 16.0903 4.77282 16.4147 4.714C16.7391 4.65519 17.0384 4.50054 17.2741 4.27L17.3341 4.21C17.5198 4.02405 17.7404 3.87653 17.9832 3.77588C18.226 3.67523 18.4863 3.62343 18.7491 3.62343C19.0119 3.62343 19.2722 3.67523 19.515 3.77588C19.7578 3.87653 19.9784 4.02405 20.1641 4.21C20.3501 4.39575 20.4976 4.61632 20.5982 4.85912C20.6989 5.10192 20.7507 5.36217 20.7507 5.625C20.7507 5.88783 20.6989 6.14808 20.5982 6.39088C20.4976 6.63368 20.3501 6.85425 20.1641 7.04L20.1041 7.1C19.8736 7.33568 19.7189 7.63502 19.6601 7.95941C19.6013 8.28381 19.641 8.61838 19.7741 8.92V9C19.9009 9.29577 20.1113 9.54802 20.3796 9.72569C20.6479 9.90337 20.9623 9.99872 21.2841 10H21.4541C21.9845 10 22.4932 10.2107 22.8683 10.5858C23.2434 10.9609 23.4541 11.4696 23.4541 12C23.4541 12.5304 23.2434 13.0391 22.8683 13.4142C22.4932 13.7893 21.9845 14 21.4541 14H21.3641C21.0423 14.0013 20.7279 14.0966 20.4596 14.2743C20.1913 14.452 19.9809 14.7042 19.8541 15Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_157_1337">
                        <rect width="24" height="24" fill="white" transform="translate(0.454102)"/>
                    </clipPath>
                </defs>
            </svg>
        ),
        "green"
    )

    static User = new Icon(
        () => (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.4541 21V19C20.4541 17.9391 20.0327 16.9217 19.2825 16.1716C18.5324 15.4214 17.515 15 16.4541 15H8.4541C7.39324 15 6.37582 15.4214 5.62567 16.1716C4.87553 16.9217 4.4541 17.9391 4.4541 19V21"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.4541 21V19C20.4541 17.9391 20.0327 16.9217 19.2825 16.1716C18.5324 15.4214 17.515 15 16.4541 15H8.4541C7.39324 15 6.37582 15.4214 5.62567 16.1716C4.87553 16.9217 4.4541 17.9391 4.4541 19V21"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.4541 11C14.6632 11 16.4541 9.20914 16.4541 7C16.4541 4.79086 14.6632 3 12.4541 3C10.245 3 8.4541 4.79086 8.4541 7C8.4541 9.20914 10.245 11 12.4541 11Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.4541 11C14.6632 11 16.4541 9.20914 16.4541 7C16.4541 4.79086 14.6632 3 12.4541 3C10.245 3 8.4541 4.79086 8.4541 7C8.4541 9.20914 10.245 11 12.4541 11Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        "green"
    )

    static Search = new Icon(
        () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        "alfa-white"
    )

    static Save = new Icon(
        () => (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4541 21H5.4541C4.92367 21 4.41496 20.7893 4.03989 20.4142C3.66482 20.0391 3.4541 19.5304 3.4541 19V5C3.4541 4.46957 3.66482 3.96086 4.03989 3.58579C4.41496 3.21071 4.92367 3 5.4541 3H16.4541L21.4541 8V19C21.4541 19.5304 21.2434 20.0391 20.8683 20.4142C20.4932 20.7893 19.9845 21 19.4541 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.4541 21V13H7.4541V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.4541 3V8H15.4541" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        "green"
    )

    static Trash = new Icon(
        () => (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.4541 6H5.4541H21.4541" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.4541 6V4C8.4541 3.46957 8.66482 2.96086 9.03989 2.58579C9.41496 2.21071 9.92367 2 10.4541 2H14.4541C14.9845 2 15.4932 2.21071 15.8683 2.58579C16.2434 2.96086 16.4541 3.46957 16.4541 4V6M19.4541 6V20C19.4541 20.5304 19.2434 21.0391 18.8683 21.4142C18.4932 21.7893 17.9845 22 17.4541 22H7.4541C6.92367 22 6.41496 21.7893 6.03989 21.4142C5.66482 21.0391 5.4541 20.5304 5.4541 20V6H19.4541Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.4541 11V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.4541 11V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        "red"
    )

    static Image = new Icon(
        () => (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4541 3H5.4541C4.34953 3 3.4541 3.89543 3.4541 5V19C3.4541 20.1046 4.34953 21 5.4541 21H19.4541C20.5587 21 21.4541 20.1046 21.4541 19V5C21.4541 3.89543 20.5587 3 19.4541 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.9541 10C9.78253 10 10.4541 9.32843 10.4541 8.5C10.4541 7.67157 9.78253 7 8.9541 7C8.12567 7 7.4541 7.67157 7.4541 8.5C7.4541 9.32843 8.12567 10 8.9541 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.4541 15L16.4541 10L5.4541 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    )

    static Link = new Icon(
        () => (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4541 13C10.8836 13.5741 11.4315 14.0492 12.0607 14.3929C12.6898 14.7367 13.3856 14.9411 14.1008 14.9923C14.8159 15.0435 15.5337 14.9404 16.2054 14.6898C16.8772 14.4392 17.4872 14.0471 17.9941 13.54L20.9941 10.54C21.9049 9.59699 22.4089 8.33397 22.3975 7.02299C22.3861 5.71201 21.8602 4.45794 20.9332 3.5309C20.0062 2.60386 18.7521 2.07802 17.4411 2.06663C16.1301 2.05523 14.8671 2.55921 13.9241 3.47L12.2041 5.18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.4541 11C14.0246 10.4259 13.4767 9.95081 12.8475 9.60706C12.2183 9.2633 11.5225 9.05888 10.8074 9.00766C10.0923 8.95645 9.37447 9.05963 8.70271 9.31021C8.03095 9.5608 7.42094 9.95293 6.91406 10.46L3.91406 13.46C3.00327 14.403 2.49929 15.666 2.51069 16.977C2.52208 18.288 3.04792 19.542 3.97496 20.4691C4.902 21.3961 6.15607 21.922 7.46705 21.9334C8.77803 21.9448 10.041 21.4408 10.9841 20.53L12.6941 18.82" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    )

    static Send = new Icon(
        () => (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.4541 2L11.4541 13" stroke="white" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.4541 2L15.4541 22L11.4541 13L2.4541 9L22.4541 2Z" stroke="white" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    )

    static Edit = new Icon(
        () => (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_157_1498)">
                    <path d="M13.3333 9.77335V13.3334C13.3333 13.687 13.1928 14.0261 12.9427 14.2762C12.6927 14.5262 12.3535 14.6667 11.9999 14.6667H2.66659C2.31296 14.6667 1.97382 14.5262 1.72378 14.2762C1.47373 14.0261 1.33325 13.687 1.33325 13.3334V4.00002C1.33325 3.6464 1.47373 3.30726 1.72378 3.05721C1.97382 2.80716 2.31296 2.66669 2.66659 2.66669H6.22659" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.9999 1.33331L14.6666 3.99998L7.99992 10.6666H5.33325V7.99998L11.9999 1.33331Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_157_1498">
                        <rect width="16" height="16" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        )
    )

    static Close = new Icon(
        () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 9L9 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    )
}

export default Icons;
export const { Home, ChevronDown, ChevronUp, LogIn, LogOut, PlusCircle, Search, User, Settings, Save, Image, Link, Trash, Send, Edit, Close } = Icons;