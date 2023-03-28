"use client"
import { setupAPIClient } from "@/services/apiClient";
import { useState } from "react";
import { useForm } from "react-hook-form";

function TextForm(){

    const { register, handleSubmit } = useForm();
    // const router = useRouter();
    // const [errorMessage, setErrorMessage] = useState('');
    // const authSession = useStoreSelector((state: AuthState) => state.Auth);
    // const dispatch = useDispatch();
    const [text, setText] = useState('');
    
    async function handleForm(data: any){
        // const api = await setupAPIClient();
        setText(data.text)
        // const response = await api('http://localhost:3000/api/ui/', data);
        // console.log(response);
    }

    return(
        <>
            <div className="flex flex-col justify-center items-center w-full bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-7xl">
                    <h1 className="text-xl font-bold mb-4">Digite seu texto abaixo:</h1>
                    <form className="flex flex-col" onSubmit={handleSubmit(handleForm)}>
                        <textarea  {...register('text')} className="p-4 rounded-lg bg-gray-100 border border-gray-400 focus:outline-none focus:border-blue-500" name="text" rows={5} placeholder="Digite seu texto aqui"></textarea>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="submit">Enviar</button>
                    </form>
                    <div className="mt-8">
                    <h2 className="text-lg font-bold mb-4">Output:</h2>
                    <div className="p-4 bg-gray-100 border border-gray-400 rounded-lg h-48 overflow-y-scroll">
                        <p>{text}</p>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default function Info() {
    return (
      <div className="flex flex-col justify-center items-center w-full bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-7xl">
          <TextForm />
        </div>
      </div>
    )
  }