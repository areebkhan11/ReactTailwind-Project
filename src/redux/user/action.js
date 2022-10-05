export const LOGIN = 'LOGIN'


export const loginUser = (payload) =>{
    return {
        type: LOGIN,
        payload
    }
}