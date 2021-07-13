import React from "react";
import HomeView from "./HomeView";
import { Link } from "react-router-dom";
import { AUTH_PAGE1, DASHBOARD, PAGE1 } from "navigation/CONSTANTS";

export function HomeContainer() {
    return (
        <div>
            <HomeView title="Home" />
        </div>
    );
}
