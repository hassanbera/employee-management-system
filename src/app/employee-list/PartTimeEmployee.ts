import {Employee} from './employee'
export class PartTimeEmployee extends Employee{
    hourlyRate:number;
    hoursWorked:number;

    constructor(id:number, name:string, hourlyRate:number, hoursWorked:number){
        super(id,name);
        this.hourlyRate=hourlyRate;
        this.hoursWorked=hoursWorked;
    }

    getHourlyRate(){
        return this.hourlyRate;
    }

    getHoursWorked(){
        return this.hoursWorked;
    }

    override getDetails(): string {
        const totalEarnings = this.hourlyRate * this.hoursWorked;
        return `${super.getDetails()}, Hourly Rate: ${this.hourlyRate}, Hours Worked: ${this.hoursWorked}, Total Earnings: ${totalEarnings}`;
      }

}