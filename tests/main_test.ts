import { createHandler, ServeHandlerInfo } from "$fresh/server.ts";
import manifest from "../fresh.gen.ts";
import config from "../fresh.config.ts";
import { assert, assertEquals } from "$std/testing/asserts.ts";

const CONN_INFO: ServeHandlerInfo = {
    remoteAddr: { hostname: "127.0.0.1", port: 53496, transport: "tcp" },
};

Deno.test("HTTP assert test", async (t) => {
    const handler = await createHandler(manifest, config);

    await t.step("#1 GET /", async () => {
        const resp = await handler(new Request("http://127.0.0.1/"), CONN_INFO);
        assertEquals(resp.status, 200);
    });

    await t.step("#2 POST /", async () => {
        const formData = new FormData();
        formData.append("text", "ghost");
        const req = new Request("http://127.0.0.1", {
            method: "POST",
            body: formData,
        });
        const resp = await handler(req, CONN_INFO);
        assertEquals(resp.status, 303);
    });

    await t.step("#3 GET /foo", async () => {
        const resp = await handler(new Request("http://127.0.0.1/foo"));
        const text = await resp.text();
        assertEquals(resp.status, 404);
    });
});
