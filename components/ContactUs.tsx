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

const social = [BrandTwitter, BrandYoutube, BrandInstagram];

export function ContactUs() {

  const { width } = useViewportSize();


  const theme = useMantineTheme();
  const scheme = theme.colorScheme;

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} variant="transparent">
      <Icon size={22} />
    </ActionIcon>
  ));

  return (
    <div className={styles.contactContainer} id={"contact"}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title>Contact us</Title>
          <Text mt="sm" mb={30}>
            Leave your email and we will get back to you.
          </Text>


          <Group mt="xl">{icons}</Group>
        </div>
        <div>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
          />
          <Textarea
            required
            label="Your message"
            placeholder="I would like to connect"
            minRows={4}
            mt="md"
          />

          <Group position="right" mt="md">
            <Button>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}

export default ContactUs;