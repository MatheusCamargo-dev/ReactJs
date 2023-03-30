import { setCookie } from 'nookies';

type SignInRequestData = {
    email: string;
    password: string;
}
export async function signInRequest(data: SignInRequestData) {

    const jwt = await fetch('http://localhost:3000/api/auth/',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
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

export async function signUpRequest(data: SignInRequestData) {

    const response = await fetch('http://localhost:3000/api/user/',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
            date: data
        })
    });
    const userData = await response.json();
    return userData;

}