const addEventListener = () => {
    let button = document.querySelector('.btn');
        button.addEventListener('click', clickedBtn);
};


const clickedBtn = event => { 
    getJokes();  
};


const getJokes = async () => { 
    const data = await getDadJoke();
    const apiContent = document.getElementById('api-content');
    apiContent.querySelectorAll('*').forEach(element => element.remove());
    const jokeImage = document.createElement('img'); 
    jokeImage.src = `${baseUrl}/j/${data.id}.png`;
    apiContent.appendChild(jokeImage);
    console.log(data, 'helllo');
};


addEventListener();