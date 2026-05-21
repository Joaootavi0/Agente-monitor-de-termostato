const temperaturaAlvo = 22;
const temperaturaAtual = 25; //percepção do sensor

//Regra racional
if (temperaturaAtual > temperaturaAlvo)
{
    console.log("[Atuador]: Ligar motor para RESFRIAR");
} else {
    console.log("[Atuador]: DESLIGAR motor, temperatura ideal atingida");
}
