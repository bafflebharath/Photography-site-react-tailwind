const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    {/* <img alt="logo" src={Logo} /> */}
                    <span>LOGO</span>
                    <p className="my-5">
                    Where creativity finds its canvas, and moments transform into timeless treasures.
                    </p>
                    <p>© BlackBox Photography All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">vinithudhaya.m@gmail.com</p>
                    <p className="my-5">@insta</p>
                    <p>@facebook</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Madurai, India</p>
                    <p>+91 8695718686</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;