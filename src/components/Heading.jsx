import Button from "../theme/button/Button"

export default () => {
    return (
        <div className="flex items-center justify-between mt-[50px]">
            <h3 className="text-[22px] leading-[27.1px] tracking-[-0.02em] font-[500]">
                My Sessions
            </h3>
            <Button type="group" />
        </div>
    )
}