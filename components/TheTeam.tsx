import { createStyles, Divider, Group, Text, Title, useMantineTheme, ActionIcon, Avatar, Autocomplete} from "@mantine/core";
import {useEffect, useState} from "react";
import {useViewportSize} from "@mantine/hooks";
import { BrandLinkedin, BrandTwitter } from 'tabler-icons-react';
import Carpic from '../public/.pictures/car.jpg';


const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Fira Sans, ${theme.fontFamily}`,
  },
}));

interface TheTeam{
  avatar: string;
  name: string;
  title: string;
}
const TheTeam = ({avatar, name, title}: TheTeam) => {

    const [matches860, set860] = useState(true);
    const [matches600, set600] = useState(true);

    const { width } = useViewportSize();

    useEffect(() => {
        set860(window.matchMedia('(min-width: 800px)').matches);
        set600(window.matchMedia('(min-width: 600px)').matches);
    }, [width])


    const theme = useMantineTheme();
    const { classes } = useStyles();
    const scheme = theme.colorScheme;
    return (
        <div style={{
            width: '100%',
            position: 'relative',
            minHeight: 'auto',
            marginTop: matches860 ? '-60px' : '-20px',
            zIndex: -1,
            color: scheme === "dark" ? "white" : "black",
            paddingBottom: 100
        }}>
          <Group position={"center"} style={{ top: matches600 ? '110px' : '70px', margin: "auto", position: "relative", width: matches860 ? '70vw' : '90vw'}}>
            <Text variant={"gradient"} gradient={{from: 'teal', to: 'cyan', deg: 180}} weight={400} mb={-20} style={{fontSize: matches600 ? "52px" : "32px"}}>The Team</Text>
              <div style={{
                width: '100%',
                position:'relative',
                minHeight: 'auto',
                zIndex: -1, 
                margin: 'auto',
                marginTop: 50,
                paddingBottom: 100
            }}>
      
                <Group noWrap>
                  <Avatar src='' alt='some name' size={94} radius="md"/>
                  <div>
                    <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                      Project Manager
                    </Text>
                    <Text size="lg" weight={500} className={classes.name}>
                      Patricia
                    </Text>

                    <Group noWrap spacing={10} mt={3}>
                      <ActionIcon size='lg'>
                        <BrandLinkedin size={18} />
                      </ActionIcon>
                    </Group>
                  </div>

                  <Avatar size={94} radius="md" />
                  <div>
                    <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                      Cooporate Relations
                    </Text>
                    <Text size="lg" weight={500} className={classes.name}>
                        John
                    </Text>
                    <Group noWrap spacing={10} mt={3}>
                      <ActionIcon size='lg'>
                        <BrandLinkedin size={18} />
                      </ActionIcon>
                    </Group>
                  </div>

                  <Avatar size={94} radius="md" />
                  <div>
                    <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                      Public Relations
                    </Text>
                    <Text size="lg" weight={500} className={classes.name}>
                      Susan
                    </Text>
                    <Group noWrap spacing={10} mt={3}>
                      <ActionIcon size='lg'>
                        <BrandLinkedin size={18} />
                      </ActionIcon>
                    </Group>
                  </div>

                  <Avatar size={94} radius="md" />
                  <div>
                    <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                      Event Manager
                    </Text>
                    <Text size="lg" weight={500} className={classes.name}>
                      Phil
                    </Text>
                    <Group noWrap spacing={10} mt={3}>
                      <ActionIcon size='lg'>
                        <BrandLinkedin size={18} />
                      </ActionIcon>
                    </Group>
                  </div>

                  <Avatar size={94} radius="md" />
                  <div>
                    <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                      Web Developer
                    </Text>
                    <Text size="lg" weight={500} className={classes.name}>
                        Jabez
                    </Text>
                    <Group noWrap spacing={10} mt={3}>
                      <ActionIcon size='lg'>
                        <BrandLinkedin size={18} />
                      </ActionIcon>
                    </Group>
                  </div>

                </Group>

              </div>
            </Group>
        </div>
        
    )
}

export default TheTeam;