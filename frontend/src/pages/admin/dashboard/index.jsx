import React from 'react';
import './styles.scss'
import Sidebar from "../../../components/admin/sidebar";
import {Outlet} from 'react-router-dom';

export default function Index() {
    return(
        <div className={`admin-layout`}>
            <Sidebar />
            <div className={`content`}>
                <Outlet />
            </div>
        </div>
    )
}