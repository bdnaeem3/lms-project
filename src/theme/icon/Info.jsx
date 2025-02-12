export default ({ bg, color, ...rest }) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <g clipPath="url(#clip0_241_14045)">
            <path d="M6.99935 12.8334C10.221 12.8334 12.8327 10.2217 12.8327 7.00008C12.8327 3.77842 10.221 1.16675 6.99935 1.16675C3.77769 1.16675 1.16602 3.77842 1.16602 7.00008C1.16602 10.2217 3.77769 12.8334 6.99935 12.8334Z" fill={bg || "black"} stroke={bg || "black"} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 9.33333V7" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 4.66675H7.00583" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_241_14045">
                <rect width="14" height="14" fill={color || "white"} />
            </clipPath>
        </defs>
    </svg>
)