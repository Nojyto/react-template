import APIcall from "../common/APIcall";

export default function MainLayout() {
    const apiData = APIcall("https://v2.jokeapi.dev/joke/Any?type=single");
    return (
        <main className="p-6 mt-20 z-0 w-full flex justify-center">
            <section className="w-4/5 text-center align-middle bg-primary rounded-xl">
                <img
                    src="https://picsum.photos/2048/768?random=1"
                    alt="randomImage"
                    className="rounded-t-xl"
                />
                <h1 className="text-3xl text-white p-8">{apiData.joke}</h1>
            </section>
        </main>
    );
}
