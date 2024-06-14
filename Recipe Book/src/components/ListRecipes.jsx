import React, { useEffect } from 'react'
import { useState } from 'react';
import './ListRecipes.css'
import api from '../api/post'



function ListRecipes() {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('http://localhost:3500/recipes' );
                
                

                setPosts(response.data);
            } catch (err) {

                if (err.response) {
                    console.error(err)
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.error(`Error:  ${err.message}`);

                }
            }
        }

        fetchPosts();
    }, [])


    const renderStars = (difficulty) => {
        const stars = [];
        for (let i = 0; i < difficulty; i++) {
          stars.push(<span key={i} className="fa fa-star checked"></span>);
        }
        return stars;
      };

    return (
        <>
         {posts.map((post) => (
            
            
                <div className='recipe' key={post.id} style={{textAlign:'center'}}>
                    <img src={post.image} alt={post.name} />
                    <div className="container__text">
                        <h1>{post.name}</h1>
                        <h2>Ingredienti : </h2>
                        <p>{post.ingredients.join(", ")}</p>
                        <div className="container__text__timing">
                            <div className="container__text__timing_time">
                                <h3>Istruzioni</h3>
                                <p>{post.instructions}</p>
                            </div>
                            <div className="container__text__timing_time">
                                
                                <h4>difficulty</h4>
                                {post.difficultyId ? renderStars(post.difficultyId) : <p>No difficulty specified</p>}
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            
           
        ))}
   

        </>
    )
}

export default ListRecipes
