"use client"
import { Roboto, Montserrat } from "next/font/google"
import { createTheme } from "@mui/material/styles"

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap"
})

const montserrat = Montserrat({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap"
})

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#04af65"
        },
        secondary: {
            main: "#8671ff",
            contrastText: "#f3f2fc",
            dark: "#f3f2fc"
        },
        success: {
            main: "#f3f2fc"
        },
        info:{
            main: "#60a5fa"
        }
        
    },
    typography: {
        h1: {
            fontFamily: montserrat.style.fontFamily
        },
        fontFamily: roboto.style.fontFamily
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.severity === "info" && {
                        backgroundColor: "#60a5fa"
                    })
                })
            }
        }
    }
})

export default theme
