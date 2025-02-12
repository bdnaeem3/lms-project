import { useState } from "react"

export default () => {
    const [leftButtonSelected, setLeftButtonSelected] = useState(true)

    const onClickHandler = () => {
        setLeftButtonSelected(prevStatus=>!prevStatus)
    }

    return (
        <button
            type="button"
            className="flex gap-2.5 bg-[#001b4714] rounded-[12px] p-1 text-[14px] leading-[16.41px] tracking-[-0.01em] cursor-pointer"
            onClick={onClickHandler}
        >
            <span className={`${leftButtonSelected ? 'bg-white' : ''} py-3 px-5 rounded-[12px]`}>
                Current
            </span>
            <span className={`${!leftButtonSelected ? 'bg-white' : ''} py-3 px-5 rounded-[12px]`}>
                Past
            </span>
        </button>
    )
}