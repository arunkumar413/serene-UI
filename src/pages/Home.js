import React from "react";
import { Link } from "react-router-dom";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export function Home() {
    return (
        <div
            style={{
                padding: "1rem",
                // backgroundColor: "teal",
                backgroundImage: 'linear-gradient(to top, #209cff 0%, #68e0cf 100%)',
                color: "white",
                textAlign: "center",
                display: "grid",
                height: "100vh",
                gridTemplateColumns: "1fr",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div>
                <h1> Serene UI</h1>

                <p
                    className="paragraph"
                    style={{
                        textAlign: "center",
                        width: "100%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        color: "white",
                        fontSize:'1.3rem'
                    }}
                >
                    Welcome to Serene UI. A simple CSS library to compose HTML components
                    faster. A library made keeping in mind the ease of learning and
                    intuitiveness.
                </p>

                <div>
                    <Link to="/serene-ui/docs/all" style={{marginRight:'0.5rem'}}>
                        <button className="ser-btn-secondary-medium"> Read the Docs</button>
                    </Link>
                    <a  href="https://github.com/arunkumar413/serene-UI" target="_blank" rel="noreferrer">
                        <button className="ser-btn-secondary-medium-outlined"> Github</button>
                    </a>
                </div>
                <div style={{ padding: 10, textAlign: "center" }}></div>

                <br />
            </div>
        </div>
    );
}
