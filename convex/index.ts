import { query } from "./_generated/server"

export const products = query({
    args: {},
    handler: async (ctx) => (
        await ctx.db.query("products").collect()
    )
})