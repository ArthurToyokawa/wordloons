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

export enum TowerTier {
  Base,
  Tier1,
  Tier2,
  Tier3,
  Tier4,
  Tier5,
}


export type Option = {
  value: string
  label: string
  cost: number
  imageSrc: string
  hasAbility: boolean // if has activatable ability
  class: TowerClass
  specialProperties: SpecialProperties[]
  attackDamage: number
  attackPierce: number
  towerRange: number
  attackSpeed: number
  towerTier: TowerTier
}

export const towerData : Option[] = [
  {
    value: "dartmonkey",
    label: "Dart monkey",
    cost: 215,
    imageSrc: "/assets/dart-monkey/000.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 2,
    towerRange: 32,
    attackSpeed : 0.95,
    towerTier: TowerTier.Base,
  },
  {
    value: "boomerangmonkey",
    label: "Boomerang Monkey",
    cost: 350,
    imageSrc: "/assets/boomerang-monkey/000.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 4,
    towerRange: 40,
    attackSpeed : 1.2,
    towerTier: TowerTier.Base,
  },
  {
    value: "bombshooter",
    label: "Bomb Shooter",
    cost: 565,
    imageSrc: "/assets/bomb-shooter/000.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 14,
    towerRange: 40,
    attackSpeed :1.5,
    towerTier: TowerTier.Base,
  },
  {
    value: "tackshooter",
    label: "Tack Shooter",
    cost: 300,
    imageSrc: "/assets/tack-shooter/000.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 1,
    towerRange: 23,
    attackSpeed : 1.4,
    towerTier: TowerTier.Base,
  },
  {
    value: "icemonkey",
    label: "Ice Monkey",
    cost: 540,
    imageSrc: "/assets/ice-monkey/000.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [SpecialProperties.FrostAttack],
    attackDamage: 1,
    attackPierce: 30,
    towerRange: 20,
    attackSpeed : 2.4,
    towerTier: TowerTier.Base,
  },
  {
    value: "gluegunner",
    label: "Glue Gunner",
    cost: 245,
    imageSrc: "/assets/glue-gunner/000.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 0,
    attackPierce: 1,
    towerRange: 46,
    attackSpeed : 1.0,
    towerTier: TowerTier.Base,
  },
  {
    value: "snipermonkey",
    label: "Sniper Monkey",
    cost: 380,
    imageSrc: "/assets/sniper-monkey/000.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [],
    attackDamage: 2,
    attackPierce: 1,
    towerRange: 999,
    attackSpeed : 1.59,
    towerTier: TowerTier.Base,
  },
  {
    value: "monkeysub",
    label: "Monkey Sub",
    cost: 350,
    imageSrc: "/assets/monkey-sub/000.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 2,
    towerRange: 42,
    attackSpeed : 0.75,
    towerTier: TowerTier.Base,
  },
  {
    value: "monkeybuccaneer",
    label: "Monkey Buccaneer",
    cost: 540,
    imageSrc: "/assets/monkey-buccaneer/000.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 4,
    towerRange: 60,
    attackSpeed : 1.0,
    towerTier: TowerTier.Base,
  },
  {
    value: "monkeyace",
    label: "Monkey Ace",
    cost: 865,
    imageSrc: "/assets/monkey-ace/000.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 5,
    towerRange: 999,
    attackSpeed : 1.68,
    towerTier: TowerTier.Base,
  },
  {
    value: "helipilot",
    label: "Heli Pilot",
    cost: 1730,
    imageSrc: "/assets/heli-pilot/000.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 999,
    attackSpeed : 0.57,
    towerTier: TowerTier.Base,
  },
  {
    value: "mortarmonkey",
    label: "Mortar Monkey",
    cost: 810,
    imageSrc: "/assets/mortar-monkey/000.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 40,
    towerRange: 999,
    attackSpeed : 2.0,
    towerTier: TowerTier.Base,
  },
  {
    value: "dartlinggunner",
    label: "Dartling Gunner",
    cost: 920,
    imageSrc: "/assets/dartling-gunner/000.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 1,
    towerRange: 999,
    attackSpeed : 0.2,
    towerTier: TowerTier.Base,
  },
  {
    value: "wizardmonkey",
    label: "Wizard Monkey",
    cost: 405,
    imageSrc: "/assets/wizard-monkey/000.webp",
    hasAbility: false,
    class: TowerClass.Magic,
    specialProperties: [SpecialProperties.EnergyAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 40,
    attackSpeed : 1.1,
    towerTier: TowerTier.Base,
  },
  {
    value: "supermonkey",
    label: "Super Monkey",
    cost: 2700,
    imageSrc: "/assets/super-monkey/000.webp",
    hasAbility: false,
    class: TowerClass.Magic,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 1,
    towerRange: 50,
    attackSpeed : 0.045,
    towerTier: TowerTier.Base,
  },
  {
    value: "ninjamonkey",
    label: "Ninja Monkey",
    cost: 540,
    imageSrc: "/assets/ninja-monkey/000.webp",
    hasAbility: false,
    class: TowerClass.Magic,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 2,
    towerRange: 40,
    attackSpeed : 0.70,
    towerTier: TowerTier.Base,
  },
  {
    value: "alchemist",
    label: "Alchemist",
    cost: 595,
    imageSrc: "/assets/alchemist/000.webp",
    hasAbility: false,
    class: TowerClass.Magic,
    specialProperties: [SpecialProperties.AcidAttack, SpecialProperties.AntiLead],
    attackDamage: 0,
    attackPierce: 15,
    towerRange: 45,
    attackSpeed : 2.0,
    towerTier: TowerTier.Base,
  },
  {
    value: "druid",
    label: "Druid",
    cost: 430,
    imageSrc: "/assets/druid/000.webp",
    hasAbility: false,
    class: TowerClass.Magic,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 1,
    towerRange: 35,
    attackSpeed : 1.1,
    towerTier: TowerTier.Base,
  },
  {
    value: "bananafarm",
    label: "Banana Farm",
    cost: 1350,
    imageSrc: "/assets/banana-farm/000.webp",
    hasAbility: false,
    class: TowerClass.Support,
    specialProperties: [],
    attackDamage: 0,
    attackPierce: 0,
    towerRange: 40,
    attackSpeed : 0,
    towerTier: TowerTier.Base,
  },
  {
    value: "spikefactory",
    label: "Spike Factory",
    cost: 1080,
    imageSrc: "/assets/spike-factory/000.webp",
    hasAbility: false,
    class: TowerClass.Support,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 5,
    towerRange: 34,
    attackSpeed : 1.75,
    towerTier: TowerTier.Base,
  },
  {
    value: "monkeyvillage",
    label: "Monkey Village",
    cost: 1295,
    imageSrc: "/assets/monkey-village/000.webp",
    hasAbility: false,
    class: TowerClass.Support,
    specialProperties: [],
    attackDamage: 0,
    attackPierce: 0,
    towerRange: 40,
    attackSpeed : 0,
    towerTier: TowerTier.Base,
  },
  {
    value: "engineermonkey",
    label: "Engineer Monkey",
    cost: 430,
    imageSrc: "/assets/engineer-monkey/000.webp",
    hasAbility: false,
    class: TowerClass.Support,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 40,
    attackSpeed : 0.7,
    towerTier: TowerTier.Base,
  },
  {
    value: "beasthandler",
    label: "Beast Handler",
    cost: 270,
    imageSrc: "/assets/beast-handler/000.webp",
    hasAbility: false,
    class: TowerClass.Support,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 4,
    towerRange: 20,
    attackSpeed : 1.4,
    towerTier: TowerTier.Base,
  },
]

//todo check if ezili and churchill pop leads
export const heroData : Option[] = [
  {
    value: "quincy",
    label: "Quincy",
    cost: 585,
    imageSrc: "/assets/heroes/QuincyPortrait.webp",
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 50,
    attackSpeed : 0.95,
    towerTier: TowerTier.Base,
  },
  {
    value: "gwendolin",
    label: "Gwendolin",
    cost: 785,
    imageSrc: "/assets/heroes/GwendolinPortrait.webp",
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.FireAttack],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 38,
    attackSpeed : 0.5,
    towerTier: TowerTier.Base,
  },
  {
    value: "strikerjones",
    label: "Striker Jones",
    cost: 810,
    imageSrc: "/assets/heroes/StrikerJonesPortrait.webp",
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 10,
    towerRange: 55,
    attackSpeed : 1.2,
    towerTier: TowerTier.Base,
  },
  {
    value: "obyngreenfoot",
    label: "Obyn Greenfoot",
    cost: 700,
    imageSrc: "/assets/heroes/ObynGreenFootPortrait.webp",
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.EnergyAttack, SpecialProperties.AntiLead],
    attackDamage: 2,
    attackPierce: 4,
    towerRange: 43,
    attackSpeed : 1.35,
    towerTier: TowerTier.Base,
  },
  {
    value: "captainchurchill",
    label: "Captain Churchill",
    cost: 2160,
    imageSrc: "/assets/heroes/CaptainChurchillPortrait.webp",
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 63,
    attackSpeed : 0.7,
    towerTier: TowerTier.Base,
  },
  {
    value: "benjamin",
    label: "Benjamin",
    cost: 1295,
    imageSrc: "/assets/heroes/BenjaminPortrait.webp",
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [],
    attackDamage: 0,
    attackPierce: 0,
    towerRange: 20,
    attackSpeed : 0,
    towerTier: TowerTier.Base,
  },
  {
    value: "ezili",
    label: "Ezili",
    cost: 650,
    imageSrc: "/assets/heroes/EziliPortrait.webp",
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.EnergyAttack, SpecialProperties.AntiLead, SpecialProperties.CamoDetection],
    attackDamage: 1,
    attackPierce: 5,
    towerRange: 43,
    attackSpeed : 1.2,
    towerTier: TowerTier.Base,
  },
  {
    value: "patfusty",
    label: "Pat Fusty",
    cost: 865,
    imageSrc: "/assets/heroes/PatFustyPortrait.webp",
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.AntiLead],
    attackDamage: 3,
    attackPierce: 1,
    towerRange: 24,
    attackSpeed : 1.1,
    towerTier: TowerTier.Base,
  },
  {
    value: "adora",
    label: "Adora",
    cost: 1080,
    imageSrc: "/assets/heroes/AdoraPortrait.webp",
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.EnergyAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 5,
    towerRange: 45,
    attackSpeed : 1.0,
    towerTier: TowerTier.Base,
  },
  {
    value: "admiralbrickell",
    label: "Admiral Brickell",
    cost: 970,
    imageSrc: "/assets/heroes/AdmiralBrickellPortrait.webp",
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 3,
    attackPierce: 1,
    towerRange: 50,
    attackSpeed : 0.8,
    towerTier: TowerTier.Base,
  },
  {
    value: "etienne",
    label: "Etienne",
    cost: 920,
    imageSrc: "/assets/heroes/EtiennePortrait.webp",
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 2,
    towerRange: 55,
    attackSpeed : 0.7,
    towerTier: TowerTier.Base,
  },
  {
    value: "sauda",
    label: "Sauda",
    cost: 650,
    imageSrc: "/assets/heroes/SaudaPortrait.webp",
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.CamoDetection],
    attackDamage: 1,
    attackPierce: 4,
    towerRange: 23,
    attackSpeed : 0.4,
    towerTier: TowerTier.Base,
  },
  {
    value: "psi",
    label: "Psi",
    cost: 1080,
    imageSrc: "/assets/heroes/PsiPortrait.webp",
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.EnergyAttack],
    attackDamage: 1,
    attackPierce: 1,
    towerRange: 999,
    attackSpeed : 1.0,
    towerTier: TowerTier.Base,
  },
  {
    value: "geraldo",
    label: "Geraldo",
    cost: 755,
    imageSrc: "/assets/heroes/GeraldoPortrait.webp",
    hasAbility: false,
    class: TowerClass.Hero,
    specialProperties: [SpecialProperties.EnergyAttack],
    attackDamage: 1,
    attackPierce: 5,
    towerRange: 40,
    attackSpeed : 1.1,
    towerTier: TowerTier.Base,
  },
]

