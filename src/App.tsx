import { useState, ChangeEvent } from 'react'
import { Box, Grid, SelectChangeEvent, Stack, Typography } from "@mui/material";
import {LeftAlignedTextbox} from "./LeftAlignedTextbox.tsx";
import './App.css'
import {SecurityFormSubmission} from "./form.ts";

function App() {
    const [form, setResponses] = useState<SecurityFormSubmission>({
        name: "",
        flowerType: "",
        recipientName: "",
        roomNumber: "",
        message: "",
    });
    function handleNameInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, name: e.target.value });
    }

    function handleRecipientNameInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, recipientName: e.target.value });
    }

    function handleMessageInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, message: e.target.value });
    }

    function clear() {
        setResponses({
            name: "",
            flowerType: "",
            recipientName: "",
            roomNumber: "",
            message: "",
        });
    }
    function handleFlowerTypeInput(event: SelectChangeEvent) {
        setResponses({ ...form, flowerType: event.target.value });
        return event.target.value;
    }

    function handleRoomNumberInput(event: SelectChangeEvent) {
        setResponses({ ...form, roomNumber: event.target.value });
        return event.target.value;
    }


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
                            value={form.roomNumber}
                            onChange={handleNameInput}
                            type={"text"}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <Typography>Recipient Name:</Typography>
                            <LeftAlignedTextbox
                                label={"Recipient Name"}
                                value={form.recipientName}
                                onChange={handleRecipientNameInput}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <Typography>Room Number:</Typography>
                            <DropDown
                                items={nodeNumbers}
                                label={"Room Number"}
                                returnData={form.roomNumber}
                                handleChange={handleRoomNumberInput}
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
