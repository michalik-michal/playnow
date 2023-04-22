'use client';
import { useEffect, useState } from "react";
import getDates from "@/pages/utilities/DatesProvider";
import DateCell from "./cells/DateCell";

const DateStack = () => {

    const [dates, setDates] = useState<string[]>([]);
    useEffect(() => {
        setDates(getDates)
    }, []);

    return (
        <div className="flex flex-row">
            {dates.map((date) => (
                <DateCell key={date} day={date} weekDay={date}/>
            ))}
        </div>
    )
}

export default DateStack;