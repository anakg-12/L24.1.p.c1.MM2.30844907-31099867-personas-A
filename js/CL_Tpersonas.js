export default class CL_Tpersonas{
    constructor(){
        this.contF=0;
        this.contM=0;
        this.contp=0;

    }
    procesar(p){
        this.contp++;
        if (p.sexo=="F")
            this.contF++;
        else
        this.contM++;
       
    
    }
    mas_asis(){
        if(this.contF>this.contM)
            return "mas mujeres"
            else
            if(this.contM>this.contF)
                return"mas hombres"
            else
            return "por igual"
    }
    
    
    porcenF(){
        return (this.contF*100)/this.contp;
    }
}