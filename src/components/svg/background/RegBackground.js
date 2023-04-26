import BackgroundWrapper from "./BackgroundWrapper";

export default function RegBackground() {
    return <BackgroundWrapper>
        <svg preserveAspectRatio="none" width="1824" height="984" viewBox="0 0 1824 984" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_351_835" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="1824" height="984">
                <path d="M0 952C0 969.673 14.3269 984 32 984H1792C1809.67 984 1824 969.673 1824 952V767.406C1824 750.779 1811.27 736.922 1794.7 735.52L1313.33 694.787C1297.55 693.452 1285.13 680.778 1284.1 664.977L1242.81 29.9237C1241.71 13.0922 1227.74 0 1210.87 0H32.0001C14.327 0 0 14.3269 0 32V511.953V952Z" fill="#ADD7F6"/>
            </mask>
            <g mask="url(#mask0_351_835)">
                <g filter="url(#filter0_f_351_835)">
                    <rect x="-211.985" y="421.008" width="938.789" height="742.841" rx="246.5" fill="#3B28CC"/>
                </g>
                <path d="M0 952C0 969.673 14.3269 984 32 984H1790C1807.67 984 1822 969.673 1822 952V451.689V32C1822 14.3269 1807.67 0 1790 0H1331.13H32.0001C14.3269 0 0 14.3269 0 32V524.668V952Z" fill="url(#paint0_linear_351_835)" fill-opacity="0.5"/>
            </g>
            <defs>
                <filter id="filter0_f_351_835" x="-611.985" y="21.0078" width="1738.79" height="1542.84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_351_835"/>
                </filter>
                <linearGradient id="paint0_linear_351_835" x1="-377.981" y1="756.579" x2="1023.3" y2="434.846" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3F8EFC" stop-opacity="0"/>
                    <stop offset="1" stop-color="#3F8EFC"/>
                </linearGradient>
            </defs>
        </svg>
    </BackgroundWrapper>
}