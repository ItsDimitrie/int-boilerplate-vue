import dayjs from 'dayjs';
import { describe, expect, it } from 'vitest';

import { formatDate } from '@/utils/datetime';

describe('formatDate', () => {
    it('formats date with default format', () => {
        const date = '2023-10-05T14:48:00.000Z';
        const formattedDate = formatDate(date);
        expect(formattedDate).toBe(dayjs(date).format('DD-MM-YYYY dd. HH:mm'));
    });

    it('formats date with custom format', () => {
        const date = '2023-10-05T14:48:00.000Z';
        const format = 'YYYY/MM/DD';
        const formattedDate = formatDate(date, format);
        expect(formattedDate).toBe(dayjs(date).format(format));
    });

    it('handles invalid date input', () => {
        const date = 'invalid-date';
        const formattedDate = formatDate(date);
        expect(formattedDate).toBe('Invalid Date');
    });
});
