import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Filter } from "../../components/Filter";
import { Search } from "../../components/Search";

export const Character = () =>{

    const [activePage, setActivePage] = useState(1);
    let api = `https://rickandmortyapi.com/api/character/?page=${activePage}`;



    useEffect(()=>{
        (async () => {
            const data = await fetch(api).then(res => res.json());
            console.log(data);
        })()
    },[api])

    return (
        <>
            <h2 className="text-center h2 mb-3">Character</h2>
            <Search/>
            <div className="row">
                <div className="col-3">
                    
                <Filter/>
                </div>
                <div className="col-9">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}