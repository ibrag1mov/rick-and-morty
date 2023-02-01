import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Filter } from "../../components/Filter";
import { Pagination } from "../../components/Pagination/Pagination";
import { Search } from "../../components/Search";

export const Character = () =>{

    const [activePage, setActivePage] = useState(1);
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const {info, results} = data;
    let api = `https://rickandmortyapi.com/api/character/?page=${activePage}&name=${search}`;

    console.log(results);

    useEffect(()=>{
        (async () => {
            const data = await fetch(api).then(res => res.json());
            setData(data);
        })()
    },[api])

    return (
        <>
            <h2 className="text-center h2 mb-3">Character</h2>
            <Search  
                setActivePage = {setActivePage}
                setSearch = {setSearch}
                />
            <div className="row">
                <div className="col-3">
                    
                <Filter/>
                </div>
                <div className="col-9">
                    {
                        results?.length ? (
                            <div className="d-flex flex-wrap gap-5"> 
                                {
                                    results.map((item) => (
                                        <Card 
                                            key={item.id}
                                            image = {item.image}
                                            name = {item.name}
                                            location = {item.location.name}/>
                                    ))
                                }
                            </div>
                        ) : (
                        <h3>Character not found</h3>
                        )
                    }
                    
                </div>
            </div>
            <Pagination 
                activePage = {activePage}
                setActivePage = {setActivePage}
                totalPage = {info?.pages}
                />
        </>
    )
}