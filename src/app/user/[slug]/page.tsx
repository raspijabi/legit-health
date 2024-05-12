"use client"
import React, { useEffect, useState } from "react"
import styles from "./page.module.css"
import { getUser } from "@/services/UserService"
import { User, UserResponse } from "@/interfaces/UserInterface"
import Image from "next/image"
import { Typography } from "@mui/material"

export default function Test({ params }: { params: { slug: string } }) {
    const [user, setUser] = useState<User>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getUser(parseInt(params.slug)).then((data: UserResponse) => {
            setUser(data.data)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <div>Loading...</div>

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                {user?.avatar && (
                    <Image
                        src={user?.avatar}
                        alt='avatar'
                        width={120}
                        height={120}
                        quality={100}
                        style={{
                            borderRadius: "50%"
                        }}
                    />
                )}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "40px",
                        marginTop: "30px"
                    }}
                >
                    <Typography>Name:</Typography>
                    <Typography variant='h4'>
                        {user?.first_name} {user?.last_name}
                    </Typography>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "80px",
                    marginTop: "30px"
                }}>
                <Typography>Email:</Typography>
                    <Typography
                        variant='h5'
                    >
                        {user?.email}
                    </Typography>
                </div>
            </div>
        </div>
    )
}
