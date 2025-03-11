import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function LTextField({style,label,value,onChange}) {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label={label} variant="filled" sx={style} value={value} onChange={onChange}/>
    </Box>
  );
}
