import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Mensagem from '../../modelos/Mensagem';
import socketIOClient from "socket.io-client";

import './chat.css';
import geradorCores from '../../util/geradorCores';

const ENDPOINT = "http://127.0.0.1:3001";

let usuarioId = Math.floor(Math.random() * 4);

let socket = socketIOClient(ENDPOINT);



export default function Chat(props) {

    const [mensagens, setMensagens] = useState([]);
    const [mensagem, setMensagem] = useState(new Mensagem(""));

    console.log("oi");

    

    useEffect(() => {
        console.log("Useeff");
        console.log(mensagens);
        socket.on("mensagemRecebida", data => {
            
            console.log("Recebeu mensagem");
            setMensagens(mensagensAntigas=>[new Mensagem(data.mensagem, data.usuario), ...mensagensAntigas]);
        });
      }, []); //only re-run the effect if new message comes in
    

    function enviarMensagem(){
        //setMensagens(mensagens.concat(mensagem));
        socket.emit("enviarMensagem", {usuario:usuarioId, mensagem:mensagem.texto});
        setMensagem(new Mensagem(""));
    }

    function renderMensagens(){
        return (
            <>
                {mensagens.map(mensagem => (
                        <div class="container" style={{backgroundColor:geradorCores(mensagem.usuario)}}>
                            <span class="left">{mensagem.usuario}</span>
                            <span>{mensagem.texto}</span>
                            <br />
                        </div>
                        
                    ))
                }
            </>
        )
    }

    const footer = (
        <div style={{ width: '10vw' }}>
            <InputText id="textoChat" value={mensagem.texto} onChange={(e) => {setMensagem(new Mensagem(e.target.value))}}/>
            <Button label="Enviar" icon="pi pi-check" onClick={enviarMensagem} />

        </div>
    );

    

    return (<>
        <Dialog header="Bate-papo" footer={footer} visible={true} style={{ width: '15vw', maxHeight:'20vw', height:'20vw'}} modal={false} position={"bottom-right"}>
            <div style={{ height:'9vw'}}>
                {renderMensagens()}
            </div>
            
        </Dialog>
    </>)

}