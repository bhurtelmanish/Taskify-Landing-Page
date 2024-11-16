
const SectionHeader = ({SectionHeaderTitle , SectionHeaderDescription}) => {
    return (
        <>
            <div className="font-semibold text-center text-gray-400 text-xl">{SectionHeaderTitle}</div>
            <header className="mb-8 w-[18rem] text-slate-800 dark:text-slate-200 m-auto font-semibold text-3xl leading-snug font-poppins desktop:flex desktop:flex-col tablet:w-[25rem] text-center">{SectionHeaderDescription}</header>
        </>
    )
}

export default SectionHeader;