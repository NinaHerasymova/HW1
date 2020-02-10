function ifPrime(num) {
    if (num > 1) {
        num = parseInt(num);
        if ((num % 2 == 0) && (num != 2))
            alert("Composite");
        else if (num == 2)
            alert("Prime");
        else {
            k = Math.round(Math.sqrt(num));
            flag = false;

            for (i = 2; i < k + 1; i++)
                if (num % i == 0) {
                    alert("Composite");
                    flag = true;
                    break;
                }

            if (flag == false)
                alert("Prime");
        }
    } else {
        alert('Wrong number!!!')
    }
}

ifPrime(prompt('Enter your number:'));