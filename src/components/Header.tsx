"use client"
import { AppBar, Box, Toolbar, Typography, useTheme } from "@mui/material"
import Link from "next/link"
import React from "react"

export default function Header() {
    const theme = useTheme()

    return (
        <Box sx={{ flexGrow: 1, height: "60px" }}>
            <AppBar
                position='sticky'
                color='success'
                style={{ position: "fixed" }}
            >
                <Toolbar>
                    <Link href='/' legacyBehavior>
                        <Typography
                            variant='h4'
                            component='div'
                            style={{
                                background: `linear-gradient(50deg, ${theme.palette.secondary.main} 0, ${theme.palette.primary.main} 84%)`,
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                                cursor: "pointer"
                            }}
                            sx={{
                                typography: {
                                    xs: "h6",
                                    sm: "h5",
                                    md: "h4"
                                }
                            }}
                        >
                            Seems not legit but user list website
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Link href='/' legacyBehavior>
                        <Typography
                            variant='h5'
                            component='div'
                            sx={{
                                "&:hover": {
                                    color: theme.palette.primary.main
                                },
                                cursor: "pointer"
                            }}
                        >
                            Home
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
