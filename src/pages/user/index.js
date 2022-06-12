import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import action from '../../redux/usersState/actions'
import {Container, LinkToForeignSite} from "../home/style";
import {BioTitle, BioWrapper, ContainerUser, ItemData, Title, Wrapper} from "./style";
import {Avatar} from "../../components/Item/style";


const User = () => {
    const { userName } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.currentUser);

    useEffect(() => {
        dispatch(action.getUser(userName))
    }, []);

    const formatData = (date) =>{
        return new Date(date).toLocaleDateString()
    }

    const renderDataOrNothing = (data) =>{
        return data ? data : '-'
    }

    return (
        <Container>
            <ContainerUser>
                {
                    user &&
                   ( <div>
                       <Wrapper>
                       <Avatar size={300} src={`${user.avatar_url}`} alt="avatar"/>
                       <div>
                            <Title>{user.name}</Title>
                            <ItemData>Followers: {renderDataOrNothing(user.followers)}</ItemData>
                            <ItemData>Following: {renderDataOrNothing(user.following)}</ItemData>
                            <ItemData>Created at: {renderDataOrNothing(formatData(user.created_at))}</ItemData>
                            <ItemData>Company: {renderDataOrNothing(user.company)}</ItemData>
                            <ItemData>Email: {renderDataOrNothing(user.email)}</ItemData>
                            <ItemData>Location: {renderDataOrNothing(user.location)}</ItemData>
                            <ItemData>Blog: <LinkToForeignSite href={user.blog}>{renderDataOrNothing(user.blog)}</LinkToForeignSite></ItemData>
                       </div>
                       </Wrapper>
                       <BioWrapper>
                           <BioTitle>Bio </BioTitle>
                           <p>{renderDataOrNothing(user.bio)}</p>
                       </BioWrapper>

                </div>)
                }
            </ContainerUser>
        </Container>
    );
};

export default User;