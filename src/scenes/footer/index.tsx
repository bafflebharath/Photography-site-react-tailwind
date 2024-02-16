const Footer = () => {
    const openInstagramPage = () => {
        window.open('https://www.instagram.com/your_instagram_username/', '_blank');
    };

    const openMailComposeBox = () => {
        window.location.href = 'mailto:vinithudhaya.m@gmail.com';
    };

    const openFacebookPage = () => {
        window.open('https://www.facebook.com/your-facebook-page', '_blank');
    };

    const openGoogleMaps = () => {
        const latitude = '12.9716'; // Replace with your latitude
        const longitude = '77.5946'; // Replace with your longitude
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(url, '_blank');
    };

    const openDialPad = () => {
        window.location.href = 'tel:+918695718686';
    };

    return (
        <footer>
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="basis-1/2 md:mt-0">
                    {/* <img alt="logo" src={Logo} /> */}
                    <span>LOGO</span>
                    <p className="my-5">
                        Where creativity finds its canvas, and moments transform into timeless treasures.
                    </p>
                    <p>© BlackBox Photography All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5" onClick={openMailComposeBox}>
                        <svg className="h-5 w-5 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="3 9 12 15 21 9 12 3 3 9" />  <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />  <line x1="3" y1="19" x2="9" y2="13" />  <line x1="15" y1="13" x2="21" y2="19" /></svg>
                    </p>
                    <p className="my-5" onClick={openInstagramPage}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 cursor-pointer"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </p>
                    <p className="my-5" onClick={openFacebookPage}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 cursor-pointer"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5 flex items-center">
                        <span>
                            <svg className="h-5 w-5 mr-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={openGoogleMaps}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </span>
                        <span>Madurai, India</span>
                    </p>
                    <p className="my-5 flex items-center">
                        <span>
                            <svg className="h-5 w-5 mr-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={openDialPad}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 0 1 2 2" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3a6 6 0 0 1 6 6" />
                            </svg>
                        </span>
                        <span>+91 8695718686</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;