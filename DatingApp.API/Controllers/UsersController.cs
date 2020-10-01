using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using DatingApp.API.Dtos;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]

    public class UsersController : ControllerBase
    {
        private  readonly IDatingRepository _repository;
        private readonly IMapper _mapper;

        public UsersController(IDatingRepository repository,IMapper mapper)
        {
            _repository = repository;
            this._mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repository.GetUsers();
            var userToReturn = _mapper.Map<ICollection<UserForListsDto>>(users);
            return Ok(userToReturn);

        }

        [HttpGet("{id}")]
        public  async Task<IActionResult> Getuser(int id)
        {

            var user = await _repository.GetUser(id);
            var userforReturn = _mapper.Map<UsersForDetails>(user);
            return Ok(userforReturn);
        }
    }
}
