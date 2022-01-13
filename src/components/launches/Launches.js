import {useEffect, useState} from "react";

import Launch from "../launch/Launch";

function Launches() {

    let [launches, setLaunches] = useState([]);
    useEffect(() => {
            fetch('https://api.spacexdata.com/v3/launches/').then(response => response.json()).then(launches => setLaunches(
                launches.filter(item => item !== '2020')))
        }
        , [])

    return (
        <div>
            {launches.map(value => <Launch key={value.flight_number} missionName={value.mission_name} launchYear={value.launch_year}
                                           pic={value.links.mission_patch_small}/>
            )}
        </div>
    )
}

export default Launches