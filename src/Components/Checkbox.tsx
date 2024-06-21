import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Label } from "@mui/icons-material";
import { FavoriteBorder, Favorite , Bookmark} from "@mui/icons-material";

export default function () {
  return (
    <>
      <Checkbox
        color="secondary"
        size="large"
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <Checkbox
        color="secondary"
        size="large"
        checkedIcon={<Favorite />}
      />
      
      <Checkbox
        color="secondary"
        size="large"
        icon={<Bookmark/>}
        checkedIcon={<Bookmark/>}
      />
      
    </>
  );
}
