import { ghostSetCookie } from "../utilities/Cookie.ts";
import { Signal } from "@preact/signals";

interface LoginCookieProps {
    username: Signal<string>;
}

export default function LoginCookie(username: LoginCookieProps) {
    try {
        ghostSetCookie("ghost", username.username.value, 1);
    } catch {
        return <h1>Error occurred</h1>;
    }
    return <h1>Cookie set for {username.username.value}</h1>;
}
