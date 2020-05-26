import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './header.css';
import './shopping_list.css';
import data from './data/recipes.json';

class Reciper extends React.Component {
    render() {
        return (
            <div className="content">
                <Header/>
                <RecipeContainer/>
            </div>
        )
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.sidenavButton = React.createRef();
    }

    render() {
        return (
            <div className="header">
                <div className="header-title">
                    <a href="">
                        <h1 className="header-title-h1">Reciper</h1>
                    </a>
                </div>
                <div className="sidenav-button-container">
                    <img
                        id="header-sidenav-button"
                        src="../public/img/hamburger.png"
                        onClick="openNav()"
                    />
                </div>
                <ShoppingList/>
            </div>
        );
    }

    openNav() {
        // console.log(this.shoppingListSidenav.current.width = "0");
        this.shoppingListSidenav.current.width = "0"
        // function reportWindowSize() {
        //     let x = document.documentElement.clientWidth;
        //
        //     if (x < 724) {
        //         if (document.getElementById("shopping-list-sidenav").style.width === "280px") {
        //             document.getElementById("shopping-list-sidenav").style.width = "100%"
        //         }
        //     } else {
        //         if (document.getElementById("shopping-list-sidenav").style.width === "100%") {
        //             document.getElementById("shopping-list-sidenav").style.width = "280px"
        //         }
        //     }
        // }
        //
        // window.addEventListener('resize', reportWindowSize);
        // let media = window.matchMedia("(max-width: 735px)");
        //
        // if (media.matches) {
        //     document.getElementById("shopping-list-sidenav").style.width = "100%";
        // } else {
        //     document.getElementById("shopping-list-sidenav").style.width = "280px";
        // }
    }
}

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.shoppingListButtonRef = React.createRef();
        this.shoppingListSidenav = React.createRef();
    }

    render() {
        return (
            <div className="shopping-list-sidenav" ref={this.shoppingListSidenav}>
                <div className="shopping-list-header">
                    <p className="shopping-list-header-text">Shopping List</p>
                </div>
                <div className="shopping-list-header-button-container">
                    <img
                        ref={this.shoppingListButtonRef}
                        className="shopping-list-header-button-close"
                        src="../public/img/hamburger.png"
                        onClick={this.props.onClick}
                    />
                </div>
                <div className="shopping-list-content">
                </div>
            </div>
        );
    }

    closeNav() {
        document.getElementById("shopping-list-sidenav").style.width = "0";
    }
}

class RecipeContainer extends React.Component {
    render() {
        let recipes = [];
        for (let i = 0; i < data.recipes.length; i++) {
            recipes.push(<Recipe
                key={i}
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
}

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

function RecipeInfo(props) {
    return (
        <div className="recipe-info">
            <p className="recipe-title">{props.recipeTitle}</p>
            <p className="recipe-description">{props.recipeDescription}</p>
        </div>
    );
}

ReactDOM.render(
    <Reciper/>,
    document.getElementById('root')
);