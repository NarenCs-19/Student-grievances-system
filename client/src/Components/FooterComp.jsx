import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';

function FooterComp() {
    return (
        <div>
            <footer className="bg-light text-center text-white bg-dark">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                    <a
                        className="btn btn-primary btn-floating m-1"
                        href="/facebook"
                        role="button"
                        >
                        <FacebookOutlinedIcon/>
                    </a>
                    <a
                        className="btn btn-primary btn-floating m-1"
                        href="/instagram"
                        role="button"
                        >
                            <Instagram/>
                    </a>
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#0082ca"}}
                        href="/linkedin"
                        role="button"
                        >
                            <LinkedIn/>
                    </a>
                    </section>
                </div>
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright:
                </div>
            </footer>
        </div>
    )
}

export default FooterComp;
