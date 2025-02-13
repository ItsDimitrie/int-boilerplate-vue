import { ToastEventBus, ToastMessageOptions } from 'primevue';

export const useToast = () => {
    return {
        add: (message: ToastMessageOptions) => {
            ToastEventBus.emit('add', message);
        },
        remove: (message: ToastMessageOptions) => {
            ToastEventBus.emit('remove', message);
        },
        removeGroup: (group: string) => {
            ToastEventBus.emit('remove-group', group);
        },
        removeAllGroups: () => {
            ToastEventBus.emit('remove-all-groups');
        },
    };
};
