using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class CreatetoUser
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8,MinimumLength=4,ErrorMessage="Please enter valid Password.")]
        public string Password { get; set; }
    }
}