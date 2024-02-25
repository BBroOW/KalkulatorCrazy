public class Calculator {
    public static double add(double num1, double num2) {
        return num1 + num2;
    }

    public static double subtract(double num1, double num2) {
        return num1 - num2;
    }

    public static double multiply(double num1, double num2) {
        return num1 * num2;
    }

    public static double divide(double num1, double num2) {
        if (num2 != 0) {
            return num1 / num2;
        } else {
            throw new IllegalArgumentException("Division by zero is not allowed.");
        }
    }

    public static void main(String[] args) {
        System.out.println(add(5, 3));
        System.out.println(subtract(5, 3));
        System.out.println(multiply(5, 3));
        System.out.println(divide(5, 3));
    }
}