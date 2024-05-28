"use client"

import { Stack } from "@mui/material"
import { SquirrelEditor } from "./SquirrelEditor"
import { useEffect, useMemo } from "react"
import { Squirrel } from "./Squirrel"
import { autorun } from "mobx"
import { observer } from "mobx-react-lite"

const useAutorun = (fn: () => void) => {
  useEffect(() => {
    const disposer = autorun(fn)
    return () => disposer()
  }, [fn])
}

const Home = observer(() => {
  const squirrels = useMemo(() => [new Squirrel(), new Squirrel()], [])

  useEffect(() => {
    for (const [i, squirrel] of Object.entries(squirrels)) {
      const save = localStorage.getItem(`squirrel${i}`)
      if (save) {
        squirrel.load(JSON.parse(save))
      }
    }
  }, [])

  useAutorun(() => {
    for (const [i, squirrel] of Object.entries(squirrels)) {
      localStorage.setItem(`squirrel${i}`, JSON.stringify(squirrel.save))
    }
  })

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SquirrelEditor squirrel={squirrels[0]} />
      <SquirrelEditor squirrel={squirrels[1]} />
    </Stack>
  )
})

export default Home
