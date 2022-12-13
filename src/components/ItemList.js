
import Item from './Item'
import './ItemList.css'

function ItemList(props) {
    return (
        <div className='item-list'>
            {props.items.map((item,index) =>
                <Item key={item._id}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            image={item.image}
                            onAddToChart={() => props.onAddToChart(index)}
                                onRemoveFromChart={() => props.onRemoveFromChart(index)}
                        ></Item>
  )}
          

        </div>

    )
}

export default ItemList;