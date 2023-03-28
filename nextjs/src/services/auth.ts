import { setCookie } from 'nookies';

type SignInRequestData = {
    email: string;
    password: string;
}
export async function singInRequest(data: SignInRequestData) {

    const jwt = await fetch('http://localhost:3000/api/auth/',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date: data
        })
    });
    const auth = await jwt.json();
    auth.status == 1 && setCookie(undefined, 'token', auth.token, {
                            maxAge: 60 * 80 * 24 //one day
                        })
    return auth;

}