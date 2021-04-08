const baseUrl = 'https://icanhazdadjoke.com';

// dad jokes 
const getDadJoke = async () => { 
    const apiUrl = `${baseUrl}`;
    try { 
        const response = await fetch (apiUrl, { 
            method: "GET", 
            headers: {
                "Accept": 'application/json',
                "User-Agent": 'svt1406'
            }
        });
        return await response.json();
    } catch (err) { 
        console.log(err);
    }
};