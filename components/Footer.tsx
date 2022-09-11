import React from 'react';
import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import { BrandLinkedin, BrandFacebook, BrandInstagram } from 'tabler-icons-react';
import Image from "next/image";
import logo from "../public/logo.svg";
import darklogo from "../public/blacklogo.svg";
import {useMantineTheme} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <a style={{display: "inline-block", verticalAlign: "middle", maxHeight: '60px', maxWidth: '180px', minWidth: '100px', position: "relative", marginTop: '5px'}}>
                        <Image
                          src={theme.colorScheme == 'dark' ? logo : darklogo }
                          alt="KTH Foodtech logo"
                        />
                    </a>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <BrandLinkedin size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandFacebook size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
export default Footer;

