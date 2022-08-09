import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: object[] = [
    {name: "Habitat dome"},
    {name: "Drones"},
    {name: "Food containers"},
    {name: "Oxygen tanks"}
  ];

  equipmentBeingEdited: object = null;

  buttonColor = "yellow";
  cargoHoldArray = [];
  cargoMass = 0;
  disableButton = false;
  maxItems = 0;
  maximumAllowedMass = 0;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string) {

    this.equipment.push({name: memberName});
  }

  remove(member: object) {
    let index = this.equipment.indexOf(member);
    this.equipment.splice(index, 1);
  }

  edit(member: object) {
    this.equipmentBeingEdited = member;
 }

 save(name: string, member: object) {
  member['name'] = name;
  this.equipmentBeingEdited = null;
  }

  addToCargoHold(){

  }

  addItem(member: object){
    for(let i in this.equipment){
      this.cargoHoldArray[i] = member;
      if(this.cargoMass <=200){
        return true;
      } else {
        return false;
      }
      if(this.cargoHoldArray.length === this.maxItems || this.cargoMass> this.maximumAllowedMass) {
        this.disableButton = true;
      }
    }
  }
empty(){
  this.cargoHoldArray = [];
  this.cargoMass = 0;
  this.disableButton = false;
}


}

