import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import LoginCookie from "../islands/Login.tsx";
import { useSignal } from "@preact/signals";

interface User {
    username: string;
    password: string;
}

interface Error {
    error: string;
}

export const handler: Handlers = {
    async POST(req, ctx) {
        const form = await req.formData();
        const username = form.get("username");
        const password = form.get("password");

        try {
            const res = await fetch(
                `https://ghost.shuttleapp.rs/user/${username}`,
            );
            const data = await res.json();
            if (data.password === password) {
                const headers: Headers = new Headers();
                const expires = new Date();
                expires.setHours(expires.getHours() + 24);
                headers.set(
                    "Set-Cookie",
                    `ghost=${data.username}; Path=/; HttpOnly; Expires=${expires.toUTCString()}`,
                );
                headers.set("Location", "/");
                return new Response(null, {
                    status: 302,
                    headers: headers,
                });
            } else {
                const resp: Error = {
                    error: "Invalid username or password",
                };
                return ctx.render(resp);
            }
        } catch (error) {
            return ctx.render({ error: error });
        }
    },
};

export default function Login({ data }: PageProps<User | Error>) {
    return (
        <>
            <Head>
                <title>Ghost | Login</title>
            </Head>
            <div class="flex flex-col items-center justify-center h-screen">
                {data && "username" in data
                    ? <LoginCookie username={useSignal(data.username)} />
                    : (
                        <form
                            action="/login"
                            method="POST"
                            className="space-y-4 p-4 shadow-md rounded-md justify-items-center max-w-96"
                        >
                            {data?.error && (
                                <div className="text-red-500">
                                    {data.error}
                                </div>
                            )}
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                required
                                className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent"
                            />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                required
                                className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent"
                            />
                            <button
                                type="submit"
                                className="w-full px-3 py-2 rounded-md font-bold"
                            >
                                <i className="bi bi-chevron-right"></i>__ Hack
                            </button>
                            <div className="text-center">
                                <a
                                    href="/register"
                                    className="hover:underline text-[#040F16] font-bold"
                                >
                                    Don't have an account? Register
                                </a>
                            </div>
                        </form>
                    )}
            </div>
        </>
    );
}
