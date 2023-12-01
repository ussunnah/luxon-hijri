# Luxon-Hijri

Luxon-Hijri is a comprehensive Hijri date conversion and formatting library based on the Umm al-Qura calendar system, leveraging the power of Luxon for robust date manipulations.  Please note this is a first draft but should work well.  It was created quickly for a need I had within my own app but should be ready for contributions and more.  I will add localization and more if requested or if someone contributes.

## Features
- Convert between Hijri and Gregorian dates.
- Format Hijri dates with customizable patterns.
- Locale support for different languages.
- Efficient and optimized for performance.
- Comprehensive unit testing for reliability.

## Installation

```bash
npm install luxon-hijri
```

## Quick Start

Here's how you can quickly convert a Gregorian date to a Hijri date:

```javascript
import { toHijri } from 'luxon-hijri';

const hijriDate = toHijri(new Date());
console.log(hijriDate);
```

## Usage

### Converting Dates
Convert Gregorian dates to Hijri:

```javascript
import { toHijri } from 'luxon-hijri';

const hijriDate = toHijri(new Date(2023, 3, 14)); // April 14, 2023
console.log(hijriDate);
```

Convert Hijri dates to Gregorian:

```javascript
import { toGregorian } from 'luxon-hijri';

const gregorianDate = toGregorian(1444, 9, 1); // 1st of Ramadan, 1444 H
console.log(gregorianDate);
```

### Formatting Dates
Format Hijri dates using predefined patterns:

```javascript
import { formatHijriDate } from 'luxon-hijri';

const formattedDate = formatHijriDate({ hy: 1444, hm: 9, hd: 1 }, 'iYYYY-iMM-iDD');
console.log(formattedDate); // 1444-09-01
```

## Documentation

For detailed documentation, examples, and API reference, visit [Documentation Link].

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and suggest enhancements.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

## Code of Conduct

Participation in this project is governed by a [Code of Conduct](CODE_OF_CONDUCT.md). We expect everyone to adhere to it to maintain a respectful and welcoming environment.
