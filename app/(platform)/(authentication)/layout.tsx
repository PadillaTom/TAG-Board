import {ReactNode} from "react";

const AuthenticationLayout = ({children}: { children: ReactNode }) => {
    return (
        <div className="h-dvh flex items-center justify-center">
            {children}
        </div>
    );
}

export default AuthenticationLayout;