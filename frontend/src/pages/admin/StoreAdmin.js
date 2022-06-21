import { Admin, Resource } from 'react-admin';

export const StoreAdmin = () => (
    <Admin basename="/admin">
        <Resource name="login" />
    </Admin>
);