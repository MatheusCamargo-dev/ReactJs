import { LockClosedIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

type Register = {
    changeForm: any,
}
export default function Register (props: Register) {
    const { changeForm } = props;

    return(
            <div className="w-full max-w-md text-green-800 space-y-8">
                <h1>REGISTER TEST</h1>
                <p className="mt-2 text-center text-sm text-white">
                        Or{' '}
                        <a onClick={changeForm} className="font-medium cursor-pointer text-green-600 hover:text-green-500">
                            sign to login
                        </a>
                    </p>
            </div>
    )
}