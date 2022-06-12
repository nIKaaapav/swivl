import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import action from '../../redux/usersState/actions'
import {Container, ContainerItems} from "./style";
import Button from "../../components/Button/Button";
import Item from "../../components/Item/Item";
import Loading from "../../components/loading/loading";
import {usePagination} from "../../utils/hooks/usePagination";
import {Title} from "../user/style";

const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const pagination = usePagination();

    useEffect(() => {
        dispatch(action.getAllUsers(pagination.take, pagination.skip));
    },[pagination.take, pagination.skip]);

    const onAddMoreUsers = () => {
        pagination.setPage(pagination.page + 1);
    }

    return (
        <Container>
            <Title>Users from github</Title>
            <ContainerItems>
            {
                users.map(user => <Item user={user}/>)
            }
                {!loading && <Button text={'Load more'} onClick={onAddMoreUsers}/>}
            {loading && <Loading/>}
            </ContainerItems>
        </Container>
    );
};

export default Home;