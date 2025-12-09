export interface IInputProps {
    label?: string
    type?: string
    name?: string
    placeholder?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IButtonProps {
    text: string
    onClick?: () => void
    type?: "button" | "submit" | "reset"
}