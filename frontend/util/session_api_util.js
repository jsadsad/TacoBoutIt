export const postUser = user => {
    return $.ajax({
        url: `/api/users`,
        method: `POST`,
        data: { user }
    })
}

export const createSession = user => { //logging in
    return $.ajax({
        url: `/api/session`,
        method: `POST`,
        data: { user }
    })
}
export const deleteSession = () => { //logging out
    return $.ajax({
        url: `/api/session`,
        method: `DELETE`
    })
}