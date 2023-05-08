import React from "react";
import {Link} from "react-router-dom";
import {HeartIcon} from "../icons/heart";

export const Header = React.memo(() => {

    return (
        <header className="h-14 w-full drop-shadow-md bg-gray-700 p-2 flex justify-between items-center text-red-600 text-xl">
            <h2 className="h-min">Contact</h2>
            <Link to={'favourites'}><HeartIcon isFilled /></Link>
        </header>
    )
});