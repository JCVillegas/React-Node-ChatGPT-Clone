const App = () => {

    const getMessages = async () => {
        const options ={
            method: "POST",
            body: JSON.stringify({
                message: 'Hello how are you?'
            }),
            headers: {
                "Content-Type": "application/json"},
        }
        try{
            const response = await fetch('http://localhost:8000/completions', options)
            const data = response.json()
            console.log(data)
        }catch (error){
            console.error(error)
        }
    }
    return (
        <div className="app">
            <section className="side-bar">
                <button>+ New chat</button>
                <ul className="history">
                    <li>blah blah blah</li>
                </ul>
                <nav>
                    <p>Made by Juan</p>
                </nav>
            </section>
            <section className="main">
                <h1>JuanGPT</h1>
                <ul className="history">
                </ul>
                <div className="bottom-section">
                    <div className="input-container">
                        <input/>
                        <div id="submit" onClick={getMessages}>➢</div>
                        <p className="info">
                            Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts
                        </p>
                    </div>
                </div>
             </section>
        </div>
    );
}

export default App;
