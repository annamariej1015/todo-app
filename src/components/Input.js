
const InputComponent = () => {
	return(
		<div className='row'>
            <div className='col'>
            <div class="input-group mb-3">
                <input 
                    type="text" class="form-control" placeholder="Add To-Do Item" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-warning" type="button">Add</button>
                    </div>
                </div>	
            </div>
        </div>
    );
};

export default InputComponent;
