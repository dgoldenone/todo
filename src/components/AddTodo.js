import React, {Component} from 'react';

export class AddTodo extends Component {
    render() {
        return (
            <form style={{ display: 'flex' }}>
                <input type='text' name="title" placeholder="Add Todo..." style={{ flex: '10', padding: '5px' }} />
                <input type="submit" className="btn" value="Submit" style={
                    {flex: '1'}
                }/>
            </form>
        )
    }
    
}


export default AddTodo;