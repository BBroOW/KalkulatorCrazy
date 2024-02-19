num1 = input("Enter a number: ")
if num1.isdecimal() == False:
    print("Nummer kan ikke ha decimaler")
    exit()

    
operasjon = input("Enter an operation: ")
if operasjon != "+" and operasjon != "-" and operasjon != "*" and operasjon != "/":
    print("Operasjonen er ikke gyldig")
    exit()

num2 = input("Enter another number: ")
if num2.isdecimal() == False:
    print("Nummer kan ikke ha decimaler")
    exit()


else:
    if operasjon == "+":
        result = int(num1) + int(num2)
        print(result)

    if operasjon == "-":
        result = int(num1) - int(num2)
        print(result)

    if operasjon == "*":
        result = int(num1) * int(num2)
        print(result)

    if operasjon == "/":
        result = int(num1) / int(num2)
        if result > 0:
            print("nummeret blir med desimaltall")
        else:
            print(result)
    

