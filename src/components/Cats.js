import Cat from "./Cat";

const Cats = ({cats, delCat}) => {

    return (
        <div>
            {cats.map(value => <Cat key={value.id} item={value} delCat={delCat}/>)}

        </div>

    )
};

export default Cats;