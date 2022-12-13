import './User.css'



const User = (props) => {
    return (
        <div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>שם פרטי</label>
                    <p>{props.user.firstName}</p>
                </div>
                <div className="new-expense__control">
                    <label>שם משפחה</label>
                    <p>{props.user.lastName}</p>
                </div>
                <div className="new-expense__control">
                    <label>גיל</label>
                    <p>{props.user.age}</p>
                </div>
              
            </div>
           
        </div>
    );



}

export default User;