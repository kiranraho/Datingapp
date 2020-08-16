using System;
using System.Threading.Tasks;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class AuthRespository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRespository(DataContext context)
        {
            this._context = context;


        }

        public async Task<User> Login(string Username, string Password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username== Username);
            if(user==null)
            return null;
            if(!verifythehash(user.PasswordHash,user.PasswordSalt,Password))
            return null;
            return user;

        }

        private bool verifythehash(byte[] passwordHash, byte[] passwordSalt, string password)
        {
        using(var Hash= new System.Security.Cryptography.HMACSHA512( passwordSalt))
            {
                var computeHash = Hash.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password)); 
                for(int i =0;i<computeHash.Length;i++)
                {

                    if(computeHash[i]!=passwordHash[i])
                    return false;
                }
                return true;
            }    
        }

        public async Task<User> Resgister(User user, string Password)
        {
            byte[] PasswordHash,PasswordSalt;

            CreatePasswordHash(out PasswordHash,out PasswordSalt,Password);
            user.PasswordHash=PasswordHash;
            user.PasswordSalt=PasswordSalt;
            await _context.Users.AddAsync(user);
           await _context.SaveChangesAsync();
          
            return user;
        }

        private void CreatePasswordHash(out byte[] passwordHash, out byte[] passwordSalt, string password)
        {
            using(var Hash= new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt=Hash.Key;
                passwordHash=Hash.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password)); 
            }
        }

        public async Task<bool> UserExist(string Username)
        {
             if(await _context.Users.AnyAsync(x => x.Username==Username))
             return true;
             else 
             return false;
        }
    }
}