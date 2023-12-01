// toHijri.ts
import { DateTime } from 'luxon';
import { hDatesTable, hDates } from './hDates'; 

export function toHijri(gregorianDate: Date): { hy: number, hm: number, hd: number } | null {
    if (!(gregorianDate instanceof Date) || isNaN(gregorianDate.getTime())) {
        throw new Error('Invalid Gregorian date');
    }

    const inputDate = DateTime.fromJSDate(gregorianDate).startOf('day');

    const closestDate = hDatesTable.reduce((prev: Date, curr: hDates) => {
        const currDate = DateTime.local(curr.gy, curr.gm, curr.gd).startOf('day');
        if (currDate <= inputDate && currDate > DateTime.fromJSDate(prev)) {
            return currDate.toJSDate();
        }
        return prev;
    }, new Date(0));

    const correspondingHijriYear = hDatesTable.find((date: hDates) => {
        const dt = DateTime.local(date.gy, date.gm, date.gd).startOf('day');
        return dt.toJSDate().getTime() === closestDate.getTime();
    });

    if (correspondingHijriYear) {
        const differenceInDays = inputDate.diff(DateTime.fromJSDate(closestDate).startOf('day'), 'days').days;
        let hijriYear = correspondingHijriYear.hy;
        let hijriMonth = 0;
        let remainingDays = Math.round(differenceInDays);

        for (let i = 0; i < 12; i++) {
            const daysInThisMonth = (correspondingHijriYear.dpm >> i) & 1 ? 30 : 29;
            if (remainingDays < daysInThisMonth) {
                hijriMonth = i + 1;
                break;
            }
            remainingDays -= daysInThisMonth;
        }

        return { hy: hijriYear, hm: hijriMonth, hd: remainingDays + 1 };
    }

    return null;
}
