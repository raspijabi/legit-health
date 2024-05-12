import { User } from "@/interfaces/UserInterface"
import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import React from "react"
import { useForm } from "react-hook-form"

interface AddUserModal {
    isModalOpen: boolean
    onCloseModal: () => void
    handleSubmit: (data: User) => void
}

export const AddUserModal = ({ isModalOpen, onCloseModal, handleSubmit: handleSubmitModal }: AddUserModal) => {
    const {
        register,
        handleSubmit
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: ""
        }
    })

    return (
        <Modal
            open={isModalOpen}
            onClose={onCloseModal}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box
                sx={{
                    position: "absolute" as "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4
                }}
            >
                <Typography
                    variant='h5'
                    component='h2'
                    align='center' 
                    gutterBottom
                >
                    Add User
                </Typography>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem"
                    }}
                    onSubmit={handleSubmit(data => {
                        handleSubmitModal({
                            first_name: data.firstName,
                            last_name: data.lastName,
                            email: data.email
                        })
                    })}
                >
                    <TextField
                        id='firstName'
                        label='First Name'
                        variant='outlined'
                        {...register("firstName")}
                    />
                    <TextField
                        id='lastName'
                        label='Last Name'
                        variant='outlined'
                        {...register("lastName")}
                    />
                    <TextField
                        id='email'
                        label='Email'
                        variant='outlined'
                        inputMode="email"
                        {...register("email")}
                    />
                    <Button type='submit' variant="contained">Submit</Button>
                </form>
            </Box>
        </Modal>
    )
}
{
    /* <form>
    <input {...register("firstName", { required: true })} />
    {errors.firstName && <span>This field is required</span>}
    <input {...register("lastName", { required: true })} />
    {errors.lastName && <span>This field is required</span>}
    <input {...register("email", { required: true })} />
    {errors.email && <span>This field is required</span>}
    <input type='submit' />
</form> */
}
