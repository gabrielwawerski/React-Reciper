import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './data/recipes.json';

class Recipe extends React.Component {
    render() {
        return (
            <div className="recipe">
                <ImgWrapper {...this.props}/>
                <RecipeInfo {...this.props}/>
            </div>
        );
    }
}

class ImgWrapper extends React.Component {
    render() {
        return (
            <div className="img-wrapper" style={{backgroundImage: `url(${this.props.src})`}}>
                <div className="img-container"></div>
                <input type="checkbox" className="checkbox" onClick={this.addRecipe}/>
            </div>
        );
    }

    addRecipe() {
        console.log("clicked!")
    }
}

class RecipeInfo extends React.Component {
    render() {
        return (
            <div className="recipe-info">
                <p className="recipe-title">{this.props.recipeTitle}</p>
                <p className="recipe-description">{this.props.recipeDescription}</p>
            </div>
        );
    }
}

class RecipeContainer extends React.Component {
    render() {
        let recipes = [];
        for (let i = 0; i < data.recipes.length; i++) {
            recipes.push(<Recipe
                src={require('../public/img' + data.recipes[i].img)}
                recipeTitle={data.recipes[i].name}
                recipeDescription={data.recipes[i].description}
            />)
        }

        return (
            <div className="recipe-container">
                {recipes}
            </div>
        );
    }

    componentWillMount() {
        // document.body.style.backgroundImage = './background.jpeg';
    }
}

ReactDOM.render(
    <RecipeContainer/>,
    document.getElementById('root')
);