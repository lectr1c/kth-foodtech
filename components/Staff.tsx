import { createStyles, Divider, Group, Text, Title, useMantineTheme, ActionIcon, Avatar, Autocomplete} from "@mantine/core";
import {useEffect, useState} from "react";
import {useListState, useViewportSize} from "@mantine/hooks";
import { BrandLinkedin, BrandTwitter } from 'tabler-icons-react';
import {TStaff} from "../types";
import axios from "axios";
import styles from "../styles/staff.module.css";

const Staff = () => {

    const [staffList, setStaff] = useListState<TStaff>([]);

    useEffect(() => {
        axios.get("https://kth-foodtech-lectr1c.vercel.app/api/staff")
            .then(value => {
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

                            <Group noWrap spacing={10} mt={3}>
                                <ActionIcon size='lg'>
                                    <BrandLinkedin size={18} />
                                </ActionIcon>
                            </Group>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Staff;