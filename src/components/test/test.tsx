import { useState } from "react";
import AmmoType from "../../models/ammotype";
import ammoCalibers from "../data/ammoCalibers/ammoCalibers";
import armorLevels from "../data/armorLevels/armorLevels";

const Test = () => {
    const [ammoArray, setAmmoArray] = useState<AmmoType[]>();
    // const [caliber, setCaliber] = useState<string>("5.56x45mm");

    const getData = (caliber: string) => {
        fetch('https://api.tarkov.dev/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `{
    ammo {
        item {
            shortName
            name
            imageLink
        }
        damage
        armorDamage
        fragmentationChance
        ricochetChance
        penetrationChance
        penetrationPower
    }
}`
            })
        })
            .then(r => r.json())
            .then(response => {
                const ammo = response.data.ammo.filter((singleAmmo: AmmoType) => {
                    return singleAmmo.item.name.includes(caliber);
                })
                setAmmoArray(ammo);
                // console.log(response.data.ammo);
            });
    };

    return (
        <div>
            <label htmlFor="">
                Select a caliber:
                <select value={'selkect'} onChange={(e) => {
                    // setCaliber(e.target.value);
                    console.log(e.target.value);
                    getData(e.target.value);

                }}>
                    <option>Caliber</option>
                    {ammoCalibers.map((caliber) => (
                        <option
                            key={caliber}
                            value={caliber}
                        >
                            {caliber}
                        </option>
                    ))}
                </select>
            </label>
            <button
                onClick={() => {
                    console.log(ammoArray);
                }}>
                log data
            </button>
            Test Component
            <div className="row start-xs">
                <div className="row start-xs" >
                    {ammoArray &&
                        <div className="
                        col-xs-11
                        col-sm-8
                        col-md-8
                        col-lg-8">
                            <div className="test">
                                <div className="ammo--sheet-small-box">
                                    Icon
                                </div>
                                <div className="ammo--sheet-small-box">
                                    <p>Name</p>
                                </div>
                                <div className="ammo--sheet-small-box">
                                    Damage
                                </div>
                                <div className="ammo--sheet-small-box">
                                    Penetration
                                </div>
                                <div className="ammo--sheet-small-box">
                                    Armor damage
                                </div>
                                {armorLevels.map((armor) => (
                                    <div className="ammo--sheet-small-box">
                                        {armor}
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </div>
                {/* <div className="row start-xs">
                    {ammoArray &&
                        <div className="
                        col-xs-11
                        col-sm-8
                        col-md-8
                        col-lg-8">
                            <div className="test">
                                <div className="ammo--sheet-small-box">
                                    icon
                                </div>
                                <div className="ammo--sheet-small-box">
                                    Name
                                </div>
                                <div className="ammo--sheet-small-box">
                                    Damage
                                </div>
                                <div className="ammo--sheet-small-box">
                                    Penetration power
                                </div>
                                <div className="ammo--sheet-small-box">
                                    Armor damage
                                </div>
                            </div>
                        </div>
                    }
                </div> */}
                <div className="row start-xs" >
                    {ammoArray && ammoArray.map(({ item, damage, armorDamage,
                        fragmentationChance, ricochetChance, penetrationPower,
                        penetrationChance }) => (
                        <div className="
                        col-xs-11
                        col-sm-8
                        col-md-8
                        col-lg-8">
                            <div className="test">
                                <div className="ammo--sheet-small-box">
                                    <img width='120px' height='70px' src={item.imageLink} alt={item.shortName} />
                                </div>
                                <div className="ammo--sheet-small-box">
                                    <p>{item.shortName}</p>
                                </div>
                                <div className="ammo--sheet-small-box">
                                    {damage}
                                </div>
                                <div className="ammo--sheet-small-box">
                                    {penetrationPower}
                                </div>
                                <div className="ammo--sheet-small-box">
                                    {armorDamage}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Test;


