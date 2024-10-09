<script>
    $: option = 'SOBRE';
</script>
<div class="text-center">
    <div class="">
        <h1 class="text-6xl font-black p-5 text-primary">MAINSTREET</h1>
    </div>
    <div class="navbar-center bg-primary-100">
        <button class="btn btm-nav-label" on:click={() => option = 'SOBRE'}>SOBRE</button>
        <button class="btn btm-nav-label" on:click={() => option = 'SERVIÇOS'}>SERVIÇOS</button>
        <button class="btn btm-nav-label" on:click={() => option = 'GALERIA'}>GALERIA</button>
        <button class="btn btm-nav-label" on:click={() => option = 'CONTATOS'}>CONTATOS</button>
    </div>
</div>
{#if option === 'SOBRE'}
    <div class="inline m-auto text-center p-10">
        <div class="pb-5">
            <h1 class="text-primary text-3xl font-black">SOBRE</h1>
        </div>
        <div class="max-w-screen-sm m-auto font-bold">
            <p class="mb-2">
                Seja qual for o seu estilo, nós temos o corte perfeito para você! Dos cortes sociais aos mais ousados freestyle, nossa equipe transforma sua visão em realidade.
            </p>
            <p class="mb-2">
                Quer dar um toque único no visual? Temos pintura de cabelo, hidratação e cuidados completos de barba e pele para te deixar impecável!
            </p>
            <p class="mb-2">
                Além disso, aproveite uma experiência completa com nossa variedade de bebidas enquanto aguarda, e mostre suas habilidades na sinuca! 🎱
            </p>
            <p class="mb-2">
                E não para por aí! Cuide do seu visual em casa com nossos produtos exclusivos para barba e cabelo! 🧴💈
            </p>
        </div>
    </div>
{/if}

{#if option === 'SERVIÇOS'}
    <div class="inline m-auto text-center">
        <div>
            <div>
                <h1 class="text-primary font-bold text-3xl">SERVIÇOS</h1>
            </div>
            <div>

            </div>
        </div>
    </div>
{/if}

{#if option === 'GALERIA'}
    <div class="inline m-auto text-center">
        <div>
            <div>
                <h1 class="text-primary font-bold text-3xl">GALERIA</h1>
            </div>
        </div>
    </div>
{/if}

{#if option === 'CONTATOS'}
    <div class="inline m-auto text-center">
        <div>
            <div>
                <h1 class="text-primary font-bold text-3xl">CONTATOS</h1>
            </div>
        </div>
    </div>
{/if}