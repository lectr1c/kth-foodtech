import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

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
                <SunIcon style={{ width: 18, height: 18 }} />
            ) : (
                <MoonIcon style={{ width: 18, height: 18 }} />
            )}
        </ActionIcon>
    );
}

export default SchemeToggler;