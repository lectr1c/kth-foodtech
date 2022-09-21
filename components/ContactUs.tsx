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
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';
import {event} from "next/dist/build/output/log";
import axios from "axios";

const social = [BrandTwitter, BrandYoutube, BrandInstagram];

export function ContactUs() {

  const { width } = useViewportSize();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");


  const theme = useMantineTheme();
  const scheme = theme.colorScheme;

  function sendMessage() {
    axios.post("/api/email", { from: email, name: name, message: message })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
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
            <Button onClick={() => sendMessage()}>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}

export default ContactUs;