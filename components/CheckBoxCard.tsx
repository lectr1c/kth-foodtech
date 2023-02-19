import { Autocomplete, Button, Loader, UnstyledButton, Checkbox, Text, TextInput, createStyles } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { useState, useRef } from 'react';
import axios from "axios";
import { showNotification } from '@mantine/notifications';

const useStyles = createStyles((theme) => ({
  button: {
    display: 'flex',
    width: '100%',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.lg,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
    },
  },
}));

interface CheckboxCardProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function CheckboxCard({
  checked,
  defaultChecked,
  onChange,
  className,
  ...others
}: CheckboxCardProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof CheckboxCardProps>) {
  const { classes, cx } = useStyles();

  const [value, handleClick] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const timeoutRef = useRef<number>(-1);
  const [val, setVal] = useState('');
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);


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
        setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
      }, 1000);
    }
  };

  
function putUser() {
    axios.post("/api/sign", { fullName: fullName, email: email, accept: status })
        .then(res => {
          showNotification({
            title: "Welcome to the team!",
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

  return (
    <div>
         <TextInput mt={30} 
                        value={fullName}
                        label={"Full Name"}  
                        placeholder={"Full Name"}
                        onChange={(event) => setName(event.currentTarget.value) }/>
            <Autocomplete
            mt={30}
      value={value}
      data={data}
      onChange={handleChange}
      rightSection={loading ? <Loader size={16} /> : null}
      label="Email"
      placeholder="Your email"
    />
    <UnstyledButton
      {...others}
      mt={30}
      onClick={() => handleClick(!value)}
      className={cx(classes.button, className)}
    >
      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        size="md"
        mr="xl"
        styles={{ input: { cursor: 'pointer' } }}
      />

      <div>
        <Text size="sm" color="dimmed">
          accept terms and conditions
        </Text>
      </div>
    </UnstyledButton>
    <Button size={"md"} mt={30} 
                    variant="gradient" 
                    gradient={{ from: 'teal', to: 'green', deg: 60 }}
                    onClick={() => putUser()}
                    >Sign Up</Button>
    </div>
  );
}
export default CheckboxCard;