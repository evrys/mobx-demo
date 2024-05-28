import redSquirrelImg from "./images/redSquirrel.webp"
import blackSquirrelImg from "./images/blackSquirrel.webp"
import { makeAutoObservable } from "mobx"

export const availableImagesById = {
  redSquirrelImg,
  blackSquirrelImg,
}

export const availableImageIds = Object.keys(
  availableImagesById,
) as SquirrelImageId[]

export type SquirrelImageId = keyof typeof availableImagesById

export class Squirrel {
  imageId: SquirrelImageId = "redSquirrelImg"
  name: string = ""
  age: string = ""
  favoriteTree: string = ""
  specialPower: string = ""

  constructor() {
    makeAutoObservable(this)
  }

  get save() {
    return {
      imageId: this.imageId,
      name: this.name,
      age: this.age,
      favoriteTree: this.favoriteTree,
      specialPower: this.specialPower,
    }
  }

  load(save: Squirrel["save"]) {
    this.imageId = save.imageId
    this.name = save.name
    this.age = save.age
    this.favoriteTree = save.favoriteTree
    this.specialPower = save.specialPower
  }
}
