import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import LinkButton from '../blocks/LinkButton';

import { withStyles } from '@material-ui/styles';

interface Recipe {
    f2f_url: string
    image_url: string
    publisher: string
    publisher_url: string
    recipe_id: string
    social_rank: number
    source_url: string
    title: string
}

interface recipesProps {
  recipes: Recipe[],
  classes?: Classes
}

interface Classes {
  media: string,
  card: string
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

const RecipesCardComponent: any  = ({recipes, classes}: recipesProps) => (
  <div>
    {recipes.map((recipe:any) => {
      return (
          <Card key={recipe.recipe_id} className={classes!.card}>
            <CardHeader
              title={recipe.title}
            />
            <CardMedia
                image={recipe.image_url}
                title={recipe.title}
                className={classes!.media}
            />
            <CardContent>
            
            <LinkButton color="primary" to={`/recipes/${recipe.recipe_id}`}>Learn more</LinkButton>
            </CardContent>
          </Card>
      )
    })}
  </div>
)

export default  withStyles(styles)(RecipesCardComponent);