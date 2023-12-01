// formatHijriDate.ts
import { DateTime } from 'luxon';
import { hmLong, hmMedium, hmShort } from './hMonths';
import { hwLong, hwShort, hwNumeric } from './hWeekdays';

/**
 * Formats a Hijri date according to the given format string
 * @param {Date} hijriDate - The Hijri date to format
 * @param {string} format - The format string
 * @returns {string} - The formatted date string
 */
export function formatHijriDate(hijriDate: { hy: number; hm: number; hd: number }, format: string): string {
    // Replace each pattern in the format string with the corresponding value
    return format.replace(/\biYYYY\b|\biYY\b|\biMM\b|\biM\b|\biMMM\b|\biMMMM\b|\biDD\b|\biD\b|\biE\b|\biEEE\b|\biEEEE\b|\b[HHhmsaiozZ]+\b/g, (match) => {
        switch (match) {
            case 'iYYYY':
                return String(hijriDate.hy).padStart(4, '0');
            case 'iYY':
                return String(hijriDate.hy % 100).padStart(2, '0');
            case 'iMM':
                return String(hijriDate.hm).padStart(2, '0');
            case 'iM':
                return String(hijriDate.hm);
            case 'iMMM':
                return hmMedium[hijriDate.hm - 1];
            case 'iMMMM':
                return hmLong[hijriDate.hm - 1];
            case 'iDD':
                return String(hijriDate.hd).padStart(2, '0');
            case 'iD':
                return String(hijriDate.hd);
            case 'iE':
                return String(hwNumeric[DateTime.fromObject({ year: hijriDate.hy, month: hijriDate.hm, day: hijriDate.hd }).weekday - 1]);
            case 'iEEE':
                return hwShort[DateTime.fromObject({ year: hijriDate.hy, month: hijriDate.hm, day: hijriDate.hd }).weekday - 1];
            case 'iEEEE':
                return hwLong[DateTime.fromObject({ year: hijriDate.hy, month: hijriDate.hm, day: hijriDate.hd }).weekday - 1];                
    
            // The following patterns are the same for both Gregorian and Hijri
            case 'HH':
            case 'H':
            case 'hh':
            case 'h':
            case 'mm':
            case 'm':
            case 'ss':
            case 's':
            case 'a':
            case 'iooo':
            case 'ioooo':
            case 'z':
            case 'zz':
            case 'Z':
                // Use Luxon's DateTime formatting for these patterns
                const gregorianDate = DateTime.fromObject({ year: hijriDate.hy, month: hijriDate.hm, day: hijriDate.hd });
                return gregorianDate.toFormat(match);
            default:
                return match;
        }
    });
}
