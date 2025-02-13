import { describe, expect, it } from 'vitest';

import { initials } from '@/utils/format';

describe('initials', () => {
    it('should return the first letter of the first and last name', () => {
        expect(initials('John Doe')).toBe('JD');
    });

    it('should return only one letter if first and last name are the same', () => {
        expect(initials('Solo Solo')).toBe('S');
    });

    it('should handle names with multiple parts correctly', () => {
        expect(initials('Mary Jane Watson')).toBe('MW');
    });

    it('should handle single names correctly', () => {
        expect(initials('Madonna')).toBe('M');
    });

    it('should handle extra spaces correctly', () => {
        expect(initials('  John   Doe  ')).toBe('JD');
    });

    it('should handle lowercase names correctly', () => {
        expect(initials('john doe')).toBe('JD');
    });

    it('should handle empty strings gracefully', () => {
        expect(initials('')).toBe('');
    });

    it('should handle names with special characters', () => {
        expect(initials('Jean-Luc Picard')).toBe('JP');
    });
});
