import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div className="row">
            {
                products.map(prod => (
                    <div className="col-md-4" key={prod.id}>
                        <Item {...prod} />
                    </div>
                ))
            }
        </div>
    )
}
export default ItemList