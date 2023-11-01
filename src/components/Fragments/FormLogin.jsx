import { InputForm } from "../Elements/Input/Index"
import {Button} from "../Elements/Button/Button"

export const FormLogin = () => {
    return (
        <form action="">
        <InputForm label="Email" type="email" placeholder="email@gmail.com" name="email"/>
        <InputForm label="Password" type="password" placeholder="****" name="password"/>
        
        <Button text="Sign In" variant="bg-green-600 w-full"/>
      </form>
    )
}