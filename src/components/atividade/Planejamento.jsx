import React, { Component } from 'react';

import { Accordion, AccordionTab } from 'primereact/accordion';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

import 'primeflex/primeflex.css';


import AtividadeProgramacao from '../../modelos/AtividadeProgramacao';
import Chat from '../chat/Chat';

export default function Planejamento(props) {

    const citySelectItems = [
        { label: 'New York', value: 'NY' },
        { label: 'Rome', value: 'RM' },
        { label: 'London', value: 'LDN' },
        { label: 'Istanbul', value: 'IST' },
        { label: 'Paris', value: 'PRS' }
    ];

    let atividadeProgramacao = new AtividadeProgramacao();
    atividadeProgramacao.descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis augue at risus rhoncus suscipit. Etiam non dapibus risus. Aliquam at convallis nisi. Etiam varius tincidunt orci, vel vehicula quam egestas ac. In quis elementum risus. Quisque quam mauris, mattis quis nunc sed, aliquet posuere ex. Maecenas ipsum diam, dignissim sed mollis eu, tristique sit amet risus. Fusce quis vestibulum nisl, nec posuere erat. Mauris rhoncus risus a erat pulvinar, ut commodo magna finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vitae arcu lobortis, vestibulum felis a, ultricies sem. Interdum et malesuada fames ac ante ipsum primis in faucibus";

    return <>
        <Chat></Chat>
        <h2>Descrição do problema</h2>
        {atividadeProgramacao.descricao}

        <div className='p-fluid'>
            <div className="p-field">
                <Accordion >
                    <AccordionTab header="Qual problema você vai resolver?">
                        <InputTextarea rows={5} cols={30} />
                    </AccordionTab>
                    <AccordionTab header="O que precisará ser feito para concluir o algoritmo?">
                        <InputTextarea rows={5} cols={30} />
                    </AccordionTab>
                </Accordion>
            </div>
            <div className="p-field">
                <label htmlFor="liderGrupo">Líder do grupo</label>
                <Dropdown options={citySelectItems} onChange={(e) => {this.setState({city: e.value})}} placeholder="Select a City"/>
            </div>
            <div >
               
                <Button label='Avançar'/>
            </div>
        </div>
    </>
}
