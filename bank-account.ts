class Account {
    private accountNumber: string;
    private accountBalance: number;

    constructor(accountNumber: string) {
        this.accountNumber = accountNumber;
        this.accountBalance = 0;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log(`The added amount is: ${amount} and your total balance is: ${this.accountBalance}`);
        } else {
            console.log('Amount must be greater than 0')
        }
    }

    withdrawal(subtractAmount: number): void {
        if (subtractAmount <= 0) {
            console.log('Amount must be greater than 0');
        } else if (subtractAmount > this.accountBalance) {
            console.log(`Amount cannot be greater than total balance (Now is: ${this.accountBalance})`)
        } else {
            this.accountBalance -= subtractAmount;
            console.log(`Operation done! Now the total balance is ${this.accountBalance}`)
        }
    }

    checkBalance(){
        return this.accountBalance;
    }
}


let account = new Account('5555555');

account.deposit(-100);      //Amount must be greater than 0
account.deposit(500);       //The added amount is: 500 and your total balance is: 500
account.deposit(900);       //The added amount is: 900 and your total balance is: 1400

account.withdrawal(5000);   //Amount cannot be greater than total balance (Now is: 1400)
account.withdrawal(-700);   //Amount must be greater than 0
account.withdrawal(300);    //Operation done! Now the total balance is 1100
