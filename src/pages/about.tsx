
const About = () => {
    return (
        <div>
            {/* // Go Back */}
            <button onClick={()=>{
                window.history.back();
            }}>Go Back</button>
            <h1>
                About Page
            </h1>
        </div>
    );
}

export default About
