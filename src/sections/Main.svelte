<script>
  import { useCompletion } from "@ai-sdk/svelte";
  import CustomButton from "$components/form/CustomButton.svelte";
  import CustomTextField from "$components/form/CustomTextField.svelte";
  import FormContainer from "$components/form/FormContainer.svelte";
  import Copy from "$components/icons/Copy.svelte";
  import Reset from "$components/icons/Reset.svelte";
  import { copiarAlPortapapeles, Validate } from "$helpers/utils";
  import { duracionOpts, idiomasOpts } from "$helpers/variables";

  const { complete, completion, setCompletion } = useCompletion();

  let tema = "";
  let duracionSelected = duracionOpts.find((item) => item.id == 0);
  let idiomasSelected = idiomasOpts.find((item) => item.id === 0);

  async function handleSubmit() {
    const errors = Validate(tema, duracionSelected, idiomasSelected);
     if (errors.length > 0) {
      alert("Errores:\n" + errors.join("\n"));      
      return;
    }  
 
    const formData = {
      tema: tema,
      duracion: duracionSelected,
      idioma: idiomasSelected,
    };

    const prompt = `Quiero crear un video viral de TikTok sobre ${formData.tema} que debe tener una duracion de ${formData.duracion?.text} en el idioma ${formData.idioma?.text}. ¿Me puedes ayudar a crear un guión literario que capture la atención de mi audiencia objetivo y los haga querer compartirlo con sus amigos?`;
    await complete(prompt);
    
  }

  async function resetFields() {
    tema = "";
    duracionSelected = duracionOpts.find((item) => item.id === 0);
    idiomasSelected = idiomasOpts.find((item) => item.id === 0);
    setCompletion("");
  }
</script>

<!-- markup (zero or more items) goes here -->
<main class="container p-4 mx-auto">
  <section class="text-justify sm:text-center">
    <h1 class="max-w-2xl mx-auto">
      Escribe tu Proximo Guión para Tiktok usando la Inteligencia Artificial
    </h1>
    <p class="text-lg sm:text-2xl">
      con tan solo 3 parametros es posible obtener tu guion en menos de un
      minuto
    </p>
  </section>
  <section
    class="grid grid-cols-1 sm:grid-cols-2 grid-rows-[auto] min-w-full gap-4 auto-cols-auto"
  >
    <FormContainer let:Fields id="tiktok-form" onSubmit={handleSubmit}>
      <Fields.Input
        type="text"
        id="tema"
        label="¿Cual es el tema de tu video?"
        bind:value={tema}
        class="peer p-4 pe-9 block w-full border font-courier-prime border-dawnfeather bg-inherit rounded-lg text-sm focus:border-dawnfeather/75 focus:ring-dawnfeather/50 disabled:opacity-50 disabled:pointer-events-none
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2 "
        classLabel="absolute font-open-sans font-light top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100  peer-disabled:opacity-50 peer-disabled:pointer-events-none
  peer-focus:text-xs
  peer-focus:-translate-y-1.5
  peer-focus:text-dawnfeather
  peer-[:not(:placeholder-shown)]:text-xs
  peer-[:not(:placeholder-shown)]:-translate-y-1.5
  peer-[:not(:placeholder-shown)]:text-dawnfeather"
      />
      <Fields.Select
        label="Cuanto durara el video?"
        id="duracion"
        options={duracionOpts}
        bind:value={duracionSelected}
        class="peer p-4 pe-9 block w-full border font-courier-prime border-dawnfeather bg-inherit rounded-lg text-sm focus:border-dawnfeather/75 focus:ring-dawnfeather/50 disabled:opacity-50 disabled:pointer-events-none
      focus:pt-6
      focus:pb-2
      [&:not(:placeholder-shown)]:pt-6
      [&:not(:placeholder-shown)]:pb-2
      autofill:pt-6
      autofill:pb-2 "
        classLabel="absolute font-open-sans font-light top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100  peer-disabled:opacity-50 peer-disabled:pointer-events-none
        peer-focus:text-xs
        peer-focus:-translate-y-1.5
        peer-focus:text-dawnfeather
        peer-[:not(:placeholder-shown)]:text-xs
        peer-[:not(:placeholder-shown)]:-translate-y-1.5
        peer-[:not(:placeholder-shown)]:text-dawnfeather"
      />
      <Fields.Select
        label="¿Cual sera el idioma de tu guion?"
        id="idioma"
        options={idiomasOpts}
        bind:value={idiomasSelected}
        class="peer p-4 pe-9 block w-full border font-courier-prime border-dawnfeather bg-inherit rounded-lg text-sm focus:border-dawnfeather/75 focus:ring-dawnfeather/50 disabled:opacity-50 disabled:pointer-events-none
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2"
        classLabel="absolute font-open-sans font-light top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100  peer-disabled:opacity-50 peer-disabled:pointer-events-none
  peer-focus:text-xs
  peer-focus:-translate-y-1.5
  peer-focus:text-dawnfeather
  peer-[:not(:placeholder-shown)]:text-xs
  peer-[:not(:placeholder-shown)]:-translate-y-1.5
  peer-[:not(:placeholder-shown)]:text-dawnfeather"
      />
      <Fields.Button
        class="bg-transparent hover:bg-dawnfeather hover:text-corbeau px-6 py-2 border border-dawnfeather rounded-lg sm:w-fit sm:self-center duration-150 transition ease-in "
        type="submit">Generar</Fields.Button
      >
    </FormContainer>
    <div class="flex flex-col gap-6 p-6">
      <CustomTextField
        type="textarea"
        id="guionAI"
        value={$completion}
        readonly
        class="peer p-4 pe-9 block resize-none w-full min-h-56 border font-courier-prime border-dawnfeather bg-inherit rounded-lg text-sm focus:border-dawnfeather/75 focus:ring-dawnfeather/50 disabled:opacity-50 disabled:pointer-events-none
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2"
        classLabel="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100  peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:text-xs
      peer-focus:-translate-y-1.5
      peer-focus:text-dawnfeather
      peer-[:not(:placeholder-shown)]:text-xs
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-dawnfeather"
      />
      <div class="flex gap-2 justify-end">
        <CustomButton
          onClick={copiarAlPortapapeles}
          aria-label="copy"
          class="bg-transparent hover:bg-dawnfeather hover:text-corbeau px-4 py-2 border border-dawnfeather rounded-lg sm:w-fit sm:self-center duration-150 transition ease-in"
          ><Copy sizeRem="1.25rem" /></CustomButton
        >
        <CustomButton
          onClick={resetFields}
          aria-label="reset"
          class="bg-transparent hover:bg-dawnfeather hover:text-corbeau px-4 py-2 border border-dawnfeather rounded-lg sm:w-fit sm:self-center duration-150 transition ease-in"
          ><Reset sizeRem="1.25rem" /></CustomButton
        >
      </div>
    </div>
  </section>
</main>

<style>
  /* your styles go here */
</style>
