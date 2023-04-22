'use client'

interface DateCellProps {
    day: string;
    weekDay: string;
}

const DateCell: React.FC<DateCellProps> = ({
    day,
    weekDay
}) => {

    return(
        <div className=" border-sky-400 border-2 w-[80px] h-[80px] justify-center flex flex-col items-center">
            <h3 className=" text-gray-500"> { day } </h3>
            <h2 className=" font-bold"> { weekDay } </h2>
        </div>
    )
}

export default DateCell;