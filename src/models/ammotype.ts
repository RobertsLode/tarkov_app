
type AmmoType = {
    armorDamage: number,
    damage: number,
    fragmentationChance: number,
    item: {
      imageLink: string,
      shortName: string,
      name: string,
    },
    penetrationChance: number,
    penetrationPower: number,
    ricochetChance: number,
};

export default AmmoType;