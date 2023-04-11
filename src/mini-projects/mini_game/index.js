import React, { useState, useEffect } from 'react';
import { Content, Player, IMGBackground, TileSet, TileSetHead, TileSetBody, TileSetWeapon,
         HudContainer, HeadContainer, BodyContainer, BtnContainer, BtnIMG
} from './style';

import ImgBackground from './imgs/Tiles/tileset_cenario.jpg';

//Cabeças
import Head1 from './imgs/itens/cabeça/Heroi.png';
import Head2 from './imgs/itens/cabeça/Ninja.png';
import Head3 from './imgs/itens/cabeça/SamuraiHeavy.png';
import Head4 from './imgs/itens/cabeça/SamuraiLight.png';
//Corpo
import Body1 from './imgs/itens/corpo/Heroi.png';
import Body2 from './imgs/itens/corpo/Ninja.png';
import Body3 from './imgs/itens/corpo/SamuraiHeavy.png';
import Body4 from './imgs/itens/corpo/SamuraiLight.png';

//Armas
import Weapon1 from './imgs/itens/armas/espada_heroi.png';
import Weapon2 from './imgs/itens/armas/espada_samurai.png';
import Weapon3 from './imgs/itens/armas/katana.png';
import Weapon4 from './imgs/itens/armas/knife.png';
import Weapon5 from './imgs/itens/armas/machado.png';
import Weapon6 from './imgs/itens/armas/martelo.png';
import Weapon7 from './imgs/itens/armas/sai.png';
import Weapon8 from './imgs/itens/armas/sai2.png';

//escudo
import Escudo from './imgs/itens/escudo/escudo.png';

//image referencias https://opengameart.org/users/ragewortt
function MiniGame() {

    const [user, SetUser] = useState("João");
    const [head, SetHead] = useState(Head1);
    const [body, SetBody] = useState(Body1);
    const [weapon, SetWeapon] = useState('');

    const arrayHead = [Head1, Head2, Head3, Head4];
    const arrayBody = [Body1, Body2, Body3, Body4];
    const arrayWeapons = [Weapon1, Weapon2, Weapon3, Weapon4, Weapon5, Weapon6, Weapon7, Weapon8];


    function handleChange(event) {
        SetUser(event.target.value)
    }

    const faces = arrayHead.map((index, key) => 
        <BtnContainer key={key}  onClick={() => SetHead(index)}>
            <BtnIMG src={index} />
        </BtnContainer>    
    );

    const bodies = arrayBody.map((index, key) => 
        <BtnContainer key={key} onClick={() => SetBody(index)}>
            <BtnIMG src={index} />
        </BtnContainer>    
    );

    const weapons = arrayWeapons.map((index, key) => 
        <BtnContainer key={key} onClick={() => SetWeapon(index)}>
            <BtnIMG src={index} />
        </BtnContainer>    
    );

    return(
        <Content>
            <p>MINI GAME</p>
            <Player>
                <IMGBackground src={ImgBackground} />
                <HudContainer>
                    <HeadContainer>MENU</HeadContainer>
                    <BodyContainer>
                        {faces}
                        {bodies}
                        {weapons}
                    </BodyContainer>
                </HudContainer>
                <TileSet>
                    <TileSetBody src={body} />
                    <TileSetWeapon src={weapon} />
                    <TileSetHead src={head} />
                </TileSet>
            </Player>
        </Content>
    );
}

export default MiniGame;