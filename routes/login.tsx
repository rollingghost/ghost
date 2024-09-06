import { Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
    async POST(req) {
        const form = await req.formData();
        const username = form.get("username");
        const password = form.get("password");
        const responseBody = JSON.stringify({
            username,
            password,
        });
        return new Response(responseBody, {
            headers: { "Content-Type": "application/json" },
        });
    },
};

export default function Login() {
    return (
        <>
            <Head>
                <title>Ghost | Login</title>
            </Head>
            <div class="flex flex-col items-center justify-center h-screen">
                <form
                    action="/login"
                    method="POST"
                    className="space-y-4 p-4 shadow-md rounded-md justify-items-center max-w-96"
                >
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
                        className="w-full px-3 py-2 rounded-md"
                    >
                        <i className="bi bi-chevron-right"></i>
                    </button>
                    <div className="text-center">
                        <a
                            href="/register"
                            className="hover:underline"
                        >
                            Don't have an account? Register
                        </a>
                    </div>
                </form>
            </div>
        </>
    );
}
