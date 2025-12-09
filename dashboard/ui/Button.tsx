import { IButtonProps } from "@/types/ui"
import { FC, JSX } from "react"

const Button:FC<IButtonProps> = ({text,...props}):JSX.Element => { 
    return(   
        <button
        className="w-full py-2 px-4
         bg-blue-600 text-white 
         font-semibold rounded-lg shadow-md
         hover:bg-blue-700 focus:outline-none focus:ring-2 
         focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        {...props}
        >
            {text} 
        </button>
  )
 }
export default Button