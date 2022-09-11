import React from 'react';
import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import { BrandLinkedin, BrandFacebook, BrandInstagram } from 'tabler-icons-react';
import { Avatar } from '@mantine/core';

import Burger from '../.pictures/foodtech-burger-pic.jpeg'

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

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <Avatar   alt="logo"/>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <a href='https://www.linkedin.com/company/kth-foodtech?originalSubdomain=se'>
              <BrandLinkedin size={18}/>
            </a>
          </ActionIcon>
          <ActionIcon size="lg">
            <a href='https://www.facebook.com/kthfoodtech/'>
              <BrandFacebook size={18}/>
            </a>
          </ActionIcon>
          <ActionIcon component ='a' size="lg">
            <a href='https://www.instagram.com/kthfoodtech/'>
              <BrandInstagram size={18}/>
            </a>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
export default Footer;

