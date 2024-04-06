import { useState, ChangeEvent } from 'react'
import {Box, Checkbox, FormControlLabel, Grid, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import {LeftAlignedTextbox} from "./LeftAlignedTextbox.tsx";
import './App.css'
import {SecurityRequest} from "./SecurityRequestFormSubmission.ts"
import {SubmitButton} from "./SubmitButton.tsx";
function App() {
    const [form, setResponses] = useState<SecurityRequest>({
        name: "",
        priority: "",
        location: "",
        securityoption: [''],
        categories: [''],
        status: "",
    })
    const [submittedForms, setSubmittedForms] = useState<SecurityRequest[]>([]);

    function handleNameInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, name: e.target.value });
    }
    function handlePriorityInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, priority: e.target.value });
    }function handleLocationInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, location: e.target.value });
    }function handleSecurityOptionInput(e: ChangeEvent<HTMLInputElement>) {
        const option = e.target.value;
        const isChecked = e.target.checked;

        // If the checkbox is checked, add the option to the array
        // If it's unchecked, remove the option from the array
        if (isChecked) {
            setResponses({ ...form, securityoption: [...form.securityoption, option] });
        } else {
            setResponses({ ...form, securityoption: form.securityoption.filter(item => item !== option) });
        }
    }
    function handleCategoriesInput(e: ChangeEvent<HTMLInputElement>) {
        const option = e.target.value;
        const isChecked = e.target.checked;

        // If the checkbox is checked, add the option to the array
        // If it's unchecked, remove the option from the array
        if (isChecked) {
            setResponses({ ...form, categories: [...form.categories, option] });
        } else {
            setResponses({ ...form, categories: form.categories.filter(item => item !== option) });
        }
    }
    function handleStatusInput(e: ChangeEvent<HTMLInputElement>) {
        setResponses({ ...form, status: e.target.value });
    }

    function clear() {
        setResponses({
            name: "",
            priority: "",
            location: "",
            securityoption: [''],
            categories: [''],
            status: "",
        });
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            (checkbox as HTMLInputElement).checked = false;
        });
    }

    function handleSubmit() {
        setSubmittedForms([...submittedForms, form]);
        clear(); // Clear the form after submission
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
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
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
                            Security Request Form
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        {<Typography
                            color={"black"}
                            fontStyle={"Open Sans"}
                            fontSize={15}
                            fontWeight="bold"
                            textAlign="center"
                        >
                            Name
                        </Typography>}
                        <LeftAlignedTextbox
                            label={"Name"}
                            value={form.name}
                            onChange={handleNameInput}
                            type={"text"}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            {<Typography
                                color={"black"}
                                fontStyle={"Open Sans"}
                                fontSize={15}
                                fontWeight="bold"
                                textAlign="center"
                            >
                                Location
                            </Typography>}
                            <LeftAlignedTextbox
                                label={"Location"}
                                value={form.location}
                                onChange={handleLocationInput}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color={"black"} fontStyle={"Open Sans"} fontSize={15} fontWeight="bold" textAlign="center"  sx={{ textDecoration: 'underline' }}>
                            Security Options
                        </Typography>
                        <FormControlLabel
                            control={<Checkbox value="Security" onChange={handleSecurityOptionInput} />}
                            label={<Typography style={{ color: 'black' }}>Security</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox value="Police" onChange={handleSecurityOptionInput} />}
                            label={<Typography style={{ color: 'black' }}>Police</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox value="Other" onChange={handleSecurityOptionInput} />}
                            label={<Typography style={{ color: 'black' }}>Other</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color={"black"} fontStyle={"Open Sans"} fontSize={15} fontWeight="bold" textAlign="center"  sx={{ textDecoration: 'underline' }}>
                            Problem I am Having
                        </Typography>
                        <FormControlLabel
                            control={<Checkbox value="Feels Unsafe" onChange={handleCategoriesInput} />}
                            label={<Typography style={{ color: 'black' }}>I Feel Unsafe</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox value="Making Report" onChange={handleCategoriesInput} />}
                            label={<Typography style={{ color: 'black' }}>I Would Like to Report Something</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox value="Other" onChange={handleCategoriesInput} />}
                            label={<Typography style={{ color: 'black' }}>Other</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        {<Typography
                            color={"black"}
                            fontStyle={"Open Sans"}
                            fontSize={15}
                            fontWeight="bold"
                            textAlign="center"
                            sx={{ textDecoration: 'underline' }}
                        >
                            Priority of Request
                        </Typography>}
                        <RadioGroup
                            aria-label="priority"
                            name="priority"
                            value={form.priority}
                            onChange={handlePriorityInput}
                        >
                            <FormControlLabel
                                value="low"
                                control={<Radio />}
                                label={<Typography style={{ color: 'black', fontSize: 15}}>Low</Typography>}
                            />
                            <FormControlLabel
                                value="medium"
                                control={<Radio />}
                                label={<Typography style={{ color: 'black', fontSize: 15 }}>Medium</Typography>}
                            />
                            <FormControlLabel
                                value="high"
                                control={<Radio />}
                                label={<Typography style={{ color: 'black', fontSize: 15 }}>High</Typography>}
                            />
                            <FormControlLabel
                                value="EMERGENCY"
                                control={<Radio />}
                                label={<Typography style={{ color: 'red', fontSize: 15 }}>EMERGENCY</Typography>}
                            />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={6}>
                        {<Typography
                            color={"black"}
                            fontStyle={"Open Sans"}
                            fontSize={15}
                            fontWeight="bold"
                            textAlign="center"
                            sx={{ textDecoration: 'underline' }}
                        >
                            Status of Request
                        </Typography>}
                        <RadioGroup
                            aria-label="status"
                            name="status"
                            value={form.status}
                            onChange={handleStatusInput}
                        >
                            <FormControlLabel
                                value="unassigned"
                                control={<Radio />}
                                label={<Typography style={{ color: 'black', fontSize: 15}}>Unassigned</Typography>}
                            />
                            <FormControlLabel
                                value="assigned"
                                control={<Radio />}
                                label={<Typography style={{ color: 'black', fontSize: 15 }}>Assigned</Typography>}
                            />
                            <FormControlLabel
                                value="inProgress"
                                control={<Radio />}
                                label={<Typography style={{ color: 'black', fontSize: 15 }}>In Progress</Typography>}
                            />
                            <FormControlLabel
                                value="closed"
                                control={<Radio />}
                                label={<Typography style={{ color: 'black', fontSize: 15 }}>Closed</Typography>}
                            />
                        </RadioGroup>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{ display: "flex", my: 2, justifyContent: "center" }}
                    >
                        <Box>
                            <SubmitButton text={"SUBMIT"} input={form} clear={clear} handleSubmit={handleSubmit}/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
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
                    rowSpacing={2}
                    columnSpacing={2}
                    justifyContent={"space-between"}
                    boxShadow={4}
                    sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
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
                            Current Requests
                        </Typography>
                        {submittedForms.map((submittedForm, index) => (
                            <Grid key={index}>
                                <Typography
                                    color={"white"}
                                    align={"center"}
                                    fontStyle={"Open Sans"}
                                    fontSize={15}
                                >
                                    Name: {submittedForm.name} | Location: {submittedForm.location} | Priority: {submittedForm.priority} | Security Options: {submittedForm.securityoption.join(" ")} | Categories: {submittedForm.categories.join(" ")} | Status: {submittedForm.status}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Stack>
  )
}

export default App
