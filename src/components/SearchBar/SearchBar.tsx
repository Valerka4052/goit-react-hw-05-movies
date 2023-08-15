import PropTypes from 'prop-types';
import { Form, Input,Button,Container } from './SearchBar.styled';

export function SearchBar({ onSubmitValue }:{ onSubmitValue:(value:string)=>void }) {

    return (
        <Container>
            <Form onSubmit={(event:React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                if (!event.currentTarget.search.value.trim()) return null;
                onSubmitValue(event.currentTarget.search.value);
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