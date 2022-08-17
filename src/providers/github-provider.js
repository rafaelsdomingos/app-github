import React, { createContext, useState} from "react";


export const GithubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
});


const GithubProvider = ({children}) => {

    const [githubState, setGithubState] = useState({
        user: {
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            followers: 0,
            following: 0,
            public_gist: 0,
            public_repos: 0,
        },
    
        repositories: [],
        starred: [],

    })

    const contextValue = {
        githubState,
    }

    return ( 
        <GithubContext.Provider valeu={contextValue}>{children}</GithubContext.Provider>
     );
}
 
export default GithubProvider;