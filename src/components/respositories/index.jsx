import React from "react";
import * as S from "./styled"
import RepositoryItem from "../repository-item";


const Repositories = () => {
    return ( 
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>

            <S.WrapperTabPanel>
                <RepositoryItem
                    name="app-github"
                    linkToRepo="#"
                    fullName="rafael/app-github"
                >

                </RepositoryItem>
            </S.WrapperTabPanel>

            <S.WrapperTabPanel>
                <RepositoryItem
                    name="app"
                    linkToRepo="#"
                    fullName="rafael/app-github"
                >
                </RepositoryItem>
            </S.WrapperTabPanel>
            
        </S.WrapperTabs>
     );
}
 
export default Repositories;