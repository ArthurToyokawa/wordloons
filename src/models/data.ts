export enum TowerClass {
  Primary,
  Military,
  Magic,
  Support,
  Hero
}
export enum SpecialProperties {
  CamoDetection,
  ExplosiveAttack,
  EnergyAttack,
  FireAttack,
  FrostAttack,
  AcidAttack,
  AntiLead
}
//TODO put an water tower/land tower property


export type Option = {
  value: string
  label: string
  cost: number
  imageSrc: string
  isUpgrade: boolean // upgrade or tower
  hasAbility: boolean // if has activatable ability
  class: TowerClass
  specialProperties: SpecialProperties[]
  attackDamage: number
  attackPierce: number
  towerRange: number
  attackSpeed: number
}

export const towerData : Option[] = [
  {
    value: "dartmonkey",
    label: "Dart monkey",
    cost: 215,
    imageSrc: "src/assets/dart-monkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 2,
    towerRange: 32,
    attackSpeed : 0.95,
  },
  {
    value: "boomerangmonkey",
    label: "Boomerang Monkey",
    cost: 350,
    imageSrc: "src/assets/BTD6_Boomerang_Monkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 4,
    towerRange: 40,
    attackSpeed : 1.42,
  },
  {
    value: "bombshooter",
    label: "Bomb Shooter",
    cost: 565,
    imageSrc: "src/assets/Bomb_Shooter.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 14,
    towerRange: 40,
    attackSpeed : 1.5,
  },
  {
    value: "tackshooter",
    label: "Tack Shooter",
    cost: 300,
    imageSrc: "src/assets/BTD6_Tack_Shooter.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 1,
    towerRange: 23,
    attackSpeed : 1.4,
  },
  {
    value: "icemonkey",
    label: "Ice Monkey",
    cost: 540,
    imageSrc: "src/assets/Ice_Monkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [SpecialProperties.FrostAttack],
    attackDamage: 1,
    attackPierce: 30,
    towerRange: 20,
    attackSpeed : 2.4,
  },
  {
    value: "gluegunner",
    label: "Glue Gunner",
    cost: 245,
    imageSrc: "src/assets/000-GlueGunner.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 0,
    attackPierce: 1,
    towerRange: 46,
    attackSpeed : 1.0,
  },
  {
    value: "snipermonkey",
    label: "Sniper Monkey",
    cost: 380,
    imageSrc: "src/assets/BTD6_Sniper_Monkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [],
    attackDamage: 2,
    attackPierce: 1,
    towerRange: 999,
    attackSpeed : 1.59,
  },
  {
    value: "monkeysub",
    label: "Monkey Sub",
    cost: 350,
    imageSrc: "src/assets/BTD6_Monkey_Sub.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 2,
    towerRange: 42,
    attackSpeed : 0.75,
  },
  {
    value: "monkeybuccaneer",
    label: "Monkey Buccaneer",
    cost: 540,
    imageSrc: "src/assets/BTD6_Monkey_Buccaneer.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 4,
    towerRange: 60,
    attackSpeed : 1.0,
  },
  {
    value: "monkeyace",
    label: "Monkey Ace",
    cost: 865,
    imageSrc: "src/assets/BTD6_Monkey_Ace.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 5,
    towerRange: 999,
    attackSpeed : 1.68,
  },
  {
    value: "helipilot",
    label: "Heli Pilot",
    cost: 1730,
    imageSrc: "src/assets/BTD6_Heli_Pilot.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 999,
    attackSpeed : 0.56,
  },
  {
    value: "mortarmonkey",
    label: "Mortar Monkey",
    cost: 810,
    imageSrc: "src/assets/000-MortarMonkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 40,
    towerRange: 999,
    attackSpeed : 2.0,
  },
  {
    value: "dartlinggunner",
    label: "Dartling Gunner",
    cost: 920,
    imageSrc: "src/assets/000-DartlingGunner.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 1,
    towerRange: 999,
    attackSpeed : 0.2,
  },
  {
    value: "wizardmonkey",
    label: "Wizard Monkey",
    cost: 405,
    imageSrc: "src/assets/wizard-monkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Magic,
    specialProperties: [SpecialProperties.EnergyAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 40,
    attackSpeed : 1.1,
  },
  {
    value: "supermonkey",
    label: "Super Monkey",
    cost: 2700,
    imageSrc: "src/assets/BTD6_Super_Monkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Magic,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 1,
    towerRange: 50,
    attackSpeed : 0.06,
  },
  {
    value: "ninjamonkey",
    label: "Ninja Monkey",
    cost: 540,
    imageSrc: "src/assets/000-NinjaMonkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Magic,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 2,
    towerRange: 40,
    attackSpeed : 0.7,
  },
  {
    value: "alchemist",
    label: "Alchemist",
    cost: 595,
    imageSrc: "src/assets/Monkey_Alchemist.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Magic,
    specialProperties: [SpecialProperties.AcidAttack, SpecialProperties.AntiLead],
    attackDamage: 0,
    attackPierce: 15,
    towerRange: 45,
    attackSpeed : 2.0,
  },
  {
    value: "druid",
    label: "Druid",
    cost: 430,
    imageSrc: "src/assets/Druid_Monkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Magic,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 1,
    towerRange: 35,
    attackSpeed : 1.1,
  },
  {
    value: "bananafarm",
    label: "Banana Farm",
    cost: 1350,
    imageSrc: "src/assets/000-BananaFarm.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Support,
    specialProperties: [],
    attackDamage: 0,
    attackPierce: 0,
    towerRange: 40,
    attackSpeed: 0,
  },
  {
    value: "spikefactory",
    label: "Spike Factory",
    cost: 1080,
    imageSrc: "src/assets/000-SpikeFactory.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Support,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 5,
    towerRange: 34,
    attackSpeed : 1.75,
  },
  {
    value: "monkeyvillage",
    label: "Monkey Village",
    cost: 1295,
    imageSrc: "src/assets/000-MonkeyVillage.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Support,
    specialProperties: [],
    attackDamage: 0,
    attackPierce: 0,
    towerRange: 40,
    attackSpeed: 0,
  },
  {
    value: "engineermonkey",
    label: "Engineer Monkey",
    cost: 430,
    imageSrc: "src/assets/000-EngineerMonkey.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Support,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 40,
    attackSpeed : 0.7,
  },
  {
    value: "beasthandler",
    label: "Beast Handler",
    cost: 270,
    imageSrc: "src/assets/000-BeastHandler.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Support,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 4,
    towerRange: 20,
    attackSpeed: 1.4,
  },
]

//todo check if ezili and churchill pop leads
export const heroData : Option[] = [
  {
    value: "quincy",
    label: "Quincy",
    cost: 585,
    imageSrc: "src/assets/QuincyPortrait.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 50,
    attackSpeed: 0.95,
  },
  {
    value: "gwendolin",
    label: "Gwendolin",
    cost: 785,
    imageSrc: "src/assets/GwendolinPortrait.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.FireAttack],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 38,
    attackSpeed: 0.5,
  },
  {
    value: "strikerjones",
    label: "Striker Jones",
    cost: 810,
    imageSrc: "src/assets/StrikerJonesPortrait.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 10,
    towerRange: 55,
    attackSpeed: 1.2,
  },
  {
    value: "obyngreenfoot",
    label: "Obyn Greenfoot",
    cost: 700,
    imageSrc: "src/assets/ObynGreenFootPortrait.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.EnergyAttack, SpecialProperties.AntiLead],
    attackDamage: 2,
    attackPierce: 4,
    towerRange: 43,
    attackSpeed: 1.35,
  },
  {
    value: "captainchurchill",
    label: "Captain Churchill",
    cost: 2160,
    imageSrc: "src/assets/CaptainChurchillPortrait.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 63,
    attackSpeed: 0.7,
  },
  {
    value: "benjamin",
    label: "Benjamin",
    cost: 1295,
    imageSrc: "src/assets/BenjaminPortrait.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [],
    attackDamage: 0,
    attackPierce: 0,
    towerRange: 20,
    attackSpeed: 0,
  },
  {
    value: "ezili",
    label: "Ezili",
    cost: 650,
    imageSrc: "src/assets/EziliPortrait.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.EnergyAttack, SpecialProperties.AntiLead, SpecialProperties.CamoDetection],
    attackDamage: 1,
    attackPierce: 5,
    towerRange: 43,
    attackSpeed: 1.2,
  },
  {
    value: "patfusty",
    label: "Pat Fusty",
    cost: 865,
    imageSrc: "src/assets/PatFustyPortrait.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.AntiLead],
    attackDamage: 3,
    attackPierce: 1,
    towerRange: 24,
    attackSpeed: 1.1,
  },
  {
    value: "adora",
    label: "Adora",
    cost: 1080,
    imageSrc: "src/assets/AdoraPortrait.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.EnergyAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 5,
    towerRange: 45,
    attackSpeed: 1.0,
  },
  {
    value: "admiralbrickell",
    label: "Admiral Brickell",
    cost: 970,
    imageSrc: "src/assets/AdmiralBrickellPortrait.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 3,
    attackPierce: 1,
    towerRange: 50,
    attackSpeed: 0.8,
  },
  {
    value: "etienne",
    label: "Etienne",
    cost: 920,
    imageSrc: "src/assets/EtiennePortrait.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 2,
    towerRange: 55,
    attackSpeed: 0.7,
  },
  {
    value: "sauda",
    label: "Sauda",
    cost: 650,
    imageSrc: "src/assets/SaudaPortrait.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.CamoDetection],
    attackDamage: 1,
    attackPierce: 4,
    towerRange: 23,
    attackSpeed: 0.4,
  },
  {
    value: "psi",
    label: "Psi",
    cost: 1080,
    imageSrc: "src/assets/PsiPortrait.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.EnergyAttack],
    attackDamage: 1,
    attackPierce: 1,
    towerRange: 999,
    attackSpeed: 1.0,
  },
  {
    value: "geraldo",
    label: "Geraldo",
    cost: 755,
    imageSrc: "src/assets/GeraldoPortrait.webp",
    isUpgrade: false,
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.EnergyAttack],
    attackDamage: 1,
    attackPierce: 5,
    towerRange: 40,
    attackSpeed: 1.1,
  },
]

// export const upgradeData : Option[] = [
//   {
//     value: "sharpshots",
//     label: "Sharp shots",
//     cost: 150,
//     imageSrc: "src/assets/sharp-darts.png",
//     isUpgrade: true,
//     hasAbility: false,
//     class: TowerClass.Primary,
//     specialProperties: [],
//     attackDamage: 0,
//     attackPierce: 0,
//     towerRange: 0,
//   },

// ]