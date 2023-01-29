import { showNotification } from "@mantine/notifications";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import { TEvent } from "../../types";
import styles from "../../styles/Event.module.css";
import Image from 'next/image'
import { Title, Text, Group, Button } from "@mantine/core";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";


const EventPage = () => {

          const { data: session } = useSession();
          const router = useRouter()
          const { eid } = router.query
          const [event, setEvent] = useState<TEvent>({});

          useEffect(() => {
                    if (eid) {
                              axios.get(`/api/event?id=${eid}`)
                              .then((val) => {
                                        console.log(val); 
                                        setEvent(val.data)})
                              .catch((err) => { 
                                        showNotification({
                                                  message: "Error",
                                                  color: "red",
                                                  title: "Error"
                                        })
                              })
                    }
          }, [eid]);

          const [auth, setAuth] = useState<Boolean>(false);

          useEffect(() => {
                    axios.get("/api/authorise").then(res => {
                              if (res.status === 200) { setAuth(true); }
                    }).catch(err => {
                              console.log(err);
                    })
          }, [])

          return (
          <>
          <Navigation/>
          <div>
                    {event.imageURL ? 
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                    className={styles.Image}
                    src={event.imageURL}
                    alt="Event Image"
                    /> 
                    : <></>}
                    <div className={styles.HeaderContainer}>
                              <Title m={20}>{event.title}</Title>
                              <div className={styles.Date}>
                              <Title size={20} mr={30}>Event Date</Title>
                              <Text color={"lime"}>{dayjs(event.eventDate).format('YYYY-MM-DD HH:mm')}</Text>
                              {session && auth ? <Button ml={10} color={"red"} onClick={() => { deleteEvent(event._id) }}>Delete Event</Button> : <></>}
                              </div>
                    </div>
                    <div className={styles.MainContainer}>
                              <Text m={10} weight={600} size={17} color={'teal'}>{event.brief}</Text>
                              <Text m={50}>{event.description}</Text>
                    </div> 
                    <div className={styles.ButtonContainer}>
                    <Button component={"a"} href={event.link} variant="light" color="green" radius="md">
                                Sign up
                            </Button>
                    </div>
          </div>
          <Footer/>
          </>
          )

          function deleteEvent(_id: number | undefined) {
                    axios.delete("/api/event", { data: {id: _id}})
                        .then((value: any) => {
                            showNotification(
                                {
                                    title: "Deleted",
                                    color: "green",
                                    message: "Successfully deleted event"
                                }
                            )
                            router.back();
                        })
                        .catch((err) => {
                            showNotification(
                                {
                                    title: "Error Deleting",
                                    color: "red",
                                    message: err.message
                                }
                            )
                        })
                }
}

export default EventPage;