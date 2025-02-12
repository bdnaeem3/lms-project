import Icon from "../icon/Icon";

export default ({ icon, children, ...rest }) => {
    return (
        <button type="button" className="flex items-center py-3 px-[15px] bg-[#ffffff1a] w-full rounded-[12px] cursor-pointer" {...rest}>
            {
                icon &&
                <Icon name={icon} className="opacity-70 mr-3" />
            }

            <p className="text-base leading-[18.75px] tracking-[-1%] text-white opacity-70">
                {children}
            </p>
        </button>
    )
}