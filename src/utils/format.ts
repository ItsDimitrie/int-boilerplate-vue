export const initials = (name: string) => {
    const names = name.trim().split(' ');
    const firstName = names[0];
    const lastName = names[names.length - 1];

    if (firstName === lastName) {
        return firstName.charAt(0).toUpperCase();
    }

    return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
};
