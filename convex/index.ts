import { v } from "convex/values"
import { query } from "./_generated/server"

export const products = query({
    args: {},
    handler: async (ctx) => (
        await ctx.db.query("products").collect()
    )
})

export const userShoppingCart = query({
    args: {
        userID: v.string()
    },
    handler: async (ctx, args) => (
        await ctx.db.query('shopping_cart')
            .filter((q) => q.eq(q.field('userID'), args.userID))
            .collect()
    )
})

export const categories = query({
    args: {},
    handler: async (ctx) => (
        await ctx.db.query('categories').collect()
    )
})