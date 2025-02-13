import axios, { AxiosError } from 'axios';
import { computed, Ref } from 'vue';

import { Error } from '@/api/client';

type AxiosResponseError<T = unknown, D = unknown> = AxiosError<T, D> & {
    config: NonNullable<AxiosError<T, D>['config']>;
    request: NonNullable<AxiosError<T, D>['request']>;
    response: NonNullable<AxiosError<T, D>['response']>;
};

const isAxiosResponseError = <T extends Error>(
    error: unknown,
): error is AxiosResponseError<T> => {
    return (
        axios.isAxiosError(error) &&
        error.request !== undefined &&
        error.response !== undefined
    );
};

export const isUnauthorizedError = (
    error: unknown,
): error is AxiosResponseError => {
    return isAxiosResponseError(error) && error.response.status === 401;
};

export const isForbiddenError = (
    error: unknown,
): error is AxiosResponseError => {
    return isAxiosResponseError(error) && error.response.status === 403;
};

export const isNotFoundError = (
    error: unknown,
): error is AxiosResponseError => {
    return isAxiosResponseError(error) && error.response.status === 404;
};

export const isPageExpiredError = (
    error: unknown,
): error is AxiosResponseError => {
    return isAxiosResponseError(error) && error.response.status === 419;
};

export const isValidationError = (
    error: unknown,
): error is AxiosResponseError<Required<Error>> => {
    return (
        isAxiosResponseError<Required<Error>>(error) &&
        error.response.status === 422 &&
        error.response.data?.errors !== undefined
    );
};

export const isRateLimitError = (
    error: unknown,
): error is AxiosResponseError => {
    return isAxiosResponseError(error) && error.response.status === 429;
};

export const getValidationErrors = (error: Ref<unknown>) => {
    return computed(() => {
        if (isValidationError(error.value)) {
            return error.value.response.data.errors;
        }

        return undefined;
    });
};
