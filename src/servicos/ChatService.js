
import { Observable } from "rxjs";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:3001";

let usuarioId = Math.floor(Math.random() * 4);
let sala = Math.floor(Math.random() * 10);
let salaId = sala % 2 === 0 ? 0 : 1;
console.log("Sala: " + salaId)



export default class ChatService{

    socket 

    constructor(){
        this.socket = socketIOClient(ENDPOINT, { query: { sala: salaId } });
    }

    conectar() {
        return new Observable(observer => {
            
            observer.next(true);
            observer.complete();
        })
    }

    receberMensagem(callback){
        this.socket.on("mensagemRecebida", data => {
            
            console.log("Recebeu mensagem");
            callback(data);
        });
        
    }

    enviarMensagem(mensagem){
        return new Observable(observer=>{
            this.socket.emit("enviarMensagem", {usuario:usuarioId, mensagem:mensagem.texto});
            observer.next();
            observer.complete();

        });
    }

}