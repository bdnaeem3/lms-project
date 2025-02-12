import Button from "../theme/button/Button"

export default () => {
    return (
        <div className="flex items-center justify-between py-5 px-[25px] bg-white shadow-section border border-[#00000014] rounded-[16px]">
            <h3 className="text-[22px] leading-[27.1px] tracking-[-2%]">
                Your total session Completed: 12
            </h3>
            <Button type="primary" className="pl-5" />
        </div>
    )
}