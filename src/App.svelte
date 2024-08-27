<script>
	import TodoList from "./lib/TodoList.svelte";
	import { v4 as uuid} from "uuid"
	import { tick } from "svelte";

	let todoList;
	let showList = true;

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

	async function handleAddTodo(event){
		event.preventDefault();
		console.log(document.querySelectorAll('.todo-list ul li'))

		todos = [...todos,{
			id: uuid(),
			title: event.detail.title,
			completed: false
		}];

		await tick();

		console.log(document.querySelectorAll('.todo-list ul li'))
		todoList.clearInput();
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

<label>
	<input type="checkbox" bind:checked={showList} />
	Show/Hide list
</label>

{#if showList}
	<div style:max-width="200px">
		<TodoList 
		{todos} 
		bind:this={todoList}
		on:addtodo={handleAddTodo}
		on:removetodo={handleRemoveTodo}
		on:toggletodo={handleToggleTodo}
		>

		</TodoList>
	</div>
{/if}



<button on:click={() => { todoList.focusInput()}}>Focus input</button>

<style>
</style>
