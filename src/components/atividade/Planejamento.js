import React, { Component } from 'react';

import { Accordion, AccordionTab } from 'primereact/accordion';
import { InputTextarea } from 'primereact/inputtextarea';

import AtividadeProgramacao from '../../modelos/AtividadeProgramacao';
import Chat from '../chat/Chat';




export default class Planejamento extends Component {


    atividadeProgramacao;

    componentDidMount(){
        
    }

    constructor(){
        super();
        this.atividadeProgramacao = new AtividadeProgramacao();
        this.atividadeProgramacao.descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis augue at risus rhoncus suscipit. Etiam non dapibus risus. Aliquam at convallis nisi. Etiam varius tincidunt orci, vel vehicula quam egestas ac. In quis elementum risus. Quisque quam mauris, mattis quis nunc sed, aliquet posuere ex. Maecenas ipsum diam, dignissim sed mollis eu, tristique sit amet risus. Fusce quis vestibulum nisl, nec posuere erat. Mauris rhoncus risus a erat pulvinar, ut commodo magna finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vitae arcu lobortis, vestibulum felis a, ultricies sem. Interdum et malesuada fames ac ante ipsum primis in faucibus";

    }

    render() {
        return <>
            <Chat></Chat>
            <h2>Descrição do problema</h2>
            {this.atividadeProgramacao.descricao}
            <Accordion >
                <AccordionTab header="Qual problema você vai resolver?">
                    <InputTextarea rows={5} cols={30} />
                </AccordionTab>
             
            </Accordion>
        </>
    }

}