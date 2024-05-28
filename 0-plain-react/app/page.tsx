"use client"

import { Stack } from "@mui/material"
import { SquirrelEditor } from "./SquirrelEditor"

export default function Home() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SquirrelEditor />
    </Stack>
  )
}
