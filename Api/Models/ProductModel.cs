using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class Product
    {
        public long Id { get; set; }

        public long ProviderId { get; set; }

        public string Manufacturer { get; set; }

        public string ProviderPartNumber { get; set; }
        public string PartNumber { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public int Pack { get; set; }
        public double Weight { get; set; }
        public double Volume { get; set; }
    }
}
