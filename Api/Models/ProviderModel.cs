using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class Provider
    {
        public long Id { get; set; }

        public long UserId { get; set; }

        public long Config { get; set; }
    }
}
