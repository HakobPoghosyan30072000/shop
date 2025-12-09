import { IInputProps } from "@/types/ui"
import { FC, JSX } from "react"

const Input:FC<IInputProps> = ({label,...props}):JSX.Element => {
    return (
        <div>
            <label className="block text-gray-700 dark:text-gray-300">{label}</label>
            <input
                {...props}
                className="
                mt-1 w-full px-4 py-2 
                border rounded-lg focus:outline-none focus:ring-2 
                focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
        </div>
    )
}

export default Input