import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function LoginButton({label,onClick}) {
  return (
    <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={onClick}>{ label}</Button>
    </Stack>
  );
}
