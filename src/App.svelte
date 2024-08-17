<script>
	import TodoList from "./lib/TodoList.svelte";
	
	import { v4 as uuid} from "uuid"

	let todoList;

	let todos =[
		{
			id: uuid(),
			title : 'Todo 1',
			completed: true
		},
		{
			id: uuid(),
			title : 'Todo 2',
			completed: true
		},
		{
			id: uuid(),
			title : 'Todo 3',
			completed: false
		},
		{
			id: uuid(),
			title : 'Todo 4',
			completed: false
		}        
	]

	function handleAddTodo(event){
		event.preventDefault();
		setTimeout(() => {
			todos = [...todos,{
			id: uuid(),
			title: event.detail.title,
			completed: false
		}];

		todoList.clearInput();
		}, 1000);

	}

	function handleRemoveTodo(event){
		todos = todos.filter(t => t.id !== event.detail.id)
	}

	function handleToggleTodo(event){
		todos = todos.map(t => {
			if(t.id === event.detail.id){
				return {...t, completed: event.detail.value}
			}else{
				return t;
			}
		})
	}
</script>

<TodoList 
	{todos} 
	bind:this={todoList}
	on:addtodo={handleAddTodo}
	on:removetodo={handleRemoveTodo}
	on:toggletodo={handleToggleTodo}
>

</TodoList>

<button on:click={() => { todoList.focusInput()}}>Focus input</button>

<style>
</style>
