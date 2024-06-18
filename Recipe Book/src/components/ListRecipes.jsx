import React, { useEffect, useState } from 'react';
import './ListRecipes.css';
import api from '../api/post';

function ListRecipes() {
    const [posts, setPosts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('http://localhost:3500/recipes');
                setPosts(response.data);
            } catch (err) {
                if (err.response) {
                    console.error(err);
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.error(`Error:  ${err.message}`);
                }
            }
        };

        fetchPosts();
    }, []);

    const visibleData = posts.slice(0, visibleCount);

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 5);
    };

    const renderStars = (difficulty) => {
        const stars = [];
        for (let i = 0; i < difficulty; i++) {
            stars.push(<span key={i} className="fa fa-star checked"></span>);
        }
        return stars;
    };

    return (
        <div className="list-recipes">
            {visibleData.map((post) => (
                <div className='recipe' key={post.id} >
                    <img src={post.image} alt={post.name} />
                    <div className="container__text">
                        <h1>{post.name}</h1>
                        <h2>Ingredienti:</h2>
                        <p>{post.ingredients.join(", ")}</p>
                        <div className="container__text__timing">
                            <div className="preparazione">
                                <h3>Preparazione:</h3>
                                <p>{post.instructions}</p>
                            </div>
                            <div className="difficolta">
                                <h4>Difficoltà</h4>
                                {post.difficultyId ? renderStars(post.difficultyId) : <p>No difficulty specified</p>}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {visibleCount < posts.length && (
                <div className="load">
                    <button onClick={loadMore}>Carica di più</button>
                </div>
            )}
        </div>
    );
}

export default ListRecipes;
