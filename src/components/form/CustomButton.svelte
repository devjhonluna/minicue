<script>
    

    export let onClick= () => {};
   
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
 <button  on:click={onClick} {...$$restProps}>
    <slot></slot>
 </button>