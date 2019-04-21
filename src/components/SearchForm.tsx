import React, { FormEvent, useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


interface formProps {
    fetchRecipes: (search: string) => void
}

const SearchFormComponent: React.FC<formProps> = (props: formProps) => {
    const [value, setValue] = useState('');

    return (
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            props.fetchRecipes(value);
        }}
            style={{
                display: 'flex',
                marginTop: '20px',
                justifyContent: 'space-around',
                width: '300px',
                margin: '20px auto',
            }}>
            <TextField name="recipeName" onChange={event => setValue(event.target.value)}></TextField>
            <Button type="submit" variant='contained' color='primary'>Search</Button>
        </form>
    )
}

export default SearchFormComponent;