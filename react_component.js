// Anatomy of a React Component
import React from 'react';

const Intro = () => {
    const greeting = "hi";
    return(
        <div className="App">{greeting}</div>
    );
};

// button
<buttin onClick = {() => onsubmit(data)}/>

// two ways to iterate an array of num and double the num
for (i=0; i < MimeTypeArray.length; i++) {
    myArray[i] = myArray[i]*2;
};
OR 
const double = number => number * 2;
myArray.map(double);

// turn on lightbulb
import React, {useState} from "react";
import {render} from "react-dom";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow = "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
    const [lightOn, setLightOn] = useState(true)
    return (
        <div onClick = {() => setLightOn(!lightOn)} className="App">
            {lightOn === false ? <img src={white} /> : <img src={yellow} />}
        </div>
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

// Making API calls
const [user, setUser] = useState();
const [error, setError] = useState();
useEffect(() => {
    fetchUserData()
    .then(res => setUser(res.data.user))
    .catch(err => setError(err.response.message));
}, []); // Dependency array added

// Manipulating the DOM
const [count, setCount] = useState();
useEffect(() => {
    document.title = `Count is ${count}`;
});

useEffect(fn); // all state and props
useEffect(fn, []); // no state or props
useEffect(fn, [these, states, props]);

// Fetching Data when a Component Mounts
function App() {
    const [dogPic, setDogPic] = useState("");

    useEffect(() => {
        axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then(res => setDogPic(res.data.message))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="App">
            <h1>We Love Puppers</h1>
            <img src={dogPic} alt="a random dog" />
        </div>
    );
}

// Fetching data multiple times with synced effect hooks
function App() {
    const [data, setData] = useState();
    const [query, setQuery] = useState("react");

    useEffect(() => {
        const fetchData = () => {
            axios
                .get("some/api/enpoints" + query)
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        }

        fetchData(); // calls an external function
    }, [query]);

    // const handleChange = e => {
    //     setQuery(e.target.value)
    // }

    return(
        <>
            <input value={query} onChange={e => setQuery(target.value)} />
            <ul>
                {data.hits.map(item => (
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}

