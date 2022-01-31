const Cat = ({item: {name, id}, delCat}) => {
    return (
        <div>
            {name}
            <button onClick={() => delCat(id)}> delete</button>
        </div>
    )
};

export default Cat;