
import { useState, useRef, useEffect} from 'react';
import {Checkbox, UnstyledButton, TextInput, Title, 
    Button, Divider, Autocomplete, Loader, Text, Group, List, ThemeIcon} from "@mantine/core";
import styles from "../styles/signup.module.css";
import { IconAt, IconWriting, IconBrandDrupal } from '@tabler/icons';
import {TSignUp} from "../types";
import axios from "axios";
import { showNotification } from '@mantine/notifications';

const SignUp = () => {

    const [newMember, setNewMember] = useState<TSignUp>({});
    
    const timeoutRef = useRef<number>(-1);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<string[]>([]);
    const [eligible, setEligible]=useState(false);

    const handleChange = (val: string) => {
        window.clearTimeout(timeoutRef.current);
        setEmail(val);
        setData([]);

    if (val.trim().length === 0 || val.includes('@')) {
        setLoading(false);
    } else {
        setLoading(true);
        timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(['gmail.com', 'kth.com', 'outlook.com'].map((provider) => `${val}@${provider}`));
        }, 1000);
    }
};

function putUser() {
    axios.post("/api/sign", newMember)
        .then(res => {
          showNotification({
            title: "Successful",
            message:"Welcome to the team!",
            color: "green"
          })
        })
        .catch(err => {
            showNotification({
            title: "Error",
            message: "You could not join!",
            color: "red"
            })
        })
}

function setName(value: string) {
    setNewMember(event => ({
        ...event,
        fullName: value
    }))
}

function setEmail(value: string) {
    setNewMember(event => ({
        ...event,
        email: value
    }))
}

function setStatus(checked: boolean) {
    setNewMember(event => ({
        ...event,
        accept: checked
    }))
}


    return (
        <>
            <div className={styles.memberAddContainer}>
                <div className={styles.eventAdd}>
                    <Title>KTH Foodtech membership sign up</Title>
                    <Text mt={30}>Becoming a member at KTH Foodtech entails:
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                mt={30}
                                icon={
                                    <ThemeIcon 
                                        variant="gradient" 
                                        gradient={{ from: 'blue', to: 'green', deg: 60 }}
                                        size={24}
                                        radius = "xl"
                                        ><IconBrandDrupal size={16}/>
                                        </ThemeIcon>

                                }
                                >
                                    <List.Item>Getting the monthly newsletter sent via email including interesting foodtech related facts and recipes.</List.Item>
                                    <List.Item>Early information and access to sign up to upcoming events.</List.Item>
                                    <List.Item>When a limited number of spots or food are available at events, members are prioritized. </List.Item>
                                </List>
                            
                    </Text>
                    <TextInput mt={30} 
                        value={newMember.fullName}
                        label={"Full Name"}  
                        icon={<IconWriting size={18} />}placeholder={"Full Name"}
                        onChange={(event) => setName(event.currentTarget.value) }/>
                    <Autocomplete
                        value={newMember.email}
                        data={data}
                        onChange={handleChange}
                        icon = {<IconAt size={18}/>}
                        rightSection={loading ? <Loader size={16} /> : null}
                        label="Email"
                        placeholder="Your email"
                        required
                    />
                    <UnstyledButton 
                        mt={30} 
                        className={styles.checkBoxButton}
                        >
                        <Group>
                            <Checkbox
                            checked={newMember.accept}
                            onChange={(event) => {setStatus(event.currentTarget.checked); setEligible(eligible => !eligible)}}
                            styles={{ input: { cursor: 'pointer' }}}
                            mr="xl"
                            tabIndex={-1}
                            size="md"
                            error = "Required"
                            />
                            <Text size="sm" color="dimmed">
                                I consent to KTH Foodtech storing the replies to this form.  The information you 
                                entered will only be available to KTH Foodtech board members and 
                                only for the purposes stated above. You can unsubscribe at any point, upon which your 
                                personal information will be deleted.
                            </Text>
                        </Group>
                    </UnstyledButton>
                    {eligible === true?
                    <Button size={"md"} mt={30} 
                    variant="gradient" 
                    gradient={{ from: 'teal', to: 'green', deg: 60 }}
                    onClick={() => putUser()}
                    >Sign Up</Button>:
                    <Button data-disabled
                    size={"md"}
                    mt={30}
                    >Sign Up</Button>}
                </div>
                <Divider/>
            </div>
        </>
    )
    
}

export default SignUp;