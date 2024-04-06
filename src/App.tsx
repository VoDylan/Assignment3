import { useState, ChangeEvent } from 'react'
import { Box, Grid, Stack, Typography } from "@mui/material";
import {LeftAlignedTextbox} from "./LeftAlignedTextbox.tsx";
import './App.css'
import {SecurityRequest} from "./SecurityRequestFormSubmission.ts"
import {SubmitButton} from "./SubmitButton.tsx";
function App() {
    const [form, setResponses] = useState<SecurityRequest>({
        name: "",
        priority: "",
        location: "",
        securityoption: "",
        catagories: "",
        status: "",
    })
    function handleNameInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, name: e.target.value });
    }
    function handlePriorityInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, priority: e.target.value });
    }function handleLocationInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, location: e.target.value });
    }function handleSecurityOptionInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, securityoption: e.target.value });
    }
    function handleCatagoriesInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, catagories: e.target.value });
    }
    function handleStatusInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, status: e.target.value });
    }
/*    function handleRecipientNameInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, recipientName: e.target.value });
    }

    function handleMessageInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, message: e.target.value });
    }*/

    function clear() {
        setResponses({
            name: "",
            flowerType: "",
            recipientName: "",
            roomNumber: "",
            message: "",
        });
    }
/*
    function handleFlowerTypeInput(event: SelectChangeEvent) {
        setResponses({ ...form, flowerType: event.target.value });
        return event.target.value;
    }

    function handleRoomNumberInput(event: SelectChangeEvent) {
        setResponses({ ...form, roomNumber: event.target.value });
        return event.target.value;
    }
*/


    return (
        <Stack
            spacing={20}
            direction={"column"}

        >
            <Box
                sx={{
                    flexGrow: 1,
                    justifyContent: "center",
                    justifySelf: "center",
                    width: "90%",
                    alignSelf: "center",
                    mx: "5%",
                }}
            >
                <Grid
                    container
                    direction={"row"}
                    // my={20}
                    rowSpacing={2}
                    columnSpacing={2}
                    justifyContent={"space-between"}
                    boxShadow={4}
                    sx={{
                        backgroundColor: "white",
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        sx={{
                            alignItems: "flexStart",
                            backgroundColor: "#003A96",
                        }}
                    >
                        <Typography
                            color={"white"}
                            align={"center"}
                            fontStyle={"Open Sans"}
                            fontSize={40}
                        >
                            Flower Delivery Service Form
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Name:</Typography>
                        <LeftAlignedTextbox
                            label={"Name"}
                            value={form.name}
                            onChange={handleNameInput}
                            type={"text"}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>What type of flowers will you be ordering?</Typography>
                        <LeftAlignedTextbox
                            label = {"Filler"}
                            value={form.priority}
                            onChange={handleNameInput}
                            type={"text"}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <Typography>Recipient Name:</Typography>
                            <LeftAlignedTextbox
                                label={"Recipient Name"}
                                value={form.securityoption}
                                onChange={handleRecipientNameInput}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <Typography>Room Number:</Typography>
                            <LeftAlignedTextbox
                                label={"Recipient Name"}
                                value={form.recipientName}
                                onChange={handleRecipientNameInput}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <Typography>Add a message (optional):</Typography>
                            <LeftAlignedTextbox
                                label={"Message"}
                                value={form.message}
                                onChange={handleMessageInput}
                            />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{ display: "flex", my: 2, justifyContent: "center" }}
                    >
                        <Box>
                            <SubmitButton text={"SUBMIT"} input={form} clear={clear} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
  )
}

export default App
