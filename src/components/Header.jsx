import Icon from "../theme/icon/Icon"

export default () => {
    return (
        <div className="flex justify-between items-center py-[15px] px-[25px]">
            <h3 className="font-bold text-[24px] leading-[29.57px] tracking-[-2%] text-black">Sessions Management</h3>
            <div className="flex items-center">
                <Icon name="notification" className="mr-6" />
                <div className="flex items-center">
                    {/* <img src="" alt="User Image"/> */}
                    <span className="w-[30px] h-[30px] rounded-[50%] bg-[#D9D9D9] block mr-2"></span>
                    <div>
                        <p className="text-[14px] leading-[16.41px] tracking-[-1%]">John Doe</p>
                        <small className="text-[#8C8C8C] text-[12px] leading-[14.06px] tracking-[-1%]">Counselors</small>
                    </div>
                </div>
            </div>
        </div>
    )
}