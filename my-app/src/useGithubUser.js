import React, { useState, useEffect } from 'react';

export function useGithubUser({ username }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const json = await response.json();
            setData(json);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
        if (username) {
            fetchData();
        }
    }, [username]);

    return { data, error, loading, fetchData };
}

