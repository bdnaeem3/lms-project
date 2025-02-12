import Icon from "../icon/Icon"

export default () => {
    return (
        <button type="button" className="flex items-center w-full justify-between border border-[#ffffff1f] py-3 px-[15px] rounded-[12px] cursor-pointer">
            <p className="text-base text-white leading-[18.75px] tracking-[-1%]">
                Logout
            </p>

            <Icon name='logout' />
        </button>
    )
}