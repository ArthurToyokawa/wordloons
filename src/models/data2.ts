//remove empty line regex ^(?:[\t ]*(?:\r?\n|\r))+

const data = [
  {
    "id": "dart-monkey",
    "name": "Dart Monkey",
    "type": "Primary",
    "cost": 215,
    "stats": {
      "damage": "1",
      "pierce": "2",
      "attackSpeed": "0.95",
      "range": "32",
      "type": "sharp"
    },
    "paths": {
      "path1": [
        {
          "name": "Sharp Shots",
          "cost": 150,
        },
        {
          "name": "Razor Sharp Shots",
          "cost": 235,
        },
        {
          "name": "Spike-O-Pult",
          "cost": 235,
        },
        {
          "name": "Juggernaut",
          "cost": 1945,
        },
        {
          "name": "Ultra-Juggernaut",
          "cost": 16200,
        }
      ],
      "path2": [
        {
          "name": "Quick Shots",
          "cost": 110,
        },
        {
          "name": "Very Quick Shots",
          "cost": 205,
        },
        {
          "name": "Triple Shot",
          "cost": 430,
        },
        {
          "name": "Super Monkey Fan Club",
          "cost": 8640,
        },
        {
          "name": "Plasma Monkey Fan Club",
          "cost": 54000,
        }
      ],
      "path3": [
        {
          "name": "Long Range Darts",
          "cost": 95,
        },
        {
          "name": "Enhanced Eyesight",
          "cost": 215,
        },
        {
          "name": "Crossbow",
          "cost": 675,
        },
        {
          "name": "Sharp Shooter",
          "cost": 2160,
        },
        {
          "name": "Crossbow Master",
          "cost": 27000,
        }
      ],
      "paragon": {
        "name": "Apex Plasma Master",
        "cost": 378000,
      }
    }
  },
  {
    "id": "boomerang-monkey",
    "name": "Boomerang Monkey",
    "type": "Primary",
    "cost": 350,
    "stats": {
      "damage": "1",
      "pierce": "4",
      "attackSpeed": "1.42",
      "range": "43",
      "type": "sharp"
    },
    "paths": {
      "path1": [
        {
          "name": "Improved Rangs",
          "cost": 215,
        },
        {
          "name": "Glaives",
          "cost": 300,
        },
        {
          "name": "Glaive Ricochet",
          "cost": 1405,
        },
        {
          "name": "M.O.A.R Glaives",
          "cost": 3240,
        },
        {
          "name": "Glaive Lord",
          "cost": 37800,
        }
      ],
      "path2": [
        {
          "name": "Faster Throwing",
          "cost": 190,
        },
        {
          "name": "Faster Rangs",
          "cost": 270,
        },
        {
          "name": "Bionic Boomerang",
          "cost": 1730,
        },
        {
          "name": "Turbo Charge",
          "cost": 4320,
        },
        {
          "name": "Perma Charge",
          "cost": 37800,
        }
      ],
      "path3": [
        {
          "name": "Long Range Rangs",
          "cost": 110,
        },
        {
          "name": "Red Hot Rangs",
          "cost": 325,
        },
        {
          "name": "Kylie Boomerang",
          "cost": 1405,
        },
        {
          "name": "MOAB Press",
          "cost": 1945,
        },
        {
          "name": "MOAB Domination",
          "cost": 64800,
        }
      ],
      "paragon": {
        "name": "Glaive Dominus",
        "cost": 432000,
      }
    }
  },
  {
    "id": "bomb-shooter",
    "name": "Bomb Shooter",
    "type": "Primary",
    "cost": 650,
    "stats": {
      "damage": "1",
      "pierce": "14",
      "attackSpeed": "1.5",
      "range": "40",
      "type": "explosion"
    },
    "paths": {
      "path1": [
        {
          "name": "Bigger Bombs",
          "cost": 380,
        },
        {
          "name": "Heavy Bombs",
          "cost": 700,
        },
        {
          "name": "Really Big Bombs",
          "cost": 1295,
        },
        {
          "name": "Bloon Impact",
          "cost": 3890,
        },
        {
          "name": "Bloon Crush",
          "cost": 59400,
        }
      ],
      "path2": [
        {
          "name": "Faster Reload",
          "cost": 270,
        },
        {
          "name": "Missile Launcher",
          "cost": 430,
        },
        {
          "name": "MOAB Mauler",
          "cost": 970,
        },
        {
          "name": "MOAB Assassin",
          "cost": 3455,
        },
        {
          "name": "MOAB Eliminator",
          "cost": 27000,
        }
      ],
      "path3": [
        {
          "name": "Extra Range",
          "cost": 215,
        },
        {
          "name": "Frag Bombs",
          "cost": 325,
        },
        {
          "name": "Cluster Bombs",
          "cost": 865,
        },
        {
          "name": "Recursive Cluster",
          "cost": 2590,
        },
        {
          "name": "Bomb Blitz",
          "cost": 37800,
        }
      ]
    }
  },
  {
    "id": "tack-shooter",
    "name": "Tack Shooter",
    "type": "Primary",
    "cost": 300,
    "stats": {
      "damage": "1",
      "pierce": "1",
      "attackSpeed": "1.4",
      "range": "23",
      "type": "sharp",
      "special": [
        {
          "name": "Attacks",
          "value": "8"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Faster Shooting",
          "cost": 160,
        },
        {
          "name": "Even Faster Shooting",
          "cost": 325,
        },
        {
          "name": "Hot Shots",
          "cost": 650,
        },
        {
          "name": "Ring of Fire",
          "cost": 4860,
        },
        {
          "name": "Inferno Ring",
          "cost": 54000,
        }
      ],
      "path2": [
        {
          "name": "Long Range Tacks",
          "cost": 110,
        },
        {
          "name": "Super Range Tacks",
          "cost": 245,
        },
        {
          "name": "Blade Shooter",
          "cost": 595,
        },
        {
          "name": "Blade Maelstrom",
          "cost": 2915,
        },
        {
          "name": "Super Maelstrom",
          "cost": 16200,
        }
      ],
      "path3": [
        {
          "name": "More Tacks",
          "cost": 110,
        },
        {
          "name": "Even More Tacks",
          "cost": 110,
        },
        {
          "name": "Tack Sprayer",
          "cost": 485,
        },
        {
          "name": "Overdrive",
          "cost": 3455,
        },
        {
          "name": "The Tack Zone",
          "cost": 25920,
        }
      ]
    }
  },
  {
    "id": "ice-monkey",
    "name": "Ice Monkey",
    "type": "Primary",
    "cost": 540,
    "stats": {
      "damage": "1",
      "pierce": "40",
      "attackSpeed": "2.4",
      "range": "20",
      "type": "cold",
      "special": [
        {
          "name": "Freeze",
          "value": "1.5 seconds"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Permafrost",
          "cost": 110,
        },
        {
          "name": "Metal Freeze",
          "cost": 325,
        },
        {
          "name": "Ice Shards",
          "cost": 1620,
        },
        {
          "name": "Embrittlement",
          "cost": 3240,
        },
        {
          "name": "Super Brittle",
          "cost": 32400,
        }
      ],
      "path2": [
        {
          "name": "Enhanced Freeze",
          "cost": 245,
        },
        {
          "name": "Deep Freeze",
          "cost": 380,
        },
        {
          "name": "Arctic Wind",
          "cost": 3455,
        },
        {
          "name": "Snowstorm",
          "cost": 3240,
        },
        {
          "name": "Absolute Zero",
          "cost": 28080,
        }
      ],
      "path3": [
        {
          "name": "Larger Radius",
          "cost": 110,
        },
        {
          "name": "Re-Freeze",
          "cost": 215,
        },
        {
          "name": "Cryo Cannon",
          "cost": 2160,
        },
        {
          "name": "Icicles",
          "cost": 2160,
        },
        {
          "name": "Icicle Impale",
          "cost": 32400,
        }
      ]
    }
  },
  {
    "id": "glue-gunner",
    "name": "Glue Gunner",
    "type": "Primary",
    "cost": 295,
    "stats": {
      "damage": "0",
      "pierce": "1",
      "attackSpeed": "1.0",
      "range": "46",
      "type": "acid",
      "special": [
        {
          "name": "Glued for",
          "value": "11 seconds"
        },
        {
          "name": "Glue Slow",
          "value": "50% slow"
        },
        {
          "name": "Glue Layers",
          "value": "3"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Glue Soak",
          "cost": 215,
        },
        {
          "name": "Corrosive Glue",
          "cost": 325,
        },
        {
          "name": "Bloon Dissolver",
          "cost": 3565,
        },
        {
          "name": "Bloon Liquefier",
          "cost": 7560,
        },
        {
          "name": "The Bloon Solver",
          "cost": 25920,
        }
      ],
      "path2": [
        {
          "name": "Bigger Globs",
          "cost": 110,
        },
        {
          "name": "Glue Splatter",
          "cost": 1945,
        },
        {
          "name": "Glue Hose",
          "cost": 3510,
        },
        {
          "name": "Glue Strike",
          "cost": 3780,
        },
        {
          "name": "Glue Storm",
          "cost": 16200,
        }
      ],
      "path3": [
        {
          "name": "Stickier Glue",
          "cost": 130,
        },
        {
          "name": "Stronger Glue",
          "cost": 430,
        },
        {
          "name": "MOAB Glue",
          "cost": 3455,
        },
        {
          "name": "Relentless Glue",
          "cost": 3240,
        },
        {
          "name": "Super Glue",
          "cost": 37800,
        }
      ]
    }
  },
  {
    "id": "sniper-monkey",
    "name": "Sniper Monkey",
    "type": "Military",
    "cost": 380,
    "stats": {
      "damage": "2",
      "pierce": "1",
      "attackSpeed": "1.59",
      "range": "Infinite",
      "type": "sharp",
      "special": [
        {
          "name": "Advanced Intel Range",
          "value": "20"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Full Metal Jacket",
          "cost": 380,
        },
        {
          "name": "Large Calibre",
          "cost": 1620,
        },
        {
          "name": "Deadly Precision",
          "cost": 3240,
        },
        {
          "name": "Maim MOAB",
          "cost": 5400,
        },
        {
          "name": "Cripple MOAB",
          "cost": 43200,
        }
      ],
      "path2": [
        {
          "name": "Night Vision Goggles",
          "cost": 325,
        },
        {
          "name": "Shrapnel Shot",
          "cost": 485,
        },
        {
          "name": "Bouncing Bullet",
          "cost": 3455,
        },
        {
          "name": "Supply Drop",
          "cost": 7775,
        },
        {
          "name": "Elite Sniper",
          "cost": 14040,
        }
      ],
      "path3": [
        {
          "name": "Fast Firing",
          "cost": 430,
        },
        {
          "name": "Even Faster Firing",
          "cost": 430,
        },
        {
          "name": "Semi-Automatic",
          "cost": 3780,
        },
        {
          "name": "Full Auto Rifle",
          "cost": 5130,
        },
        {
          "name": "Elite Defender",
          "cost": 15120,
        }
      ]
    }
  },
  {
    "id": "monkey-sub",
    "name": "Monkey Sub",
    "type": "Military",
    "cost": 350,
    "stats": {
      "damage": "1",
      "pierce": "2",
      "attackSpeed": "0.75",
      "range": "42",
      "type": "sharp"
    },
    "paths": {
      "path1": [
        {
          "name": "Longer Range",
          "cost": 140,
        },
        {
          "name": "Advanced Intel",
          "cost": 540,
        },
        {
          "name": "Submerge and Support",
          "cost": 540,
        },
        {
          "name": "Bloontonium Reactor",
          "cost": 2700,
        },
        {
          "name": "Energizer",
          "cost": 43200,
        }
      ],
      "path2": [
        {
          "name": "Barbed Darts",
          "cost": 485,
        },
        {
          "name": "Heat-tipped Darts",
          "cost": 325,
        },
        {
          "name": "Ballistic Missile",
          "cost": 1510,
        },
        {
          "name": "First Strike Capability",
          "cost": 14040,
        },
        {
          "name": "Pre-Emptive Strike",
          "cost": 34560,
        }
      ],
      "path3": [
        {
          "name": "Twin Guns",
          "cost": 485,
        },
        {
          "name": "Airburst Darts",
          "cost": 1080,
        },
        {
          "name": "Triple Guns",
          "cost": 1190,
        },
        {
          "name": "Armor Piercing Darts",
          "cost": 3240,
        },
        {
          "name": "Sub Commander",
          "cost": 27000,
        }
      ]
    }
  },
  {
    "id": "monkey-buccaneer",
    "name": "Monkey Buccaneer",
    "type": "Military",
    "cost": 540,
    "stats": {
      "damage": "1",
      "pierce": "4",
      "attackSpeed": "1.0",
      "range": "60",
      "type": "sharp",
      "special": [
        {
          "name": "Attacks Behind",
          "value": "Yes"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Faster Shooting",
          "cost": 380,
        },
        {
          "name": "Double Shot",
          "cost": 540,
        },
        {
          "name": "Destroyer",
          "cost": 3185,
        },
        {
          "name": "Aircraft Carrier",
          "cost": 8100,
        },
        {
          "name": "Carrier Flagship",
          "cost": 27000,
        }
      ],
      "path2": [
        {
          "name": "Grape Shot",
          "cost": 595,
        },
        {
          "name": "Hot Shot",
          "cost": 540,
        },
        {
          "name": "Cannon Ship",
          "cost": 970,
        },
        {
          "name": "Monkey Pirates",
          "cost": 4860,
        },
        {
          "name": "Pirate Lord",
          "cost": 22680,
        }
      ],
      "path3": [
        {
          "name": "Long Range",
          "cost": 195,
        },
        {
          "name": "Crow's Nest",
          "cost": 430,
        },
        {
          "name": "Merchantman",
          "cost": 2485,
        },
        {
          "name": "Favored Trades",
          "cost": 5940,
        },
        {
          "name": "Trade Empire",
          "cost": 24840,
        }
      ],
      "paragon": {
        "name": "Navarch of the Seas",
        "cost": 540000,
      }
    }
  },
  {
    "id": "monkey-ace",
    "name": "Monkey Ace",
    "type": "Military",
    "cost": 865,
    "stats": {
      "damage": "1",
      "pierce": "5",
      "attackSpeed": "1.68",
      "range": "Infinite",
      "type": "sharp",
      "special": [
        {
          "name": "Advanced Intel Range",
          "value": "22"
        },
        {
          "name": "Flight",
          "value": "Flies in a set path."
        },
        {
          "name": "Attacks",
          "value": "8"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Rapid Fire",
          "cost": 700,
        },
        {
          "name": "Lots More Darts",
          "cost": 700,
        },
        {
          "name": "Fighter Plane",
          "cost": 1080,
        },
        {
          "name": "Operation: Dart Storm",
          "cost": 3240,
        },
        {
          "name": "Sky Shredder",
          "cost": 43200,
        }
      ],
      "path2": [
        {
          "name": "Exploding Pineapple",
          "cost": 215,
        },
        {
          "name": "Spy Plane",
          "cost": 380,
        },
        {
          "name": "Bomber Ace",
          "cost": 970,
        },
        {
          "name": "Ground Zero",
          "cost": 15120,
        },
        {
          "name": "Tsar Bomba",
          "cost": 37800,
        }
      ],
      "path3": [
        {
          "name": "Sharper Darts",
          "cost": 540,
        },
        {
          "name": "Centered Path",
          "cost": 325,
        },
        {
          "name": "Neva-Miss Targeting",
          "cost": 2375,
        },
        {
          "name": "Spectre",
          "cost": 25920,
        },
        {
          "name": "Flying Fortress",
          "cost": 129600,
        }
      ]
    }
  },
  {
    "id": "heli-pilot",
    "name": "Heli Pilot",
    "type": "Military",
    "cost": 1730,
    "stats": {
      "damage": "1",
      "pierce": "3",
      "attackSpeed": "0.56",
      "range": "40",
      "type": "sharp",
      "special": [
        {
          "name": "Advanced Intel Range",
          "value": "22"
        },
        {
          "name": "Flight",
          "value": "Flies with the cursor."
        },
        {
          "name": "Attacks",
          "value": "2"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Quad Darts",
          "cost": 865,
        },
        {
          "name": "Pursuit",
          "cost": 540,
        },
        {
          "name": "Razor Rotors",
          "cost": 1890,
        },
        {
          "name": "Apache Dartship",
          "cost": 21170,
        },
        {
          "name": "Apache Prime",
          "cost": 48600,
        }
      ],
      "path2": [
        {
          "name": "Bigger Jets",
          "cost": 325,
        },
        {
          "name": "IFR",
          "cost": 650,
        },
        {
          "name": "Downdraft",
          "cost": 3240,
        },
        {
          "name": "Support Chinook",
          "cost": 12960,
        },
        {
          "name": "Special Poperations",
          "cost": 32400,
        }
      ],
      "path3": [
        {
          "name": "Faster Darts",
          "cost": 270,
        },
        {
          "name": "Faster Firing",
          "cost": 380,
        },
        {
          "name": "MOAB Shove",
          "cost": 3780,
        },
        {
          "name": "Comanche Defense",
          "cost": 9180,
        },
        {
          "name": "Comanche Commander",
          "cost": 37800,
        }
      ]
    }
  },
  {
    "id": "mortar-monkey",
    "name": "Mortar Monkey",
    "type": "Military",
    "cost": 810,
    "stats": {
      "damage": "1",
      "pierce": "30",
      "attackSpeed": "2.0",
      "range": "Infinite",
      "type": "explosion",
      "special": [
        {
          "name": "Advanced Intel Range",
          "value": "30"
        },
        {
          "name": "radius",
          "value": "34"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Bigger Blast",
          "cost": 540,
        },
        {
          "name": "Bloon Buster",
          "cost": 700,
        },
        {
          "name": "Shell Shock",
          "cost": 1190,
        },
        {
          "name": "The Big One",
          "cost": 8640,
        },
        {
          "name": "The Biggest One",
          "cost": 30240,
        }
      ],
      "path2": [
        {
          "name": "Faster Reload",
          "cost": 325,
        },
        {
          "name": "Rapid Reload",
          "cost": 540,
        },
        {
          "name": "Heavy Shells",
          "cost": 970,
        },
        {
          "name": "Artillery Battery",
          "cost": 5940,
        },
        {
          "name": "Pop and Awe",
          "cost": 32400,
        }
      ],
      "path3": [
        {
          "name": "Increased Accuracy",
          "cost": 215,
        },
        {
          "name": "Burny Stuff",
          "cost": 540,
        },
        {
          "name": "Signal Flare",
          "cost": 755,
        },
        {
          "name": "Shattering Shells",
          "cost": 11800,
        },
        {
          "name": "Blooncineration",
          "cost": 48600,
        }
      ]
    }
  },
  {
    "id": "dartling-gunner",
    "name": "Dartling Gunner",
    "type": "Military",
    "cost": 1080,
    "stats": {
      "damage": "1",
      "pierce": "1",
      "attackSpeed": "0.2",
      "range": "Infinite",
      "type": "sharp",
      "special": [
        {
          "name": "Spread",
          "value": "20°"
        },
        {
          "name": "Rotation Speed",
          "value": "180° per second"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Focused Firing",
          "cost": 325,
        },
        {
          "name": "Laser Shock",
          "cost": 970,
        },
        {
          "name": "Laser Cannon",
          "cost": 4590,
        },
        {
          "name": "Plasma Accelerator",
          "cost": 11880,
        },
        {
          "name": "Ray of Doom",
          "cost": 102600,
        }
      ],
      "path2": [
        {
          "name": "Advanced Targeting",
          "cost": 270,
        },
        {
          "name": "Faster Barrel Spin",
          "cost": 1025,
        },
        {
          "name": "Hydra Rocket Pods",
          "cost": 5670,
        },
        {
          "name": "Rocket Storm",
          "cost": 5185,
        },
        {
          "name": "M.A.D",
          "cost": 64800,
        }
      ],
      "path3": [
        {
          "name": "Faster Swivel",
          "cost": 160,
        },
        {
          "name": "Powerful Darts",
          "cost": 1295,
        },
        {
          "name": "Buckshot",
          "cost": 4105,
        },
        {
          "name": "Bloon Area Denial System",
          "cost": 12960,
        },
        {
          "name": "Bloon Exclusion Zone",
          "cost": 62640,
        }
      ]
    }
  },
  {
    "id": "wizard-monkey",
    "name": "Wizard Monkey",
    "type": "Magic",
    "cost": 485,
    "stats": {
      "damage": "1",
      "pierce": "3",
      "attackSpeed": "1.1",
      "range": "40",
      "type": "energy"
    },
    "paths": {
      "path1": [
        {
          "name": "Guided Magic",
          "cost": 160,
        },
        {
          "name": "Arcane Blast",
          "cost": 650,
        },
        {
          "name": "Arcane Mastery",
          "cost": 1405,
        },
        {
          "name": "Arcane Spike",
          "cost": 11770,
        },
        {
          "name": "Archmage",
          "cost": 34560,
        }
      ],
      "path2": [
        {
          "name": "Fireball",
          "cost": 325,
        },
        {
          "name": "Wall of Fire",
          "cost": 970,
        },
        {
          "name": "Dragon's Breath",
          "cost": 3240,
        },
        {
          "name": "Summon Phoenix",
          "cost": 4320,
        },
        {
          "name": "Wizard Lord Phoenix",
          "cost": 64800,
        }
      ],
      "path3": [
        {
          "name": "Intense magic",
          "cost": 325,
        },
        {
          "name": "Monkey Sense",
          "cost": 325,
        },
        {
          "name": "Shimmer",
          "cost": 1945,
        },
        {
          "name": "Necromancer: Unpopped Army",
          "cost": 3780,
        },
        {
          "name": "Prince of Darkness",
          "cost": 25920,
        }
      ]
    }
  },
  {
    "id": "super-monkey",
    "name": "Super Monkey",
    "type": "Magic",
    "cost": 2700,
    "stats": {
      "damage": "1",
      "pierce": "1",
      "attackSpeed": "0.06",
      "range": "50",
      "type": "sharp"
    },
    "paths": {
      "path1": [
        {
          "name": "Laser Blasts",
          "cost": 2700,
        },
        {
          "name": "Plasma Blasts",
          "cost": 4860,
        },
        {
          "name": "Sun Avatar",
          "cost": 23825,
        },
        {
          "name": "Sun Temple",
          "cost": 108000,
        },
        {
          "name": "True Sun God",
          "cost": 540000,
        }
      ],
      "path2": [
        {
          "name": "Super Range",
          "cost": 1080,
        },
        {
          "name": "Epic Range",
          "cost": 1510,
        },
        {
          "name": "Robo Monkey",
          "cost": 9720,
        },
        {
          "name": "Tech Terror",
          "cost": 23760,
        },
        {
          "name": "The Anti-Bloon",
          "cost": 97200,
        }
      ],
      "path3": [
        {
          "name": "Knockback",
          "cost": 3240,
        },
        {
          "name": "Ultravision",
          "cost": 1295,
        },
        {
          "name": "Dark Knight",
          "cost": 5940,
        },
        {
          "name": "Dark Champion",
          "cost": 64800,
        },
        {
          "name": "Legend of the Night",
          "cost": 259200,
        }
      ]
    }
  },
  {
    "id": "ninja-monkey",
    "name": "Ninja Monkey",
    "type": "Magic",
    "cost": 540,
    "stats": {
      "damage": "1",
      "pierce": "2",
      "attackSpeed": "0.7",
      "range": "40",
      "type": "sharp",
      "special": [
        {
          "name": "Camo Detection",
          "value": "Yes"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Ninja Discipline",
          "cost": 325,
        },
        {
          "name": "Sharp Shurikens",
          "cost": 380,
        },
        {
          "name": "Double Shot",
          "cost": 920,
        },
        {
          "name": "Bloonjitsu",
          "cost": 2970,
        },
        {
          "name": "Grandmaster Ninja",
          "cost": 37800,
        }
      ],
      "path2": [
        {
          "name": "Distraction",
          "cost": 380,
        },
        {
          "name": "Counter-Espionage",
          "cost": 540,
        },
        {
          "name": "Shinobi Tactics",
          "cost": 970,
        },
        {
          "name": "Bloon Sabotage",
          "cost": 5400,
        },
        {
          "name": "Grand Saboteur",
          "cost": 23760,
        }
      ],
      "path3": [
        {
          "name": "Seeking Shuriken",
          "cost": 270,
        },
        {
          "name": "Caltrops",
          "cost": 430,
        },
        {
          "name": "Flash Bomb",
          "cost": 2970,
        },
        {
          "name": "Sticky Bomb",
          "cost": 4860,
        },
        {
          "name": "Master Bomber",
          "cost": 43200,
        }
      ],
      "paragon": {
        "name": "Ascended Shadow",
        "cost": 648000,
      }
    }
  },
  {
    "id": "alchemist",
    "name": "Alchemist",
    "type": "Magic",
    "cost": 595,
    "stats": {
      "damage": "1",
      "pierce": "15",
      "attackSpeed": "2.0",
      "range": "45",
      "type": "acid",
      "special": [
        {
          "name": "Acid Damage",
          "value": "1 per 2 seconds"
        },
        {
          "name": "Acid Duration",
          "value": "4 seconds"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Larger Potions",
          "cost": 270,
        },
        {
          "name": "Acidic Mixture Dip",
          "cost": 380,
        },
        {
          "name": "Berserker Brew",
          "cost": 1350,
        },
        {
          "name": "Stronger Stimulant",
          "cost": 3250,
        },
        {
          "name": "Permanent Brew",
          "cost": 64800,
        }
      ],
      "path2": [
        {
          "name": "Stronger Acid",
          "cost": 270,
        },
        {
          "name": "Perishing Potions",
          "cost": 515,
        },
        {
          "name": "Unstable Concoction",
          "cost": 3240,
        },
        {
          "name": "Transforming Tonic",
          "cost": 4860,
        },
        {
          "name": "Total Transformation",
          "cost": 48600,
        }
      ],
      "path3": [
        {
          "name": "Faster Throwing",
          "cost": 700,
        },
        {
          "name": "Acid Pool",
          "cost": 650,
        },
        {
          "name": "Lead To Gold",
          "cost": 1080,
        },
        {
          "name": "Rubber to Gold",
          "cost": 2970,
        },
        {
          "name": "Bloon Master Alchemist",
          "cost": 43200,
        }
      ]
    }
  },
  {
    "id": "druid",
    "name": "Druid",
    "type": "Magic",
    "cost": 460,
    "stats": {
      "damage": "1",
      "pierce": "1",
      "attackSpeed": "1.1",
      "range": "35",
      "type": "sharp",
      "special": [
        {
          "name": "Attacks",
          "value": "5"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Hard Thorns",
          "cost": 270,
        },
        {
          "name": "Heart of Thunder",
          "cost": 1080,
        },
        {
          "name": "Druid of the Storm",
          "cost": 2160,
        },
        {
          "name": "Ball Lightning",
          "cost": 6480,
        },
        {
          "name": "Superstorm",
          "cost": 97200,
        }
      ],
      "path2": [
        {
          "name": "Thorn Swarm",
          "cost": 270,
        },
        {
          "name": "Heart of Oak",
          "cost": 380,
        },
        {
          "name": "Druid of the Jungle",
          "cost": 1025,
        },
        {
          "name": "Jungle's Bounty",
          "cost": 5400,
        },
        {
          "name": "Spirit of the Forest",
          "cost": 37800,
        }
      ],
      "path3": [
        {
          "name": "Druidic Reach",
          "cost": 110,
        },
        {
          "name": "Heart of Vengeance",
          "cost": 325,
        },
        {
          "name": "Druid of Wrath",
          "cost": 650,
        },
        {
          "name": "Poplust",
          "cost": 2700,
        },
        {
          "name": "Avatar of Wrath",
          "cost": 48600,
        }
      ]
    }
  },
  {
    "id": "banana-farm",
    "name": "Banana Farm",
    "type": "Support",
    "cost": 1350,
    "stats": {
      "damage": "N/A",
      "pierce": "N/A",
      "attackSpeed": "N/A",
      "range": "40",
      "type": "N/A",
      "special": [
        {
          "name": "Banana Income",
          "value": "20$"
        },
        {
          "name": "Banana Count",
          "value": "4"
        },
        {
          "name": "Banana Lifetime",
          "value": "15 seconds"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Increased Production",
          "cost": 540,
        },
        {
          "name": "Greater Production",
          "cost": 650,
        },
        {
          "name": "Banana Plantation",
          "cost": 3240,
        },
        {
          "name": "Banana Research Facility",
          "cost": 20520,
        },
        {
          "name": "Banana Central",
          "cost": 108000,
        }
      ],
      "path2": [
        {
          "name": "Long Life Bananas",
          "cost": 325,
        },
        {
          "name": "Valuable Bananas",
          "cost": 865,
        },
        {
          "name": "Monkey Bank",
          "cost": 3565,
        },
        {
          "name": "IMF Loan",
          "cost": 8100,
        },
        {
          "name": "Monkey-Nomics",
          "cost": 108000,
        }
      ],
      "path3": [
        {
          "name": "EZ Collect",
          "cost": 270,
        },
        {
          "name": "Banana Salvage",
          "cost": 215,
        },
        {
          "name": "Marketplace",
          "cost": 3130,
        },
        {
          "name": "Central Market",
          "cost": 16200,
        },
        {
          "name": "Monkey Wall Street",
          "cost": 64800,
        }
      ]
    }
  },
  {
    "id": "spike-factory",
    "name": "Spike Factory",
    "type": "Support",
    "cost": 1080,
    "stats": {
      "damage": "1",
      "pierce": "5",
      "attackSpeed": "1.75",
      "range": "34",
      "type": "sharp",
      "special": [
        {
          "name": "Hits Camo",
          "value": "Yes"
        },
        {
          "name": "Spike Target",
          "value": "Track"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Bigger Stacks",
          "cost": 865,
        },
        {
          "name": "White Hot Spikes",
          "cost": 650,
        },
        {
          "name": "Spiked Balls",
          "cost": 2485,
        },
        {
          "name": "Spiked Mines",
          "cost": 11880,
        },
        {
          "name": "Super Mines",
          "cost": 175500,
        }
      ],
      "path2": [
        {
          "name": "Faster Production",
          "cost": 650,
        },
        {
          "name": "Even Faster Production",
          "cost": 865,
        },
        {
          "name": "MOAB SHREDR",
          "cost": 2700,
        },
        {
          "name": "Spike Storm",
          "cost": 5400,
        },
        {
          "name": "Carpet of Spikes",
          "cost": 43200,
        }
      ],
      "path3": [
        {
          "name": "Long Reach",
          "cost": 160,
        },
        {
          "name": "Smart Spikes",
          "cost": 430,
        },
        {
          "name": "Long Life Spikes",
          "cost": 1510,
        },
        {
          "name": "Deadly Spikes",
          "cost": 3780,
        },
        {
          "name": "Perma-Spike",
          "cost": 32400,
        }
      ]
    }
  },
  {
    "id": "monkey-village",
    "name": "Monkey Village",
    "type": "Support",
    "cost": 1295,
    "stats": {
      "damage": "N/A",
      "pierce": "N/A",
      "attackSpeed": "N/A",
      "range": "40",
      "type": "N/A",
      "special": [
        {
          "name": "Range Boost",
          "value": "+10%"
        }
      ]
    },
    "paths": {
      "path1": [
        {
          "name": "Bigger Radius",
          "cost": 430,
        },
        {
          "name": "Jungle Drums",
          "cost": 1620,
        },
        {
          "name": "Primary Training",
          "cost": 865,
        },
        {
          "name": "Primary Mentoring",
          "cost": 2700,
        },
        {
          "name": "Primary Expertise",
          "cost": 27000,
        }
      ],
      "path2": [
        {
          "name": "Grow Blocker",
          "cost": 270,
        },
        {
          "name": "Radar Scanner",
          "cost": 2160,
        },
        {
          "name": "Monkey Intelligence Bureau",
          "cost": 8100,
        },
        {
          "name": "Call To Arms",
          "cost": 21600,
        },
        {
          "name": "Homeland Defense",
          "cost": 43200,
        }
      ],
      "path3": [
        {
          "name": "Monkey Business",
          "cost": 540,
        },
        {
          "name": "Monkey Commerce",
          "cost": 540,
        },
        {
          "name": "Monkey Town",
          "cost": 10800,
        },
        {
          "name": "Monkey City",
          "cost": 3240,
        },
        {
          "name": "Monkeyopolis",
          "cost": 5400,
        }
      ]
    }
  },
  {
    "id": "engineer-monkey",
    "name": "Engineer Monkey",
    "type": "Support",
    "cost": 485,
    "stats": {
      "damage": "1",
      "pierce": "3",
      "attackSpeed": "0.7",
      "range": "40",
      "type": "sharp"
    },
    "paths": {
      "path1": [
        {
          "name": "Sentry Gun",
          "cost": 540,
        },
        {
          "name": "Faster Engineering",
          "cost": 430,
        },
        {
          "name": "Sprockets",
          "cost": 565,
        },
        {
          "name": "Sentry Expert",
          "cost": 2700,
        },
        {
          "name": "Sentry Paragon",
          "cost": 34560,
        }
      ],
      "path2": [
        {
          "name": "Larger Service Area",
          "cost": 270,
        },
        {
          "name": "Deconstruction",
          "cost": 380,
        },
        {
          "name": "Cleansing Foam",
          "cost": 865,
        },
        {
          "name": "Overclock",
          "cost": 14580,
        },
        {
          "name": "Ultraboost",
          "cost": 129600,
        }
      ],
      "path3": [
        {
          "name": "Oversize Nails",
          "cost": 485,
        },
        {
          "name": "Pin",
          "cost": 235,
        },
        {
          "name": "Double Gun",
          "cost": 540,
        },
        {
          "name": "Bloon Trap",
          "cost": 3780,
        },
        {
          "name": "XXXL Trap",
          "cost": 64800,
        }
      ]
    }
  }
]