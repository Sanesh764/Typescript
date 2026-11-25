function getchai(kind:string | number){
    if(typeof kind==='string'){
        return `Making ${kind} chai...`
    }
    return `chai order: ${kind}`;
}
console.log(getchai('sanesh singh'));

function serverChai(msg?:string){
    if(msg){
        return `serving ${msg}`;
    }
    return `serving default masala chai and sanesh kumar`;
}

function orderCoffiee(size:'small' | 'medium' | 'large' | number){
    if(size==='small'){
        return `garib hai tu de do isk chota wala cup coffie ke sath`;
    }
    if(size=='medium'){
        return 'middle class hai tu n ray de de heart bana kar cup me chai isko';
    }
    if(size==='large'){
        return 'welcome sir ,you are most importent customer in our shop please sit here any enjoy the coffiee';
    }
    return `chai ka order kiya hai ye pgl ${size}`
}


class kulhadchai{
    serve(){
        return `'serving kulhad chai`;
    }
}
class cuttingChai{
    serve(){
        return `'serving cutting chai`;
    }
}
function serve(chai :kulhadchai | cuttingChai){
    if(chai instanceof kulhadchai){
        return chai.serve();
    }
}
type chaiOrder={
    type:string
    suger:number
}
function ischaiOrder(obj:any):obj is chaiOrder{
    return (
        typeof obj==="object" && obj!==null && typeof obj.type==='string' && typeof obj.suger==='number'
    )
}

function serverOrder(item:chaiOrder |string){
    if(ischaiOrder(item)){
        return `serving ${item.type} chai with ${item.suger} suger`
    }
    return `serving custom chai : ${item}`;
}


type massalaChai={type:'massala';spicelevel:number};
type Gingerchai={type:'ginger';amount:number};
type Elaichichai={type:'elaichi';aroma:number};

type chai =massalaChai | Gingerchai | Elaichichai;
function MakeChai(order:chai){
    switch (order.type) {
        case "massala":
            return `massala chai`;
            break;
    
        case 'elaichi':
            return "elaichi chai";
            break;
        
            case "ginger":
                return 'ginger chai';
                break;
    }
}

function brew(order :massalaChai |Gingerchai){
    if("spicelevel" in order){
        ///do some work
    }
}

function isStringArray(arr:unknown):arr is string[]{
    
}