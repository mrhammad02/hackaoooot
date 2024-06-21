import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches(props:any) {
 const {onClick}=props
    return (
    <div>
      {/* <Switch {...label} defaultChecked /> */}
      <Switch {...onClick} onClick={onClick} color="success"/>
      {/* <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled /> */}
    </div>
  );
}
