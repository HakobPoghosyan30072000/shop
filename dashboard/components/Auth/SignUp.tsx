'use client'
import { AuthService } from "@/service/auth"
import { ISignUpPayload } from "@/types/auth"
import Button from "@/ui/Button"
import Input from "@/ui/Input"
import { FC, JSX, useRef } from "react"

const SignUp: FC = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (!formRef.current) return

    try {
      const form = formRef.current
      const { fullName, email, password } = form

      const payload: ISignUpPayload = {
        fullName: fullName.value,
        email: email.value,
        password: password.value
      }
      await AuthService.signUp(payload)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 space-y-6">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create Account</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Start your journey with us.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <Input type="text" placeholder="Full Name" label="Full Name" name="fullName" />
          <Input type="email" placeholder="Email" label="Email" name="email" />
          <Input type="password" placeholder="Password" label="Password" name="password" />
          <Button text="Sign Up" type="submit" />
        </form>

        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
            Log in
          </a>
        </p>

      </div>
    </div>
  )
}

export default SignUp