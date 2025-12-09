export interface ISidebarItem {
    name: string
    href: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface ISidebarItemProps {
    item: ISidebarItem
}