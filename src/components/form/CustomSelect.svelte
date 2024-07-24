<script>
  /**
   * Description placeholder
   *
   * @type {*}
   * 
   */
  export let value;
  export let options;
  export let id = "";
  export let label = "";
  export let classLabel = "";
</script>

<!-- markup (zero or more items) goes here -->
<div class="relative">
  <select {...$$restProps} bind:value name={id} {id}>
    {#each options as opt}
      <option value={opt}>{opt.text}</option>
    {/each}
  </select>
  <label for={id} class={classLabel}>{label}</label>
</div>

<style>
  /* your styles go here */
</style>
