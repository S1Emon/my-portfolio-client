import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Footer from '../Shared/Footer';
import { MdTouchApp } from 'react-icons/md'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fz5qorm', 'template_0kgwsu3', form.current, '7txVVMo7AhH_LOxDb')
            .then((result) => {
                console.log(result.text);
                toast.success("Message Sent");
            }, (error) => {
                console.log(error.text);
                toast.error("Something is wrong")
            });
        form.value = " ";
    };

    return (


        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ml-10">
                    <h1 className="text-5xl font-bold flex">Get In Touch <MdTouchApp></MdTouchApp></h1>
                    <h1 className="text-3xl font-bold mt-6">If you have any project or need help. Feel free to contact with me.</h1>
                    <p className="py-6">I'm always active to response. Just leave a message, I'll reply within 4 hours.</p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Full name" className="input input-bordered" name='user_name' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" placeholder="Email address" className="input input-bordered" name='user_email' required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" placeholder="Phone Number (Optional)" className="input input-bordered" name='user_phone' />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="Subject" className="input input-bordered" name='user_subject' required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Your message"
                                name='message'
                            ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>



    );
};

export default Contact;