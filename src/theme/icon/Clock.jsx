export default ({ color, ...rest }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <g opacity="0.7" clipPath="url(#clip0_241_13770)">
            <path d="M9.99935 18.3334C14.6017 18.3334 18.3327 14.6025 18.3327 10.0001C18.3327 5.39771 14.6017 1.66675 9.99935 1.66675C5.39698 1.66675 1.66602 5.39771 1.66602 10.0001C1.66602 14.6025 5.39698 18.3334 9.99935 18.3334Z" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 5V10H13.75" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_241_13770">
                <rect width="20" height="20" fill={color || "white"} />
            </clipPath>
        </defs>
    </svg>
)