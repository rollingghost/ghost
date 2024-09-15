import { Signal } from "@preact/signals";

interface LoginCookieProps {
    username: Signal<string>;
}

export default function LoginCookie(username: LoginCookieProps) {
    return <h1>Cookie set for {username.username.value}</h1>;
}
