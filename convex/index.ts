import { v } from "convex/values"
import { query } from "./_generated/server"

export const products = query({
    args: {},
    handler: async (ctx) => (
        await ctx.db.query("products").collect()
    ),
    returns: v.array(
        v.object(
            {
                brandID: v.optional(v.id("brands")),
                categoryID: v.id("categories"),
                color: v.array(v.string()),
                description: v.string(),
                discountID: v.optional(v.id("discounts")),
                imageID: v.string(),
                material: v.string(),
                price: v.int64(),
                productName: v.string(),
                size: v.string(),
            }
        )
    )

})

export const userShoppingCart = query({
    args: {
        userID: v.string()
    },
    handler: async (ctx, args) => (
        await ctx.db.query('shopping_cart')
            .filter((q) => (
                q.eq(q.field('userID'), args.userID)
            ))
            .collect()
    ),
    returns: v.array(
        v.object(
            {
                cartItems: v.array(
                    v.object({ productID: v.id("products") })
                ),
                userID: v.string(),
            }
        )
    )
})

export const categories = query({
    args: {},
    handler: async (ctx) => (
        await ctx.db.query('categories').collect()
    )
})