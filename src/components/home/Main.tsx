import axios from "axios";
import { useEffect, useState } from "react";

const Joke = ({ joke }: any) => {
    return (
        <section className="text-left align-middle bg-primary rounded-xl">
            <h1 className="text-3xl text-white p-8">{joke}</h1>
        </section>
    );
};

const APIURL = "https://v2.jokeapi.dev/joke/Any?type=single";

export default function Main() {
    const [data, setData]: any = useState([]);
    //console.log(apiData)

    useEffect(() => {
        axios
            .get(APIURL)
            .then((rsp) => {
                setData(rsp.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <main className="p-6 mt-20 z-0 w-full flex justify-center">
            <Joke joke={data.joke}></Joke>
        </main>
    );
}
