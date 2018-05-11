abstract class Employee {
    constructor(public firstName: string, public lastName: string, public ssn: string) { }
    toString(): string {
        return this.firstName + " " + this.lastName + "\nSocial Security Number: " +
            this.ssn;
    }
    abstract get earnings(): number;
}

class SalariedEmployee extends Employee {
    constructor(firstName: string, lastName: string, ssn: string, public salary: number) {
        super(firstName, lastName, ssn);
    }
    get earnings(): number {
        return this.salary;
    }
    toString(): string {
        return super.toString() + "\tSalary: " + this.salary;
    }
}

class HourlyEmployee extends Employee {
    constructor(firstName: string, lastName: string, ssn: string, public hourlyWage: number, public hoursWorked: number) {
        super(firstName, lastName, ssn);
    }
    get earnings(): number {
        if (this.hoursWorked <= 40)  // no overtime
            return this.hourlyWage * this.hoursWorked;
        else
            return 40 * this.hourlyWage + (this.hoursWorked - 40) * this.hourlyWage * 1.5;
    }
    toString(): string {
        return super.toString() + "\thourlyWage: " + this.hoursWorked +
            "\thoursWorked: " + this.hoursWorked;
    }
}

class CommissionEmployee extends Employee {
    constructor(firstName: string, lastName: string, ssn: string, 
        public grossSales: number, public commissionRate: number) {
        super(firstName, lastName, ssn);
    }
    get earnings(): number {
        return this.grossSales * this.commissionRate;
    }
    toString(): string {
        return super.toString() + "\tgrossSales: " + this.grossSales +
            "\tcommissionRate: " + this.commissionRate;
    }
}

class BasePlusCommissionEmployee extends CommissionEmployee {
    constructor(firstName: string, lastName: string, ssn: string, 
        grossSales: number, commissionRate: number,
         public baseSalary: number) {
        super(firstName, lastName, ssn, grossSales, commissionRate);
    }
    get earnings(): number {
        return super.earnings + this.baseSalary;
    }
    toString(): string {
        return super.toString() + "\tbaseSalary: " + this.baseSalary;
    }
}


class Payroll {
    private employees: Employee[] = new Array<Employee>();

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    getEmployee(index: number) {
        return this.employees[index];
    }

    get count(): number {
        return this.employees.length;
    }

    get totalEarnings(): number {
        return this.employees.map(emp => emp.earnings).
            reduce((total, earning) => total + earning);
    }

    get numberOfSalariedEmployees(): number {
        let no: number = 0;
        for (let employee of this.employees) {
            if (employee instanceof SalariedEmployee) {
                no++;
            }
        }
        return no;
    }

    get numberOfHourlyEmployees(): number {
        let no: number = 0;
        for (let employee of this.employees) {
            if (employee instanceof HourlyEmployee) {
                no++;
            }
        }
        return no;
    }

    get numberOfCommissionEmployees(): number {
        let no: number = 0;
        for (let employee of this.employees) {
            if (employee instanceof CommissionEmployee) {
                no++;
            }
        }
        return no;
    }

    get numberOfBasePlusCommissionEmployees(): number {
        let no: number = 0;
        for (let employee of this.employees) {
            if (employee instanceof BasePlusCommissionEmployee) {
                no++;
            }
        }
        return no;
    }
}

// hoofdprog
// part 2
console.log("*** PART 1 ***");
let employees: Employee[] = new Array<Employee>(4);
employees[0] = new SalariedEmployee("John", "Smith",
    "111-11-1111", 800.00);
employees[1] = new CommissionEmployee("Sue", "Jones",
    "222-22-2222", 10000, .06);
employees[2] = new BasePlusCommissionEmployee("Bob", "Lewis",
    "333-33-3333", 5000, .04, 300);
employees[3] = new HourlyEmployee("Karen", "Price",
    "444-44-4444", 16.75, 40);

let output: string = "";

for (let employee of employees) {
    if (employee != undefined) {
        output += employee.toString();
        // determine whether element is a BasePlusCommissionEmployee
        if (employee instanceof BasePlusCommissionEmployee) {
            // downcast Employee reference to 
            // BasePlusCommissionEmployee reference
            let currentEmployee: BasePlusCommissionEmployee =
                employee as BasePlusCommissionEmployee;

            let oldBaseSalary: number = currentEmployee.baseSalary;
            output += "\nold base salary: " + oldBaseSalary;

            currentEmployee.baseSalary = 1.10 * oldBaseSalary;
            output += "\nnew base salary with 10% increase is: " +
                currentEmployee.baseSalary;

        }

        output += "\nearned " + employee.earnings + "\n";
    }
} // end for
console.log(output);

// part 2
console.log("*** PART 2 ***");
let payroll: Payroll = new Payroll();
for (let employee of employees) {
    if (employee != undefined) {
        payroll.addEmployee(employee);
    }
}
for (let i: number = 0; i < payroll.count; i++) {
    console.log(payroll.getEmployee(i).toString());
}
let totalEarnings: number = payroll.totalEarnings;
console.log("Total earnings: %s", totalEarnings);
console.log("Number of SalariedEmployees: %s", payroll.numberOfSalariedEmployees);
console.log("Number of HourlyEmployees: %s", payroll.numberOfHourlyEmployees);
console.log("Number of CommissionEmployees: %s", payroll.numberOfCommissionEmployees);
console.log("Number of BasePlusCommissionEmployees: %s", payroll.numberOfBasePlusCommissionEmployees);
