


document.addEventListener('DOMContentLoaded', () => {
    
const gitForm = document.getElementById('github-form')


gitForm.addEventListener('submit',(e)=>{
e.preventDefault()
const searchInput = document.getElementById('search')
// console.log(searchInput.value)


fetch(`https://api.github.com/search/users?q=${searchInput.value}`,{
    method: 'GET'
    })
    .then(res => res.json())
    .then(data => {console.log(data.items)
        data.items.forEach((userObject)=>{
            const userUl = document.getElementById('user-list')
            const userLi = document.createElement('li')
            userLi.className = 'User-Info'
            userLi.textContent = userObject.login
            userUl.append(userLi)

            const avatarImg = document.createElement('img')
            avatarImg.ClassName = ("AvUrl") 
            avatarImg.src= (userObject.avatar_url)
            userLi.append(avatarImg)

            const userLink = document.createElement('a')
            userLink.className = ("web-Link")
            userLink.textContent = (userObject.html_url)
            userLink.href = userObject.html_url
            // console.log(userLink)
            userLi.append(userLink)


           
           
            avatarImg.addEventListener('click', event =>{
                 console.log(userObject.login)
            
            fetch(`https://api.github.com/users/${userObject.login}/repos`,{
                Method: "GET"
            })
            .then(res => res.json())
            .then(repos => {console.log(repos)
                repos.forEach((userRepos) => {
                    const reposUl = document.getElementById('repos-list')
                    const reposLi = document.createElement('user-repos')
                    reposLi.className = 'repos-info'
                    reposLi.textContent = userRepos.name
                    console.log(userRepos.name)
                    reposUl.append(reposLi)


                    
                })
            })

            
            .catch(error => console.error(error))
            
            })
})
    })

.catch(error => console.error(error))
})
})















   
  

    