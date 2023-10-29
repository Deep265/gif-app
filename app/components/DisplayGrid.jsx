import React from "react";


const DisplayGrid = async ({q}) => {
    // let data = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&q=${q}limit=10`);
    
    // const data: Array<object> = async () =>{
    //     const d = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&q=burgerlimit=10`);
    //     const res:any = await data.json();
    //     return res.data;
    // }
    // console.log(data);

    // const res = await fetch("https://jsonplaceholder.typicode.com/users"
    // ,{cache: 'no-store'});
    // const users = await res.json();

    const data = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&q=${q}&limit=10`,
    { cache: 'force-cache' });
    const res = await data.json();
    console.log(res.data);
    
    return (
        <div>
            {/* {data ? data.map(gifs => <div><img src={gifs.url} /> <br/></div>) : <h1>empty</h1>} */}
            {/* {users.map(user => <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                </tr>)} */}


            {res ? res.data.map(gifs => <img src={gifs.images.original.url} /> ) : <h1>empty</h1>}   
        </div>
    )
}

export default DisplayGrid;