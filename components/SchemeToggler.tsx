import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, Moon } from 'tabler-icons-react';

const SchemeToggler = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant="filled"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            size={"xl"}
            radius={"md"}
            title="Toggle color scheme"
            style={{
                position: "fixed",
                bottom: '10px',
                right: '10px',
                zIndex: 1000
            }}
        >
            {dark ? (
                <Sun style={{ width: 25, height: 25 }} />
            ) : (
                <Moon style={{ width: 25, height: 25 }} />
            )}
        </ActionIcon>
    );
}

export default SchemeToggler;