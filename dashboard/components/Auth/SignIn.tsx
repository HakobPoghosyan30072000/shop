'use client'
import { STORAGE_KEYS } from "@/constants/storageKeys"
import { clientCookies, storage } from "@/lib/storage/client"
import { AuthService } from "@/service/auth"
import { UserService } from "@/service/user"
import { ISignInPayload } from "@/types/auth"
import { IUser } from "@/types/user"
import Button from "@/ui/Button"
import Input from "@/ui/Input"
import { FC, JSX, useRef } from "react"

const SignIn: FC = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (!formRef.current) return

    try {
      const form = formRef.current
      const { email, password } = form

      const payload: ISignInPayload = {
        email: email.value,
        password: password.value
      }
      const res = await AuthService.signIn(payload)
      clientCookies.set(STORAGE_KEYS.ACCESS_TOKEN, res.access_token)
      const user = await UserService.me()
      storage.set<IUser>(STORAGE_KEYS.USER, user)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 space-y-6">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Sign in to your account.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <Input type="email" placeholder="Email" label="Email" name="email" />
          <Input type="password" placeholder="Password" label="Password" name="password" />
          <Button text="Sign In" type="submit" />
        </form>

        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          Don&apost have an account?{" "}
          <a href="/signup" className="text-blue-600 dark:text-blue-400 hover:underline">
            Sign up
          </a>
        </p>

      </div>
    </div>
  )
}

export default SignIn
