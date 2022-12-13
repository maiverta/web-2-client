
import { useEffect, useState } from 'react';
import { userService } from '../../services/user';
import Item from '../Item'
import User from '../user/User';
import UserForm from '../user/UserForm';
import './ChartProducts.css'
function ChartProducts(props) {
    const [user, setUser]= useState('');
    useEffect(() => {
        userService.getUser()
            .then((data) => {
                setUser(data)})
            .catch((err) => console.log(err));
    }, []);

    const addUserToDb = (userBody=>{
       userService.addUser(userBody).then((data)=> setUser(data));
    })

    const getUserDisplay = (()=>{
        if(user.firstName) return <User user={user}></User>;
        return <UserForm user={user} onAddUser={addUserToDb}></UserForm>;
        
    })
    return (
        <div className='chart'>
            {getUserDisplay()}
            <div className='chart-list'>
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
                        <p>כמות:{props.productsAmountToChart[index]}</p>
                    </div>
                })}
            </div>

            <h2>סכום ההזמנה: ₪{ props.items.reduce((accumulator, currentValue, index) =>
                                accumulator + currentValue.price* props.productsAmountToChart[index], 0)} 
            </h2>
        </div>
    );
}

export default ChartProducts;

