<script>
    import Input from "./CustomTextField.svelte";
    import Select from "./CustomSelect.svelte";
    import Button from "./CustomButton.svelte";
      /**
   * Description placeholder
   *
   * @type {{ Input: any; Select: any; Button: any; }}
   */
    const Fields={
        Input,
        Select,
        Button
    }
    /**
   * Description placeholder
   *
   * @type {*}
   * @param {string} id
   */
    export let onSubmit
    export let id=""
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
 <form on:submit|preventDefault={onSubmit} {id} class="flex flex-col gap-6 justify-center content-center p-6 min-h-full rounded-lg"  >
    <slot {Fields}/>
 </form>