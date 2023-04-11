import React, {useEffect, useState} from "react";
import { Container1, Container2, Content, Text, SubContent } from './style';

function HomeList() {

    const [cont, SetCont] = useState(0);
    const [tarefas, SetTarefa] = useState([]);
    const [atividadeAtual, SetAtividade] = useState('');
    const [pesquisa, SetPesquisa] = useState('');

    useEffect(() => {

        const novaTarefa = tarefas.filter(tarefa => tarefa.includes(pesquisa));

        SetTarefa(novaTarefa);

    }, [pesquisa]);

    const criarTarefas = () => {

        if (atividadeAtual.length >= 3) {
            if(tarefas.length == 0){
                SetTarefa([atividadeAtual]);
            }
    
            tarefas.push(atividadeAtual);
            SetCont(tarefas.length);
        } else {
            window.alert("Digite alguma tarefa");
        }

    }

    function Excluir (index) {

        let i = tarefas.indexOf(index);

        tarefas.splice(i, 1);
    }
    
    const botoes = tarefas.map((index, key)=> 
        <div key={key} >
            <Text >{index}</Text> 
            <button onClick={() => Excluir(index)} >Excluir</button>
        </div>
    );

    return(
    <Content>
        <p>MY LIST</p>
        <SubContent>
            <Container1>
                <input placeholder="Digite sua tarefa aqui" value={atividadeAtual} onChange={(e) => SetAtividade(e.target.value)} />
                <button onClick={criarTarefas}>Adicionar</button>
            </Container1>
            <Container2>
                <input placeholder="Buscar Tarefa" value={pesquisa} onChange={(e) => SetPesquisa(e.target.value)} />
                <Text>TAREFAS {cont}</Text>
                {botoes}
            </Container2>
        </SubContent>
    </Content>  
    );
}

export default HomeList;