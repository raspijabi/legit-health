import { BottomNavigation } from "@mui/material"
import React from "react"

export default function Footer() {
    return (
        <BottomNavigation
            sx={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                height: "80px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "#3f51b5",
                color: "white"
            }}
        >
            <p>Technical test, I hope to be up to the task</p>
            <p>Author: Daniel Abellán Sánchez</p>
        </BottomNavigation>
    )
}
