using System.ComponentModel.DataAnnotations;

namespace cinema.Models
{
    public class Actors
    {
        [Key]
        public int Id { get; set; }
        public string ProfilePictureURL { get; set; }

        public string Fullname { get; set;}

        public string Bio { get; set; }
    }
}
