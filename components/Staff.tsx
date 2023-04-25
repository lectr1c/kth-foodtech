import { createStyles, Divider, Group, Image, Text, Title, useMantineTheme, ActionIcon, Avatar, Autocomplete, Button} from "@mantine/core";
import {useEffect, useState} from "react";
import {useListState, useViewportSize} from "@mantine/hooks";
import { IconBrandLinkedin } from '@tabler/icons';
import {TStaff} from "../types";
import axios from "axios";
import styles from "../styles/staff.module.css";
import {showNotification} from "@mantine/notifications";
import { useRouter } from "next/router";

const Staff = ({deleteMode} : { deleteMode : boolean }) => {

    const [staffList, setStaff] = useListState<TStaff>([]);
    const router = useRouter()

    useEffect(() => {
        axios.get("/api/staff")
            .then((value: any) => {
                setStaff.setState(value.data);
                console.log(staffList);
            })
    }, []);

    const theme = useMantineTheme();
    const scheme = theme.colorScheme;
    return (
        <div className={styles.staffContainer}>
            {staffList.map(staff => {
                return (
                    <div>
                    <Text
                    variant="gradient"
                    gradient={{ from: 'teal', to: 'green', deg: 60 }}
                    sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                    ta="center"
                    fz="xl"
                    fw={700}
                    >
                    {staff.name}
                </Text>
                
                    <div key={staff._id} className={styles.staffCard}>
                            <Image 
                                src={staff.pictureURL} 
                                height={500}
                                width={600}
                                mx="auto"
                                fit="contain"
                                alt={staff.name}
                                caption={staff.name}
                                radius="md"/>
                        <div>
                            {/* <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                                {staff.role}
                                </Text> */}
                            {/*<Button 
                                compact 
                                variant="gradient" 
                                gradient={{ from: 'teal', to: 'green', deg: 60 }} 
                                component = {"a"}
                                target="_blank"
                                href={staff.linkedIn} 
                                color="white"
                            leftIcon={<IconBrandLinkedin size={18} />}>LinkedIn</Button>*/}
                            
                            {deleteMode ? <Button mt="md" color={"red"} onClick={() => deleteStaff(staff._id)}>Delete</Button> : 
                            <></>}
                        </div>
                    </div>
                    </div>
                )
            })}

        </div>
    )

    function deleteStaff(_id: number | undefined) {
        console.log(_id);
        axios.delete("/api/staff", { data: {id: _id}})
            .then((value: any) => {
                showNotification(
                    {
                        title: "Deleted",
                        color: "green",
                        message: "Successfully deleted user"
                    }
                )
                router.reload();
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



export default Staff;