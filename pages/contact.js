import { useState } from "react"
import Nav from "../components/nav";
import styles from "../styles/Contact.module.css";
import Head from "next/head";


export default function Contact(){
    const [data,setData]= useState({
        name:"",
        email:"",
        message:""
    })

    function handleData(e){
        const {name,value}= e.target
        setData(prevState=>{
            return {...prevState,[name]:value}
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        await fetch('/api/mail',{
            method:'POST',
            body:JSON.stringify(data)
        })
        console.log(data)
        setData(prevState=>{
            return{name:"",email:"",message:""}
        })
    }
    

    return (
        <div>
            <Nav/>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/oicon.png"/>
                <meta name="description" content="This is the contact me page for AM architects, kindly leave a message and we will get back to you as soon as possible."/>
            </Head>
            <div className={styles.main}>
            <h1>Get in touch.</h1>
            <form className={styles.form} method='post' onSubmit={handleSubmit}>
               
                <input className={styles.input} onChange={handleData} placeholder="Name" value={data.name} name="name"/>
               
                <input className={styles.input} onChange={handleData} placeholder="Email"value={data.email} name="email"/>
               
                <textarea className={styles.input} onChange={handleData} placeholder="Message" value={data.message} name="message"/>
                <button>Message</button>
            </form>

            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.message}</p>
            </div>

        </div>
    )
}