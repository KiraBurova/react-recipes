import React, { useState, useEffect } from 'react'
import { GET_PATH } from '../config/constants'

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import LinkButton from '../blocks/LinkButton'

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
        marginBottom: 20
    },
    badge: {
        top: 15,
        right: 15
    }
};

const RecipeCardComponent: React.SFC<any> = ({ match, classes }: any) => {
    const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`${GET_PATH}key=${process.env.REACT_APP_API_KEY}&rId=${match.params.id}`);
            const response = await data.json();

            setRecipe(response.recipe);
        }
        fetchData();
    }, [])

    return <div className="container">
        {recipe &&
            <Badge badgeContent={Math.floor(recipe.social_rank)} className={classes!.badge} color="secondary">
                <Card className={classes!.card}>
                    <CardHeader
                        subheader={recipe.publisher}
                        title={
                            <LinkButton to={`/${recipe.source_url}`}>{recipe!.title}</LinkButton>
                        }>
                    </CardHeader>
                    <CardMedia
                        image={recipe!.image_url}
                        className={classes!.media}
                    >
                    </CardMedia>
                    <CardActions>
                        <Button fullWidth onClick={() => setOpen(!open)} color="primary">
                            Ingredients
                        {open ? <ExpandLess /> : <ExpandMore />}
                        </Button>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="nav">
                                {recipe.ingredients.map((ingredient, index) => {
                                    return <ListItem key={index}>
                                        <ListItemText primary={`- ${ingredient}`} />
                                    </ListItem>
                                })}
                            </List>
                        </Collapse>
                    </CardActions>
                </Card>
            </Badge>}
    </div>
}


export default withStyles(styles)(RecipeCardComponent);