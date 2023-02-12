import {useListState, useViewportSize} from "@mantine/hooks";
import {TEvent, TStaff} from "../types";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import dayjs from "dayjs";

const Events = () => {

    const [matches860, set860] = useState(true);
    const [matches600, set600] = useState(true);

    const { width } = useViewportSize();
    const date = new Date();
    const dateToday = dayjs();

    useEffect(() => {
        set860(window.matchMedia('(min-width: 800px)').matches);
        set600(window.matchMedia('(min-width: 600px)').matches);
    }, [width])


    const [eventList, setEvents] = useListState<TEvent>([]);

    function combineTimeAndDate(time: Date, date: Date) {
        if (!(date instanceof Date)) return undefined;
        if (!(time instanceof Date)) return date;

        const hour = dayjs(time).hour();
        const minute = dayjs(time).minute();
        const dateAndTime = dayjs(date).hour(hour).minute(minute);

        return dateAndTime.toDate();
    }

    const combinedDate : Date = combineTimeAndDate(time, date) || new Date();

    useEffect(() => {
        axios.get("/api/event")
            .then(value => {
                setEvents.setState(value.data);
                console.log(eventList);
            })
    }, []);

    return (
        <div id="events">
            <Text className={styles.Title} color={"light"} weight={300} mb={-20} style={{fontSize: matches600 ? "52px" : "32px"}}>Upcoming Events</Text>
            <div className={styles.eventContainer}>
            {eventList.map(event => {
                return (
                        <Card className={styles.eventCard} key={event._id} shadow="sm" p="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={event.imageURL}
                                    height={160}
                                    alt={event.title + " Image"}
                                />
                            </Card.Section>

                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>{event.title}</Text>
                                
                                {dayjs(event.eventDate).format('YYYY-MM-DD HH:mm') >= dayjs(combinedDate).format('YYYY-MM-DD HH:mm') ? <Badge color="green" variant="light">Upcoming</Badge>: <Badge color="red" variant="light"> Previous </Badge>}
                                
                            </Group>

                            <Text size="sm" color="dimmed">
                                {event.brief}
                            </Text>

                            <Button component={"a"} href={"/event/" + event._id} variant="light" color="blue" fullWidth mt="md" radius="md">
                                More Details
                            </Button>
                        </Card>
                )
            })}
            </div>
        </div>
    )
}

export default Events;