import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material"
import redSquirrelImg from "./images/redSquirrel.webp"
import blackSquirrelImg from "./images/blackSquirrel.webp"
import Image from "next/image"
import { useState } from "react"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

const availableImagesById = {
  redSquirrelImg,
  blackSquirrelImg,
}

const availableImageIds = Object.keys(availableImagesById) as SquirrelImageId[]

type SquirrelImageId = keyof typeof availableImagesById

const availableTrees = [
  {
    id: "oak",
    name: "Oak",
  },
  {
    id: "pine",
    name: "Pine",
  },
  {
    id: "yew",
    name: "Yew",
  },
  {
    id: "walnut",
    name: "Walnut",
  },
  {
    id: "maple",
    name: "Maple",
  },
  {
    id: "blackthorn",
    name: "Blackthorn",
  },
  {
    id: "hawthorn",
    name: "Hawthorn",
  },
]

export const SquirrelEditor = () => {
  const [imageId, setImageId] = useState<SquirrelImageId>("redSquirrelImg")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [favoriteTree, setFavoriteTree] = useState("")
  const [specialPower, setSpecialPower] = useState("")

  return (
    <>
      <h1>Squirrel Editor</h1>
      <Stack spacing={3}>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack direction="row" spacing={2}>
            <Stack>
              <SquirrelImageChanger
                imageId={imageId}
                onImageIdChange={setImageId}
              />
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack spacing={2} width="300px" justifyContent="center">
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <TextField
                type="number"
                label="Age (in years)"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />

              <FormControl>
                <InputLabel id="favorite-tree">Favorite Tree</InputLabel>
                <Select
                  labelId="favorite-tree"
                  label="Favorite Tree"
                  value={favoriteTree}
                  onChange={(e) => setFavoriteTree(e.target.value)}
                >
                  {availableTrees.map((tree) => (
                    <MenuItem key={tree.id} value={tree.id}>
                      {tree.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                label="Special Power"
                value={specialPower}
                onChange={(e) => setSpecialPower(e.target.value)}
              />
            </Stack>
          </Stack>
        </form>
      </Stack>
    </>
  )
}

type SquirrelImageChangerProps = {
  imageId: SquirrelImageId
  onImageIdChange: (newImageId: SquirrelImageId) => void
}

const SquirrelImageChanger = ({
  imageId,
  onImageIdChange,
}: SquirrelImageChangerProps) => {
  const currentIndex = availableImageIds.indexOf(imageId)

  function previousImage() {
    const newIndex =
      currentIndex === 0 ? availableImageIds.length - 1 : currentIndex - 1
    onImageIdChange(availableImageIds[newIndex])
  }

  function nextImage() {
    const newIndex =
      currentIndex === availableImageIds.length - 1 ? 0 : currentIndex + 1
    onImageIdChange(availableImageIds[newIndex])
  }

  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        "& button": {
          color: "#333",
          "& svg": {
            fontSize: "3rem",
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      }}
    >
      <Stack direction="row">
        <Button variant="text" disableRipple={true} onClick={previousImage}>
          <ChevronLeftIcon />
        </Button>

        <Image
          src={availableImagesById[imageId]}
          alt="Picture of squirrel"
          width={300}
          height={300}
        />

        <Button variant="text" disableRipple={true} onClick={nextImage}>
          <ChevronRightIcon />
        </Button>
      </Stack>
    </Box>
  )
}
