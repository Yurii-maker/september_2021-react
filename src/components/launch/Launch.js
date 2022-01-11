import './Launch.css'

function Launch({missionName, launchYear, pic}) {
    return (
        <div className={'wrap'}>
            <div className={'Text'}><h1>{missionName}</h1> <p>{launchYear}</p></div>
            <img src={pic} alt="picture"/>
        </div>
    )
}

export default Launch