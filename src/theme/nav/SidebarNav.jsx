import Icon from "../icon/Icon"

export default ({ name, badgeCount, icon = "dashboard", url = "#" }) => (
    <li>
        <a href={url} className="flex text-center justify-between py-3 px-[15px] hover:bg-[#294BAA] rounded-[12px]">
            <div className="flex items-center">
                <Icon name={icon} />
                <p className="text-base leading-[18.75px] tracking-[-1%] align-middle text-white pl-3">
                    {name}
                </p>
            </div>
            {
                badgeCount &&
                <span className="bg-[#FF335A] rounded-[12px] text-center text-[12px] text-white py-[3px] px-1 min-w-[24px]">
                    {badgeCount}
                </span>
            }
        </a>
    </li>
)