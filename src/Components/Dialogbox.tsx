import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Stack,
  TextField,
  IconButton,
} from "@mui/material";
import CloseIcon  from "@mui/icons-material/Close";
import { useState } from "react";
export default function DialogCom() {
  const [open, setopen] = useState(false);
  const chooseaction = () => {
    setopen(true);
  };
  const chooselastaction = () => {
    setopen(false);
  };
  return (
    <>
      <Button onClick={chooseaction} variant="contained">Open</Button>
      <Dialog open={open} fullWidth maxWidth="sm">
        <DialogTitle>First Time</DialogTitle>
        <DialogContent>
          <DialogContentText>ye chal gaya</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={chooselastaction}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* <Button onClick={chooseaction} variant="contained">Open</Button>
      <Dialog open={open} fullWidth maxWidth="sm">
        <DialogTitle>
          First Time{" "}
          <IconButton style={{marginLeft:410}} onClick={chooselastaction}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField label="user" variant="outlined"></TextField>
            <TextField label="Email" variant="outlined"></TextField>
            <TextField label="Phone" variant="outlined"></TextField>
            <TextField label="Password" variant="outlined"></TextField>
            <Button variant="contained" onClick={chooselastaction}>
              Close
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog> */}
    </>
  );
}
