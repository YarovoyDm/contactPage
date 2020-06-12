import React from 'react';
import './contact.scss';
import ContactForm from '../../component/contactForm/contactForm';

class Contact extends React.Component {
    render() {
        return (
            <div className='contact'>
                <div className='contact__main'>
                    <div className='contact__main-title main-title'>
                        <h1>Get in touch</h1>
                        <div className='main-title__second-title'>
                            Let us know how can help
                        </div>
                    </div>
                    <div className='contact__body'>
                        <div className='contact__body-form'>
                            <ContactForm />
                        </div>
                        <div className='contact__body-next'>
                            <h3>What's next</h3>
                            <p>
                                We’ll contact you within a few hours with our next steps.
                                We normally schedule a call with our engineers to discuss
                                your project in more detail. If you’d like to sign an NDA,
                                please let us know. We’ll prepare it for you.
                            </p>
                            <p>
                                Since we live on two different continents (Australia and Europe)
                                we are available around the clock.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='contact__visit'>
                    <h3>Visit us</h3>
                    <div className='contact__visit-text'>
                        Our company management and business development team is located in Sydney, 
                        Australia. Our engineering team is located in Kremenchuk, Ukraine.
                    </div>
                    <div className='contact__visit-laptop'></div>
                </div>
            </div>
        )
    }
}

export default Contact;
