<script>
    function scrollIntoView({ target }) {
        const element = document.querySelector(target.getAttribute("href"));
        if (!element) return;
        element.scrollIntoView({ behavior: "smooth" });
    }
</script>

<main>
    <div class="h-screen">
        <div
            class="justify-center text-center align-middle h-full m-0 place-content-center"
        >
            <h1 class="text-6xl font-black text-primary">MAINSTREET</h1>
            <nav>
                <a
                    href="#sobre"
                    class="btn btn-ghost bg-transparent border-0 text-info hover:text-primary"
                    on:click|preventDefault={scrollIntoView}>SOBRE</a
                >
                <a
                    href="#servicos"
                    class="btn btn-ghost bg-transparent border-0 text-info hover:text-primary"
                    on:click|preventDefault={scrollIntoView}>SERVIÇOS</a
                >
                <a
                    href="#galeria"
                    class="btn btn-ghost bg-transparent border-0 text-info hover:text-primary"
                    on:click|preventDefault={scrollIntoView}>GALERIA</a
                >
                <a
                    href="#contatos"
                    class="btn btn-ghost bg-transparent border-0 text-info hover:text-primary"
                    on:click|preventDefault={scrollIntoView}>CONTATOS</a
                >
            </nav>
        </div>
    </div>
    <section id="sobre">
        <div class="h-screen">
            <div class="flex justify-center align-middle h-full">
                <div class="flex max-w-screen-sm m-auto">
                    <div class="text-6xl text-primary font-black pr-10">
                        <h1 class="pb-3">SEU ESTILO</h1>
                        <h1>NOSSA PAIXÃO</h1>
                    </div>
                    <hr class="border-4 h-60 border-primary mr-10" />
                    <div class="m-auto text-lg">
                        <p class="mb-2">
                            <span class="font-bold text-accent"
                                >Quer dar um toque único no visual?</span
                            > <br />Temos pintura de cabelo, hidratação e
                            cuidados completos de barba e pele para te deixar
                            impecável!
                        </p>
                        <p class="mb-2">
                            Seja qual for o seu estilo, nós temos o corte
                            perfeito para você! Dos cortes sociais aos mais
                            ousados freestyle, nossa equipe transforma sua visão
                            em realidade.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="servicos">
        <div class="h-screen">
            <div class="inline m-auto text-center">
                <div>
                    <div>
                        <h1 class="text-primary font-bold text-3xl">
                            SERVIÇOS
                        </h1>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </section>

    <section id="galeria">
        <div class="h-screen">
            <div class="inline m-auto text-center">
                <div>
                    <div>
                        <h1 class="text-primary font-bold text-3xl">GALERIA</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contatos">
        <div class="h-screen">
            <div class="flex justify-center align-middle h-full">
                <div>
                    <div class="flex m-auto max-w-screen-sm">
                        <div class="text-6xl font-black">
                            <h1 class="text-primary">AGENDE</h1>
                            <h1 class="text-primary">AGORA</h1>
                            <h1 class="text-primary">CUIDAMOS</h1>
                            <h1 class="text-primary">DO RESTO</h1>
                        </div>
                        <hr class="border-4 h-72 border-primary ml-5 mr-5" />
                        <div>
                            <p class="text-lg">
                                <span class="font-black text-primary"
                                    >Agende de forma prática!</span
                                >
                                <br />
                                Você pode nos encontrar na
                                <span class="font-bold text-accent">Trinks</span
                                >
                                ou mandar uma mensagem diretamente pelo
                                <span class="text-accent font-bold"
                                    >WhatsApp</span
                                >. <br />Escolha o serviço que deseja e reserve
                                seu momento de transformação com facilidade!
                                <span class="text-primary font-medium"
                                    >Estamos prontos para te atender!</span
                                >
                            </p>
                        </div>
                    </div>
                    <div class="w-full flex mt-4">
                        <a href="" class="btn bg-orange-500 mr-20"> Trinks </a>
                        <a href="" class="btn bg-green-600"> Whatsapp </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
