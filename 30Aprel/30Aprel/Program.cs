using System;

namespace _30Aprel
{
    internal class Program
    {
        static void Main(string[] args)
        {
            User user = new User("user@gmail.com", "Password123");
            Console.WriteLine("Menu");
            Console.WriteLine("1. Show info");
            Console.WriteLine("2. Create new group");
            string command = Console.ReadLine();
            switch (command)
            {
                case "1":
                    Console.WriteLine();
                    break;
                case "2":
                    Console.WriteLine();
                    break;

                default:
                    Console.WriteLine("yanlis");
                    break;
            }
            bool menu = true;
            while (menu)
            {
                Console.WriteLine("Menu");
                Console.WriteLine("1. Show all students");
                Console.WriteLine("2. Get student by id");
                Console.WriteLine("3. Add student");
                Console.WriteLine("0. Quit");
                string choise = Console.ReadLine();
                switch (choise)
                {
                    case "1":
                        Console.WriteLine();
                        break;
                    case "2":
                        Console.WriteLine();
                        break;
                    case "3":
                        Console.WriteLine();
                        break;
                    case "0":
                        menu = false;
                        Console.WriteLine("Quit");
                        break;
                    default:
                        Console.WriteLine("yanlis");
                        break;
                }
            }
           
        }
    }
}
