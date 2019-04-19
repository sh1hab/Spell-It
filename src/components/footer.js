import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Spell-It</h5>
                        <p className="grey-text text-lighten-4">A simple app that cheks the word is spelled correctly.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Inspiration</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://en.wikipedia.org/wiki/Speak_%26_Spell_(toy)">Speak & Spell</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.youtube.com/watch?v=YpbrcpfVwPY">Story Machine for the TI-99/4A by Spinnaker Software</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://en.wikipedia.org/wiki/Stephen_Hawking">Stephen Hawking</a></li>
                            <li><a className="grey-text text-lighten-3" href="http://materializecss.com/">Material CSS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © <script type="text/javascript">document.write(new Date().getFullYear());</script> Copyright
            </div>
            </div>
        </footer>
    )
}

export default Footer;