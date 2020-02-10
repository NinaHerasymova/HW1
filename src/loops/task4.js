function factorial(num)
            {
                var val = 1;
                
                for (var i = 2; i <= num; i++)
                    val = val * i;
                    alert(val);
                } 
            
            
           factorial(prompt('Enter your number, please'))