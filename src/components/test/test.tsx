import { useState } from "react";
import AmmoType from "../../models/ammotype";
import ColorExplainType from "../../models/colorExplainType";
import ammoCalibers from "../data/ammoCalibers/ammoCalibers";
import armorLevels from "../data/armorLevels/armorLevels";
import colorExplain from "../data/colorExplain/colorExplain";
import penColors from "../data/penColors/penColors";

const Test = () => {
    const [ammoArray, setAmmoArray] = useState<AmmoType[]>();
    // const [caliber, setCaliber] = useState<string>("5.56x45mm");
    console.log(colorExplain.map(({color, text}) => {
        return text;
    }));


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

    const getPenColorClass1 = (pen: number) => {

        if (pen <= 5) {
            return penColors[2];
        }
        else if (pen <= 6) {
            return penColors[3];
        }
        else if (pen <= 7) {
            return penColors[4];
        }
        else if (pen <= 8) {
            return penColors[5];
        }
        else if (pen >= 10) {
            return penColors[6];
        }
    };

    const getPenColorClass2 = (pen: number) => {
        if (pen <= 6) {
            return penColors[1];
        }
        if (pen <= 8) {
            return penColors[2];
        }
        else if (pen <= 10) {
            return penColors[3];
        }
        else if (pen <= 15) {
            return penColors[4];
        }
        else if (pen <= 16) {
            return penColors[5];
        }
        else if (pen <= 95) {
            return penColors[6];
        }
    };

    const getPenColorClass3 = (pen: number) => {
        if (pen <= 18) {
            return penColors[1];
        }
        if (pen <= 20) {
            return penColors[2];
        }
        else if (pen <= 23) {
            return penColors[3];
        }
        else if (pen <= 25) {
            return penColors[4];
        }
        else if (pen <= 26) {
            return penColors[5];
        }
        else if (pen <= 95) {
            return penColors[6];
        }
    };

    const getPenColorClass4 = (pen: number) => {
        if (pen <= 24) {
            return penColors[1];
        }
        if (pen <= 25) {
            return penColors[2];
        }
        else if (pen <= 30) {
            return penColors[3];
        }
        else if (pen <= 35) {
            return penColors[4];
        }
        else if (pen <= 39) {
            return penColors[5];
        }
        else if (pen <= 95) {
            return penColors[6];
        }
    };

    const getPenColorClass5 = (pen: number) => {
        if (pen <= 28) {
            return penColors[1];
        }
        if (pen <= 30) {
            return penColors[2];
        }
        else if (pen <= 37) {
            return penColors[3];
        }
        else if (pen <= 42) {
            return penColors[4];
        }
        else if (pen <= 48) {
            return penColors[5];
        }
        else if (pen <= 95) {
            return penColors[6];
        }
    };

    const getPenColorClass6 = (pen: number) => {
        if (pen <= 35) {
            return penColors[1];
        }
        if (pen <= 37) {
            return penColors[2];
        }
        else if (pen <= 42) {
            return penColors[3];
        }
        else if (pen <= 48) {
            return penColors[4];
        }
        else if (pen <= 58) {
            return penColors[5];
        }
        else if (pen <= 95) {
            return penColors[6];
        }
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
                            <div className="ballistic--teble-top"
                            >
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
                        col-xs-6
                        col-sm-8
                        col-md-8
                        col-lg-8">
                            <div className="ballistic--teble">
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
                                <div className="ammo--sheet-small-box"
                                    style={{ backgroundColor: getPenColorClass1(penetrationPower) }}>
                                </div>
                                <div className="ammo--sheet-small-box"
                                    style={{ backgroundColor: getPenColorClass2(penetrationPower) }}>
                                </div>
                                <div className="ammo--sheet-small-box"
                                    style={{ backgroundColor: getPenColorClass3(penetrationPower) }}>
                                </div>
                                <div className="ammo--sheet-small-box"
                                    style={{ backgroundColor: getPenColorClass4(penetrationPower) }}>
                                </div>
                                <div className="ammo--sheet-small-box"
                                    style={{ backgroundColor: getPenColorClass5(penetrationPower) }}>
                                </div>
                                <div className="ammo--sheet-small-box"
                                    style={{ backgroundColor: getPenColorClass6(penetrationPower) }}>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div
                    className="color--explanation">
                    <p>Color explatation:</p>
                    <div className="color--explanation-map">
                        {colorExplain.map(({ color, text }) => (
                            <div className="color--explanation-mapped">
                                <div className="color--explanation-mapped-color-box"
                                style={{ backgroundColor: color }}>
                                </div>
                               <p className="color--explanation-mapped-text-box">{text}</p> 
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;


