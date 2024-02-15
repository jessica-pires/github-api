    
    document.addEventListener('DOMContentLoaded', function(){
        const endpoint = `https://api.github.com/users/ogiansouza`

        fetch(endpoint).then(response => response.json())
        .then(data=>{
            document.querySelector('.profile-avatar').src = data.avatar_url;
            document.querySelector('.profile-name').textContent = data.name;
            document.querySelector('.profile-username').textContent = `@${data.login}`;
            document.getElementById('followers').innerHTML = `${data.followers}`;
            document.querySelector('#repositories').innerHTML = ` ${data.public_repos}`;
            document.querySelector('#following').innerHTML = `${data.following}`;


            const profileLink = document.querySelector('.profile-link');
            profileLink.href = `https://github.com/${data.login}`
        }).catch(error=>{
            console.log('Deu ruim')

        })
    })

    