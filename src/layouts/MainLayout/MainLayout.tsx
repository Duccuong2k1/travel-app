import React, { FC } from 'react';
import { Footer, Header } from '../../components';
import './MainLayout.scss';


export const MainLayout: FC = ({children}) => {
    return (
        <div className="main-layout">
            <div className="main-layout__content">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}
