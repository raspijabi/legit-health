"use client"
import { useEffect, useState } from "react"
import styles from "./page.module.css"
import { getUserList, postUser } from "@/services/UserService"
import { PostUserResponse, User, UserList, UsersResponse } from "@/interfaces/UserInterface"
import { UserListTable } from "@/components/UserListTable"
import { AddUserModal } from "@/components/AddUserModal"

export default function Home() {
    const [userList, setUserList] = useState<UserList>()
    const [pagesCalled, setPagesCalled] = useState<Number[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        getUserList(1).then((data: UsersResponse) => {
            setUserList({
                page: data.page,
                users: data.data,
                per_page: data.per_page,
                total: data.total,
                total_pages: data.total_pages,
                support: data.support
            })
        })
        setPagesCalled([1])
    }, [])

    const getNextPage = async (page: number) => {
        if (pagesCalled.includes(page)) {
            setUserList({
                ...userList!,
                page
            })
        } else {
            const data = await getUserList(page)
            setUserList({
                page: data.page,
                users: [...userList!.users, ...data.data],
                per_page: data.per_page,
                total: data.total,
                total_pages: data.total_pages,
                support: data.support
            })
            setPagesCalled([...pagesCalled, page])
        }
    }

    const handleSubmit = (data: User) => {
        setIsModalOpen(false)
        postUser(data).then((data: PostUserResponse) => {
            if(data.status === 201) {
                alert("User added successfully.")
            }else{
                alert("Something went wrong. Please try again.")
            }
        })
    }

    if (!userList) return <div>Loading...</div>

    return (
        <main className={styles.main}>
            <UserListTable
                userList={userList}
                getNextPage={getNextPage}
                onClickAddUser={() => {
                    setIsModalOpen(true)
                }}
            />
            {isModalOpen && (
                <AddUserModal
                    isModalOpen={isModalOpen}
                    onCloseModal={() => {
                        setIsModalOpen(false)
                    }}
                    handleSubmit={handleSubmit}
                />
            )}
        </main>
    )
}
