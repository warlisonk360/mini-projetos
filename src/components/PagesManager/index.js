import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from '../../page/Home';

//PROJETO LISTAR TAREFAS
import HomeList from '../../mini-projects/listar_tarefas/HomeList';
//PROJETO MINI GAME
import MiniGame from '../../mini-projects/mini_game';

//Faz o Redirecionamento das paginas
export default () =>{
	return(
	  	<Routes>
			<Route exact path="/" element={<Home/>} />
			<Route exact path="/listar_tarefa" element={<HomeList/>} />
			<Route exact path="/mini_game" element={<MiniGame/>} />		
	    </Routes>		
	);
}