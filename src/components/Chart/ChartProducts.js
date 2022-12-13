
import { useEffect, useState } from 'react';
import { userService } from '../../services/user';
import Item from '../Item'
import User from '../user/User';
import UserForm from '../user/UserForm';
import './ChartProducts.css'
function ChartProducts(props) {
    const [user, setUser]= useState('');
    useEffect(() => {
        console.log('hereeeee!!!')
        userService.getUser()
            .then((data) => {
                console.log(data) ;setUser(data)})
            .catch((err) => console.log(err));
    }, []);

    const addUserToDb = (userBody=>{
        console.log('fff')
       userService.addUser(userBody).then((data)=> setUser(data)
        );
    })

    const getUserDisplay = (()=>{
        if(user.firstName){
            return <User user={user}></User>;
        } else{
            return <UserForm user={user} onAddUser={addUserToDb}></UserForm>;

        }
    })
    return (
        <div className='chart-products'>
        {    props.items.map((item,index) => { 
            if (props.productsAmountToChart[index])return <div className="chart-product">
                <Item key={item._id}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            image={item.image}
                            onAddToChart={() => props.onAddToChart(index)}
                            onRemoveFromChart={() => props.onRemoveFromChart(index)}
                        ></Item>
                <p>amount:{props.productsAmountToChart[index]}</p>
            </div>
        })}

        <h2>סכום ההזמנה: { props.items.reduce(
  (accumulator, currentValue, index) => accumulator + currentValue.price* props.productsAmountToChart[index],
  0
)}</h2>
{getUserDisplay()}
        </div>
    );
}

export default ChartProducts;

