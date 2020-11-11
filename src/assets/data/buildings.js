export const buildings = [
  {
    category: 'Base',
    name: 'Automatic Dispenser',
    hasPerOperation: false,
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 60, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Base',
    name: 'Bunker Door',
    hasPerOperation: false,
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Base',
    name: 'Mechanized Airlock',
    hasPerOperation: false,
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Base',
    name: 'Smart Storage Bin',
    hasPerOperation: false,
    hasConsistentIO: false,
    capacity: {
      power: {},
      resources: { value: 20000, unit: 'kg' },
    },
    power: { usage: 60, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Base',
    name: 'Storage Bin',
    hasPerOperation: false,
    hasConsistentIO: true,
    capacity: {
      power: {},
      resources: { value: 20000, unit: 'kg' },
    },
    power: {},
    inputs: [],
    outputs: [],
  },
  {
    category: 'Base',
    name: 'Transit Tube Access',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 960, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Oxygen',
    name: 'Algae Terrarium',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: {},
    inputs: [
      { name: 'Algae', value: 30, unit: 'g', rate: 'per second' },
      { name: 'Water', value: 300, unit: 'g', rate: 'per second' },
      { name: 'Carbon Dioxide', value: 333.33, unit: 'mg', rate: 'per second' },
    ],
    outputs: [
      { name: 'Oxygen', value: 40, unit: 'g', rate: 'per second' },
      { name: 'Polluted Water', value: 290.33, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Oxygen',
    name: 'Carbon Skimmer',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [
      { name: 'Water', value: 1, unit: 'kg', rate: 'per second' },
      { name: 'Carbon Dioxide', value: 300, unit: 'g', rate: 'per second' },
    ],
    outputs: [
      { name: 'Polluted Water', value: 1, unit: 'kg', rate: 'per second' },
    ],
  },
  {
    category: 'Oxygen',
    name: 'Deodorizer',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: {},
    inputs: [
      { name: 'Polluted Oxygen', value: 100, unit: 'g', rate: 'per second' },
      {
        name: 'Filtration Medium',
        value: 133.33,
        unit: 'g',
        rate: 'per second',
      },
    ],
    outputs: [
      { name: 'Oxygen', value: 90, unit: 'g', rate: 'per second' },
      { name: 'Clay', value: 143.33, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Oxygen',
    name: 'Electrolyzer',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [{ name: 'Water', value: 1, unit: 'kg', rate: 'per second' }],
    outputs: [
      { name: 'Oxygen', value: 888, unit: 'g', rate: 'per second' },
      { name: 'Hydrogen', value: 112, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Oxygen',
    name: 'Oxygen Diffuser',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [{ name: 'Algae', value: 550, unit: 'g', rate: 'per second' }],
    outputs: [{ name: 'Oxygen', value: 500, unit: 'g', rate: 'per second' }],
  },
  {
    category: 'Oxygen',
    name: 'Rust Deoxidizer',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 60, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [
      { name: 'Rust', value: 750, unit: 'g', rate: 'per second' },
      { name: 'Salt', value: 250, unit: 'g', rate: 'per second' },
    ],
    outputs: [
      { name: 'Oxygen', value: 570, unit: 'g', rate: 'per second' },
      { name: 'Chlorine', value: 30, unit: 'g', rate: 'per second' },
      { name: 'Iron Ore', value: 400, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Power',
    name: 'Battery',
    hasConsistentIO: true,
    capacity: {
      power: { value: 10, unit: 'kJ' },
      resources: {},
    },
    power: {},
    inputs: [],
    outputs: [],
  },
  {
    category: 'Power',
    name: 'Coal Generator',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 0, generation: 600, unit: 'W', rate: 'per second' },
    inputs: [{ name: 'Coal', value: 1, unit: 'kg', rate: 'per second' }],
    outputs: [
      { name: 'Carbon Dioxide', value: 20, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Power',
    name: 'Hydrogen Generator',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 0, generation: 800, unit: 'W', rate: 'per second' },
    inputs: [{ name: 'Hydrogen', value: 100, unit: 'g', rate: 'per second' }],
    outputs: [],
  },
  {
    category: 'Power',
    name: 'Jumbo Battery',
    hasConsistentIO: true,
    capacity: {
      power: { value: 40, unit: 'kJ' },
      resources: {},
    },
    power: {},
    inputs: [],
    outputs: [],
  },
  {
    category: 'Power',
    name: 'Manual Generator',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 0, generation: 400, unit: 'W', rate: 'per second' },
    inputs: [{ name: 'Dupe', value: 1, unit: 'each', rate: '' }],
    outputs: [],
  },
  {
    category: 'Power',
    name: 'Natural Gas Generator',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 0, generation: 800, unit: 'W', rate: 'per second' },
    inputs: [{ name: 'Natural Gas', value: 90, unit: 'g', rate: 'per second' }],
    outputs: [
      { name: 'Carbon Dioxide', value: 22.5, unit: 'g', rate: 'per second' },
      { name: 'Polluted Water', value: 67.5, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Power',
    name: 'Petroleum Generator',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 0, generation: 2000, unit: 'W', rate: 'per second' },
    inputs: [{ name: 'Petroleum', value: 2, unit: 'kg', rate: 'per second' }],
    outputs: [
      { name: 'Carbon Dioxide', value: 500, unit: 'g', rate: 'per second' },
      { name: 'Polluted Water', value: 750, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Power',
    name: 'Smart Battery',
    hasConsistentIO: false,
    capacity: {
      power: { value: 20, unit: 'kJ' },
      resources: {},
    },
    power: {},
    inputs: [],
    outputs: [],
  },
  {
    category: 'Power',
    name: 'Solar Panel',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 0, generation: 380, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Power',
    name: 'Steam Turbine',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    // TODO: Need to setup system to handle different power for different temps
    power: { usage: 0, generation: 850, unit: 'W', rate: 'per second' },
    inputs: [{ name: 'Steam', value: 2, unit: 'kg', rate: 'per second' }],
    outputs: [],
  },
  {
    category: 'Power',
    name: 'Wood Burner',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 0, generation: 300, unit: 'W', rate: 'per second' },
    inputs: [{ name: 'Lumber', value: 1.2, unit: 'kg', rate: 'per second' }],
    outputs: [
      { name: 'Carbon Dioxide', value: 170, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Food',
    name: 'Electric Grill',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 60, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Food',
    name: 'Gas Range',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 240, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [
      { name: 'Natural Gas', value: 100, unit: 'g', rate: 'per second' },
    ],
    outputs: [
      { name: 'Carbon Dioxide', value: 25, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Food',
    name: 'Incubator',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 240, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Food',
    name: 'Microbe Musher',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 240, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Food',
    name: 'Refrigerator',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Plumbing',
    name: 'Liquid Filter',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Plumbing',
    name: 'Liquid Pump',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 240, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Plumbing',
    name: 'Liquid Shutoff',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 10, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Plumbing',
    name: 'Mini Liquid Pump',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 60, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Ventilation',
    name: 'Gas Filter',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Ventilation',
    name: 'Gas Pump',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 240, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Ventilation',
    name: 'Gas Shutoff',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 10, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Ventilation',
    name: 'Mini Gas Pump',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 60, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Refinement',
    name: 'Algae Distiller',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [{ name: 'Slime', value: 600, unit: 'g', rate: 'per second' }],
    outputs: [
      { name: 'Algae', value: 200, unit: 'g', rate: 'per second' },
      { name: 'Polluted Water', value: 400, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Refinement',
    name: 'Compost',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: {},
    inputs: [
      { name: 'Compostable', value: 100, unit: 'g', rate: 'per second' },
    ],
    outputs: [{ name: 'Dirt', value: 100, unit: 'g', rate: 'per second' }],
  },
  // TODO: need to setup system to account for different inputs
  // {
  //   category: 'Refinement',
  //   name: 'Desalinator',
  //   hasConsistentIO: false,
  //   capacity: { power: {}, resources: {} },
  //   power: {},
  //   inputs: [],
  //   outputs: [
  //     { name: 'Water', value: 4.65, unit: 'kg', rate: 'per second' },
  //     { name: 'Salt', value: 350, unit: 'g', rate: 'per second' },
  //   ],
  // },
  {
    category: 'Refinement',
    name: 'Ethanol Distiller',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 240, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [{ name: 'Lumber', value: 1, unit: 'kg', rate: 'per second' }],
    outputs: [
      { name: 'Ethanol', value: 500, unit: 'g', rate: 'per second' },
      { name: 'Polluted Dirt', value: 333.33, unit: 'g', rate: 'per second' },
      { name: 'Carbon Dioxide', value: 166.67, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Refinement',
    name: 'Fertilizer Synthesizer',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [
      { name: 'Polluted Water', value: 39, unit: 'g', rate: 'per second' },
      { name: 'Dirt', value: 65, unit: 'g', rate: 'per second' },
      { name: 'Phosphorite', value: 26, unit: 'g', rate: 'per second' },
    ],
    outputs: [
      { name: 'Fertilizer', value: 120, unit: 'g', rate: 'per second' },
      { name: 'Natural Gas', value: 10, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Refinement',
    name: 'Glass Forge',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 1200, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [{ name: 'Sand', value: 100, unit: 'kg', rate: 'per second' }],
    outputs: [
      { name: 'Molten Glass', value: 25, unit: 'kg', rate: 'per second' },
    ],
  },
  {
    category: 'Refinement',
    name: 'Metal Refinery',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 1200, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [
      { name: 'Liquid Coolant', value: 400, unit: 'kg', rate: 'per second' },
    ],
    outputs: [],
  },
  {
    category: 'Refinement',
    name: 'Molecular Forge',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 1200, generation: 0, unit: 'W', rate: 'per second' },
    // TODO: need to handle different inputs and outputs
    inputs: [],
    outputs: [],
  },
  {
    category: 'Refinement',
    name: 'Oil Refinery',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 480, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [{ name: 'Crude Oil', value: 10, unit: 'kg', rate: 'per second' }],
    outputs: [
      { name: 'Petroleum', value: 5, unit: 'kg', rate: 'per second' },
      { name: 'Natural Gas', value: 90, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Refinement',
    name: 'Oxylite Refinery',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 1200, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [
      { name: 'Oxygen', value: 600, unit: 'g', rate: 'per second' },
      { name: 'Gold', value: 3, unit: 'g', rate: 'per second' },
    ],
    outputs: [{ name: 'Oxylite', value: 600, unit: 'g', rate: 'per second' }],
  },
  {
    category: 'Refinement',
    name: 'Polymer Press',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 240, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [
      { name: 'Petroleum', value: 833.33, unit: 'g', rate: 'per second' },
    ],
    outputs: [
      { name: 'Plastic', value: 500, unit: 'g', rate: 'per second' },
      { name: 'Steam', value: 8.33, unit: 'g', rate: 'per second' },
      { name: 'Carbon Dioxide', value: 8.33, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Refinement',
    name: 'Rock Crusher',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 240, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Refinement',
    name: 'Water Sieve',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [
      { name: 'Polluted Water', value: 5, unit: 'kg', rate: 'per second' },
      { name: 'Filtration Medium', value: 1, unit: 'kg', rate: 'per second' },
    ],
    outputs: [
      { name: 'Water', value: 5, unit: 'kg', rate: 'per second' },
      { name: 'Polluted Dirt', value: 200, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Medicine',
    name: 'Disease Clinic',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 240, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Medicine',
    name: 'Massage Table',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 240, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Furniture',
    name: 'Arcade Cabinet',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 1200, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Furniture',
    name: 'Ceiling Light',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 10, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Furniture',
    name: 'Espresso Machine',
    hasPerOperation: true,
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 480, generation: 0, unit: 'W', rate: 'per second' },
    // TODO: need input and output once per user is an option
    inputs: [],
    outputs: [],
  },
  {
    category: 'Furniture',
    name: 'Jukebot',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 960, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Furniture',
    name: 'Lamp',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 8, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Stations',
    name: 'Atmo Suit Dock',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Stations',
    name: 'Exosuit Forge',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 480, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Stations',
    name: 'Jet Suit Dock',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  // TODO: need to support per use
  // {
  //   category: 'Stations',
  //   name: 'Farm Station',
  //   hasConsistentIO: false,
  //   capacity: { power: {}, resources: {} },
  //   power: {},
  //   inputs: [
  //     { name: 'Fertilizer', value: 5, unit: 'kg', rate: 'per use' }
  //   ],
  //   outputs: [],
  // },
  // {
  //   category: 'Stations',
  //   name: 'Power Control Station',
  //   hasConsistentIO: false,
  //   capacity: { power: {}, resources: {} },
  //   power: {},
  //   inputs: [
  //     { name: 'Refined Metal', value: 5, unit: 'kg', rate: 'per use' }
  //   ],
  //   outputs: [],
  // },
  {
    category: 'Stations',
    name: 'Research Station',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 60, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [
      // TODO: Need to support per use
      // { name: 'Dirt', value: 50, unit: 'kg', rate: 'per research' }
    ],
    outputs: [],
  },
  {
    category: 'Stations',
    name: 'Skill Scrubber',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 480, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Stations',
    name: 'Super Computer',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [
      // TODO: Need to support per user
      // { name: 'Water', value: 50, unit: 'kg', rate: 'per research' }
    ],
    outputs: [],
  },
  {
    category: 'Stations',
    name: 'Telescope',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Stations',
    name: 'Textile Loom',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 240, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Stations',
    name: 'Virtual Planetarium',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Utilities',
    name: 'Ice Maker',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 60, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [
      // TODO: per user
      // { name: 'Water', value 30, unit: 'kg', rate: 'per use' }
    ],
    outputs: [],
  },
  {
    category: 'Utilities',
    name: 'Liquid Tepidizer',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 960, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Utilities',
    name: 'Oil Well',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 240, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [{ name: 'Water', value: 1, unit: 'kg', rate: 'per second' }],
    outputs: [
      { name: 'Crude Oil', value: 3.33, unit: 'kg', rate: 'per second' },
      { name: 'Natural Gas', value: 33.3, unit: 'g', rate: 'per second' },
    ],
  },
  {
    category: 'Utilities',
    name: 'Space Heater',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Utilities',
    name: 'Thermo Aquatuner',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 1200, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Utilities',
    name: 'Thermo Regulator',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 240, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Automation',
    name: 'Duplicant Checkpoint',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 10, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Automation',
    name: 'Space Scanner',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Shipping',
    name: 'Auto-Sweeper',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Shipping',
    name: 'Conveyor Loader',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Shipping',
    name: 'Conveyor Shutoff',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 10, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Shipping',
    name: 'Robo-Miner',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 120, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
  {
    category: 'Rocketry',
    name: 'Gantry',
    hasConsistentIO: false,
    capacity: { power: {}, resources: {} },
    power: { usage: 1200, generation: 0, unit: 'W', rate: 'per second' },
    inputs: [],
    outputs: [],
  },
];