import Icon from "../icon/Icon"

export default ({className="", ...rest}) => {
    return (
        <button type="button" className={`flex items-center bg-black py-3 px-4 rounded-[12px] cursor-pointer ${className}`} {...rest}>
            <p className="text-[14px] leading-[16.41px] tracking-[-1%] text-white">Create</p>
            <Icon name="angle-down" className="ml-1" />
        </button>
    )
}