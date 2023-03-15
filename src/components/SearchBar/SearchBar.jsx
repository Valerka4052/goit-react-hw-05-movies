import PropTypes from 'prop-types';
import { Form, Input,Button,Container } from './SearchBar.styled';

export function SearchBar({ onSubmitValue }) {

    return (
        <Container>
            <Form onSubmit={(e) => {
                e.preventDefault();
                if (!e.target.search.value) return;
                onSubmitValue(e.target.search.value);
            }}>
                <Input
                    type="text"
                    name="search"
                    placeholder='enter the film'
                />
                <Button type='submit' >Search</Button>
            </Form>
        </Container>
    );
};

SearchBar.propTypes={
       onSubmitValue:PropTypes.func.isRequired,    
    };