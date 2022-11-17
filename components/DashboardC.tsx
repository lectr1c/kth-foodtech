
import {Textarea, TextInput, Title, Button, Divider} from "@mantine/core";
import styles from "../styles/admin.module.css";
import WavesSpacer from "./WavesSpacer";
import {useEffect, useState} from "react";
import {TEvent, TStaff} from "../types";
import axios from "axios";
import {showNotification} from "@mantine/notifications";

const DashboardC = () => {

    const [newEvent, setNewEvent] = useState<TEvent>({});
    const [newStaff, setNewStaff] = useState<TStaff>({});

    const AddStaff = () => {
        axios.post("/api/staff", newStaff)
        .then((value) => {
            showNotification({
                title: "Success",
                message: "Staff Added!",
                color: 'green'
            })
        })
        .catch((err) => {
            showNotification({
                title: "Error",
                message: err.message,
                color: 'red'
            })
        })
    }

    const AddEvent = () => {
        console.log("yoo")
        axios.post("/api/event", newEvent)
            .then((value) => {
                showNotification({
                    title: "Success",
                    message: "Event Added!",
                    color: 'green'
                })
            })
            .catch((err) => {
                showNotification({
                    title: "Error",
                    message: err.message,
                    color: 'red'
                })
            })
    }

    return (
        <>
            <div className={styles.eventAddContainer}>
                <div className={styles.eventAdd}>
                    <Title>Add Event</Title>
                    <TextInput mt={30} label={"Title"} placeholder={"Title"} value={newEvent.title} onChange={(event) => setTitle(event.currentTarget.value)}/>
                    <TextInput mt={30} label={"Brief"} placeholder={"Brief"} value={newEvent.brief} onChange={(event) => setBrief(event.currentTarget.value)}/>
                    <Textarea mt={30} label={"Description"} placeholder={"Description"} value={newEvent.description} onChange={(event) => setDescription(event.currentTarget.value)}/>
                    <TextInput mt={30} label={"Image"} placeholder={"Image URL"} value={newEvent.imageURL} onChange={(event) => setImage(event.currentTarget.value)}/>
                    <Button size={"md"} mt={30} onClick={() => {AddEvent()}}>Add Event</Button>
                </div>
                <Divider/>
                <div className={styles.eventAdd}>
                    <Title mt={50}>Add Staff</Title>
                    <TextInput mt={30} label={"Name"} placeholder={"Name"} value={newStaff.name} onChange={(event) => setName(event.currentTarget.value)}/>
                    <TextInput mt={30} label={"Email"} placeholder={"Email"} value={newStaff.email} onChange={(event) => setEmail(event.currentTarget.value)}/>
                    <TextInput mt={30} label={"Role"} placeholder={"Role"} value={newStaff.role} onChange={(event) => setRole(event.currentTarget.value)}/>
                    <TextInput mt={30} label={"Image"} placeholder={"Image URL"} value={newStaff.pictureURL} onChange={(event) => setProfileImage(event.currentTarget.value)}/>
                    <Button size={"md"} mt={30} onClick={() => AddStaff()}>Add Staff</Button>
                </div>
            </div>
        </>
    )


    function setName(value: string) {
        setNewStaff(event => ({
            ...event,
            name: value
        }))
    }

    function setEmail(value: string) {
        setNewStaff(event => ({
            ...event,
            email: value
        }))
    }

    function setRole(value: string) {
        setNewStaff(event => ({
            ...event,
            role: value
        }))
    }

    function setProfileImage(value: string) {
        setNewStaff(event => ({
            ...event,
            pictureURL: value
        }))
    }

    function setTitle(value: string) {
        setNewEvent(event => ({
            ...event,
            title: value
        }))
    }

    function setBrief(value: string) {
        setNewEvent(event => ({
            ...event,
            brief: value
        }))
    }

    function setDescription(value: string) {
        setNewEvent(event => ({
            ...event,
            description: value
        }))
    }

    function setImage(value: string) {
        setNewEvent(event => ({
            ...event,
            imageURL: value
        }))
    }
}

export default DashboardC