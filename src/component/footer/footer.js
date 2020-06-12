import React from 'react';
import './footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer__top'>
                    <div className='footer__top-text'>
                        <p>
                            MadAppGang is a team of tech experts specializing in mobile technologies.
                            We develop applications for iOS, Android, WatchOS, tvOS, Wear OS, wearables,
                            and provide loT system integration services. Our experience with mobile apps,
                            artificial intelligence, and embedded system provides a uniquely powerful
                            resource for our clients.
                        </p>
                        <p>
                            We work with established businesses and startups who are seeking to innovate
                            and improve customer experience. Over the past few years we`ve built solutions
                            for fintech, healthcare, fitness, transportation, and communication industries.
                        </p>
                    </div>
                    <div className='footer__top-contact top-contact'>
                        <div className="top-contact__title">
                            Follow us
                        </div>
                        <div className="top-contact__socials">
                            <a href='#' target='_blank' className="top-contact__socials-item" />
                            <a href='#' target='_blank' className="top-contact__socials-item" />
                            <a href='#' target='_blank' className="top-contact__socials-item" />
                            <a href='#' target='_blank' className="top-contact__socials-item" />
                        </div>
                        <a href='#' target='_blank' className="top-contact__socials-mail" />
                    </div>
                </div>
                <div className='footer__bottom'>
                    <nav className='footer__bottom-menu menu'>
                        <a href='#' className='menu__item'>Services</a>
                        <a href='#' className='menu__item'>Experience</a>
                        <a href='#' className='menu__item'>Foundation</a>
                        <a href='#' className='menu__item'>Team</a>
                        <a href='#' className='menu__item'>Blog</a>
                    </nav>
                    <div className='footer__bottom-copyright'>© MadAppGang Pty Ltd, 2018</div>
                </div>
            </div>
        )
    }
}

export default Footer;