export const upgradeData : Option[] = [
  {
    value: "dartmonkey100",
    label: "Dart monkey - Sharp Shots",
    cost: 150,
    imageSrc: "/assets/dart-monkey/100.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 32,
    attackSpeed : 0.95,
    towerTier: TowerTier.Tier1,
  },
  {
    value: "dartmonkey200",
    label: "Dart monkey - Razor Sharp Shots",
    cost: 235,
    imageSrc: "/assets/dart-monkey/200.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 5,
    towerRange: 32,
    attackSpeed : 0.95,
    towerTier: TowerTier.Tier2,
  },
  {
    value: "dartmonkey300",
    label: "Dart monkey - Spike-O-Pult",
    cost: 325,
    imageSrc: "/assets/dart-monkey/300.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 22,
    towerRange: 32,
    attackSpeed : 1.15,
    towerTier: TowerTier.Tier3,
  },
  {
    value: "dartmonkey400",
    label: "Dart monkey - Juggernaut",
    cost: 1945,
    imageSrc: "/assets/dart-monkey/400.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 2,
    attackPierce: 50,
    towerRange: 36.8,
    attackSpeed : 1.0,
    towerTier: TowerTier.Tier4,
  },
  {
    value: "dartmonkey500",
    label: "Dart monkey - Ultra-Juggernaut",
    cost: 16200,
    imageSrc: "/assets/dart-monkey/500.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 5,
    attackPierce: 200,
    towerRange: 36.8,
    attackSpeed : 1.0,
    towerTier: TowerTier.Tier5,
  },
  {
    value: "dartmonkey010",
    label: "Dart monkey - Quick Shots",
    cost: 110,
    imageSrc: "/assets/dart-monkey/010.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 2,
    towerRange: 32,
    attackSpeed : 0.8075,
    towerTier: TowerTier.Tier1,
  },
  {
    value: "dartmonkey020",
    label: "Dart monkey - Very Quick Shots",
    cost: 205,
    imageSrc: "/assets/dart-monkey/020.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 2,
    towerRange: 32,
    attackSpeed : 0.6365,
    towerTier: TowerTier.Tier2,
  },
  {
    value: "dartmonkey030",
    label: "Dart monkey - Triple Shot",
    cost: 430,
    imageSrc: "/assets/dart-monkey/030.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 2,
    towerRange: 32,
    attackSpeed : 0.6365,
    towerTier: TowerTier.Tier3,
  },
  {
    value: "dartmonkey040",
    label: "Dart monkey - Super Monkey Fan Club",
    cost: 8640,
    imageSrc: "/assets/dart-monkey/040.webp",
    hasAbility: true,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 2,
    towerRange: 32,
    attackSpeed : 0.477375,
    towerTier: TowerTier.Tier4,
  },
  {
    value: "dartmonkey050",
    label: "Dart monkey - Plasma Monkey Fan Club",
    cost: 54000,
    imageSrc: "/assets/dart-monkey/050.webp",
    hasAbility: true,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 2,
    towerRange: 32,
    attackSpeed : 0.477375,
    towerTier: TowerTier.Tier5,
  },
  {
    value: "dartmonkey001",
    label: "Dart monkey - Long Range Darts",
    cost: 95,
    imageSrc: "/assets/dart-monkey/001.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 40,
    attackSpeed : 0.95,
    towerTier: TowerTier.Tier1,
  },
  {
    value: "dartmonkey002",
    label: "Dart monkey - Enhanced Eyesight",
    cost: 215,
    imageSrc: "/assets/dart-monkey/002.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [SpecialProperties.CamoDetection],
    attackDamage: 1,
    attackPierce: 3,
    towerRange: 48,
    attackSpeed : 0.95,
    towerTier: TowerTier.Tier2,
  },
  {
    value: "dartmonkey003",
    label: "Dart monkey - Crossbow",
    cost: 675,
    imageSrc: "/assets/dart-monkey/003.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [SpecialProperties.CamoDetection],
    attackDamage: 3,
    attackPierce: 3,
    towerRange: 56,
    attackSpeed : 0.95,
    towerTier: TowerTier.Tier3,
  },
  {
    value: "dartmonkey004",
    label: "Dart monkey - Sharp Shooter",
    cost: 2160,
    imageSrc: "/assets/dart-monkey/004.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [SpecialProperties.CamoDetection],
    attackDamage: 6,
    attackPierce: 3,
    towerRange: 56,
    attackSpeed : 0.6,
    towerTier: TowerTier.Tier4,
  },
  {
    value: "dartmonkey005",
    label: "Dart monkey - Crossbow Master",
    cost: 23220,
    imageSrc: "/assets/dart-monkey/005.webp",
    hasAbility: false,
    class: TowerClass.Primary,
    specialProperties: [SpecialProperties.CamoDetection],
    attackDamage: 6,
    attackPierce: 8,
    towerRange: 76,
    attackSpeed : 0.16,
    towerTier: TowerTier.Tier5,
  },
  {
    value: "mortarmonkey100",
    label: "Mortar Monkey - Bigger Blast",
    cost: 540,
    imageSrc: "/assets/mortar-monkey/100.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 45,
    towerRange: 999,
    attackSpeed : 2.0,
    towerTier: TowerTier.Tier1,
  },
  {
    value: "mortarmonkey200",
    label: "Mortar Monkey - Bloon Buster",
    cost: 540,
    imageSrc: "/assets/mortar-monkey/200.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 2,
    attackPierce: 45,
    towerRange: 999,
    attackSpeed : 2.0,
    towerTier: TowerTier.Tier2,
  },
  {
    value: "mortarmonkey300",
    label: "Mortar Monkey - Shell Shock",
    cost: 970,
    imageSrc: "/assets/mortar-monkey/300.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 2,
    attackPierce: 45,
    towerRange: 999,
    attackSpeed : 2.0,
    towerTier: TowerTier.Tier3,
  },
  {
    value: "mortarmonkey400",
    label: "Mortar Monkey - The Big One",
    cost: 8640,
    imageSrc: "/assets/mortar-monkey/400.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 7,
    attackPierce: 85,
    towerRange: 999,
    attackSpeed : 2.0,
    towerTier: TowerTier.Tier4,
  },
  {
    value: "mortarmonkey500",
    label: "Mortar Monkey - The Biggest One",
    cost: 38880,
    imageSrc: "/assets/mortar-monkey/500.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 25,
    attackPierce: 200,
    towerRange: 999,
    attackSpeed : 2.0,
    towerTier: TowerTier.Tier5,
  },
  {
    value: "mortarmonkey010",
    label: "Mortar Monkey - Faster Reload",
    cost: 325,
    imageSrc: "/assets/mortar-monkey/010.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 40,
    towerRange: 999,
    attackSpeed : 1.5,
    towerTier: TowerTier.Tier1,
  },
  {
    value: "mortarmonkey020",
    label: "Mortar Monkey - Rapid Reload",
    cost: 540,
    imageSrc: "/assets/mortar-monkey/020.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 40,
    towerRange: 999,
    attackSpeed : 1.08,
    towerTier: TowerTier.Tier2,
  },
  {
    value: "mortarmonkey030",
    label: "Mortar Monkey - Heavy Shells",
    cost: 970,
    imageSrc: "/assets/mortar-monkey/030.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 40,
    towerRange: 999,
    attackSpeed : 1.08,
    towerTier: TowerTier.Tier3,
  },
  {
    value: "mortarmonkey040",
    label: "Mortar Monkey - Artillery Battery",
    cost: 5940,
    imageSrc: "/assets/mortar-monkey/040.webp",
    hasAbility: true,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 40,
    towerRange: 999,
    attackSpeed : 0.27,
    towerTier: TowerTier.Tier4,
  },
  {
    value: "mortarmonkey050",
    label: "Mortar Monkey - Pop and Awe",
    cost: 32400,
    imageSrc: "/assets/mortar-monkey/050.webp",
    hasAbility: true,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 40,
    towerRange: 999,
    attackSpeed : 0.27,
    towerTier: TowerTier.Tier5,
  },
  {
    value: "mortarmonkey001",
    label: "Mortar Monkey - Increased Accuracy",
    cost: 810,
    imageSrc: "/assets/mortar-monkey/001.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 40,
    towerRange: 999,
    attackSpeed : 2.0,
    towerTier: TowerTier.Tier1,
  },
  {
    value: "mortarmonkey002",
    label: "Mortar Monkey - Burny Stuff",
    cost: 810,
    imageSrc: "/assets/mortar-monkey/002.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead],
    attackDamage: 1,
    attackPierce: 40,
    towerRange: 999,
    attackSpeed : 2.0,
    towerTier: TowerTier.Tier2,
  },
  {
    value: "mortarmonkey003",
    label: "Mortar Monkey - Signal Flare",
    cost: 810,
    imageSrc: "/assets/mortar-monkey/003.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead, SpecialProperties.CamoDetection],
    attackDamage: 1,
    attackPierce: 40,
    towerRange: 999,
    attackSpeed : 2.0,
    towerTier: TowerTier.Tier3,
  },
  {
    value: "mortarmonkey004",
    label: "Mortar Monkey - Shattering Shells",
    cost: 810,
    imageSrc: "/assets/mortar-monkey/004.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead, SpecialProperties.CamoDetection],
    attackDamage: 1,
    attackPierce: 40,
    towerRange: 999,
    attackSpeed : 2.0,
    towerTier: TowerTier.Tier4,
  },
  {
    value: "mortarmonkey005",
    label: "Mortar Monkey - Blooncineration",
    cost: 810,
    imageSrc: "/assets/mortar-monkey/005.webp",
    hasAbility: false,
    class: TowerClass.Military,
    specialProperties: [SpecialProperties.ExplosiveAttack, SpecialProperties.AntiLead, SpecialProperties.CamoDetection],
    attackDamage: 1,
    attackPierce: 40,
    towerRange: 999,
    attackSpeed : 2.0,
    towerTier: TowerTier.Tier5,
  },
]