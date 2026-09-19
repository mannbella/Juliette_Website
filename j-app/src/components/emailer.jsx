import React, {useRef} from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/home.css"; 
import emailjs from '@emailjs/browser';

const Emailer = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_02rbntg', 'template_uwp9kq6', form.current, {publicKey: 'a3oFgKXPjMSwyOfsg'})
            .then(() => {
                alert('Message Sent!');
                form.current.reset();
            })
            .catch((err) => console.error('Failed...', err));
    };

    return (
        <>
        <form ref={form} onSubmit={sendEmail} className="flex justify-center p-8 w-full">
            <fieldset className="fieldset bg-base-100 border border-base-300 shadow-xl p-12 rounded-lg w-full max-w-2xl">
                <div className="p-4">
                    <label className="label text-sm font-semibold">Your Name</label>
                    <input type="text" name="user_name" className="badge input w-full rounded-lg border border-base-300 p-3 mb-6" placeholder="Name" required />
                </div>

                
                <div className="p-4">
                    <label className="label text-sm font-semibold">Your Email</label>
                    <input type="email" name="user_email" className="badge input w-full rounded-lg border border-base-300 p-3 mb-6" placeholder="Email" required />
                </div>

                <div className="p-4">
                    <label className="label text-sm font-semibold">Subject</label>
                    <input type="text" name="subject" className="badge input w-full rounded-lg border border-base-300 p-3 mb-6" placeholder="Subject" required />
                </div>

                <div className="p-4">
                    <label className="label text-sm font-semibold">Message</label>
                    <textarea name="message" className="badge-large textarea h-96 w-full rounded-lg border border-base-300 p-3 mb-8" placeholder="Message" required />
                </div>

                <div className="w-full flex justify-center p-4">
                    <button type="submit" className="btn btn-primary w-full max-w-xs">
                        Send Message
                    </button>
                </div>
            </fieldset>
        </form>
        
        </>
    );
};

export default Emailer;