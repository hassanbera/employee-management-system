import {Employee} from './employee'
export class FullTimeEmployee extends Employee{
    annualSalary: number;
    constructor(id:number, name:string, annualSalary:number){
        super(id,name);
        this.annualSalary=annualSalary;
    }
getAnnualSalary(): number{
    return this.annualSalary;
}
setAnnualSalary(annualSalary:number): void{
    this.annualSalary=annualSalary;
}

    override getDetails(): string{
    return `${super.getDetails()}, Annual Salary: ${this.annualSalary}`;
}
}