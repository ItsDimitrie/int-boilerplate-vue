import dayjs from 'dayjs';

export const formatDate = (
    date: dayjs.ConfigType,
    format = 'DD-MM-YYYY dd. HH:mm',
) => {
    return dayjs(date).format(format);
};
