import { useState } from "react"
import Nav from "../components/nav";
import styles from "../styles/Contact.module.css";
import Head from "next/head";
import Link from "next/link";


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
      
        try{
            await fetch('/api/mail',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                body:JSON.stringify(data)
            }
        })
        }catch(err){
            console.log(err)
        }
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
            {/* <h1>Get in touch.</h1> */}
                <form className={styles.form} method='post' onSubmit={handleSubmit}>
                    <div className={styles.title}>Dear Asiimwe Marvin,</div>
                    <textarea className={styles["input","message"]} onChange={handleData} required placeholder="Write your message here..." value={data.message} name="message"/>
                    <div className={styles.best}>Best,</div>
                    <input className={styles["input","name"]} onChange={handleData} placeholder="Your name" required value={data.name} name="name"/>
                    <input className={styles["input","email"]} onChange={handleData} placeholder="Your email" required value={data.email} name="email"/>
                
                    <button>Send email</button>
                    <div className={styles.link}>
                        <Link href="/">
                            <p>or find me at <a style={{"textDecoration":"underline"}}>asiimwemarvin@gmail.com</a></p>
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    )
}