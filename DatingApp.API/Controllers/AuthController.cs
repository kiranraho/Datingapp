using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;

namespace DatingApp.API.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            this._repo = repo;
            this._config = config;
        }


       

        [HttpPost("Register")]
        public async Task<IActionResult> Register(CreatetoUser createtoUser)
        {
            createtoUser.Username = createtoUser.Username.ToLower();
            if (await _repo.UserExist(createtoUser.Username))
                return BadRequest("Username already Exists");
            var usertocreate = new User
            {
                Username = createtoUser.Username
            };

            var CreatedUser = await _repo.Resgister(usertocreate, createtoUser.Password);
            return StatusCode(201);

        }


        [HttpPost("Login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
            var UserfromRepo = await _repo.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password);

            if (UserfromRepo == null)
                return Unauthorized();
            var Claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier,UserfromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name,UserfromRepo.Username)
            };


             var key=new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

             var cred= new SigningCredentials(key,SecurityAlgorithms.HmacSha512Signature);

             var tokendescriptor= new SecurityTokenDescriptor{
                 Subject=new ClaimsIdentity(Claims),
                 Expires=System.DateTime.Now.AddDays(1),
                 SigningCredentials=cred
             };

             var handler= new JwtSecurityTokenHandler();

             var token=handler.CreateToken(tokendescriptor);
             return Ok(new{
                 token=handler.WriteToken(token)
             } );
        }

    }
}