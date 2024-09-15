import { Signal } from "@preact/signals";

interface RegisterCookieProps {
    username: Signal<string>;
}

export default function RegisterCookie(username: RegisterCookieProps) {
    return (
        <h1>
            Cookie set after the registration of {username.username.value}
        </h1>
    );
}
