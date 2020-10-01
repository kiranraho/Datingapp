using DatingApp.API.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Data
{
    public class Seed
    {

        public static void SeedUser(DataContext dataContext)
        {
            if(!dataContext.Users.Any())
            {

                var Users = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var Userlist = JsonConvert.DeserializeObject<List<User>>(Users);

                foreach(var user in Userlist)
                {
                    byte[] passwordHash, passwordSalt;
                    CreatePasswordHash(out passwordHash, out passwordSalt, "password");
                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                    user.Username = user.Username.ToLower();
                    dataContext.Users.Add(user);

                }
                dataContext.SaveChanges(); 
            }
           

        }

        private static void CreatePasswordHash(out byte[] passwordHash, out byte[] passwordSalt, string password)
        {
            using (var Hash = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = Hash.Key;
                passwordHash = Hash.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}
