import styles from './page.module.css'
import Switch from "@mui/material/Switch";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <span>Santa test:</span>
      </div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />


      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

    </div>
  );
}