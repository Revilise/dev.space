import BackgroundWrapper from "@/components/svg/background/BackgroundWrapper";

export default function PrimaryBackground() {
    return (
        <BackgroundWrapper>
            <svg preserveAspectRatio="none" viewBox="0 0 1824 985" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_336_359" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="1824" height="985">
                    <path d="M0 32C0 14.3269 14.3269 0 32 0H1563.25C1580.92 0 1595.25 14.3269 1595.25 32V75.5C1595.25 93.1731 1609.58 107.5 1627.25 107.5H1792C1809.67 107.5 1824 121.827 1824 139.5V953C1824 970.673 1809.67 985 1792 985H32C14.3269 985 0 970.673 0 953V32Z" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_336_359)">
                    <g filter="url(#filter0_f_336_359)">
                        <rect x="-169.12" y="434.801" width="827.597" height="733.932" rx="246.5" fill="#3B28CC"/>
                    </g>
                    <path d="M-48.4999 1027.87H1872V-47.8541H-48.4999V1027.87Z" fill="url(#paint0_linear_336_359)" fill-opacity="0.5"/>
                </g>
                <defs>
                    <filter id="filter0_f_336_359" x="-569.12" y="34.801" width="1627.6" height="1533.93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_336_359"/>
                    </filter>
                    <linearGradient id="paint0_linear_336_359" x1="-325.283" y1="767.987" x2="959.022" y2="499.668" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3F8EFC" stop-opacity="0"/>
                        <stop offset="1" stop-color="#3F8EFC"/>
                    </linearGradient>
                </defs>
            </svg>
        </BackgroundWrapper>
    )
}