using System;
using System.Collections.Generic;
using System.Text;

namespace _30Aprel
{
    internal class Group
    {
        public Group(string groupNo,int studentlimit)
        {
            GroupNo = groupNo;
            StudentLimit = studentlimit;
        }
        public string GroupNo;
        public int StudentLimit
        {
            get
            {
                return this.StudentLimit;
            }
            set
            {
                if (value>=5 && value<=18)
                {
                    StudentLimit = value;
                }
            }
        }
        private Student[] students= new Student[0];
        public bool CheckGroupNo( string groupNo)
        {
            bool hasDigit = false;
            bool hasUpper = false;
            if (groupNo.Length >= 5)
            {
                for (int i = 0; i < groupNo.Length; i++)
                {
                    if (Char.IsDigit(groupNo[i]))
                    {
                        hasDigit = true;
                    }
                    else if (Char.IsUpper(groupNo[i]))
                    {
                        hasUpper = true;
                    }                 
                    if (hasDigit && hasUpper)
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
        public void AddStudent(Student student)
        {

        }
        public void GetStudent(int? id)
        {

        }
        public void GetAllStudent()
        {

        }
    }
}
