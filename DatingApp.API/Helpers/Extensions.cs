﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {

        public static void AddApplicationerror(this HttpResponse resposne, string message)
        {
            resposne.Headers.Add("Appliaction_Error", message);
            resposne.Headers.Add("Access-Control-Expose-Headers", "Appliaction-Error");
            resposne.Headers.Add("Access-Control-Allow-Origin","*");
        }

        public static int  CalculateAge(this DateTime dateTime)
        {
            int age = DateTime.Now.Year - dateTime.Year;
            if (dateTime.AddYears(age) > DateTime.Today)
                age--;
            return age;
        }

    }
}
