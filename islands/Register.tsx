import { ghostSetCookie } from "../utilities/Cookie.ts";
import { Signal } from "@preact/signals";

interface RegisterCookieProps {
    username: Signal<string>;
}

export default function RegisterCookie(username: RegisterCookieProps) {
    try {
        ghostSetCookie("ghost", username.username.value, 1);
        return (
            <h1>
                Cookie set after the registration of {username.username.value}
            </h1>
        );
    } catch {
        return <h1>Error occurred</h1>;
    }
}
