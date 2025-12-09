'use client'
import { FC, JSX } from "react"
import { Home, User, Settings } from "lucide-react"
import { ISidebarItem } from "@/types/layout";
import SidebarItem from "./SIdebarItem";

const sidebarItems:ISidebarItem[] = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
]

const SideBar:FC = ():JSX.Element => {

    
  
    return (
        <aside className="w-50 h-screen bg-white text-black border-r fixed left-0 top-0 ">
            <h2 className="text-2xl font-bold p-4">Dashboard</h2>
            <ul>
                {sidebarItems.map(item => (
                    <SidebarItem key={item.name} item={item} />
                ))}
            </ul>
        </aside>
    )
}

export default SideBar