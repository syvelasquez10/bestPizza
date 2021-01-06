import { User } from "../components/shared/models";

export const storeUser = (user: User) => {
    delete user.password;
    document.cookie = 'user = ' + JSON.stringify(user);
};

export const getActualUser = (): User => {
    const user = document.cookie.split('; ').find((row) => row.startsWith('user'))?.split('=')[1];
    return user ? JSON.parse(user) : undefined;
};