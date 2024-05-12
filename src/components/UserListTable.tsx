import { UserList } from "@/interfaces/UserInterface"
import { useTheme } from "@emotion/react"
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from "@mui/material"
import Link from "next/link"
import React from "react"

interface UserListTableProps {
    userList: UserList
    getNextPage: (page: number) => Promise<void>
    onClickAddUser: () => void
}

export const UserListTable = ({
    userList,
    getNextPage,
    onClickAddUser
}: UserListTableProps) => {
    
    const theme = useTheme()

    return (
        <TableContainer
            sx={{
                height: "745px",
                marginTop: "50px",
                width: "1000px",
                border: `12px solid #ddd9ff`,
                borderRadius: "10px"
            }}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <Typography
                                variant='h4'
                                component='div'
                                sx={{
                                    marginLeft: "20px",
                                    marginTop: "10px",
                                    marginBottom: "10px"
                                }}
                            >
                                User List
                            </Typography>
                        </TableCell>
                        <TableCell colSpan={1} align="right">
                            <Button variant="contained" color="secondary" onClick={() => {
                                onClickAddUser()
                            }}>
                                <Typography
                                    variant='body1'
                                    component='div'
                                    sx={{
                                        "&:hover": {
                                            color: '#04af65'
                                        },
                                        cursor: "pointer"
                                    }}
                                >
                                    Add new user
                                </Typography>
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            sx={{
                                backgroundColor: "#04af65",
                                color: "white"
                            }}
                        >
                            Avatar
                        </TableCell>
                        <TableCell
                            sx={{
                                backgroundColor: "#8671ff",
                                color: "white"
                            }}
                        >
                            Name
                        </TableCell>
                        <TableCell
                            sx={{
                                backgroundColor: "#60a5fa",
                                color: "white"
                            }}
                        >
                            Email
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userList.users.map(user => {
                        if (
                            user.id! <= userList.page * userList.per_page &&
                            user.id! > (userList.page - 1) * userList.per_page
                        ) {
                            return (
                                <Link
                                    key={user.id}
                                    href={`/user/${user.id}`}
                                    passHref
                                    legacyBehavior
                                >
                                    <TableRow
                                        hover
                                        key={user.id}
                                        style={{
                                            cursor: "pointer"
                                        }}
                                    >
                                        <TableCell>
                                            <img
                                                src={user.avatar}
                                                alt={user.first_name}
                                                width='50'
                                                height='50'
                                                style={{
                                                    borderRadius: "50%",
                                                    border: `1px solid #04af65`
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            {user.first_name} {user.last_name}
                                        </TableCell>
                                        <TableCell>{user.email}</TableCell>
                                    </TableRow>
                                </Link>
                            )
                        }
                    })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[]}
                            colSpan={3}
                            count={userList.total}
                            rowsPerPage={userList.per_page}
                            page={userList.page - 1}
                            onPageChange={(e, newPage) => {
                                getNextPage(newPage + 1)
                            }}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}
