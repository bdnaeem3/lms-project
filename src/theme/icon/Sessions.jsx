export default ({ color, ...rest }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <path d="M10.8426 2.43311L15.7592 4.61644C17.1759 5.24144 17.1759 6.27477 15.7592 6.89977L10.8426 9.08311C10.2842 9.33311 9.36758 9.33311 8.80924 9.08311L3.89258 6.89977C2.47591 6.27477 2.47591 5.24144 3.89258 4.61644L8.80924 2.43311C9.36758 2.18311 10.2842 2.18311 10.8426 2.43311Z" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 9.1665C2.5 9.8665 3.025 10.6748 3.66667 10.9582L9.325 13.4748C9.75833 13.6665 10.25 13.6665 10.675 13.4748L16.3333 10.9582C16.975 10.6748 17.5 9.8665 17.5 9.1665" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 13.3335C2.5 14.1085 2.95833 14.8085 3.66667 15.1252L9.325 17.6418C9.75833 17.8335 10.25 17.8335 10.675 17.6418L16.3333 15.1252C17.0417 14.8085 17.5 14.1085 17.5 13.3335" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

)