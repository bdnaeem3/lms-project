export default ({ color, ...rest }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <path d="M16.1667 12.4165C16.8333 13.6665 17.5 14.1665 17.5 14.1665H2.5C2.5 14.1665 5 12.4998 5 6.6665C5 3.9165 7.25 1.6665 10 1.6665C10.5833 1.6665 11.0833 1.74984 11.5833 1.9165" stroke={color || "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.58398 17.5C8.72347 17.7537 8.92852 17.9653 9.17773 18.1127C9.42693 18.26 9.71113 18.3378 10.0007 18.3378C10.2902 18.3378 10.5744 18.26 10.8236 18.1127C11.0728 17.9653 11.2778 17.7537 11.4173 17.5" stroke={color || "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 9.1665C16.3807 9.1665 17.5 8.04722 17.5 6.6665C17.5 5.28579 16.3807 4.1665 15 4.1665C13.6193 4.1665 12.5 5.28579 12.5 6.6665C12.5 8.04722 13.6193 9.1665 15 9.1665Z" fill="#FF335A" stroke="#FF335A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)