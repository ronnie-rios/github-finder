const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

//testing the api call to get users
export const searchUsers = async (text) => {
    
    //setting the params q to the text from the form
    const params = new URLSearchParams({ 
        q: text
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
        Authorization: `token ${GITHUB_TOKEN}`
        }
    })
    //destructure the endpoint obj 
    const { items } = await response.json()
    
    return items
    }

