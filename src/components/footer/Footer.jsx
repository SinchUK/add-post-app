import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='title footer_title'>
                <h1>Personally Newsletter</h1>
                <p>
                    A bi-weekly newsletter of design inspiration, resources and
                    anything related to career development.
                </p>
                <div className='subscribe'>
                    <input type='text' placeholder='Email address' />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className='copyright'>Copyright 2023 - Ivan Sinchuk</div>
        </footer>
    );
};

export default Footer;
