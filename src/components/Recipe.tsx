import React, { useState, useEffect } from 'react'
import { GET_PATH } from '../config/constants'

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

import { withStyles } from '@material-ui/styles';

interface Recipe {
    f2f_url: string,
    image_url: string,
    ingredients: string[],
    publisher: string,
    publisher_url: string,
    recipe_id: string,
    social_rank: number,
    source_url: string,
    title: string
}

const styles = {
    media: {
      height: 0,
      paddingTop: '56.25%'
    },
    card: {
      maxWidth: 400,
    },
  };

const RecipeCardComponent = ({match, classes}: any) => {
    const [recipe, setRecipe] =  useState<Recipe | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`${GET_PATH}key=${process.env.REACT_APP_API_KEY}&rId=${match.params.id}`);
            const response = await data.json();
        
            setRecipe(response.recipe);
        }
        fetchData();
    }, [])

    return <div>
        {recipe &&
        <Card className={classes!.card}>
            <Badge badgeContent={Math.floor(recipe.social_rank)}>
                <CardHeader title={recipe!.title} subheader={recipe.publisher}>
                </CardHeader>
            </Badge>
            <CardMedia 
                image={recipe!.image_url}
                className={classes!.media}
                >
            </CardMedia>
            <CardContent>
                <List component="nav">
                <Typography component="h2">Ingredient</Typography>
                {recipe.ingredients.map((ingredient, index) => {
                   return   <ListItem key={index}>
                                <ListItemText primary={`- ${ingredient}`} />
                            </ListItem>
                })}
            </List>    
            </CardContent>       
        </Card>}
    </div>
}


export default  withStyles(styles)(RecipeCardComponent);