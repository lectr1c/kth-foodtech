
import {Textarea, TextInput, Title, Button, Divider} from "@mantine/core";
import styles from "../styles/admin.module.css";
import WavesSpacer from "./WavesSpacer";
import {useEffect, useState} from "react";
import {TEvent, TStaff} from "../types";
import axios from "axios";
import {showNotification} from "@mantine/notifications";
import { DatePicker, TimeInput } from "@mantine/dates";
import dayjs from "dayjs";
import { useRouter } from "next/router";

const DashboardC = () => {

    const [newEvent, setNewEvent] = useState<TEvent>({});
    const [newStaff, setNewStaff] = useState<TStaff>({});

    const router = useRouter();
    const [time, setTime] = useState(new Date());
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => { 
        const combinedDate : Date = combineTimeAndDate(time, date) || new Date();
        setNewEvent(event => ({
            ...event,
            eventDate: combinedDate
        }))
    }, [time, date]);

    const AddStaff = () => {
        axios.post("/api/staff", newStaff)
        .then((value) => {
            showNotification({
                title: "Success",
                message: "Staff Added!",
                color: 'green'
            })
            router.reload();
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
                    <DatePicker mt={30} label="Event Date" placeholder="Date" value={date} onChange={(event) => { setDate(event ? event : new Date()) }}/>
                    <TimeInput mt={20} label="Time" timePlaceholder="17" value={time} onChange={(event) => { setTime(event ? event : new Date())}}/>
                    <Textarea mt={30} label={"Description"} placeholder={"Description"} value={newEvent.description} onChange={(event) => setDescription(event.currentTarget.value)}/>
                    <TextInput mt={30} label={"Image"} placeholder={"Image URL"} value={newEvent.imageURL} onChange={(event) => setImage(event.currentTarget.value)}/>
                    <TextInput mt={30} label={"Link"} placeholder={"Link"} value={newEvent.link} onChange={(event) => setLink(event.currentTarget.value)}/>
                    <Button size={"md"} mt={30} onClick={() => { AddEvent() }}>Add Event</Button>
                </div>
                <Divider/>
                <div className={styles.eventAdd}>
                    <Title mt={50}>Add Staff</Title>
                    <TextInput mt={30} label={"Name"} placeholder={"Name"} value={newStaff.name} onChange={(event) => setName(event.currentTarget.value)}/>
                    <TextInput mt={30} label={"Email"} placeholder={"Email"} value={newStaff.email} onChange={(event) => setEmail(event.currentTarget.value)}/>
                   {/* <TextInput mt={30} label={"Role"} placeholder={"Role"} value={newStaff.role} onChange={(event) => setRole(event.currentTarget.value)}/> */}
                    <TextInput mt={30} label={"Image"} placeholder={"Image URL"} value={newStaff.pictureURL} onChange={(event) => setProfileImage(event.currentTarget.value)}/>
                  {/*  <TextInput mt={30} label={"LinkedIn"} placeholder={"LinkedIn"} value={newStaff.linkedIn} onChange={(event) => setLinkedIn(event.currentTarget.value)}/> */}
                    <Button size={"md"} mt={30} onClick={() => AddStaff()}>Add Staff</Button>
                </div>
            </div>
        </>
    )

    function combineTimeAndDate(time: Date, date: Date) {
        if (!(date instanceof Date)) return undefined;
        if (!(time instanceof Date)) return date;

        const hour = dayjs(time).hour();
        const minute = dayjs(time).minute();
        const dateAndTime = dayjs(date).hour(hour).minute(minute);

        return dateAndTime.toDate();
    }

    //setting staff

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

   /* function setRole(value: string) {
        setNewStaff(event => ({
            ...event,
            role: value
        }))
    }  */

    function setProfileImage(value: string) {
        setNewStaff(event => ({
            ...event,
            pictureURL: value
        }))
    }

  /*  function setLinkedIn(value: string) {
        setNewStaff(event => ({
            ...event,
            linkedIn: value
        }))
    } */

    //setting new event

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

    function setLink(value: string) {
        setNewEvent(event => ({
            ...event,
            link: value
        }))
    }
    
}

export default DashboardC