import React from "react";
import * as S from './styled'

const Profile = () => {
    return (  
        <S.Wrapper>
            <img src="https://avatars.githubusercontent.com/u/96540309?v=4" alt="User Avatar" />
            
            <div>
                <div>
                    <h1>Rafael Domingos</h1>
                    <h3>Username: </h3>
                    <span>rafaelsdomingos</span>
                </div>

                <S.Wrapper>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starreds</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>5</span>
                    </div>
                </S.Wrapper>
            </div>


        </S.Wrapper>
    );
}
 
export default Profile;