import React, { useEffect, useState } from "react";

const IPLTable = () => {
    const [ipldata, setIpldata] = useState([])
    const callApiData = async () => {
        const givenData = await fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
        const data = await givenData.json()
        //console.log(givenData)
        console.log(data)
        setIpldata(data)
    }
    useEffect(() => {
        callApiData();
    }, [])

    const shortListing = () => {
        const temp = ipldata.sort((item, item2) => item.NRR - item2.NRR );
        setIpldata([...temp]);
    }
    return (
        <>
            <div className="container bg-primary">
                <button onClick={shortListing}>Short Listing On NRR</button>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Team</th>
                                <th>Matches</th>
                                <th>Won</th>
                                <th>Lost</th>
                                <th>Tied</th>
                                <th>NRR</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ipldata.map((item) => (
                                    <tr>
                                        <td>{item.No}</td>
                                        <td>{item.Team}</td>
                                        <td>{item.Matches}</td>
                                        <td>{item.Won}</td>
                                        <td>{item.Lost}</td>
                                        <td>{item.Tied}</td>
                                        <td>{item.NRR}</td>
                                        <td>{item.Points}</td>
                                    </tr>
                                ))


                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
export default IPLTable;