using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_ht242.Models
{
    public class calculatorModel
    {
        [Required(ErrorMessage = "Assignments grade must not be empty")]
        [Range(0, 100, ErrorMessage = "Assignments grade must be between 0 and 100")]
        public int assignments { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Group grade must be between 0 and 100")]
        public int group { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Quizzes grade must be between 0 and 100")]
        public int quizzes { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Midterm grade must be between 0 and 100")]
        public int midterm { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Final Exam grade must be between 0 and 100")]
        public int final { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Intex grade must be between 0 and 100")]
        public int intex { get; set; }
    }
}
