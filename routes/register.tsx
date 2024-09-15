import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

interface User {
    username: string;
    password: string;
}

interface Error {
    error: string;
}

export const handler: Handlers = {
    async GET(req, ctx) {
        const cookie = req.headers.get("Cookie");
        if (cookie) {
            const username = cookie.split("=")[1];
            try {
                const res = await fetch(
                    `https://ghost.shuttleapp.rs/user/${username}`,
                );
                const data = await res.json();
                if (data.username === username) {
                    const headers: Headers = new Headers();
                    headers.set("Location", "/");
                    return new Response(null, {
                        status: 302,
                        headers: headers,
                    });
                } else {
                    return ctx.render(null);
                }
            } catch (_error) {
                return ctx.render(null);
            }
        } else {
            return ctx.render(null);
        }
    },

    async POST(req, ctx) {
        const form = await req.formData();
        const username = form.get("username") as string;
        const password = form.get("password") as string;
        const confirmPassword = form.get("confirmPassword") as string;

        if (password !== confirmPassword) {
            return ctx.render({ error: "Passwords do not match" });
        }

        const responseBody: User = {
            username,
            password,
        };

        // Save user logic here (e.g., database operation)
        try {
            const resp = await fetch("https://ghost.shuttleapp.rs/user", {
                method: "POST",
                body: JSON.stringify(responseBody),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (resp.status === 200) {
                // Set cookie here and redirect to home page
                return new Response("", {
                    status: 302,
                    headers: {
                        Location: "/",
                    },
                });
            } else {
                return ctx.render({ error: "Failed to register user" });
            }
        } catch (error) {
            return ctx.render({ error: error.message });
        }
    },
};

export default function Register(error: PageProps<Error>) {
    return (
        <>
            <Head>
                <title>Ghost | Register</title>
            </Head>
            <div class="flex flex-col items-center justify-center h-screen">
                <form
                    action="/register"
                    method="POST"
                    class="space-y-4 p-4 shadow-md rounded-md max-w-96"
                    style={{
                        backgroundColor: "inherit",
                        color: "inherit",
                    }}
                >
                    {error?.error && (
                        <div class="text-red-500">
                            {error.error}
                        </div>
                    )}
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        required
                        class="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        style={{
                            backgroundColor: "inherit",
                            color: "inherit",
                            border: "none",
                        }}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required
                        class="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        style={{
                            backgroundColor: "inherit",
                            color: "inherit",
                            border: "none",
                        }}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        required
                        class="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        style={{
                            backgroundColor: "inherit",
                            color: "inherit",
                            border: "none",
                        }}
                    />
                    <button
                        type="submit"
                        class="w-full py-2 rounded-md font-bold"
                        style={{
                            backgroundColor: "inherit",
                            color: "inherit",
                            border: "none",
                        }}
                    >
                        <i class="bi bi-chevron-right"></i>__ Hack
                    </button>
                    <p class="mt-4 text-center">
                        <a
                            href="/login"
                            class="hover:underline text-[#040F16] font-bold"
                        >
                            Already have an account? Login
                        </a>
                    </p>
                </form>
            </div>
        </>
    );
}
