// toGregorian.ts
import { DateTime } from 'luxon';
import { hDatesTable, hDates } from './hDates';
import { isValidHijriDate } from './utils';

export function toGregorian(hy: number, hm: number, hd: number): Date | null {
    // Validate the input Hijri date
    if (!isValidHijriDate(hy, hm, hd)) {
        throw new Error('Invalid Hijri date');
    }

    const hijriYearRecord = hDatesTable.find(record => record.hy === hy);

    if (hijriYearRecord) {
        let totalDaysTillMonthStart = 0;
        for (let i = 0; i < hm - 1; i++) {
            totalDaysTillMonthStart += (hijriYearRecord.dpm >> i) & 1 ? 30 : 29;
        }

        const totalDays = totalDaysTillMonthStart + hd - 1;
        const startDate = DateTime.local(hijriYearRecord.gy, hijriYearRecord.gm, hijriYearRecord.gd);
        const gregorianDate = startDate.plus({ days: totalDays });

        return gregorianDate.toJSDate();
    }

    return null;
}
