import {useState} from "react";
import '../css/mvp.css';
import formelrad from "../image/formelradelektronik.gif";
import InputField from "../formular/InputField";

export default function Formelrad() {
    const [values, setValues] = useState({
        u: 10,
        i: 2,
        r: "",
        p: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("calculate")

        // Kombination aus beiden Logiken
        if (values.u === "" && values.i === "") {
            setValues(v => ({...v, u: Math.sqrt(v.p * v.r)}));
            setValues(v => ({...v, i: Math.sqrt(v.p / v.r)}));
        }
        else if (values.i === "" && values.r === "") {
            setValues(v => ({...v, i: v.p / v.u}));
            setValues(v => ({...v, r: v.u * v.u / v.p}));
        }
        else if (values.i === "" && values.p === "") {
            setValues(v => ({...v, i: v.u / v.r}));
            setValues(v => ({...v, p: v.u * v.u / v.r}));
        }
        else {
            setValues(v => ({...v, r: v.u / v.i}));
            setValues(v => ({...v, p: v.u * v.i}));
        }
    }

    return (
        <>
            <section>
                <header>
                    <h2>Formelrad</h2>
                    <img src={formelrad} width="200" alt="Formelrad"/>
                </header>
                <form onSubmit={handleSubmit}>
                    <InputField color={"black"} value={values.u} label="Spannung" handleChange={e => {setValues(v => ({...v, u: e.target.value}))}} />
                    <InputField color={"black"} value={values.i} label="Stromstärke" handleChange={e => {setValues(v => ({...v, i: e.target.value}))}} />
                    <InputField color={"black"} value={values.r} label="Widerstand" handleChange={e => {setValues(v => ({...v, r: e.target.value}))}} />
                    <InputField color={"black"} value={values.p} label="Leistung" handleChange={e => {setValues(v => ({...v, p: e.target.value}))}} />
                    <button type="submit">Calculate</button>
                </form>
            </section>
        </>
    )
}