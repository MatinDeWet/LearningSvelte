<svelte:options immutable={true}/>

<script>
	import Button from "./Button.svelte";
    import {createEventDispatcher, onDestroy, onMount, beforeUpdate, afterUpdate } from "svelte"

    onMount(() => {
        return () => {
        }
    })

    onDestroy(() => {
    })

    beforeUpdate(() => {
        if(listDiv){
        }
    })

    afterUpdate(() => {
        if(autoscroll){
            listDiv.scrollTo(0, listDivScrollHeight)
            autoscroll = false;
        }
    })

    export let todos = [];
    let prevTodos = todos;

    $:{
        autoscroll = prevTodos.length < todos.length;
        prevTodos = todos;
    }

    export function clearInput(){
        inputText = '';
    }

    export function focusInput(){
        input.focus()
    }

    let inputText = "";
    let input, listDiv, autoscroll, listDivScrollHeight;

    const dispatch = createEventDispatcher();

    function handleAddTodo(){
        const isNotCancelled =  dispatch('addtodo', {title : inputText}, {cancelable:true})

        if(isNotCancelled){
            inputText = "";
        }
    }

    function handleRemoveTodo(id){
        dispatch('removetodo', { id })
    }

    function handleToggleTodo(id, value){
        dispatch('toggletodo', { id , value })
    }
</script>
<div class="todo-list-wrapper">
    <div class="todo-list" bind:this={listDiv}>
        <div bind:offsetHeight={listDivScrollHeight}>
            <ul>
                {#each todos as {id, title, completed} (id)}
                    <li>
                        <label>
                            <input on:input={(event) => { event.currentTarget.checked = completed; handleToggleTodo(id, !completed)}} type="checkbox" checked={completed} />
                            {title}
                        </label>
                        <button on:click={() => handleRemoveTodo(id)}>Remove</button>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
    <form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
        <input bind:this={input} bind:value={inputText}/>
        <Button type="submit" disabled={!inputText}>Add</Button>
    </form>
</div>



<style>
    .todo-list{
        max-height: 150px;
        overflow: auto;
    }
</style>