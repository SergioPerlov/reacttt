import React from "react";

class Form extends React.Component{
    render(){
        return(
            <div class="form-signup row input-group-newsletter" id="calc">
            <form onSubmit={this.props.weatherMethod}>
                <input aria-label="Enter email address..." data-sb-validations="required,email" class="form-control" type ="text" name="city" placeholder="Введите ваш город"/><br/><br/>
                <button class="btn btn-primary enabled">Получить погоду</button>
                
            </form>
            
                           
                           
                        
            </div>
        );
    }
}

export default Form;