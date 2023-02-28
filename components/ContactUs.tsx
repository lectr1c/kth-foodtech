import React from 'react';
import {useEffect, useState} from "react";
import {useViewportSize} from "@mantine/hooks";
import {useMantineTheme} from "@mantine/core";
import styles from "../styles/contact.module.css";

import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from '@mantine/core';
import { IconSend} from '@tabler/icons';

import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';
import {event} from "next/dist/build/output/log";
import axios from "axios";
import { showNotification } from '@mantine/notifications';

const social = [BrandTwitter, BrandYoutube, BrandInstagram];

export function ContactUs() {

  const { width } = useViewportSize();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");


  const theme = useMantineTheme();
  const scheme = theme.colorScheme;

  function sendMessage() {
    axios.post("/api/email", { email: email, name: name, message: message })
        .then(res => {
          showNotification({
            title: "Sent email!",
            message: "Your message has been sent! We will get back to you shortly!",
            color: "green"
          })
        })
        .catch(err => {
          showNotification({
            title: "Error",
            message: "Your email couldn't be sent!",
            color: "red"
          })
        })
  }

  return (
    <div className={styles.contactContainer} id={"contact"}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title>Contact us</Title>
          <Text mt="sm" mb={30}>
            Leave your email and we will get back to you.
          </Text>
        </div>
        <div>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value) }
            required
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
          <Textarea
            required
            label="Your message"
            placeholder="I would like to connect"
            minRows={4}
            mt="md"
            value={message}
            onChange={(event) => setMessage(event.currentTarget.value)}
          />

          <Group position="right" mt="md">
            <Button 
            variant="gradient" 
            gradient={{ from: 'blue', to: 'green', deg: 60 }}
            leftIcon={<IconSend size={16}/>}
            onClick={() => sendMessage()}>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}

export default ContactUs;