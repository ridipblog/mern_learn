
import { useAuth0 } from "@auth0/auth0-react"
export default function Action() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading</div>;
    }
    return (
        <>
            {
                isAuthenticated ? (
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Logout</button>
                ) : (
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                )
            }

        </>
    )
}
