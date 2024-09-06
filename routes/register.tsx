import { Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
    async POST(req) {
        const form = await req.formData();
        const username = form.get("username");
        const email = form.get("email");
        const password = form.get("password");
        const confirmPassword = form.get("confirmPassword");
        const responseBody = JSON.stringify({
            username,
            email,
            password,
            confirmPassword,
        });
        return new Response(responseBody, {
            headers: { "Content-Type": "application/json" },
        });
    },
};

export default function Register() {
    return (
        <>
            <Head>
                <title>Ghost | Register</title>
                <div class="flex flex-col items-center justify-center h-screen">
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
                    </form>
                    <p className="mt-4">
                        Already have an account?{" "}
                        <a href="/login" className="hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </Head>
        </>
    );
}
