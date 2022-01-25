import { action, makeObservable, observable } from "mobx";
import petsData from "./petsData";
class PetStore {
  pets = petsData;

  constructor() {
    makeObservable(this, {
      pets: observable,
      handleAdopt: action,
    });
  }
  handleUpdatePet = (petUpdated, petID) => {
    this.pets = this.pets.map((pet) =>
      pet.id === petID
        ? {
            id: petID,
            name: petUpdated.newName,
            type: petUpdated.newType,
            image: petUpdated.newImage,
          }
        : pet
    );
    console.log(this.pets);
  };
  handleAddPet = (pet) => {
    let newID;
    if (this.pets.length == 0) {
      newID = 1;
    } else {
      newID = this.pets[this.pets.length - 1].id + 1;
    }
    this.pets = [
      ...this.pets,
      {
        id: newID,
        name: pet.name,
        type: pet.type,
        image: pet.image,
      },
    ];

    console.log(this.pets);
  };
  handleAdopt = (petId) => {
    this.pets = this.pets.filter((pet) => pet.id !== petId);
  };
}

const petStore = new PetStore();
export default petStore;
