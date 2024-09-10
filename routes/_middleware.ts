import { FreshContext } from "$fresh/server.ts";

interface State {
    data: boolean;
}

export async function handler(_req: Request, ctx: FreshContext<State>) {
    ctx.state.data = true;
    const resp = await ctx.next();

    resp.headers.set("server", "ghost server");

    return resp;
}
