import { FC } from "react";
import Header from "../Header/Header";
import './global.scss';

interface MetaProps {
    children: React.ReactNode,
}

const Layout: FC<MetaProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="wrapper">
                {children}
            </div>
        </div>

    )
}

export default Layout;