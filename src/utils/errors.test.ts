import { describe, expect, it } from 'vitest';

import {
    isPageExpiredError,
    isRateLimitError,
    isUnauthorizedError,
    isValidationError,
} from '@/utils/errors';

describe('error detection', () => {
    const error = new Error();

    const networkError = {
        isAxiosError: true,
        request: {},
    };

    const tokenMismatchError = {
        isAxiosError: true,
        request: {},
        response: {
            status: 419,
            data: {},
        },
    };

    const rateLimit = {
        isAxiosError: true,
        request: {},
        response: {
            status: 429,
            data: {},
        },
    };

    const unauthenticatedError = {
        isAxiosError: true,
        request: {},
        response: {
            status: 401,
            data: {},
        },
    };

    const validationError = {
        isAxiosError: true,
        request: {},
        response: {
            status: 422,
            data: {
                errors: {},
            },
        },
    };

    it('detects authentication errors', () => {
        expect(isUnauthorizedError(error)).toBe(false);
        expect(isUnauthorizedError(networkError)).toBe(false);
        expect(isUnauthorizedError(rateLimit)).toBe(false);
        expect(isUnauthorizedError(tokenMismatchError)).toBe(false);
        expect(isUnauthorizedError(unauthenticatedError)).toBe(true);
        expect(isUnauthorizedError(validationError)).toBe(false);
    });

    it('detects token mismatch errors', () => {
        expect(isPageExpiredError(error)).toBe(false);
        expect(isPageExpiredError(networkError)).toBe(false);
        expect(isPageExpiredError(rateLimit)).toBe(false);
        expect(isPageExpiredError(tokenMismatchError)).toBe(true);
        expect(isPageExpiredError(unauthenticatedError)).toBe(false);
        expect(isPageExpiredError(validationError)).toBe(false);
    });

    it('detects validation errors', () => {
        expect(isValidationError(error)).toBe(false);
        expect(isValidationError(networkError)).toBe(false);
        expect(isValidationError(rateLimit)).toBe(false);
        expect(isValidationError(tokenMismatchError)).toBe(false);
        expect(isValidationError(unauthenticatedError)).toBe(false);
        expect(isValidationError(validationError)).toBe(true);
    });

    it('detects rate limit error', () => {
        expect(isRateLimitError(error)).toBe(false);
        expect(isRateLimitError(networkError)).toBe(false);
        expect(isRateLimitError(rateLimit)).toBe(true);
        expect(isRateLimitError(tokenMismatchError)).toBe(false);
        expect(isRateLimitError(unauthenticatedError)).toBe(false);
        expect(isRateLimitError(validationError)).toBe(false);
    });
});
