import { useState } from "react";
import ammoCalibers from "../ammoCalibers/ammoCalibers";

const Test = () => {
    const [data, setData] = useState<[]>();
    const [caliber, setCaliber] = useState<string>("5.56x45mm");

    const getData = () => {
        fetch('https://api.tarkov.dev/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `{
    ammo() {
        item {
            shortName
            imageLink
        }
        damage
        armorDamage
        fragmentationChance
        ricochetChance
        penetrationChance
        penetrationPowe
    }
}`})
        })
            .then(r => r.json())
            .then(response => {
                //setData(response.data);
                console.log(response.data);
            });
    }

    return (
        <div>
            <label htmlFor="">
                Calibers:
                <select value={caliber} onChange={(e) => {
                    setCaliber(e.target.value);
                    console.log(e.target.value);

                }}>
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
                    getData();
                }}
            >get data</button>
            <button
                onClick={() => {
                    console.log(data);
                }}>
                log data
            </button>
            Test Component
            <div>
                {data && data.map(({ shortName, imageLink, damage }: { shortName: string, imageLink: string, damage: string }) => (
                    <div>
                        <h3>
                            {shortName}
                            <br />
                            {damage}
                        </h3>
                        <img width='250px' height='150px' src={imageLink} alt={imageLink} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Test;


