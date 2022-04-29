using System;
using System.Collections.Generic;
using System.Text;

namespace _30Aprel
{
    internal interface IAccount
    {
        public bool PasswordChecker(string password);
        public void ShowInfo();
    }
}
