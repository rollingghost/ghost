import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

interface User {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const handler: Handlers<User> = {
    async POST(req, ctx) {
        const form = await req.formData();
        const username = form.get("username") as string;
        const email = form.get("email") as string;
        const password = form.get("password") as string;
        const confirmPassword = form.get("confirmPassword") as string;
        const responseBody: User = {
            username,
            email,
            password,
            confirmPassword,
        };
        return ctx.render(responseBody);
    },
};

export default function Register(user: PageProps<User>) {
    return (
        <>
            <Head>
                <title>Ghost | Register</title>
            </Head>
            <div class="flex flex-col items-center justify-center h-screen">
                {user.data?.username ? user.data.username : (
                    <form
                        action="/register"
                        method="POST"
                        className="space-y-4 p-4 shadow-md rounded-md max-w-96"
                        style={{ backgroundColor: "inherit", color: "inherit" }}
                    >
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            required
                            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            style={{
                                backgroundColor: "inherit",
                                color: "inherit",
                                border: "none",
                            }}
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            style={{
                                backgroundColor: "inherit",
                                color: "inherit",
                                border: "none",
                            }}
                        />
                        <button
                            type="submit"
                            className="w-full py-2 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            style={{
                                backgroundColor: "inherit",
                                color: "inherit",
                                border: "none",
                            }}
                        >
                            <i className="bi bi-chevron-right"></i>
                        </button>
                        <p className="mt-4">
                            Already have an account?{" "}
                            <a href="/login" className="hover:underline">
                                Login
                            </a>
                        </p>
                    </form>
                )}
            </div>
        </>
    );
}
