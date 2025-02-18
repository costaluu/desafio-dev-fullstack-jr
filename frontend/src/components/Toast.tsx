import React, { useEffect } from "react";
import { ToastConfig, useToastStore } from "../stores/toast";
import { XIcon } from "lucide-react";

export default function Toast() {
    let toasts: ToastConfig[] = useToastStore((state) => state.toasts);
    let setToasts = useToastStore((state) => state.setToasts);

    const handleCloseToast = (id: string) => {
        setToasts(toasts.filter((toast) => toast.id != id));
    };

    useEffect(() => {
        if (toasts.length > 0) {
            const interval = setInterval(() => {
                handleCloseToast(toasts[toasts.length - 1].id);
            }, 5000);

            return () => {
                clearInterval(interval);
            };
        } else {
            return;
        }
    }, [toasts]);

    return (
        <div className="absolute right-4 top-4 z-[5000] flex w-96 flex-col space-y-2">
            {toasts.map((config) => {
                let icon: JSX.Element;
                let borderColor: string;
                let textColor: string;

                if (config.type == "Sucesso") {
                    icon = (
                        <svg
                            className="h-6 w-6 flex-none text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    );

                    borderColor = "border-green-600";
                    textColor = "text-green-600";
                } else if (config.type == "Info") {
                    icon = (
                        <svg
                            className="h-6 w-6 flex-none text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    );

                    borderColor = "border-blue-600";
                    textColor = "text-blue-600";
                } else if (config.type == "Erro") {
                    icon = (
                        <svg
                            className="h-6 w-6 flex-none text-red-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    );

                    borderColor = "border-red-600";
                    textColor = "text-red-600";
                } else if (config.type == "Carregando") {
                    icon = (
                        <svg
                            aria-hidden="true"
                            className="text-skin-secondary h-6 w-6 flex-none animate-spin fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                    );

                    borderColor = "border-blue-600";
                    textColor = "text-blue-600";
                } else {
                    icon = (
                        <svg
                            className="h-6 w-6 flex-none text-yellow-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    );

                    borderColor = "border-yellow-600";
                    textColor = "text-yellow-600";
                }

                return (
                    <div
                        key={config.id}
                        onClick={() => handleCloseToast(config.id)}
                        className="z-[1200] flex w-96 cursor-pointer flex-row items-center justify-between space-x-2 rounded-md bg-gray-100 p-2 shadow-lg animate-in slide-in-from-right-4"
                    >
                        <div className="flex h-full flex-row items-center space-x-2">
                            <div className="flex h-full flex-row items-center space-x-3">
                                <div
                                    className={`h-10 w-0.5 rounded-md border-2 ${borderColor}`}
                                ></div>
                                {icon}
                            </div>
                            <div className="flex flex-col">
                                <span
                                    className={`text-base font-semibold leading-tight ${textColor}`}
                                >
                                    {config.type}
                                </span>
                                <span className="line-clamp-3 text-sm">{config.message}</span>
                            </div>
                        </div>
                        <XIcon className="h-5 w-5"></XIcon>
                    </div>
                );
            })}
        </div>
    );
}
