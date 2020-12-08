import { signIn } from '../helpers/helpersfunctions'

export function auth(login, password) {
    return async function (dispatch) {
        if (!login || !password) {
            alert("Необходимо заполнить все поля")
        }
        else {
            signIn(login, password)
                .catch((err) => { alert(err) })
                .then((tokenData) => {
                    if (tokenData.token) {
                        dispatch({ type: 'SIGN_IN', name: tokenData.token });
                        sessionStorage.setItem('authToken', tokenData.token);
                    }
                    else {
                        alert("Не удалось войти, попробуйте позже")
                    }
                })
        }
    }
}

export function signOut() {
    return async function (dispatch) {
        dispatch({ type: 'SIGN_OUT' });
        sessionStorage.removeItem('authToken');
    }
}