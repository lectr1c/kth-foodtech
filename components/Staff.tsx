import { createStyles, Divider, Group, Text, Title, useMantineTheme, ActionIcon, Avatar, Autocomplete, Button} from "@mantine/core";
import {useEffect, useState} from "react";
import {useListState, useViewportSize} from "@mantine/hooks";
import { BrandLinkedin, BrandTwitter } from 'tabler-icons-react';
import {TStaff} from "../types";
import axios from "axios";
import styles from "../styles/staff.module.css";
import {showNotification} from "@mantine/notifications";

const Staff = ({deleteMode} : { deleteMode : boolean }) => {

    const [staffList, setStaff] = useListState<TStaff>([]);

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
                    <div key={staff._id} className={styles.staffCard}>
                        <Avatar src={staff.pictureURL} alt={staff.name} size={130} radius="md"/>
                        <div>
                            <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                                {staff.role}
                            </Text>
                            <Text size="lg" weight={500}>
                                {staff.name}
                            </Text>
                            {deleteMode ? <Button onClick={() => deleteStaff(staff._id)}>Delete</Button> : <></>}
                        </div>
                    </div>
                )
            })}

        </div>
    )

    function deleteStaff(_id: number | undefined) {
        axios.delete("/api/staff", { data: {id: _id}})
            .then((value: any) => {
                showNotification(
                    {
                        title: "Deleted",
                        color: "green",
                        message: "Successfully deleted user"
                    }
                )
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