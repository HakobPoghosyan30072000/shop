import { ISidebarItemProps } from "@/types/layout"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC, JSX, useMemo } from "react"

const SidebarItem: FC<ISidebarItemProps> = ({item}) : JSX.Element => {
    const pathname = usePathname()

    const isActiveItem = useMemo(() => {
        return pathname === item.href
    }, [pathname, item.href])
    return (
        
            <li key={item.name} className={"p-4 hover:bg-gray-100 dark:hover:bg-gray-800" + (isActiveItem ? " bg-gray-200 dark:bg-gray-700 font-bold text-white" : "")}>
            <Link href={item.href} className="flex items-center gap-2">
                {item.icon && <item.icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
                {item.name}
            </Link>
            </li>
      
    )
}

export default SidebarItem