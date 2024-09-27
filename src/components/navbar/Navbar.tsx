import { useAuth, useClerk } from "@clerk/clerk-react"
import { useQuery } from "convex/react"

import { CgShoppingCart, CgUserlane } from "react-icons/cg"

import { api } from "../../../convex/_generated/api"
import { Button } from "../../components"
import "./navbar.scss"

interface Props {
    userId: string | undefined;
}

const ShoppingCartButton = ({userId}: Props) => {
    const shoppingCart = useQuery(api.index.userShoppingCart, {userID: userId as string})

    return (
        <div className="shopping-cart">
            <span>{shoppingCart?.[0].cartItems.length}</span>
            <CgShoppingCart size={35} className="icon" strokeWidth={.3} />
        </div>
    )
}

export default function Navbar() {
    const {openSignIn, user} = useClerk()
    const {isLoaded, isSignedIn} = useAuth()

  return (
    <header>
        {
            !isLoaded ? (
                <p>Loading ...</p>
            ) : (
                isSignedIn ? (
                    <div className="user">
                        <p>{user?.fullName}</p>
                        <h1>Welcome to the store</h1>
                    </div>
                ) : (
                    <>
                    <img src="./stylish-black.png" className="black-logo" alt="" />
                    <img src="./stylish-white.png" className="white-logo" alt="" />
                    </>
                )
            )
        }

        <div className="cta-btns">
            {isLoaded ? (
                isSignedIn ? (
                    <ShoppingCartButton userId={user?.id} />
                ) : (
                    <Button isPrimary handleOnClick={() => openSignIn({path: '/auth/signin',})}>
                        <p>Sign in</p>
                        <CgUserlane />
                    </Button>
                )
            ) : (
                <p>Loading...</p>
            ) }
        </div>
    </header>
  )
}
