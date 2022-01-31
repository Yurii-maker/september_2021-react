import Dog from "./Dog";

const Dogs = ({dogs, delDog}) => {
    return (
        <div>
            {dogs.map(value => <Dog key={value.id} item={value} delDog={delDog}/>)}
        </div>
    )
};

export default Dogs;