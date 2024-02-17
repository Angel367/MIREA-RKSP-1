import React, { useState, useEffect } from 'react';

const CovidData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://covid-19.dataflowkit.com/v1/world');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    console.log(data)
    return (
        <div className="CovidData">
            <h2>COVID-19 Data</h2>
            <p>Country: {data['Country_text']}</p>
            <p>Last Update: {data['Last Update']}</p>
            <p>New Cases: {data['New Cases_text']}</p>
            <p>New Deaths: {data['New Deaths_text']}</p>
            <p>Total Cases: {data['Total Cases_text']}</p>
            <p>Total Deaths: {data['Total Deaths_text']}</p>
            <p>Total Recovered: {data['Total Recovered_text']}</p>
            <p>Active Cases: {data['Active Cases_text']}</p>
        </div>
    );
};

export default CovidData;