import React from 'react'
import RepoItem from './RepoItem';


function RepoList({ repos }) {
  return (
    <div className='rounded-lg shadow-lg card b-base-100'>
        <div className="card-body">
            <h2 className="text-3xl my-4 font-bold card-card-title">
                View the latest Repositories
            </h2>
            {repos.map((repo) => (
                <RepoItem key={repo.id} repo={repo}/>
            ))}
        </div>
    </div>
  )
}

export default RepoList