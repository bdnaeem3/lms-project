import Icon from "../../theme/icon/Icon"
import UserImg from "../../assets/user.png"

export default () => {
    return (
        <div className="flex items-center justify-between shadow-section border border-[#00000014] bg-white p-[15px] rounded-[16px] mt-5">
            <div className="flex items-center">
                <span className="w-[7px] bg-[#ffb41d] h-[91px] rounded-[24px] mr-[18px]"></span>
                <div>
                    <div className="flex items-center">
                        <p className="text-[14px] leading-[16.41px]">TUESDAY, JAN 3 AT 2:40 PM</p>
                        <span className="w-[30px] h-[2px] bg-black mx-[10px]"></span>
                        <p className="text-[14px] leading-[16.41px]">TUESDAY, JAN 3 AT 5:40 PM</p>
                        <button type="button" className="flex items-center ml-[10px] bg-[#a1b5d81a] rounded-[40px] border border-[#0000000d] p-[5px] cursor-pointer">
                            <span className="ml-[9px] text-[12px] leading-[14.06px] tracking-[-0.01em]">Rescheduled by Mentor</span>
                            <Icon name="info" className="ml-[5px]" />
                        </button>
                    </div>
                    <h3 className="text-[18px] leading-[21.09px] font-[500] mt-[18px]">Name Goes here...consec adipiscing elit.</h3>
                    <div className="flex items-center mt-[18px]">
                        <img src={UserImg} alt="User Image" className="mr-2" />
                        <p className="text-[14px] leading-[16.41px]">John Doe</p>
                    </div>
                </div>
            </div>

            <button
                type="button"
                className="flex items-center justify-center border border-[#0000001f] w-9 h-9 rounded-[10px] cursor-pointer">
                <Icon name="ellipsis" />
            </button>
        </div>
    )
}