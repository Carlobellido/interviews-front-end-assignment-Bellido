import React from 'react'
import { useState } from 'react';
import './ListRecipes.css'



function ListRecipes() {



    return (
        <>
            <div className="container">

                <div className="box-1">

                    <div className='recipe'>

                        <img
                            src="https://images.unsplash.com/photo-1549589237-9e70b6be4da8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
                            alt="Pancake"
                        />
                        <div class="container__text">
                            <h1>Caramel Cake Pancakes</h1>
                            <div class="container__text__star">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <p>
                                If you're fan of caramel cake, then you'll love our Caramel Cake Pancakes.
                                We Complete these over-the-top pancakes with Caramel Syrup.
                            </p>
                            <div class="container__text__timing">
                                <div class="container__text__timing_time">
                                    <h2>Hands-on Time</h2>
                                    <p>30 min</p>
                                </div>
                                <div class="container__text__timing_time">
                                    <h2>Total Time</h2>
                                    <p>40 min</p>
                                </div>
                                <div class="container__text__timing_time">
                                    <h2>Yield</h2>
                                    <p>40 min</p>
                                </div>
                            </div>
                            <button class="btn">view recipe <i class="fa fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ListRecipes
