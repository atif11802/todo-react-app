import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";
import useLocalStorage from "use-local-storage";

const Todo = () => {
	const [todo, setTodo] = useState("");

	const [item, setItems] = useLocalStorage("todo", []);

	const submit = () => {

            if(!todo){
            }
            else{
                setItems([...item, todo]);
                        }
						setTodo("");		
	};

    const deleteitem = (id)=>{
        const updatedData= item.filter((elem,ind)=>{
            return id!==ind;
        })
        setItems(updatedData);
		
		
    }


	return (
		<>
			<div className="body">
				<div className="input-field">
					<h1>Todo-list</h1>
					<input
						type="text"
						value={todo}
						onChange={(e) =>
							setTodo(e.target.value)
						}
						placeholder="input your todo"

					/>
					<button>
						<AddIcon onClick={submit} />
					</button>
				</div>
				<div className="show-items">

					{item && item.map((elem, ind) => {
						return (
							<div className="items" key={ind}>
								<h3>{elem}</h3>
								<DeleteIcon className="Micon" onClick={()=>deleteitem(ind)}  />
							</div>
						);
					})}

					
				</div>
			</div>
		</>
	);
};

export default Todo;
