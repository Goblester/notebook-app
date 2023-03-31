import React from "react";


export const NewUser: React.FC = React.memo(() => {

    return (
        <form>
            <button type="submit" className="rounded-md bg-blue-400 text-white px-5 py-2 active:bg-blue-500">
                add User
            </button>

            <div className="flex flex-col gap-4 mt-4">
                <input className="border-2 px-4 py-2 border-gray-500 focus:border-gray-500 rounded-md w-full"
                       placeholder="name"/>
                <input className="border-2 px-4 py-2 border-gray-500 focus:border-gray-500 rounded-md w-full"
                       placeholder="email"/>
                <input className="border-2 px-4 py-2 border-gray-500 focus:border-gray-500 rounded-md w-full"
                       placeholder="phone"/>
            </div>
        </form>
    )
});