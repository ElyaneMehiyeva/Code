using System;
using System.Collections.Generic;
using System.Text;

namespace _30Aprel
{
    internal class Student
    {
        public int Id { get;}
        private int _id;
        public string Fullname;
        public double Point;
        public Student(string fullname,double point)
        {
            _id++;
            Id = _id;
            Fullname = fullname;
            Point = point;
        }
        public void StudentInfo()
        {
            Console.WriteLine($"Id - {Id}, Fullname - {Fullname}, Point - {Point}");
        }
    }
}
