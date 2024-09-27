import { useAuth, useClerk } from "@clerk/clerk-react"

import { CgShoppingCart, CgUserlane } from "react-icons/cg"
import { Button } from "../../components"
import "./navbar.scss"

export default function Navbar() {
    const {isLoaded, isSignedIn} = useAuth()
    const {openSignIn, user} = useClerk()
  return (
    <header>
        <img src="./stylish-black.png" className="black-logo" alt="" />
        <img src="./stylish-white.png" className="white-logo" alt="" />

        <div className="auth-btns">
            {isLoaded ? (
                !isSignedIn ? (
                    <div className="user-btns">
                        <p>{user?.fullName}</p>
                        <span>3</span>
                        <CgShoppingCart size={30} className="icon" />
                    </div>
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
