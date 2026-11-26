type chaiOrder={
    type:string;
    suger:number;
    strong:boolean
}

function nameChai(order:chaiOrder){
    console.log(order);

}

function serverChai(order:chaiOrder){
    console.log(order);
    
}

type Teaecipe= {
    water:number;
    milk:number
}
// class masalachai implements Teaecipe{
//     water=100;
//     milk=60;
// }

interface CupSize{
    size:"small" | "large"
}

class Chai implements CupSize{
    size:"small" | "large"='large';
}

type Response={ok:true} | {ok:false};

// class myRes implements Response{//give error
//     ok:boolean=true
// }

type TeaType='masala' |"ginger" | "lemon";

function orderChai(t:TeaType){
    console.log(t);
}

type BaseChai={teaLevels:number}
type Extra={masala:number}

type masalachai=BaseChai & Extra

const cup:masalachai={
    teaLevels:2,
    masala:1
}

type User={
    username:string;
    bio?:string
}

const u1:User={
    username:"sanesh"
}
const u2:User={
    username:"sanesh",bio:"we do it"
}

type config={
    readonly appName:string
    version:number
}

const cfg:config={
    appName:"masterJi",
    version:2
}

// cfg.appName="chainame";//gie an error