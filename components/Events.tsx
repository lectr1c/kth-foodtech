import {useListState, useViewportSize} from "@mantine/hooks";
import {TEvent, TStaff} from "../types";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const Events = () => {

    const [matches860, set860] = useState(true);
    const [matches600, set600] = useState(true);

    const { width } = useViewportSize();
    const date = new Date();
    const dateToday = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

    useEffect(() => {
        set860(window.matchMedia('(min-width: 800px)').matches);
        set600(window.matchMedia('(min-width: 600px)').matches);
    }, [width])


    const [eventList, setEvents] = useListState<TEvent>([]);

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
                                
                                {event.eventDate == dateToday? <Badge color="green" variant="light">Upcoming</Badge>: <Badge color="red" variant="light"> Previous </Badge>}
                                
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