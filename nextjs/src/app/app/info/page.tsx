"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";

function TextForm(){

    const { register, handleSubmit } = useForm();

    const [text, setText] = useState('');
    
    async function handleForm(data: any){
        setText('Loading...')
        const response = await fetch('http://localhost:3000/api/ai/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: data
                })
            });
        const chatGPT = await response.json();
        const textGPT = chatGPT.choices[0].text
        setText(textGPT)
    }

    return(
        <>
            <div className="flex flex-col justify-center items-center w-full rounded-lg bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-7xl">
                    <h1 className="text-xl font-bold mb-4">Digite seu texto abaixo:</h1>
                    <form className="flex flex-col" onSubmit={handleSubmit(handleForm)}>
                        <textarea  {...register('text')} className="p-4 bg-gray-100 border border-gray-400 focus:outline-none focus:border-blue-500" name="text" rows={5} placeholder="Digite seu texto aqui"></textarea>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="submit">Melhorar texto</button>
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
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-7xl h-full">
          <TextForm />
        </div>
      </div>
    )
  }