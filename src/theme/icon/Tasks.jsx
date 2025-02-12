export default ({ color, ...rest }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <path d="M9.16602 16.25H17.4993" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.16602 10.4167H17.4993" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.16602 4.58325H17.4993" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 4.58341L3.33333 5.41675L5.83333 2.91675" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 10.4167L3.33333 11.25L5.83333 8.75" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 16.2499L3.33333 17.0833L5.83333 14.5833" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

)