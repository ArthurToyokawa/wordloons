export enum TowerClass {
  Primary,
  Military,
  Magic,
  Support
}

export type Tower = {
  value: string
  label: string
  cost: number
  imageSrc: string
  isUpgrade: boolean // upgrade or tower
  hasAbility: boolean // if has activatable ability
  class: TowerClass
}

export const towerData : Tower[] = [
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
    value: "sharpshots",
    label: "Sharp shots",
    cost: 150,
    imageSrc: "src/assets/sharp-darts.png",
    isUpgrade: true,
    hasAbility: false,
    class: TowerClass.Primary
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

]