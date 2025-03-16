"use client"

import {ReactNode} from "react";

export default function Modal(
        {
            isOpen,
            onClose,
            title,
            children,
            buttons
        }
        :
        {
            isOpen: boolean,
        onClose: () => void,
        title: string,
        children: ReactNode,
        buttons?: ReactNode,
        }
    ) {

    if (!isOpen) return null

    return (
        <div className={"fixed inset-0 bg-black bg-opacity-30 overflow-hidden h-screen w-full flex items-center justify-center z-50"}>
            <div className={"p-6 rounded-3xl shadow-lg w-2/3 overflow-auto bg-white text-black font-mono"}>
                <div className={"flex justify-between items-center mb-4"}>
                    <h3 className={"text-3xl font-bold"}>{title}</h3>
                    <button onClick={onClose} className={"p-4 rounded-xl text-3xl text-red-600 hover:text-red-900"}>
                        x
                    </button>
                </div>
                <div className={"space-y-4"}>
                    {children}
                </div>
                <div className={"flex justify-between items-center mb-4"}>
                    {buttons}
                </div>
            </div>
        </div>
    )
}