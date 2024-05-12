import { PostUserResponse, User } from "@/interfaces/UserInterface"

export const getUserList = async(page: number) => {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`, {
        method: 'GET'
    })
    return await response.json()
}

export const getUser = async(id: number) => {
    const response = await fetch(`https://reqres.in/api/users/${id}`, {
        method: 'GET'
    })
    return await response.json()
}

export const postUser = async(data: User): Promise<PostUserResponse> => {
    const response = await fetch(`https://reqres.in/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return {
        user: await response.json(),
        status: response.status
    }
}