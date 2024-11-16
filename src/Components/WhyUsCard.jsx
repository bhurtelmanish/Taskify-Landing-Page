
const WhyUsCard = ({whyUsCardIcon , whyUsCardTitle , whyUsCardDescription}) => {
    return (
        <div className="flex flex-col gap-2 dark:bg-slate-900 bg-gray-100 p-4 rounded-xl cursor-pointer w-full md:w-[19rem] laptop:w-[19rem]">
            <div className="flex items-center gap-2">
                {whyUsCardIcon}
                <span className="font-semibold text-xl ">{whyUsCardTitle}</span>
            </div>

            <div className="text-[var(--grayColor2)]">
              {whyUsCardDescription}
            </div>
        </div>
    )
}

export default WhyUsCard;