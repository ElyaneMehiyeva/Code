using System;
using System.Collections.Generic;
using System.Text;

namespace _30Aprel
{
    internal class User : IAccount
    {
        public User(string email, string pass)
        {
            _id++;
            Id = _id;
            this.Email = email;
            this.Password = pass;
        }
        public int _id;
        public int Id { get; }
        public string Fullname;
        public string Email;
        public string _password;
        public string Password
        {
            get { return Fullname; }
            set
            {
                if (PasswordChecker(value))
                {
                    this._password = value;
                }
            }
        }
        public void ShowInfo()
        {
            Console.WriteLine($"Id - {Id}, Fullname - {Fullname},Email : {Email}");
        }
        public bool PasswordChecker(string password)
        {
            bool hasDigit = false;
            bool hasUpper = false;
            bool hasLower = false;
            if (password.Length >= 8)
            {
                for (int i = 0; i < password.Length; i++)
                {
                    if (Char.IsDigit(password[i]))
                    {
                        hasDigit = true;
                    }
                    else if (Char.IsUpper(password[i]))
                    {
                        hasUpper = true;
                    }
                    else if (Char.IsLower(password[i]))
                    {
                        hasLower = true;
                    }
                    if (hasDigit && hasUpper && hasLower)
                    {
                        return true;
                    }
                }
                return false;
            }
            else
            {
                return false;
            }
        }

    }
}
