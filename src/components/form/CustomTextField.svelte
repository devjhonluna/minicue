<script>
  /**
   * @type {string}
   */
  export let id = "";
  export let type = "text";
  export let value = "";
  export let label = "";
  export let classLabel=""
</script>

<!-- markup (zero or more items) goes here -->
<div class="relative">
  {#if type !== "textarea"}
    <input
      {...{type}}
      {...$$restProps}
      bind:value
      name={id}
      {id}
   
    />
    <label
      for={id}
      class={classLabel}    
    >
      {label}
    </label>
  {:else}

    <textarea bind:value name={id} {id} {...$$restProps} />
    <label for={id} class={classLabel}>
      {label}
    </label>
  {/if}
</div>

<style>
  /* your styles go here */
</style>


