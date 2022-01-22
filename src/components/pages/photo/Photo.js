const Photo = ({item: {albumId, id, url}}) => {
    return (
        <div>
            <div>AlbumId: {albumId}</div>
            <div>Id: {id}</div>
            <div><img src={url} alt=""/></div>
            <hr/>
        </div>
    );
};

export {Photo};