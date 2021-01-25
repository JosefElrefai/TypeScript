interface Reportable {
    summary(): string
}

const oldVehicle = {
    maker: 'ford',
    year: 1997,
    horsepower: 500,
    summary(): string {
        return `Made by: ${this.maker}, year: ${this.year} etc.`;
    }
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugars: 100,
    summary(): string {
        return `Coke drink`
    }
}

const logSummary = (item: Reportable): void => {
    console.log(item.summary());
}

logSummary(oldVehicle);
logSummary(drink);