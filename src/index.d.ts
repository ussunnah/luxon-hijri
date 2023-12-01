// Define interfaces and types if necessary
interface HijriDate {
    hy: number; // Hijri Year
    hm: number; // Hijri Month
    hd: number; // Hijri Day
}

// Export functions with their signatures
export function toGregorian(hy: number, hm: number, hd: number): Date | null;
export function toHijri(gregorianDate: Date): HijriDate | null;
export function formatHijriDate(hijriDate: HijriDate, format: string): string;
