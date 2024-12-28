export class Employee {
    id: number;
    name: string;
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  
    getId(): number {
      return this.id;
    }
  
    getName(): string {
      return this.name;
    }
  
    setId(id: number): void {
      this.id = id;
    }
  
    setName(name: string): void {
      this.name = name;
    }

    getDetails(): string {
        return `${this.getName()} (ID: ${this.getId()})`;
      }
  }
  