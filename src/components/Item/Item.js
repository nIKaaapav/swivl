import React from 'react';
import {Avatar, ItemRightPart, ItemWrapper} from "./style";
import {ItemData} from "../../pages/user/style";
import {LinkToForeignSite} from "../../pages/home/style";


const Item = ({user}) => {
    return (
        <ItemWrapper to={`/${user.login}`} key={user.id}>
            <Avatar src={`${user.avatar_url}`} alt="avatar"/>
            <ItemRightPart>
                <ItemData>Login: {user.login}</ItemData>
                <ItemData>Link to hub: <LinkToForeignSite href={user.html_url}>{user.html_url}</LinkToForeignSite></ItemData>
            </ItemRightPart>
        </ItemWrapper>
    );
};

export default Item;