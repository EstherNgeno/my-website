import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    
    const SERVICE_ID = "service_h646v87"
    const TEMPLATE_ID = "template_jekg8qz"
    const PUBLIC_KEY = "w-xE2i7FLJNz9CKms"

    const handleSubmit = (e) => {
        
        e.preventDefault()
          
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            alert("Message Sent!");
            setFormData({name:"", email:"", message:""})
        }).catch(() => alert("Oops, something went wrong! Please try again"));
    };


    return (
        <section className="font-serif lg:flex-row items-center pt-10 pb-5 px-6 lg:px-20">
            <div className="justify-center items-center lg:items-start text-center lg:text-left text-black dark:text-white">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-4 leading-tight text-center whitespace-nowrap">{`<Get In Touch/>`}</h1>
            </div>
            <div className="grid grid-cols-1 max-w-[1100px] justify-start items-start lg:items-start pl-40 lg:pl-40 ml-20 pt-10 text-black dark:text-white">
                <form className="space-y-10 ml-20" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" required value={formData.name} className="w-full bg-white border-gray-900 rounded px-4 py-3" placeholder="Name..." onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    </div>  
                    <div className="relative">
                        <input type="email" id="email" name="email" required value={formData.email} className="w-full bg-white border-gray-900 rounded px-4 py-3" placeholder="example@gmail.com" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div className="relative">
                        <input type="text" id="message" name="name" required value={formData.message} rows={5} className="w-full bg-white border-gray-900 rounded px-4 py-3" placeholder="Your Message..." onChange={(e) => setFormData({...formData, message: e.target.value})} />
                    </div>
                    <button type="submit" className="w-full text-base py-3 px-6 rounded bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500">Send Message</button>
                </form>

            </div>

        </section>

    );



};

export default Contact;