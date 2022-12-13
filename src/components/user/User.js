import './User.css'

const User = (props) => {
    return (
        <div>
            <div className="new-item__controls">
                <div className="new-item__controls">
                    <label>שם פרטי</label>
                    <p>{props.user.firstName}</p>
                </div>
                <div className="new-item__controls">
                    <label>שם משפחה</label>
                    <p>{props.user.lastName}</p>
                </div>
                <div className="new-item__controls">
                    <label>גיל</label>
                    <p>{props.user.age}</p>
                </div>
              
            </div>
           
        </div>
    );



}

export default User;