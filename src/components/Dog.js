const Dog = ({item: {name, id}, delDog}) => {
    return (
        <div>
            {name}
            <button onClick={() => delDog(id)}> delete</button>
        </div>
    )
};

export default Dog;