using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Resgister(User user,string Password);

         Task<User> Login(string Username,string Password);
         Task<bool> UserExist(string Username);


    }
}