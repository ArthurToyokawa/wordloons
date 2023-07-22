export enum TowerClass {
  Primary,
  Military,
  Magic,
  Support
}
export enum specialProperties {
  Camo,
  Explosive,
  Magic,
  Frost,
  Support
}
//TODO put an special properties for if the tower has camo or anti metal properties 
// maybe put an attack type ex:explosive, energy, phisical etc

export type Option = {
  value: string
  label: string
  cost: number
  imageSrc: string
  isUpgrade: boolean // upgrade or tower
  hasAbility: boolean // if has activatable ability
  class: TowerClass
}

export const towerData : Option[] = [
  {
    value: "dartmonkey",
    label: "Dart monkey",
    cost: 215,
    imageSrc: "src/assets/dart-monkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Primary
  },
  {
    value: "boomerangmonkey",
    label: "Boomerang Monkey",
    cost: 350,
    imageSrc: "src/assets/BTD6_Boomerang_Monkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Primary
  },
  {
    value: "bombshooter",
    label: "Bomb Shooter",
    cost: 565,
    imageSrc: "src/assets/Bomb_Shooter.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Primary
  },
  {
    value: "tackshooter",
    label: "Tack Shooter",
    cost: 300,
    imageSrc: "src/assets/BTD6_Tack_Shooter.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Primary
  },
  {
    value: "icemonkey",
    label: "Ice Monkey",
    cost: 540,
    imageSrc: "src/assets/Ice_Monkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Primary
  },
  {
    value: "gluegunner",
    label: "Glue Gunner",
    cost: 245,
    imageSrc: "src/assets/000-GlueGunner.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Primary
  },
  {
    value: "snipermonkey",
    label: "Sniper Monkey",
    cost: 380,
    imageSrc: "src/assets/BTD6_Sniper_Monkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Military
  },
  {
    value: "monkeysub",
    label: "Monkey Sub",
    cost: 350,
    imageSrc: "src/assets/BTD6_Monkey_Sub.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Military
  },
  {
    value: "monkeybuccaneer",
    label: "Monkey Buccaneer",
    cost: 540,
    imageSrc: "src/assets/BTD6_Monkey_Buccaneer.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Military
  },
  {
    value: "monkeyace",
    label: "Monkey Ace",
    cost: 865,
    imageSrc: "src/assets/BTD6_Monkey_Ace.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Military
  },
  {
    value: "helipilot",
    label: "Heli Pilot",
    cost: 1730,
    imageSrc: "src/assets/BTD6_Heli_Pilot.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Military
  },
  {
    value: "mortarmonkey",
    label: "Mortar Monkey",
    cost: 810,
    imageSrc: "src/assets/000-MortarMonkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Military
  },
  {
    value: "dartlinggunner",
    label: "Dartling Gunner",
    cost: 920,
    imageSrc: "src/assets/000-DartlingGunner.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Military
  },
  {
    value: "wizardmonkey",
    label: "Wizard Monkey",
    cost: 405,
    imageSrc: "src/assets/wizard-monkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Magic
  },
  {
    value: "supermonkey",
    label: "Super Monkey",
    cost: 2700,
    imageSrc: "src/assets/BTD6_Super_Monkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Magic
  },
  {
    value: "ninjamonkey",
    label: "Ninja Monkey",
    cost: 540,
    imageSrc: "src/assets/000-NinjaMonkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Magic
  },
  {
    value: "alchemist",
    label: "Alchemist",
    cost: 595,
    imageSrc: "src/assets/Monkey_Alchemist.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Magic
  },
  {
    value: "druid",
    label: "Druid",
    cost: 430,
    imageSrc: "src/assets/Druid_Monkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Magic
  },
  {
    value: "bananafarm",
    label: "Banana Farm",
    cost: 1350,
    imageSrc: "src/assets/000-BananaFarm.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Support
  },
  {
    value: "spikefactory",
    label: "Spike Factory",
    cost: 1080,
    imageSrc: "src/assets/000-SpikeFactory.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Support
  },
  {
    value: "monkeyvillage",
    label: "Monkey Village",
    cost: 1295,
    imageSrc: "src/assets/000-MonkeyVillage.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Support
  },
  {
    value: "engineermonkey",
    label: "Engineer Monkey",
    cost: 430,
    imageSrc: "src/assets/000-EngineerMonkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Support
  },
  {
    value: "beasthandler",
    label: "Beast Handler",
    cost: 270,
    imageSrc: "src/assets/000-BeastHandler.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Support
  },

]


export const upgradeData : Option[] = [
  {
    value: "sharpshots",
    label: "Sharp shots",
    cost: 150,
    imageSrc: "src/assets/sharp-darts.png",
    isUpgrade: true,
    hasAbility: false,
    class: TowerClass.Primary
  },

]